/* WINTERGARTEN-KONFIGURATOR, Daten v1 */
(function (global) {
    'use strict';

    var PRODUCTS = [
  {
    id: 'S004', name: 'Polycarbonat-\u00dcberlappungsdichtung 90\u00b0 Lippe',
    artNr: 'S004',
    handle: 'schiebeturdichtung-uberlappungsdichtung-aus-polycarbonat-senkrecht-mit-90-lippe-hochtransparent-art-nr-s004-1',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/D929273D-313A-4758-9264-E5FEB1362C0C.png?v=1772736078',
    type: '90',
    glass: [6, 8, 10],
    priceFrom: 24.60,
    bestseller: true,
    desc: 'Vielseitige \u00dcberlappungsdichtung mit PC-Lippe in verschiedenen Lippenbreiten (6\u201330 mm). Ideal f\u00fcr Schiebeelemente im Wintergarten.',
    lipWidths: '6, 10, 14, 22, 30 mm',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830748016963 },
      '8': { '200 cm': 52830748082499, '250 cm': 52830748115267 },
      '10': { '200 cm': 52830748279107, '250 cm': 52830748311875 }
    }
  },
  {
    id: '0890', name: 'Polycarbonat-\u00dcberlappungsdichtung 90\u00b0 Vinyl-Lippe',
    artNr: '0890/1090',
    handle: 'schiebeturdichtung-uberlappungsdichtung',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/polycarbonat_dichtung_1.png?v=1768408532',
    type: '90',
    glass: [8, 10],
    priceFrom: 23.90,
    bestseller: false,
    desc: '\u00dcberlappungsdichtung mit weicher Vinyl-Lippe f\u00fcr sanftes Gleiten. F\u00fcr 8 und 10 mm Glas.',
    lipWidths: null,
    lengths: ['200 cm', '240 cm'],
    variants: {
      '8': { '200 cm': 52830791139651, '240 cm': 52830791172419 },
      '10': { '200 cm': 52830791205187, '240 cm': 52830791237955 }
    }
  },
  {
    id: '1290', name: 'Polycarbonat-\u00dcberlappungsdichtung 90\u00b0 Vinyl-Lippe 12 mm',
    artNr: '1290',
    handle: 'schiebeturdichtung-uberlappungsdichtung-senkrecht-mit-langer-lippe-1290',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BD45B063-BB78-4AE1-9FE2-FF4E2EB965DB.png?v=1742636823',
    type: '90',
    glass: [12],
    priceFrom: 25.90,
    bestseller: false,
    desc: '\u00dcberlappungsdichtung mit Vinyl-Lippe speziell f\u00fcr starkes 12 mm Glas.',
    lipWidths: null,
    lengths: ['200 cm', '240 cm'],
    variants: {
      '12': { '200 cm': 52830791041347, '240 cm': 52830791074115 }
    }
  },
  {
    id: 'S003A2', name: 'Polycarbonat-Fugendichtung 180\u00b0 mit hartem Steg',
    artNr: 'S003A2',
    handle: 'glastur-fugendichtung-glas-glas-180-aus-polycarbonat-hochtransparent-glasklar-art-nr-s003a2',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8125.png?v=1766948840',
    type: '180',
    glass: [6, 8, 10],
    priceFrom: 23.90,
    bestseller: true,
    desc: 'Fugendichtung mit hartem Polycarbonat-Steg f\u00fcr formstabile Glas-Glas-Verbindungen bei 180\u00b0.',
    lipWidths: null,
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830761910595 },
      '8': { '200 cm': 52830761943363, '250 cm': 52830761976131 },
      '10': { '200 cm': 52830762008899, '250 cm': 52830762041667 }
    }
  },
  {
    id: 'S003', name: 'Polycarbonat-Lippendichtung 180\u00b0 mit weicher Lippe',
    artNr: 'S003',
    handle: 'duschturdichtung-senkrecht-mit-weicher-lippe-hochtransparent-glasklar-dichtung-zwischen-drehtur-und-seitenscheibe-fur-6-oder-8-mm-glasdicke-art-nr-s003',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0BF47650-C195-4B73-9A17-BD3D7A15B872.png?v=1742636365',
    type: '180',
    glass: [6, 8],
    priceFrom: 23.90,
    bestseller: false,
    desc: 'Lippendichtung mit weicher Lippe (8 oder 16 mm) f\u00fcr flexible 180\u00b0-Verbindungen zwischen Glaselementen.',
    lipWidths: '8, 16 mm',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830756471107 },
      '8': { '200 cm': 52830756536643, '250 cm': 53774457700675 }
    }
  },
  {
    id: 'PCC', name: 'Spaltdichtung 180\u00b0 weiche Vinyl-Lippe',
    artNr: 'PCC8/10/12',
    handle: 'fugendichtung-180-fur-geringes-spaltmass-fur-8-10-oder-12-mm-glas-pcc8-10-12',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BD1B73FC-DFF0-43B4-AE5E-415DFC0A8608.png?v=1742636269',
    type: '180',
    glass: [8, 10, 12],
    priceFrom: 24.90,
    bestseller: false,
    desc: 'Spaltdichtung mit weicher Vinyl-Lippe f\u00fcr geringes Spaltma\u00df. F\u00fcr 8, 10 und 12 mm Glas.',
    lipWidths: null,
    lengths: ['200 cm', '240 cm'],
    variants: {
      '8': { '200 cm': 52830748868931, '240 cm': 52830748901699 },
      '10': { '200 cm': 52830748934467, '240 cm': 52830748967235 },
      '12': { '200 cm': 52830749000003, '240 cm': 52830749032771 }
    }
  },
  {
    id: 'PHJ', name: 'Wintergarten-Fugendichtung 180\u00b0 harte Anschlagschiene',
    artNr: 'PHJ 8/12',
    handle: 'fugendichtung-180-mit-weicher-lippe-fur-geringes-spaltmass-pcc8-10-12-kopie',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/s003a2_4.jpg?v=1742635320',
    type: '180',
    glass: [8, 12],
    priceFrom: 24.90,
    bestseller: false,
    desc: 'Fugendichtung mit harter Anschlagschiene f\u00fcr pr\u00e4zise 180\u00b0-Verbindungen. Besonders stabil.',
    lipWidths: null,
    lengths: ['200 cm', '240 cm'],
    variants: {
      '8': { '200 cm': 52830689198403, '240 cm': 52830689231171 },
      '12': { '200 cm': 52830689263939, '240 cm': 52830689296707 }
    }
  },
  {
    id: 'S007', name: 'Polycarbonat-Ballondichtung hochtransparent',
    artNr: 'S007',
    handle: 'streifdichtung-ballondichtung-schmaler-ballon-hochtransparent-fur-6-oder-8-mm-wahlbar-artnr-s007',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6A0AD9C1-637B-4423-85F3-2F721F99AE9D.png?v=1742636253',
    type: 'ballon',
    glass: [6, 8, 10],
    priceFrom: 23.90,
    bestseller: false,
    desc: 'Ballondichtung mit schmalem Ballonprofil f\u00fcr sanften Anpressdruck. Ideal als Streif- und Anschlagdichtung.',
    lipWidths: null,
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830748672323, '250 cm': 52830748705091 },
      '8': { '200 cm': 52830748737859, '250 cm': 52830748770627 },
      '10': { '200 cm': 52830748803395, '250 cm': 52830748836163 }
    }
  }
];

    function filterProducts(state, list) {
        return (list || PRODUCTS).filter(function (p) {
            if (state.type && p.type != state.type) return false;
            if (state.glass != null && p.glass && p.glass.indexOf(parseInt(state.glass)) === -1) return false;
            return true;
        });
    }

    global.WintergartenData = {
        products: PRODUCTS,
        filterProducts: filterProducts
    };
})(window);