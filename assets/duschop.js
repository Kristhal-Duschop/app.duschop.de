/* ============================================================
   DUSCHOP TOOLS — Shared Wizard Library v1
   Verwendet von allen Konfiguratoren und Findern unter app.duschop.de.
   Bietet: DuschopWizard, DuschopShopifyClient, DuschopState, track()
   ============================================================ */

(function (global) {
    'use strict';

    // ============================================================
    // Tracking (sendet Step- und Conversion-Events an Google-Apps-Script)
    // ============================================================
    var TRACKER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxOw6BDI6kCd6TfZ-owHmlJyyFpfJyhUi-pl17LSHsYFueYPBek1sBcJZQXEAFilO8/exec';

    function track(eventType, payload) {
        var data = Object.assign({
            type: eventType,
            page: window.location.pathname || '/',
            timestamp: new Date().toISOString(),
            screen: window.innerWidth + 'x' + window.innerHeight,
            device: window.innerWidth < 768 ? 'mobile' : (window.innerWidth < 1024 ? 'tablet' : 'desktop')
        }, payload || {});

        try {
            if (navigator.sendBeacon) {
                navigator.sendBeacon(TRACKER_ENDPOINT, JSON.stringify(data));
            } else {
                fetch(TRACKER_ENDPOINT, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    keepalive: true
                }).catch(function () {});
            }
        } catch (e) { /* stilles Scheitern */ }
    }

    // ============================================================
    // State (LocalStorage-basierte Cross-Tool-Persistenz)
    // ============================================================
    var STATE_KEY = 'duschop:state:v1';
    var STATE_TTL = 1000 * 60 * 60 * 24 * 7; // 7 Tage

    var DuschopState = {
        read: function () {
            try {
                var raw = localStorage.getItem(STATE_KEY);
                if (!raw) return {};
                var parsed = JSON.parse(raw);
                if (parsed._ts && Date.now() - parsed._ts > STATE_TTL) {
                    localStorage.removeItem(STATE_KEY);
                    return {};
                }
                return parsed.data || {};
            } catch (e) { return {}; }
        },
        write: function (data) {
            try {
                localStorage.setItem(STATE_KEY, JSON.stringify({
                    _ts: Date.now(),
                    data: data
                }));
            } catch (e) { /* still */ }
        },
        get: function (key) {
            return this.read()[key];
        },
        set: function (key, value) {
            var data = this.read();
            data[key] = value;
            this.write(data);
        },
        clear: function () {
            try { localStorage.removeItem(STATE_KEY); } catch (e) {}
        }
    };

    // ============================================================
    // Shopify-Client (Live-Fetch mit LocalStorage-Cache)
    // ============================================================
    var SHOPIFY_BASE = 'https://duschop.de';
    var CACHE_PREFIX = 'duschop:products:';
    var CACHE_TTL = 1000 * 60 * 60 * 24; // 24 h

    function normalizeText(str) {
        if (!str) return '';
        return String(str).toLowerCase()
            .replace(/[()]/g, '')
            .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
            .replace(/\s+/g, ' ').trim();
    }

    var DuschopShopifyClient = {
        normalizeText: normalizeText,

        fetchCollection: function (handle) {
            var cacheKey = CACHE_PREFIX + handle;
            // Cache prüfen
            try {
                var cached = localStorage.getItem(cacheKey);
                if (cached) {
                    var parsed = JSON.parse(cached);
                    if (parsed._ts && Date.now() - parsed._ts < CACHE_TTL && parsed.products) {
                        return Promise.resolve(parsed.products);
                    }
                }
            } catch (e) {}

            return this._fetchAllPages(SHOPIFY_BASE + '/collections/' + handle + '/products.json')
                .then(function (products) {
                    try {
                        localStorage.setItem(cacheKey, JSON.stringify({
                            _ts: Date.now(),
                            products: products
                        }));
                    } catch (e) {}
                    return products;
                });
        },

        fetchAllProducts: function () {
            return this.fetchCollection('all');
        },

        _fetchAllPages: function (baseUrl) {
            var all = [];
            var page = 1;

            function nextPage() {
                return fetch(baseUrl + '?sort_by=best-selling&limit=250&page=' + page)
                    .then(function (res) { return res.ok ? res.json() : null; })
                    .then(function (data) {
                        if (!data || !data.products || data.products.length === 0) return all;
                        all = all.concat(data.products);
                        if (data.products.length < 250) return all;
                        page++;
                        return nextPage();
                    })
                    .catch(function () { return all; });
            }

            return nextPage();
        },

        /**
         * Prüft, ob ein Produkt eine bestimmte Variante / Farbe / Eigenschaft enthält.
         * Sucht in Varianten-Optionen UND Produkt-Titel.
         */
        matchesTerm: function (product, term) {
            var norm = normalizeText(term);
            if (!norm) return false;

            // Produkt-Titel
            if (normalizeText(product.title).indexOf(norm) !== -1) return true;

            // Tags
            if (product.tags && Array.isArray(product.tags)) {
                for (var i = 0; i < product.tags.length; i++) {
                    if (normalizeText(product.tags[i]).indexOf(norm) !== -1) return true;
                }
            }

            // Varianten-Optionen
            if (product.variants && Array.isArray(product.variants)) {
                for (var j = 0; j < product.variants.length; j++) {
                    var v = product.variants[j];
                    var opts = [v.option1, v.option2, v.option3, v.title].filter(Boolean);
                    for (var k = 0; k < opts.length; k++) {
                        if (normalizeText(opts[k]).indexOf(norm) !== -1) return true;
                    }
                }
            }

            return false;
        },

        /**
         * Gibt erste Variante zurück, die einen bestimmten Suchterm enthält (für Preis-Lookup).
         */
        firstVariantMatching: function (product, term) {
            if (!product.variants) return null;
            var norm = normalizeText(term);
            for (var i = 0; i < product.variants.length; i++) {
                var v = product.variants[i];
                var opts = [v.option1, v.option2, v.option3, v.title].filter(Boolean);
                for (var k = 0; k < opts.length; k++) {
                    if (normalizeText(opts[k]).indexOf(norm) !== -1) return v;
                }
            }
            return product.variants[0] || null;
        },

        productUrl: function (product) {
            return SHOPIFY_BASE + '/products/' + product.handle;
        },

        /**
         * Live-Fetch + Merge mit statischen Annotations (Phase 4).
         * Standardverhalten: Liefert nur Produkte, die im Live-Bestand sind,
         * angereichert mit statischen Annotations. Veraltete Annotations
         * (handle nicht mehr live) werden weggelassen — Shop ist Wahrheit.
         * Wenn der ganze Live-Fetch fehlschlaegt oder leer ist, fallen wir
         * auf die statischen Produkte zurueck (Resilienz).
         * options.includeStaticOnly = true behaelt zusaetzlich statische
         * Eintraege ohne Live-Match (frueheres Verhalten).
         */
        fetchCollectionMerged: function (handle, staticProducts, options) {
            options = options || {};
            var keepStaticOnly = !!options.includeStaticOnly;
            var self = this;

            // staticProducts -> Lookup per handle
            var byStaticHandle = {};
            (staticProducts || []).forEach(function (s) { byStaticHandle[s.handle] = s; });

            return self.fetchCollection(handle).then(function (live) {
                if (!live || live.length === 0) {
                    return (staticProducts || []).map(function (s) {
                        var c = {}; Object.keys(s).forEach(function (k) { c[k] = s[k]; });
                        c._isLive = false;
                        return c;
                    });
                }

                // Pro Live-Produkt: mit statischer Annotation joinen (falls vorhanden)
                var result = live.map(function (lp) {
                    var s = byStaticHandle[lp.handle] || {};
                    var merged = {};
                    Object.keys(s).forEach(function (k) { merged[k] = s[k]; });
                    merged.title = lp.title || s.title;
                    merged.handle = lp.handle;
                    merged.images = (lp.images && lp.images.length) ? lp.images : (s.images || []);
                    merged.variants = (lp.variants && lp.variants.length) ? lp.variants : (s.variants || [{ price: s.price }]);
                    if (lp.variants && lp.variants[0] && lp.variants[0].price) {
                        merged.price = lp.variants[0].price;
                    }
                    merged._isLive = true;
                    return merged;
                });

                // Optional: statische Eintraege ohne Live-Match zusaetzlich anhaengen
                if (keepStaticOnly) {
                    var seen = {};
                    result.forEach(function (r) { seen[r.handle] = true; });
                    (staticProducts || []).forEach(function (s) {
                        if (!seen[s.handle]) {
                            var c = {}; Object.keys(s).forEach(function (k) { c[k] = s[k]; });
                            c._isLive = false;
                            result.push(c);
                        }
                    });
                }

                return result;
            }).catch(function () {
                return (staticProducts || []).map(function (s) {
                    var c = {}; Object.keys(s).forEach(function (k) { c[k] = s[k]; });
                    c._isLive = false;
                    return c;
                });
            });
        },

        formatPrice: function (price) {
            if (price === null || price === undefined) return '';
            var num = parseFloat(price);
            if (isNaN(num)) return '';
            return num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
        }
    };

    // ============================================================
    // Farb-Swatches (zentral, gleiche IDs wie Farbenfinder)
    // ============================================================
    var COLOR_SWATCHES = {
        'chrom-poliert':        { name: 'Chrom poliert',          gradient: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 25%, #f5f5f5 50%, #a8a8a8 75%, #d4d4d4 100%)' },
        'edelstahl-gebuerstet': { name: 'Edelstahl gebürstet',    gradient: 'linear-gradient(135deg, #c8c4be 0%, #b5b0a8 25%, #d0ccc5 50%, #a8a39a 75%, #bfbab2 100%)' },
        'edelstahl-poliert':    { name: 'Edelstahl poliert',      gradient: 'linear-gradient(135deg, #d6d2cc 0%, #bfbab3 25%, #e0dcd6 50%, #b0aaa2 75%, #ccc7c0 100%)' },
        'silber-matt':          { name: 'Silber matt',            gradient: 'linear-gradient(135deg, #c5c5c5 0%, #b0b0b0 25%, #cbcbcb 50%, #a0a0a0 75%, #bdbdbd 100%)' },
        'schwarz-matt':         { name: 'Schwarz matt',           gradient: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 25%, #333333 50%, #111111 75%, #262626 100%)' },
        'messing-matt':         { name: 'Messing matt',           gradient: 'linear-gradient(135deg, #c8a84e 0%, #b08f30 25%, #d4b55a 50%, #a08228 75%, #bfa042 100%)' },
        'messing-poliert':      { name: 'Messing poliert',        gradient: 'linear-gradient(135deg, #dcc260 0%, #c4a840 25%, #e8d070 50%, #b89a30 75%, #d0b850 100%)' },
        'bronze-matt':          { name: 'Bronze matt',            gradient: 'linear-gradient(135deg, #8B6914 0%, #6d5010 25%, #9a7520 50%, #5c430d 75%, #7d5e12 100%)' },
        'graphit-matt':         { name: 'Graphit matt',           gradient: 'linear-gradient(135deg, #686868 0%, #555555 25%, #737373 50%, #484848 75%, #606060 100%)' },
        'graphit-poliert':      { name: 'Graphit poliert',        gradient: 'linear-gradient(135deg, #5a5a5a 0%, #454545 25%, #666666 50%, #3a3a3a 75%, #525252 100%)' },
        'kupfer-matt':          { name: 'Kupfer matt',            gradient: 'linear-gradient(135deg, #b8805a 0%, #a06840 25%, #c49068 50%, #905a32 75%, #af7850 100%)' },
        'kupfer-poliert':       { name: 'Kupfer poliert',         gradient: 'linear-gradient(135deg, #d4956a 0%, #c07d50 25%, #e0a57a 50%, #b07040 75%, #cc8d60 100%)' },
        'weiss-matt':           { name: 'Weiß matt',              gradient: 'linear-gradient(135deg, #f5f2ef 0%, #e8e4e0 25%, #faf8f6 50%, #e0dcd8 75%, #f0ece8 100%)' }
    };

    // ============================================================
    // Wizard (Haupt-Komponente)
    // ============================================================
    function DuschopWizard(config) {
        this.config = config;
        this.mount = typeof config.mount === 'string'
            ? document.querySelector(config.mount)
            : config.mount;

        if (!this.mount) {
            console.error('[DuschopWizard] Mount-Element nicht gefunden:', config.mount);
            return;
        }

        this.toolSlug = config.toolSlug || 'unknown';
        this.steps = config.steps || [];
        this.currentStep = 0;
        this.answers = {}; // { stepKey: value }
        this.results = []; // gefilterte/sortierte Produkte nach Match
        this.allProducts = []; // alle Produkte vom Shopify-Fetch
        this.productsLoaded = false;
        this.viewState = 'wizard'; // 'wizard' oder 'results'

        // URL-Parameter zuerst in Shared State schreiben (z.B. ?color=chrom-poliert
        // vom Farbenfinder). Damit kann jeder Cross-Tool-Step über einen Deep-Link
        // vorbelegt werden.
        try {
            var params = new URLSearchParams(window.location.search);
            this.steps.forEach(function (step) {
                if (!step.crossTool) return;
                var val = params.get(step.key);
                if (val) DuschopState.set(step.key, val);
            });
        } catch (e) { /* still */ }

        // Cross-Tool-State vorbelegen (Glasdicke, Farbe etc.)
        var shared = DuschopState.read();
        this.steps.forEach(function (step) {
            if (step.crossTool && shared[step.key] !== undefined) {
                this.answers[step.key] = shared[step.key];
            }
        }.bind(this));

        this._init();
    }

    DuschopWizard.prototype._init = function () {
        this.mount.classList.add('duschop-app');
        this._render();
        this._loadProducts();

        track('wizard_start', {
            tool: this.toolSlug,
            crosstool_prefilled: Object.keys(this.answers).length
        });
    };

    DuschopWizard.prototype._loadProducts = function () {
        var self = this;
        var loader = this.config.fetchProducts || function () {
            return DuschopShopifyClient.fetchAllProducts();
        };

        loader().then(function (products) {
            self.allProducts = products || [];
            self.productsLoaded = true;
            self._updateMatchBar();
            if (self.viewState === 'results') {
                self._renderResults();
            }
        }).catch(function () {
            self.productsLoaded = true;
        });
    };

    DuschopWizard.prototype._render = function () {
        var hero = this.config.hero || {};
        var html = '';

        // Hero
        html += '<div class="duschop-hero">';
        if (hero.badge) html += '<div class="duschop-hero-badge">' + this._esc(hero.badge) + '</div>';
        if (hero.title) html += '<h1>' + this._esc(hero.title) + '</h1>';
        if (hero.desc) html += '<p>' + this._esc(hero.desc) + '</p>';
        html += '</div>';

        // Color-Filter-Banner (zwischen Hero und Progress, nur wenn aktiv)
        html += this._renderColorBanner();

        // Progress
        html += this._renderProgress();

        // Steps
        html += '<div class="duschop-wizard-steps">';
        this.steps.forEach(function (step, idx) {
            html += '<div class="duschop-step' + (idx === this.currentStep ? ' is-active' : '') + '" data-step="' + idx + '">';
            html += this._renderStep(step, idx);
            html += '</div>';
        }.bind(this));
        html += '</div>';

        // Results-Container (initial leer)
        html += '<div class="duschop-results" id="duschopResults"></div>';

        this.mount.innerHTML = html;
        this._attachEvents();
        this._updateMatchBar();
        this._updateNavButton();
    };

    DuschopWizard.prototype._renderProgress = function () {
        // Übersprungene Steps aus der Progress-Anzeige raushalten
        var visibleSteps = [];
        this.steps.forEach(function (step, idx) {
            if (!this._shouldSkipStep(idx)) visibleSteps.push({ step: step, idx: idx });
        }.bind(this));

        var html = '<div class="duschop-progress">';
        visibleSteps.forEach(function (entry, vIdx) {
            var idx = entry.idx;
            var step = entry.step;
            var status = idx < this.currentStep ? 'is-done' : (idx === this.currentStep ? 'is-active' : '');
            html += '<div class="duschop-progress-step">';
            html += '<div class="duschop-progress-dot ' + status + '">';
            if (idx < this.currentStep) {
                html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
            } else {
                html += (vIdx + 1);
            }
            html += '</div>';
            html += '<div class="duschop-progress-label ' + status + '">' + this._esc(step.shortLabel || step.key) + '</div>';
            html += '</div>';
            if (vIdx < visibleSteps.length - 1) {
                html += '<div class="duschop-progress-line ' + (idx < this.currentStep ? 'is-done' : '') + '"></div>';
            }
        }.bind(this));
        html += '</div>';
        return html;
    };

    DuschopWizard.prototype._renderColorBanner = function () {
        // Sticky-Banner nur wenn:
        //  a) das Tool einen color-Step hat (sonst hat die Vorbelegung keine Wirkung)
        //  b) im aktuellen state eine Farbe gesetzt ist (aus URL/Cross-Tool oder eigener Wahl)
        var hasColorStep = this.steps.some(function (s) { return s.key === 'color' && s.crossTool; });
        if (!hasColorStep) return '';

        var colorId = this.answers['color'];
        if (!colorId) return '';

        var swatch = COLOR_SWATCHES[colorId];
        if (!swatch) return '';

        var html = '<div class="duschop-color-banner" data-color-banner>';
        html += '<div class="duschop-color-banner-inner">';
        html += '<div class="duschop-color-banner-swatch" style="background:' + swatch.gradient + '"></div>';
        html += '<div class="duschop-color-banner-text">';
        html += '<strong>Nur in ' + this._esc(swatch.name) + '</strong>';
        html += '<span>Wir filtern Ihre Auswahl auf diese Oberfläche</span>';
        html += '</div>';
        html += '<a class="duschop-color-banner-change" href="../farbenfinder/" data-track="color-banner-change">Andere Farbe</a>';
        html += '<button class="duschop-color-banner-close" data-action="color-reset" title="Farb-Filter entfernen" aria-label="Farb-Filter entfernen">&times;</button>';
        html += '</div>';
        html += '</div>';
        return html;
    };

    DuschopWizard.prototype._renderStep = function (step, idx) {
        var html = '';
        var question = (typeof step.questionFn === 'function')
            ? step.questionFn(this.answers, this.allProducts)
            : step.question;
        var hint = (typeof step.hintFn === 'function')
            ? step.hintFn(this.answers, this.allProducts)
            : step.hint;
        html += '<div class="duschop-step-question">' + this._esc(question) + '</div>';
        if (hint) {
            html += '<div class="duschop-step-hint">' + this._esc(hint) + '</div>';
        }

        // Erklär-Illustration (optional, rohes SVG/HTML) — z.B. Mess-Schema
        if (step.illustration) {
            html += '<div class="duschop-illustration">' + step.illustration + '</div>';
        }

        // Render je nach Step-Type
        if (step.type === 'options' || !step.type) {
            html += this._renderOptions(step);
        } else if (step.type === 'slider') {
            html += this._renderSlider(step);
        }

        // Tipp-Box (optional)
        if (step.tip) {
            var tipClass = step.tip.type ? ('duschop-tip is-' + step.tip.type) : 'duschop-tip';
            html += '<div class="' + tipClass + '">';
            html += '<div class="duschop-tip-icon">' + (step.tip.icon || '💡') + '</div>';
            html += '<div>' + step.tip.text + '</div>';
            html += '</div>';
        }

        // Match-Bar (außer bei letztem Step — dort der Submit-Button)
        if (step.showMatchBar !== false) {
            html += '<div class="duschop-match-bar" data-matchbar><span><strong data-matchcount>–</strong> Treffer für Ihre Auswahl</span></div>';
        }

        // Navigation
        html += '<div class="duschop-nav">';
        if (idx > 0) {
            html += '<button class="duschop-btn duschop-btn-secondary" data-action="prev">';
            html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
            html += ' Zurück</button>';
        } else {
            html += '<span></span>';
        }
        var nextLabel = (idx === this.steps.length - 1) ? 'Ergebnisse anzeigen' : 'Weiter';
        var hasAnswer = this.answers[step.key] !== undefined && this.answers[step.key] !== null && this.answers[step.key] !== '';
        html += '<button class="duschop-btn duschop-btn-primary" data-action="next"' + (hasAnswer ? '' : ' disabled') + '>';
        html += nextLabel + ' ';
        html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
        html += '</button>';
        html += '</div>';

        return html;
    };

    DuschopWizard.prototype._renderOptions = function (step) {
        var options = step.options;
        if (typeof step.optionsFn === 'function') {
            try {
                options = step.optionsFn(this.answers, this.allProducts, DuschopShopifyClient) || [];
            } catch (e) {
                console.error('[DuschopWizard] optionsFn Fehler:', e);
                options = [];
            }
        }
        var sizeClass = step.optionSize === 'small' ? ' is-small' : '';
        var html = '<div class="duschop-options' + sizeClass + '">';
        (options || []).forEach(function (opt) {
            var selected = this.answers[step.key] === opt.value;
            html += '<button class="duschop-opt' + (selected ? ' is-selected' : '') + '" data-step-key="' + this._esc(step.key) + '" data-value="' + this._esc(opt.value) + '">';
            if (opt.badge) {
                html += '<div class="duschop-opt-badge is-' + this._esc(opt.badge.type || 'standard') + '">' + this._esc(opt.badge.text) + '</div>';
            }
            if (opt.swatch) {
                html += '<div class="duschop-opt-swatch" style="background:' + opt.swatch + '"></div>';
            } else if (opt.icon) {
                // icon kann HTML enthalten (z.B. SVG) — bewusst nicht escapen
                html += '<div class="duschop-opt-icon">' + opt.icon + '</div>';
            }
            html += '<div class="duschop-opt-label">' + this._esc(opt.label) + '</div>';
            if (opt.desc) html += '<div class="duschop-opt-desc">' + this._esc(opt.desc) + '</div>';
            html += '</button>';
        }.bind(this));
        html += '</div>';
        return html;
    };

    DuschopWizard.prototype._renderSlider = function (step) {
        // Slider hat immer einen Wert — Default wird sofort in answers geschrieben,
        // damit der Weiter-Button initial aktiv ist.
        if (this.answers[step.key] === undefined) {
            this.answers[step.key] = (step.default !== undefined) ? step.default : step.min;
        }
        var val = this.answers[step.key];
        var html = '<div class="duschop-slider-box">';
        html += '<div class="duschop-slider-display">';
        html += '<div class="duschop-slider-value"><span data-slider-display>' + val + '</span><span>' + this._esc(step.unit || '') + '</span></div>';
        if (step.sliderLabel) html += '<div class="duschop-slider-label">' + this._esc(step.sliderLabel) + '</div>';
        html += '</div>';
        html += '<div class="duschop-slider-track">';
        html += '<input type="range" min="' + step.min + '" max="' + step.max + '" value="' + val + '" step="' + (step.step || 1) + '" data-step-key="' + this._esc(step.key) + '">';
        html += '</div>';
        html += '<div class="duschop-slider-minmax"><span>' + step.min + ' ' + this._esc(step.unit || '') + '</span><span>' + step.max + ' ' + this._esc(step.unit || '') + '</span></div>';
        if (step.quickPicks && step.quickPicks.length) {
            html += '<div class="duschop-slider-pills">';
            step.quickPicks.forEach(function (qp) {
                html += '<button class="duschop-pill" data-quickpick="' + qp + '">' + qp + ' ' + this._esc(step.unit || '') + '</button>';
            }.bind(this));
            html += '</div>';
        }
        html += '</div>';
        return html;
    };

    DuschopWizard.prototype._attachEvents = function () {
        var self = this;

        // Optionen anklicken
        this.mount.querySelectorAll('[data-step-key][data-value]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var key = btn.getAttribute('data-step-key');
                var value = btn.getAttribute('data-value');
                self._setAnswer(key, value);
                self._refreshCurrentStep();
            });
        });

        // Slider
        this.mount.querySelectorAll('input[type="range"][data-step-key]').forEach(function (slider) {
            slider.addEventListener('input', function () {
                var key = slider.getAttribute('data-step-key');
                var val = parseFloat(slider.value);
                self._setAnswer(key, val);
                var display = self.mount.querySelector('.duschop-step.is-active [data-slider-display]');
                if (display) display.textContent = val;
                self._updateNavButton();
                self._updateMatchBar();
            });
        });

        // Quickpicks
        this.mount.querySelectorAll('[data-quickpick]').forEach(function (pill) {
            pill.addEventListener('click', function () {
                var val = parseFloat(pill.getAttribute('data-quickpick'));
                var step = self.steps[self.currentStep];
                self._setAnswer(step.key, val);
                self._refreshCurrentStep();
            });
        });

        // Navigation + Color-Banner-Reset
        this.mount.querySelectorAll('[data-action]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var action = btn.getAttribute('data-action');
                if (action === 'next') self._next();
                if (action === 'prev') self._prev();
                if (action === 'restart') self._restart();
                if (action === 'color-reset') self._resetColor();
            });
        });
    };

    DuschopWizard.prototype._resetColor = function () {
        // Color aus answers + Shared State entfernen
        delete this.answers['color'];
        try {
            var data = DuschopState.read();
            delete data.color;
            DuschopState.write(data);
        } catch (e) { /* still */ }

        track('color_filter_reset', { tool: this.toolSlug });

        // Banner aus DOM entfernen (in beiden Views existiert er außerhalb der
        // Steps/Results, daher gezielt löschen statt _render aufzurufen)
        var banner = this.mount.querySelector('[data-color-banner]');
        if (banner) banner.parentNode.removeChild(banner);

        // Wenn der User gerade auf der Ergebnisseite ist, Ergebnisse neu berechnen
        if (this.viewState === 'results') {
            this.results = this._computeMatches(false);
            this._renderResults();
        } else {
            // Im Wizard: Match-Bar und ggf. den Color-Step neu zeichnen
            // (Color-Step optionsFn könnte die jetzt-leere Vorbelegung anzeigen)
            this._refreshCurrentStep();
        }
    };

    DuschopWizard.prototype._setAnswer = function (key, value) {
        this.answers[key] = value;
        // Cross-Tool-Step? In Shared State persistieren
        var step = this.steps.find(function (s) { return s.key === key; });
        if (step && step.crossTool) {
            DuschopState.set(key, value);
        }
    };

    DuschopWizard.prototype._refreshCurrentStep = function () {
        // Komplett neu rendern statt diff — bei 5 Schritten kein Performance-Issue
        this._render();
    };

    DuschopWizard.prototype._updateNavButton = function () {
        var step = this.steps[this.currentStep];
        var nextBtn = this.mount.querySelector('.duschop-step.is-active [data-action="next"]');
        if (!nextBtn) return;
        var hasAnswer = this.answers[step.key] !== undefined && this.answers[step.key] !== null && this.answers[step.key] !== '';
        nextBtn.disabled = !hasAnswer;
    };

    DuschopWizard.prototype._updateMatchBar = function () {
        var step = this.steps[this.currentStep];
        var bar = this.mount.querySelector('.duschop-step.is-active [data-matchbar]');
        if (!bar) return;
        if (!this.productsLoaded) {
            var countEl = bar.querySelector('[data-matchcount]');
            if (countEl) countEl.textContent = '…';
            return;
        }
        var matched = this._computeMatches(true); // bounded: nur Antworten bis aktuellem Step
        var countEl2 = bar.querySelector('[data-matchcount]');
        if (countEl2) countEl2.textContent = matched.length;
    };

    DuschopWizard.prototype._computeMatches = function (bounded) {
        if (!this.config.match) return this.allProducts;
        var stateToUse;
        if (bounded) {
            // Match-Bar im Wizard: nur Antworten bis zum aktuellen Step zählen,
            // damit Cross-Tool-Vorbelegungen nicht überraschend filtern.
            stateToUse = {};
            for (var i = 0; i <= this.currentStep && i < this.steps.length; i++) {
                var k = this.steps[i].key;
                if (this.answers[k] !== undefined) stateToUse[k] = this.answers[k];
            }
        } else {
            // Ergebnisseite: alle Antworten berücksichtigen.
            stateToUse = this.answers;
        }
        try {
            return this.config.match(stateToUse, this.allProducts, DuschopShopifyClient) || [];
        } catch (e) {
            console.error('[DuschopWizard] match() Fehler:', e);
            return [];
        }
    };

    DuschopWizard.prototype._shouldSkipStep = function (idx) {
        var step = this.steps[idx];
        if (!step || typeof step.skipFn !== 'function') return false;
        try { return !!step.skipFn(this.answers, this.allProducts); }
        catch (e) { return false; }
    };

    DuschopWizard.prototype._next = function () {
        var step = this.steps[this.currentStep];
        track('wizard_step', {
            tool: this.toolSlug,
            step_index: this.currentStep,
            step_key: step.key,
            step_value: this.answers[step.key]
        });

        // Nächsten nicht-übersprungenen Step finden
        var nextIdx = this.currentStep + 1;
        while (nextIdx < this.steps.length && this._shouldSkipStep(nextIdx)) {
            // Übersprungene Answer löschen, damit sie keine Cross-Tool-Reste hinterlässt
            delete this.answers[this.steps[nextIdx].key];
            nextIdx++;
        }

        if (nextIdx < this.steps.length) {
            this.currentStep = nextIdx;
            this._render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            this._showResults();
        }
    };

    DuschopWizard.prototype._prev = function () {
        if (this.currentStep > 0) {
            var prevIdx = this.currentStep - 1;
            while (prevIdx > 0 && this._shouldSkipStep(prevIdx)) {
                prevIdx--;
            }
            this.currentStep = prevIdx;
            this._render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (this.viewState === 'results') {
            this.viewState = 'wizard';
            this._render();
        }
    };

    DuschopWizard.prototype._restart = function () {
        this.currentStep = 0;
        this.answers = {};
        this.viewState = 'wizard';
        this._render();
    };

    DuschopWizard.prototype._showResults = function () {
        this.viewState = 'results';
        this.results = this._computeMatches(false); // alle Antworten
        track('wizard_complete', {
            tool: this.toolSlug,
            result_count: this.results.length,
            answers: JSON.stringify(this.answers)
        });
        this._renderResults();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    DuschopWizard.prototype._renderResults = function () {
        // Wizard-Steps + Progress ausblenden
        var stepsContainer = this.mount.querySelector('.duschop-wizard-steps');
        var progress = this.mount.querySelector('.duschop-progress');
        if (stepsContainer) stepsContainer.style.display = 'none';
        if (progress) progress.style.display = 'none';

        var resultsEl = this.mount.querySelector('#duschopResults');
        if (!resultsEl) return;
        resultsEl.classList.add('is-active');

        var html = '';

        // Header
        html += '<div class="duschop-results-header">';
        html += '<h2 class="duschop-results-title">Ihre passenden Produkte</h2>';
        html += '<p class="duschop-results-subtitle">' + this.results.length + ' Treffer gefunden</p>';
        html += '</div>';

        // Filter-Chips (Antworten zurück-editierbar)
        html += '<div class="duschop-chips">';
        this.steps.forEach(function (step, idx) {
            var answer = this.answers[step.key];
            if (answer === undefined) return;
            var displayValue = this._getAnswerDisplay(step, answer);
            html += '<div class="duschop-chip"><strong>' + this._esc(step.shortLabel || step.key) + ':</strong> ' + this._esc(displayValue) + ' <button class="duschop-chip-edit" data-edit-step="' + idx + '" title="Ändern">✕</button></div>';
        }.bind(this));
        html += '</div>';

        // Produkt-Liste oder No-Results
        if (this.results.length === 0) {
            html += this._renderNoResults();
        } else {
            html += '<div class="duschop-products">';
            this.results.slice(0, 30).forEach(function (item, idx) {
                html += this._renderProductCard(item, idx === 0);
            }.bind(this));
            html += '</div>';
        }

        // Conversion-Layer
        html += this._renderConversion();

        resultsEl.innerHTML = html;

        // Event-Listener für Chip-Edit
        resultsEl.querySelectorAll('[data-edit-step]').forEach(function (btn) {
            var self = this;
            btn.addEventListener('click', function () {
                var idx = parseInt(btn.getAttribute('data-edit-step'));
                self.currentStep = idx;
                self.viewState = 'wizard';
                if (stepsContainer) stepsContainer.style.display = '';
                if (progress) progress.style.display = '';
                resultsEl.classList.remove('is-active');
                resultsEl.innerHTML = '';
                self._render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }.bind(this));

        // Tracking auf Produkt-Klicks
        resultsEl.querySelectorAll('[data-track-product]').forEach(function (link) {
            var self = this;
            link.addEventListener('click', function () {
                track('result_click', {
                    tool: self.toolSlug,
                    product_handle: link.getAttribute('data-track-product'),
                    position: link.getAttribute('data-position')
                });
            });
        }.bind(this));

        // Tracking auf Conversion-Klicks
        resultsEl.querySelectorAll('[data-conversion]').forEach(function (link) {
            var self = this;
            link.addEventListener('click', function () {
                track('conversion', {
                    tool: self.toolSlug,
                    conversion_type: link.getAttribute('data-conversion'),
                    result_count: self.results.length
                });
            });
        }.bind(this));

        // Action-Buttons auf der Ergebnisseite (restart aus Conversion-Block + No-Results)
        var selfRef = this;
        resultsEl.querySelectorAll('[data-action]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var action = btn.getAttribute('data-action');
                if (action === 'restart') selfRef._restart();
                if (action === 'next') selfRef._next();
                if (action === 'prev') selfRef._prev();
            });
        });
    };

    DuschopWizard.prototype._renderProductCard = function (item, isBest) {
        var product = item.product || item;
        var imgSrc = (product.images && product.images[0]) ? product.images[0].src : null;
        var price = item.priceOverride || (product.variants && product.variants[0] && product.variants[0].price);
        var html = '<a class="duschop-product' + (isBest ? ' is-best' : '') + '" href="' + DuschopShopifyClient.productUrl(product) + '" target="_blank" rel="noopener" data-track-product="' + this._esc(product.handle) + '" data-position="' + (item.position || 0) + '">';
        html += '<div class="duschop-product-image">';
        if (isBest) html += '<div class="duschop-product-best-badge">Beste Wahl</div>';
        if (imgSrc) {
            html += '<img src="' + imgSrc + '" alt="' + this._esc(product.title) + '" loading="lazy">';
        } else {
            html += '<div style="font-size:32px;color:var(--duschop-text-muted);">📦</div>';
        }
        html += '</div>';
        html += '<div class="duschop-product-body">';
        html += '<div class="duschop-product-name">' + this._esc(product.title) + '</div>';
        if (item.matchReason) html += '<div class="duschop-product-desc">' + this._esc(item.matchReason) + '</div>';
        if (item.badges && item.badges.length) {
            html += '<div class="duschop-product-specs">';
            item.badges.forEach(function (b) {
                var cls = b.type ? ('duschop-spec is-' + b.type) : 'duschop-spec';
                html += '<span class="' + cls + '">' + this._esc(b.text) + '</span>';
            }.bind(this));
            html += '</div>';
        }
        html += '<div class="duschop-product-footer">';
        if (price) {
            html += '<div class="duschop-product-price">' + DuschopShopifyClient.formatPrice(price) + '<small>inkl. MwSt.</small></div>';
        } else {
            html += '<div></div>';
        }
        html += '<span class="duschop-product-cta">Zum Shop <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></span>';
        html += '</div>';
        html += '</div>';
        html += '</a>';
        return html;
    };

    DuschopWizard.prototype._renderNoResults = function () {
        var conversion = this.config.conversion || {};
        var waText = encodeURIComponent(conversion.whatsappText || 'Hallo, ich habe Ihren Online-Berater genutzt, finde aber kein passendes Produkt. Können Sie mir helfen?');
        var html = '<div class="duschop-no-results">';
        html += '<div class="duschop-no-results-icon">🔍</div>';
        html += '<h3>Diese Kombination führen wir aktuell nicht serienmäßig</h3>';
        html += '<p>Wir beschaffen aber regelmäßig Sonderanfertigungen, schicken Sie uns ein Foto und die Maße per WhatsApp, dann melden wir uns mit einem Angebot.</p>';
        html += '<div class="duschop-no-results-actions">';
        html += '<a href="https://wa.me/4917654505183?text=' + waText + '" target="_blank" rel="noopener" class="duschop-btn duschop-btn-primary" data-conversion="whatsapp-noresult"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Foto schicken per WhatsApp</a>';
        html += '<button class="duschop-btn duschop-btn-secondary" data-action="restart">Auswahl zurücksetzen</button>';
        html += '</div>';
        html += '</div>';
        return html;
    };

    DuschopWizard.prototype._renderConversion = function () {
        var conversion = this.config.conversion || {};
        if (conversion.disabled) return '';
        var waText = encodeURIComponent(conversion.whatsappText || 'Hallo, ich brauche eine kurze Beratung.');
        var html = '<div class="duschop-conversion">';
        html += '<h3>Nicht das richtige dabei?</h3>';
        html += '<p>Wir beraten Sie persönlich, schicken Sie uns ein Foto Ihrer Dusche, dann melden wir uns mit einer Empfehlung.</p>';
        html += '<div class="duschop-conversion-actions">';
        html += '<a href="https://wa.me/4917654505183?text=' + waText + '" target="_blank" rel="noopener" class="duschop-conversion-btn is-whatsapp" data-conversion="whatsapp-results"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp-Beratung</a>';
        html += '<button class="duschop-conversion-btn is-secondary" data-action="restart">Neue Suche starten</button>';
        html += '</div>';
        html += '</div>';
        return html;
    };

    DuschopWizard.prototype._getAnswerDisplay = function (step, value) {
        if (step.type === 'slider') return value + ' ' + (step.unit || '');
        var options = step.options;
        if (!options && typeof step.optionsFn === 'function') {
            try {
                options = step.optionsFn(this.answers, this.allProducts, DuschopShopifyClient) || [];
            } catch (e) {
                options = [];
            }
        }
        if (options) {
            var opt = options.find(function (o) { return o.value === value; });
            if (opt) return opt.label;
        }
        return value;
    };

    DuschopWizard.prototype._esc = function (str) {
        if (str === null || str === undefined) return '';
        return String(str).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    };

    // ============================================================
    // Export
    // ============================================================
    global.DuschopWizard = DuschopWizard;
    global.DuschopShopifyClient = DuschopShopifyClient;
    global.DuschopState = DuschopState;
    global.duschopTrack = track;

})(window);
