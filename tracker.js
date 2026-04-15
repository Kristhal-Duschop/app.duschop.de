// ============================================================
// DUSCHOP TRACKER v1.0 — Lightweight Analytics
// DSGVO-freundlich: Keine Cookies, kein Fingerprinting
// ============================================================

(function () {
  'use strict';

  // ---- KONFIGURATION ----
  // Nach dem Deployen der Google Apps Script Web App hier die URL eintragen:
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbxOw6BDI6kCd6TfZ-owHmlJyyFpfJyhUi-pl17LSHsYFueYPBek1sBcJZQXEAFilO8/exec';

  // Nicht tracken wenn Endpoint nicht konfiguriert oder localhost
  if (ENDPOINT.indexOf('HIER_') === 0) {
    console.log('[Tracker] Endpoint nicht konfiguriert — Tracking deaktiviert.');
    return;
  }

  // ---- HILFSFUNKTIONEN ----

  function getDevice() {
    var w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1024) return 'tablet';
    return 'desktop';
  }

  function getPage() {
    return window.location.pathname || '/';
  }

  function send(payload) {
    payload.timestamp = new Date().toISOString();
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, JSON.stringify(payload));
      } else {
        fetch(ENDPOINT, {
          method: 'POST',
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(function () {});
      }
    } catch (e) {
      // Stilles Scheitern — Tracking darf die Seite nie stören
    }
  }

  // ---- PAGEVIEW ----

  send({
    type: 'pageview',
    page: getPage(),
    referrer: document.referrer || '',
    screen: window.innerWidth + 'x' + window.innerHeight,
    language: navigator.language || '',
    device: getDevice()
  });

  // ---- CLICK TRACKING ----

  document.addEventListener('click', function (e) {
    var target = e.target;

    // Finde das nächste klickbare Elternelement (a, button, .tool-card, .quick-chip)
    var el = target.closest('a.tool-card, a.quick-chip, a.header-link, .footer a, [data-track]');
    if (!el) return;

    var elementText = '';
    var elementType = '';
    var targetUrl = '';

    if (el.classList.contains('tool-card')) {
      var title = el.querySelector('.card-title');
      elementText = title ? title.textContent.trim() : el.textContent.trim().substring(0, 60);
      elementType = 'tool-card';
      targetUrl = el.href || '';
    } else if (el.classList.contains('quick-chip')) {
      elementText = el.textContent.trim();
      elementType = 'quick-chip';
      targetUrl = el.href || '';
    } else if (el.classList.contains('header-link')) {
      elementText = el.textContent.trim();
      elementType = 'header-link';
      targetUrl = el.href || '';
    } else if (el.closest('.footer')) {
      elementText = el.textContent.trim();
      elementType = 'footer-link';
      targetUrl = el.href || '';
    } else if (el.dataset.track) {
      elementText = el.dataset.track;
      elementType = 'custom';
      targetUrl = el.href || '';
    }

    if (elementType) {
      send({
        type: 'click',
        page: getPage(),
        element_text: elementText,
        element_type: elementType,
        target_url: targetUrl
      });
    }
  });

})();
