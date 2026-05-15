/* DICHTUNG-GEBOGEN-FINDER — Daten v1 */
(function (global) {
    'use strict';

    const GF_PRODUCTS = [
  {
    id: '5102.550',
    name: 'Gebogene Schleiflippendichtung Viertelkreis & Halbkreis',
    artNr: '5102.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-und-halbkreisduschen-mit-dichtlippe-und-kurzer-abtropfleiste-fur-6-und-8-mm-glasdicke-art-nr-5102-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/51C3ED51-9A09-4B09-82FF-3565FEE34487.png',
    glass: [6, 8],
    gapMin: 11, gapMax: 14,
    form: 'viertelkreis',
    priceFrom: 36.90,
    bestseller: true,
    desc: 'Vorgebogene Schleiflippendichtung mit Abtropfleiste – passgenau für Viertelkreis- und Halbkreisduschen.',
    lengths: 'ca. 126 cm (vorgebogen)',
    variants: {
      '6': 52830790844739,
      '8': 52830790877507
    }
  },
  {
    id: '5141.550',
    name: 'Gebogene Duschdichtung mit Schlauch',
    artNr: '5141.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-und-halbkreisduschen-mit-schlauch-und-kurzer-abtropfleiste-fur-6-und-8-mm-glasdicke-art-nr-5141-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5141_550_png.png',
    glass: [6, 8],
    gapMin: 13, gapMax: 16,
    form: 'viertelkreis',
    priceFrom: 37.00,
    bestseller: false,
    desc: 'Vorgebogene Dichtung mit Schlauchprofil für optimale Abdichtung am Boden. Passt sich Unebenheiten an.',
    lengths: 'ca. 126 cm (vorgebogen)',
    variants: {
      '6': 52830790648131,
      '8': 52830790680899
    }
  },
  {
    id: '5101.550',
    name: 'Gebogene Bodendichtung Viertelkreis verstärkte Lippe',
    artNr: '5101.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-und-halbkreisduschen-mit-verstarkter-dichtlippe-und-kurzer-abtropfleiste-fur-6-und-8-mm-glasdicke-art-nr-5101-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5101_90_png_59930fb5-d167-4e70-bc3b-64ca853c2c37.png',
    glass: [6, 8],
    gapMin: 15, gapMax: 17,
    form: 'viertelkreis',
    priceFrom: 37.00,
    bestseller: false,
    desc: 'Verstärkte Dichtlippe für mittlere Spalte. Besonders stabil und langlebig durch die Verstärkung.',
    lengths: 'ca. 126 cm (vorgebogen)',
    variants: {
      '6': 54122289267011,
      '8': 54122289299779
    }
  },
  {
    id: '009A2.550',
    name: 'Gebogene Duschdichtung mit Wasserabweiser',
    artNr: '009A2.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-duschen-mit-dichtlippe-unten-inkl-wasserabweislippe-dichtung-009a2-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5E86E727-034C-4875-9DE0-1F084325E3FC.png',
    glass: [6, 8],
    gapMin: 12, gapMax: 24,
    form: 'viertelkreis',
    priceFrom: 36.90,
    bestseller: false,
    desc: 'Vielseitige vorgebogene Dichtung mit Wasserabweiser – in 3 Lippenlängen (12, 17, 23 mm) für verschiedene Spaltmaße.',
    lengths: 'ca. 110 cm (vorgebogen)',
    variants: {
      '6': 52830788256067,
      '8': 52830788354371
    }
  },
  {
    id: '011B2.550',
    name: 'Gebogene Bodendichtung Viertelkreis mit 20 mm Dächlein',
    artNr: '011B2.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-duschen-als-schiebeturen-oder-drehturen-unten-inkl-wasserabweisendem-dachlein-art-nr-011b2-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/35EACC05-EA0F-4574-9244-8CAA5D4EB48E.png',
    glass: [6, 8],
    gapMin: 2, gapMax: 5,
    form: 'viertelkreis',
    priceFrom: 31.50,
    bestseller: false,
    desc: 'Vorgebogene Dichtung mit 20 mm Dächlein als Abtropfleiste – auch für Schiebetüren in Viertelkreisduschen geeignet.',
    lengths: 'ca. 110 cm (vorgebogen)',
    variants: {
      '6': 52830792057155,
      '8': 52830792089923
    }
  },
  {
    id: '3249G',
    name: 'Gebogene Duschdichtung Rinnenform kürzbare Lippe',
    artNr: '3249G',
    handle: 'gebogene-dusch-turdichtung-fur-6-u-8-mm-glas-mit-abtropfleiste-in-rinnenform-und-doppelter-lippe-nach-unten-kurz-u-lang-98-5-cm-fur-6-und-8-mm-universal-art-nr-3249g',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/3249geb2.jpg',
    glass: [6, 8],
    gapMin: 8, gapMax: 15,
    form: 'viertelkreis',
    priceFrom: 49.90,
    bestseller: false,
    desc: 'Premium-Dichtung in Rinnenform mit doppelter Lippe (kurz & lang). Individuell kürzbar für verschiedene Spaltmaße.',
    lengths: 'ca. 98,5 cm (vorgebogen)',
    variants: {
      '6': 52830788190531,
      '8': 52830788223299
    }
  },
  {
    id: '5051601G',
    name: 'Dichtungs-Set für Viertelkreisdusche komplett',
    artNr: '5051601G',
    handle: 'duschtur-dichtungs-set-fur-viertelkreisdusche-mit-gebogenem-glas-art-nr-5051601g',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Dichtungen-Set180D.5102.550.jpg',
    glass: [6, 8],
    gapMin: 11, gapMax: 14,
    form: 'viertelkreis',
    priceFrom: 81.90,
    bestseller: false,
    desc: 'Komplettset mit allen Dichtungen für eine Viertelkreisdusche (Bodendichtung + seitliche Dichtungen + Magnetdichtungen). Türen nach außen öffnend.',
    lengths: 'Komplettset',
    variants: {
      '6': 52830718067011,
      '8': 52830718099779
    }
  },
  {
    id: '5101.135',
    name: 'Gebogene Duschdichtung 135° für Fünfeckduschen',
    artNr: '5101.135',
    handle: 'gebogene-dusch-turdichtung-135-fur-funfeckduschen-art-nr-5101-135',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/7DDDB6C2-7CF7-4982-87CA-DC9D744FC845.png',
    glass: [6, 8],
    gapMin: 14, gapMax: 16,
    form: 'fuenfeck',
    priceFrom: 33.50,
    bestseller: false,
    desc: 'Vorgebogene Dichtung für den 135°-Knick bei Fünfeckduschen. Als Einzelstück oder Paar erhältlich.',
    lengths: 'ca. 25 cm (135° gebogen)',
    variants: {
      '6': 52830716068163,
      '8': 52830716068163
    }
  },
  {
    id: '5102.135',
    name: 'Gebogene Schleiflippendichtung 135° Fünfeckdusche',
    artNr: '5102.135',
    handle: 'gebogene-dusch-turdichtung-135-fur-funfeckduschen-art-nr-5102-135',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/9C4E7DB6-675C-4B1F-A286-46C227FB2D3A.png',
    glass: [6, 8],
    gapMin: 12, gapMax: 13,
    form: 'fuenfeck',
    priceFrom: 33.50,
    bestseller: false,
    desc: 'Schleiflippendichtung für den 135°-Bereich bei Fünfeckduschen. Als Einzelstück oder Paar bestellbar.',
    lengths: 'ca. 25 cm (135° gebogen)',
    variants: {
      '6': 52830716920131,
      '8': 52830716920131
    }
  },
  {
    id: '4269G',
    name: 'Gebogene Bodendichtung 2-flg. Viertelkreis',
    artNr: '4269G',
    handle: 'gebogene-dusch-turdichtung-fur-2-flg-viertelkreisduschen-mit-4-u-5-mm-glasdicke-mit-sehr-kurzer-abtropfleiste-1-paar-2-tlg-4269g',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/E2268312-7733-4651-BADD-1140EB2283A2.png',
    glass: [4, 5],
    gapMin: 4, gapMax: 6,
    form: 'zweiflg',
    priceFrom: 59.10,
    bestseller: false,
    desc: 'Speziell für 2-flügelige Viertelkreisduschen mit dünnem 4 oder 5 mm Glas. 1 Paar (2 Stück).',
    lengths: 'ca. 55 cm pro Stück (1 Paar)',
    variants: {
      '4': 52830788092227,
      '5': 52830788124995
    }
  },
  {
    id: '4269-G86',
    name: 'Gebogene Dichtung Viertelkreis kurze Lippe',
    artNr: '4269-G86',
    handle: 'dusch-turdichtung-gebogen-fur-viertelkreisdusche-fur-5-u-6-mm-glasstarke-mit-kurzer-abtropfleiste-und-kurzer-lippe-nach-unten-4269-g86',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/4269neu.jpg',
    glass: [4, 5],
    gapMin: 6, gapMax: 9,
    form: 'viertelkreis',
    priceFrom: 45.90,
    bestseller: false,
    desc: 'Für Viertelkreisduschen mit dünnem 4–5 mm Glas. Kurze Abtropfleiste und kurze Dichtlippe nach unten.',
    lengths: 'ca. 86 cm (vorgebogen)',
    variants: {
      '4': 52830762467651,
      '5': 52830762434883
    }
  }
];

    function filterProducts(state, includeGap, list) {
        return (list || GF_PRODUCTS).filter(function (p) {
            if (state.glass != null && p.glass && p.glass.indexOf(parseInt(state.glass)) === -1) return false;
            if (state.form && p.form && p.form.indexOf(state.form) === -1) return false;
            if (includeGap !== false && state.gap != null && p.gapMin != null && p.gapMax != null) {
                if (state.gap < p.gapMin || state.gap > p.gapMax) return false;
            }
            return true;
        });
    }

    global.DichtungGebogenData = {
        products: GF_PRODUCTS,
        filterProducts: filterProducts
    };
})(window);