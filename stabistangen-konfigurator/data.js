/* ============================================================
   STABISTANGEN-KONFIGURATOR, Daten + Shopify-Sync v1
   Konvertiert aus stabistangen-konfigurator/legacy.html.

   Architektur:
   - Live-Fetch aus 3 Shopify-Collections (19-mm / 12-mm / eckig)
   - Titel-Parser (parseTitle) leitet Form, Typ, Montage aus Produkt-Namen ab
   - Cache 30 Min in LocalStorage
   - Fallback auf statische Liste bei Fetch-Fehler
   ============================================================ */

(function (global) {
    'use strict';

    var SHOP_BASE = 'https://duschop.de';
    var COLL_HANDLES = ['19-mm-stabistangen', '12-mm-stabistangen', 'eckige-stabistangen'];
    var CACHE_KEY = 'stabi_konfig_v3';
    var CACHE_TTL = 30 * 60 * 1000;

    // ---- Statische Defs ----
    const TITLE_OVERRIDES = {};

    const colorDefs = {
    'chrom-poliert': { name: 'Chrom poliert gl\u00e4nzend', gradient: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 25%, #f5f5f5 50%, #a8a8a8 75%, #d4d4d4 100%)', finish: 'Gl\u00e4nzend' },
    'edelstahl-gebuerstet': { name: 'Edelstahl geb\u00fcrstet matt', gradient: 'linear-gradient(135deg, #c8c4be 0%, #b5b0a8 25%, #d0ccc5 50%, #a8a39a 75%, #bfbab2 100%)', finish: 'Matt' },
    'edelstahl-poliert': { name: 'Edelstahl poliert', gradient: 'linear-gradient(135deg, #d6d2cc 0%, #bfbab3 25%, #e0dcd6 50%, #b0aaa2 75%, #ccc7c0 100%)', finish: 'Gl\u00e4nzend' },
    'silber-matt': { name: 'Silber matt', gradient: 'linear-gradient(135deg, #c5c5c5 0%, #b0b0b0 25%, #cbcbcb 50%, #a0a0a0 75%, #bdbdbd 100%)', finish: 'Matt' },
    'schwarz-matt': { name: 'Schwarz matt', gradient: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 25%, #333333 50%, #111111 75%, #262626 100%)', finish: 'Matt' },
    'messing-poliert': { name: 'Messing poliert (goldfarbig)', gradient: 'linear-gradient(135deg, #dcc260 0%, #c4a840 25%, #e8d070 50%, #b89a30 75%, #d0b850 100%)', finish: 'Gl\u00e4nzend' },
    'messing-matt': { name: 'Messing matt (goldfarbig)', gradient: 'linear-gradient(135deg, #c8a84e 0%, #b08f30 25%, #d4b55a 50%, #a08228 75%, #bfa042 100%)', finish: 'Matt' },
    'bronze-matt': { name: 'Bronze matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #8B6914 0%, #6d5010 25%, #9a7520 50%, #5c430d 75%, #7d5e12 100%)', finish: 'Matt' },
    'graphit-poliert': { name: 'Graphit poliert gl\u00e4nzend', gradient: 'linear-gradient(135deg, #5a5a5a 0%, #454545 25%, #666666 50%, #3a3a3a 75%, #525252 100%)', finish: 'Gl\u00e4nzend' },
    'graphit-matt': { name: 'Graphit matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #686868 0%, #555555 25%, #737373 50%, #484848 75%, #606060 100%)', finish: 'Matt' },
    'kupfer-poliert': { name: 'Kupfer poliert (Rose-Gold)', gradient: 'linear-gradient(135deg, #d4956a 0%, #c07d50 25%, #e0a57a 50%, #b07040 75%, #cc8d60 100%)', finish: 'Gl\u00e4nzend' },
    'kupfer-matt': { name: 'Kupfer matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #b8805a 0%, #a06840 25%, #c49068 50%, #905a32 75%, #af7850 100%)', finish: 'Matt' },
    'weiss-matt': { name: 'Wei\u00df matt', gradient: 'linear-gradient(135deg, #f5f2ef 0%, #e8e4e0 25%, #faf8f6 50%, #e0dcd8 75%, #f0ece8 100%)', finish: 'Matt' }
};

    const formDefs = {
    'rund-12': { name: 'Rund \u00d8 12 mm', desc: 'Schlankes, dezentes Profil. Gro\u00dfe Farbauswahl.', icon: 'circle' },
    'rund-19': { name: 'Rund \u00d8 19 mm', desc: 'Klassisches Profil, robuste Optik. Aus Messing oder Edelstahl.', icon: 'circle-big' },
    'eckig-12': { name: 'Eckig 12\u00d712 mm', desc: 'Modernes, kantiges Design. Gro\u00dfe Farbauswahl.', icon: 'square' },
    'eckig-20': { name: 'Eckig 20\u00d720 mm', desc: 'Premium-Profil, kr\u00e4ftig und markant. Edelstahl.', icon: 'square-big' }
};

    var montageDefs = {
        'wand-glas':  { name: 'Wand zu Glas',  desc: 'Stange zwischen Wand und Glasscheibe' },
        'glas-glas':  { name: 'Glas zu Glas',  desc: 'Stange zwischen zwei Glasscheiben' },
        'glas-decke': { name: 'Glas zu Decke', desc: 'Stange zwischen Glasscheibe und Decke (vertikal)' }
    };

    // ---- Fallback-Produkte (wenn Shopify-Fetch fehlschlägt) ----
    let products = [
    // === SETS (Complete Solutions) ===
    {
        id: 'set-rund-12-wg',
        title: 'Rundes Stabistangen-Set Glas-Wand \u00d8 12 mm',
        handle: 'stabistangen-set-rund-glas-wand-flexibel-einstellbar-12-mm',
        type: 'set',
        montage: ['wand-glas'],
        form: 'rund-12',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt', 'graphit-matt', 'graphit-poliert', 'messing-poliert', 'messing-matt', 'weiss-matt', 'bronze-matt', 'kupfer-poliert', 'kupfer-matt'],
        price: '60,90',
        priceMax: '124,90',
        desc: 'Komplett-Set mit Stange, Wandhalter und Glashalter. Winkel flexibel einstellbar.',
        isSet: true
    },
    {
        id: 'set-eckig-12-wg',
        title: 'Stabistangen-Set quadratisch 12\u00d712 mm Glas-Wand',
        handle: 'stabistangen-set-eckig-fur-glasdusche-glas-wand',
        type: 'set',
        montage: ['wand-glas'],
        form: 'eckig-12',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt', 'messing-matt', 'messing-poliert', 'graphit-poliert', 'graphit-matt', 'bronze-matt', 'kupfer-poliert', 'kupfer-matt', 'weiss-matt'],
        price: '64,90',
        priceMax: '114,20',
        desc: 'Eckiges Komplett-Set mit moderner Optik. Flexibel einstellbar f\u00fcr 8\u201310 mm Glas.',
        isSet: true
    },
    {
        id: 'set-rund-19-wg-edelstahl',
        title: 'Edelstahl Stabistangen-Set Glas-Wand \u00d8 19 mm',
        handle: 'edelstahl-stabistangen-set-glas-wand-90',
        type: 'set',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt'],
        price: '59,90',
        desc: 'Massives Edelstahl-Set, 90\u00b0, inkl. Wandhalter und Glashalter.',
        isSet: true
    },
    {
        id: 'set-rund-19-wg-edelstahl-2',
        title: 'Edelstahl Stabistangen-Set Glas-Wand \u00d8 19 mm (1000/1250 mm)',
        handle: 'glas-wand-90-edelstahl-stabistangen-set-19-mm',
        type: 'set',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['edelstahl-gebuerstet', 'edelstahl-poliert'],
        price: '59,90',
        priceMax: '65,90',
        desc: 'V2A Edelstahl-Set, 1000 oder 1250 mm L\u00e4nge w\u00e4hlbar.',
        isSet: true
    },
    {
        id: 'set-eckig-20-wg',
        title: 'Stabistangen-Set eckig 20\u00d720 mm Edelstahl',
        handle: 'stabistange-set-fur-glasdusche-eckig-20x20-mm-edelstahl-art-nr-418020',
        type: 'set',
        montage: ['wand-glas'],
        form: 'eckig-20',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet'],
        price: '73,90',
        priceMax: '93,90',
        desc: 'Gro\u00dfes eckiges Profil, 20\u00d720 mm, aus Edelstahl. Premium-Optik.',
        isSet: true
    },
    {
        id: 'set-rund-19-wg-messing',
        title: 'Stabistangen-Set Glas-Wand 90\u00b0 \u00d8 19 mm (Messing verchromt)',
        handle: 'stabilisierungsstangen-set',
        type: 'set',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert'],
        price: '59,90',
        priceMax: '69,90',
        desc: 'Messing verchromt, 1000 oder 1300 mm L\u00e4nge w\u00e4hlbar.',
        isSet: true
    },
    {
        id: 'set-rund-19-wg-45',
        title: 'Stabistangen-Set Glas-Wand 45\u00b0 Edelstahl \u00d8 19 mm',
        handle: 'glas-wand-45-edelstahl-stabistangen-set-19-mm-rohr-art-nr-6017-6019',
        type: 'set',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet'],
        price: '49,90',
        priceMax: '59,90',
        desc: 'Edelstahl-Set mit 45\u00b0-Wandhalter, 250 oder 1000 mm Rohr.',
        isSet: true
    },
    {
        id: 'set-glas-glas-19',
        title: 'Stabistangen-Set Glas-Glas \u00d8 19 mm',
        handle: 'stabilisierungsstangen-set-glas-glas-o-19-mm-1-m-lange-inkl-2-glashalter-fur-8-10-mm',
        type: 'set',
        montage: ['glas-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert'],
        price: '67,90',
        desc: 'Komplett-Set f\u00fcr Glas-Glas-Verbindung, 1000 mm, inkl. 2 Glashalter.',
        isSet: true
    },
    {
        id: 'set-decke-19',
        title: 'Decken Stabistangen-Set vertikal \u00d8 19 mm',
        handle: 'stabilisierungsstangen-set-vertikal-o-19-mm-500-mm-lange-fur-glas-decken-montage',
        type: 'set',
        montage: ['glas-decke'],
        form: 'rund-19',
        colors: ['chrom-poliert'],
        price: '49,90',
        priceMax: '62,90',
        desc: 'Vertikales Set f\u00fcr Glas-Decken-Montage. 500 oder 1000 mm L\u00e4nge.',
        isSet: true
    },

    {
        id: 'winkel-90-eckig',
        title: '90\u00b0 Stabilisierungswinkel 220 mm \u2013 ohne Glasbohrung',
        handle: '90-stabilisierungswinkel-220-mm-fur-freistehende-glaswande-ohne-glasbohrung',
        type: 'set',
        montage: ['wand-glas'],
        form: 'eckig-12',
        colors: ['edelstahl-gebuerstet', 'schwarz-matt', 'messing-matt', 'messing-poliert', 'kupfer-matt', 'kupfer-poliert', 'bronze-matt', 'chrom-poliert', 'weiss-matt', 'graphit-matt', 'graphit-poliert'],
        price: '94,90',
        priceMax: '99,90',
        desc: 'Kompakter Winkelstabilisator f\u00fcr freistehende Walk-in-Glasw\u00e4nde. Kein Bohren ins Glas n\u00f6tig. 8 oder 10 mm Glas.',
        isSet: true
    },
    {
        id: 'pfosten-vigo',
        title: 'Walk-in Pfosten-Set Typ Vigo \u2013 \u00d8 30 mm',
        handle: 'walk-in-pfosten-set-typ-vigo-vertikale-stabilisierung-fur-freistehende-glaswande',
        type: 'set',
        montage: ['glas-decke'],
        form: 'rund-19',
        colors: ['edelstahl-gebuerstet', 'chrom-poliert'],
        price: '319,00',
        priceMax: '359,00',
        desc: 'Premium Pfosten-Set f\u00fcr freistehende Glasscheiben. Rund oder eckig, Boden-Decke-Montage.',
        isSet: true
    },
    {
        id: 'set-decke-rund-19-6015',
        title: 'Edelstahl Stabistange-Set rund \u00d8 19 mm Glas-Decke vertikal',
        handle: 'stabistange-set-rund-19mm-glas-decke-6015',
        type: 'set',
        montage: ['glas-decke'],
        form: 'rund-19',
        colors: ['edelstahl-poliert', 'edelstahl-gebuerstet'],
        price: '40,90',
        desc: 'Edelstahl-Set rund \u00d8 19 mm, 250 mm L\u00e4nge, poliert oder geb\u00fcrstet.',
        isSet: true
    },
    {
        id: 'set-decke-eckig-20-6415',
        title: 'Edelstahl Stabistange-Set Vierkant 20\u00d720 mm Glas-Decke vertikal',
        handle: 'stabistange-set-vierkant-20x20mm-glas-decke-6415',
        type: 'set',
        montage: ['glas-decke'],
        form: 'eckig-20',
        colors: ['edelstahl-poliert', 'edelstahl-gebuerstet'],
        price: '56,20',
        desc: 'Edelstahl-Set eckig 20\u00d720 mm, 250 mm L\u00e4nge, poliert oder geb\u00fcrstet.',
        isSet: true
    },

    // === INDIVIDUAL COMPONENTS ===
    // Rohre / Stangen
    {
        id: 'rohr-19',
        title: 'Stabistange-Rohr \u00d8 19 mm aus Messing',
        handle: 'stabilisierungsrohr_19mm',
        type: 'rohr',
        montage: ['wand-glas', 'glas-glas', 'glas-decke'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'silber-matt', 'messing-poliert', 'messing-matt', 'schwarz-matt'],
        price: '39,90',
        priceMax: '129,00',
        desc: 'Messing-Rohr in 1000, 1300 oder 2030 mm. K\u00fcrzbar. Passend zu allen 19-mm-Haltern.',
        isSet: false
    },

    // Wandhalter
    {
        id: 'wandhalter-90',
        title: 'Wand-/Deckenhalter \u00d8 19 mm \u2013 90\u00b0',
        handle: 'wandhalter_deckenhalter_stabilisierungsstange-19-mm',
        type: 'wandhalter',
        montage: ['wand-glas', 'glas-decke'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'silber-matt', 'schwarz-matt', 'messing-poliert', 'messing-matt'],
        price: '14,90',
        priceMax: '16,90',
        desc: 'Zylindrischer 90\u00b0-Wandhalter aus massivem Messing.',
        isSet: false
    },
    {
        id: 'wandhalter-45',
        title: 'Wandhalter \u00d8 19 mm \u2013 45\u00b0',
        handle: 'wandhalter-fur-stabilisierungsstange-o-19-mm-45-ausfuhrung',
        type: 'wandhalter',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt', 'messing-poliert', 'messing-matt'],
        price: '24,90',
        priceMax: '28,90',
        desc: '45\u00b0-Wandhalter f\u00fcr schr\u00e4ge Montage der Stabilisierungsstange.',
        isSet: false
    },
    {
        id: 'wandhalter-22',
        title: 'Wandhalter \u00d8 19 mm \u2013 22,5\u00b0',
        handle: 'wandhalter-fur-stabilisierungsstange-o-19-mm-22-5-fur-dezente-losungen',
        type: 'wandhalter',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet'],
        price: '24,90',
        priceMax: '26,90',
        desc: 'Dezenter 22,5\u00b0-Wandhalter f\u00fcr eine besonders flache Optik.',
        isSet: false
    },
    {
        id: 'wandflansch-45-v2a',
        title: 'V2A Wandflansch 45\u00b0 \u00d8 19 mm',
        handle: 'v2a-wandflansch-45-o-19-mm-stabistange-art-nr-626',
        type: 'wandhalter',
        montage: ['wand-glas'],
        form: 'rund-19',
        colors: ['edelstahl-gebuerstet', 'edelstahl-poliert'],
        price: '23,90',
        desc: 'V2A Edelstahl-Wandflansch f\u00fcr 45\u00b0-Montage.',
        isSet: false
    },

    // Glashalter
    {
        id: 'glashalter-drehbar-12',
        title: 'Drehbarer Glashalter \u00d8 12 mm',
        handle: 'drehbarer_glashalter_stabistange_12mm',
        type: 'glashalter',
        montage: ['wand-glas', 'glas-glas'],
        form: 'rund-12',
        colors: ['bronze-matt', 'schwarz-matt', 'edelstahl-gebuerstet', 'chrom-poliert', 'messing-poliert', 'messing-matt', 'graphit-poliert', 'graphit-matt', 'weiss-matt', 'kupfer-poliert', 'kupfer-matt'],
        price: '34,90',
        priceMax: '44,90',
        desc: 'Drehbarer Glashalter f\u00fcr 12-mm-Stangen, flexibel einstellbar.',
        isSet: false
    },
    {
        id: 'glashalter-drehbar-19',
        title: 'Drehbarer Glashalter \u00d8 19 mm (Endst\u00fcck)',
        handle: 'drehbarer-glashalter-fur-stabilisierungsstange-o-19-mm-einseitig-geschlossen-endstuck',
        type: 'glashalter',
        montage: ['wand-glas', 'glas-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'silber-matt'],
        price: '19,90',
        priceMax: '22,90',
        desc: 'Einseitig geschlossener Glashalter (Endst\u00fcck) f\u00fcr 19-mm-Stange.',
        isSet: false
    },
    {
        id: 'glashalter-senkrecht-19',
        title: 'Senkrechter Glashalter \u00d8 19 mm',
        handle: 'senkrechter-glashalter-stabilisierungsstange-19-mm',
        type: 'glashalter',
        montage: ['glas-decke'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt', 'silber-matt', 'messing-poliert', 'messing-matt'],
        price: '22,90',
        priceMax: '38,90',
        desc: 'F\u00fcr vertikale Deckenmontage. 6\u20138 mm oder 10\u201312 mm Glas.',
        isSet: false
    },
    {
        id: 'glashalter-offen-19',
        title: 'Glashalter offen \u00d8 19 mm drehbar',
        handle: 'glashalter_offen_19-mm',
        type: 'glashalter',
        montage: ['wand-glas', 'glas-glas'],
        form: 'rund-19',
        colors: ['edelstahl-gebuerstet', 'edelstahl-poliert'],
        price: '13,90',
        desc: 'Offener, drehbarer Glashalter aus V2A Edelstahl.',
        isSet: false
    },

    // T-Verbinder
    {
        id: 't-verbinder-12',
        title: 'T-Verbinder \u00d8 12 mm',
        handle: 't-verbinder_12mm',
        type: 't-verbinder',
        montage: ['glas-glas'],
        form: 'rund-12',
        colors: ['bronze-matt', 'schwarz-matt', 'edelstahl-gebuerstet', 'chrom-poliert', 'messing-poliert', 'messing-matt', 'graphit-poliert', 'graphit-matt', 'weiss-matt', 'kupfer-poliert', 'kupfer-matt'],
        price: '24,90',
        priceMax: '34,90',
        desc: 'T-Verbinder f\u00fcr 12-mm-Stangen, ideal f\u00fcr Glas-Glas-Verbindungen.',
        isSet: false
    },
    {
        id: 't-verbinder-19',
        title: 'T-Verbinder kurz \u00d8 19 mm',
        handle: 't-verbinder-kurz-fur-stabilisierungsstange-19-mm',
        type: 't-verbinder',
        montage: ['glas-glas'],
        form: 'rund-19',
        colors: ['chrom-poliert', 'schwarz-matt', 'edelstahl-gebuerstet'],
        price: '22,90',
        priceMax: '26,90',
        desc: 'Kurzer T-Verbinder f\u00fcr 19-mm-Stangen, 90\u00b0-Glasverbindung.',
        isSet: false
    }
];

    let productImages = {
    'stabistangen-set-rund-glas-wand-flexibel-einstellbar-12-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/SQ1212_641ab0ab-b3a7-4c9c-b60d-d7e6180136a4.jpg?v=1773305017',
    'stabistangen-set-eckig-fur-glasdusche-glas-wand': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/sq1212setch-01.jpg?v=1773305047',
    'edelstahl-stabistangen-set-glas-wand-90': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/SE1912SET.png?v=1773305306',
    'glas-wand-90-edelstahl-stabistangen-set-19-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/601820_2.png?v=1773306523',
    'stabistange-set-fur-glasdusche-eckig-20x20-mm-edelstahl-art-nr-418020': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/GF_20x20_90__Stabistange1k_91096f51-c18c-46d9-90f8-577036e0d390.jpg?v=1742635465',
    'stabilisierungsstangen-set-glas-glas-o-19-mm-1-m-lange-inkl-2-glashalter-fur-8-10-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Glas_Glas.png?v=1768321308',
    'stabilisierungsstangen-set-vertikal-o-19-mm-500-mm-lange-fur-glas-decken-montage': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/s1905setv_1__1.png?v=1749831011',
    'stabilisierungsrohr_19mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Stabirohr_S1.00.jpg?v=1753253014',
    'wandhalter_deckenhalter_stabilisierungsstange-19-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/S12_chromglanz.jpg?v=1773394543',
    'wandhalter-fur-stabilisierungsstange-o-19-mm-45-ausfuhrung': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/SBB45_Chromglanz.jpg?v=1753275908',
    'wandhalter-fur-stabilisierungsstange-o-19-mm-22-5-fur-dezente-losungen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/SBB22.png?v=1773403760',
    'v2a-wandflansch-45-o-19-mm-stabistange-art-nr-626': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Wandhalter_45_geb.jpg?v=1772811265',
    'drehbarer_glashalter_stabistange_12mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/s1204-bbrz-01.jpg?v=1768831949',
    'drehbarer-glashalter-fur-stabilisierungsstange-o-19-mm-einseitig-geschlossen-endstuck': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/S4V_Chromglanz.jpg?v=1773394603',
    'senkrechter-glashalter-stabilisierungsstange-19-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/S9_Chormglanz.jpg?v=1773394629',
    'glashalter_offen_19-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Glashalter_Loch_gebuerstet.jpg?v=1772802441',
    't-verbinder_12mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/s1250-bbrz-02.jpg?v=1768843581',
    't-verbinder-kurz-fur-stabilisierungsstange-19-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/freepik__das-bild-img1-zeigt-einen-thalter-einer-stabistang__52097.jpg?v=1757595331',
    'stabilisierungsstangen-set': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Stabi_3.2.jpg?v=1751384854',
    'glas-wand-45-edelstahl-stabistangen-set-19-mm-rohr-art-nr-6017-6019': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6019_6017_2.png?v=1773307663',
    '90-stabilisierungswinkel-220-mm-fur-freistehende-glaswande-ohne-glasbohrung': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Winkelstabilisator_gebuerstet_2.jpg?v=1753357997',
    'walk-in-pfosten-set-typ-vigo-vertikale-stabilisierung-fur-freistehende-glaswande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BO521543.rund.jpg?v=1753432428',
    'stabistange-set-rund-19mm-glas-decke-6015': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6015.1.jpg?v=1776411759',
    'stabistange-set-vierkant-20x20mm-glas-decke-6415': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6415.1.jpg?v=1776412109'
};

    // ---- Logik ----

    function mapColor(name) {
    if (!name) return null;
    const s = String(name).toLowerCase();
    if (s.includes('chrom')) return 'chrom-poliert';
    if (s.includes('edelstahl')) {
        if (s.includes('gebürst') || s.includes('matt')) return 'edelstahl-gebuerstet';
        return 'edelstahl-poliert';
    }
    if (s.includes('silber')) return 'silber-matt';
    if (s.includes('schwarz')) return 'schwarz-matt';
    if (s.includes('messing')) return s.includes('matt') ? 'messing-matt' : 'messing-poliert';
    if (s.includes('bronze')) return 'bronze-matt';
    if (s.includes('graphit')) return s.includes('matt') ? 'graphit-matt' : 'graphit-poliert';
    if (s.includes('kupfer')) return s.includes('matt') ? 'kupfer-matt' : 'kupfer-poliert';
    if (s.includes('weiÃŸ') || s.includes('weiss')) return 'weiss-matt';
    return null;
}

    function parseTitle(title) {
    const t = String(title || '').toLowerCase();
    const r = { form: null, typ: null, montage: [] };

    // Ausschluss: Handtuchhalter/Relings sind keine Stabistangen (trotz 19 mm in der Collection)
    if (t.includes('reling') || t.includes('badreling')) return r;

    // FORM
    if (t.includes('vierkant 20') || t.includes('20x20') || t.includes('20Ã—20')) r.form = 'eckig-20';
    else if (t.includes('vierkant 12') || t.includes('12x12') || t.includes('12Ã—12') || t.includes('quadratisch 12') || (t.includes('quadratisch') && /12/.test(t))) r.form = 'eckig-12';
    else if (t.includes('stabilisierungswinkel')) r.form = 'eckig-12';
    else if (t.includes('pfosten') || /Ã¸\s*30/.test(t)) r.form = 'rund-19';
    else if (/Ã¸\s*19/.test(t) || /\b19\s*mm/.test(t)) r.form = 'rund-19';
    else if (/Ã¸\s*12/.test(t) || /\b12\s*mm/.test(t)) r.form = 'rund-12';

    // TYP (Set-Keywords haben Vorrang, auch wenn Titel andere Begriffe erwÃ¤hnt wie "inkl. 2 Glashalter")
    // Achtung: "winkel" ist kein Set-Indikator (Wandhalter haben Winkelangaben wie "45Â° Winkel").
    if (t.includes('set') || t.includes('stabilisierungswinkel') || t.includes('pfosten')) r.typ = 'set';
    else if (t.includes('t-verbinder') || t.includes('t verbinder')) r.typ = 't-verbinder';
    else if (t.includes('glashalter')) r.typ = 'glashalter';
    else if (t.includes('wandhalter') || t.includes('deckenhalter') || t.includes('wandflansch')) r.typ = 'wandhalter';
    else if (t.includes('rohr') || /\bstange\b/.test(t)) r.typ = 'rohr';

    // MONTAGE
    if (t.includes('glas-decke') || t.includes('glas decke') || t.includes('pfosten') || t.includes('vertikal') || t.includes('glas-decken')) r.montage.push('glas-decke');
    if (t.includes('glas-glas') || t.includes('glas glas')) r.montage.push('glas-glas');
    if ((t.includes('glas-wand') || t.includes('glas wand')) || (t.includes('walk-in') && !t.includes('pfosten'))) r.montage.push('wand-glas');

    // Fallback
    if (!r.montage.length) {
        if (r.typ === 'rohr') r.montage = ['wand-glas', 'glas-glas', 'glas-decke'];
        else if (r.typ === 't-verbinder') r.montage = ['glas-glas'];
        else if (r.typ === 'glashalter') r.montage = t.includes('senkrecht') ? ['glas-decke'] : ['wand-glas', 'glas-glas'];
        else if (r.typ === 'wandhalter') r.montage = t.includes('decken') ? ['wand-glas', 'glas-decke'] : ['wand-glas'];
        else if (r.typ === 'set') r.montage = ['wand-glas'];
    }
    return r;
}

    function normalizeProduct(sp) {
    const p = parseTitle(sp.title);
    const ov = TITLE_OVERRIDES[sp.handle];
    if (ov) { if (ov.form) p.form = ov.form; if (ov.typ) p.typ = ov.typ; if (ov.montage) p.montage = ov.montage; }
    if (!p.form || !p.typ || !p.montage.length) return null;
    const montage = p.montage, form = p.form, typ = p.typ;

    // Farben aus Varianten
    let colorIdx = -1;
    (sp.options || []).forEach((o, i) => {
        if (o && o.name && String(o.name).toLowerCase().includes('farbe')) colorIdx = i;
    });
    const colors = [];
    const seen = {};
    if (colorIdx >= 0) {
        const key = 'option' + (colorIdx + 1);
        (sp.variants || []).forEach(v => {
            const c = mapColor(v[key]);
            if (c && !seen[c]) { seen[c] = 1; colors.push(c); }
        });
    }
    // Fallback: keine "Farbe"-Option oder keine Treffer â†’ alle Varianten-Werte scannen
    // (wichtig z.B. bei kombinierter Option "Variante: Edelstahl poliert, 250 mm")
    if (!colors.length) {
        (sp.variants || []).forEach(v => {
            ['option1', 'option2', 'option3'].forEach(k => {
                const c = mapColor(v[k]);
                if (c && !seen[c]) { seen[c] = 1; colors.push(c); }
            });
        });
    }
    if (!colors.length) colors.push('chrom-poliert');

    // Preisspanne
    let prices = (sp.variants || []).map(v => parseFloat(v.price)).filter(x => !isNaN(x));
    if (!prices.length) prices = [0];
    const pMin = Math.min(...prices), pMax = Math.max(...prices);
    const price = pMin.toFixed(2).replace('.', ',');
    const priceMax = pMax > pMin ? pMax.toFixed(2).replace('.', ',') : undefined;

    // Kurzbeschreibung
    let desc = (sp.body_html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    if (desc.length > 140) desc = desc.substring(0, 137) + 'â€¦';
    if (!desc) desc = sp.product_type || 'ZubehÃ¶r';

    return {
        id: sp.handle,
        title: sp.title,
        handle: sp.handle,
        type: typ,
        montage: montage,
        form: form,
        colors: colors,
        price: price,
        priceMax: priceMax,
        desc: desc,
        isSet: typ === 'set'
    };
}

    // ---- Cache ----
    function loadCache() {
        try {
            var raw = localStorage.getItem(CACHE_KEY);
            if (!raw) return null;
            var d = JSON.parse(raw);
            if (!d || !d.ts || Date.now() - d.ts > CACHE_TTL) return null;
            return d;
        } catch (e) { return null; }
    }
    function saveCache(p, img) {
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), products: p, images: img })); } catch (e) {}
    }

    // ---- Shopify-Fetch ----
    function fetchShopify() {
        if (typeof fetch === 'undefined') return Promise.resolve(null);
        return Promise.all(COLL_HANDLES.map(function (c) {
            return fetch(SHOP_BASE + '/collections/' + c + '/products.json?limit=250', { credentials: 'omit' })
                .then(function (r) { return r.ok ? r.json() : null; })
                .catch(function () { return null; });
        })).then(function (results) {
            var seen = {}, nP = [], nIMG = {};
            results.forEach(function (d) {
                if (!d || !d.products) return;
                d.products.forEach(function (sp) {
                    if (seen[sp.handle]) return;
                    seen[sp.handle] = 1;
                    var np = normalizeProduct(sp);
                    if (np) {
                        nP.push(np);
                        if (sp.images && sp.images[0]) nIMG[sp.handle] = sp.images[0].src;
                    }
                });
            });
            return nP.length ? { products: nP, images: nIMG } : null;
        }).catch(function () { return null; });
    }

    // ---- Public API ----
    // Liefert immer schnell aus dem Cache (falls vorhanden) und triggert
    // im Hintergrund ein Refresh. Wenn Shopify-Fetch noch nie geklappt hat,
    // wird die Fallback-Liste zurückgegeben.
    function fetchAll() {
        var cached = loadCache();
        var initial = cached && cached.products && cached.products.length
            ? { products: cached.products, images: cached.images || {} }
            : { products: products, images: productImages };

        // Async-Refresh, ergebnis wird beim nächsten Aufruf verwendet
        fetchShopify().then(function (data) {
            if (data) saveCache(data.products, data.images);
        });

        return Promise.resolve(initial);
    }

    global.StabistangenData = {
        colorDefs: colorDefs,
        formDefs: formDefs,
        montageDefs: montageDefs,
        fetchAll: fetchAll,
        fetchShopifyDirect: fetchShopify,
        getImageFor: function (handle) {
            var cached = loadCache();
            if (cached && cached.images && cached.images[handle]) return cached.images[handle];
            return productImages[handle] || null;
        }
    };

})(window);