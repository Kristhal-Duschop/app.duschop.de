/* DICHTUNG-SEITLICH-FINDER, Daten v1 */
(function (global) {
    'use strict';

    var PRODUCTS = [
  // =============================================
  // BALLONDICHTUNGEN & BALGDICHTUNGEN (fluchtend, Glas-Glas & Glas-Wand, Dreh+Pendel)
  // =============================================
  {
    id: '5042',
    name: 'Ballondichtung mit schmalem Ballon',
    artNr: '5042',
    sortType: 'ballon',
    handle: 'streifdichtung-mit-schmalem-ballon-fur-6-und-8-mm-universal-art-nr-5042',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/EE8C565C-AE97-40F0-B4FA-0DA70E0EF510.png',
    glass: [6, 8, 10],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh', 'pendel'],
    arrangement: ['fluchtend'],
    gapMin: 8,
    gapMax: 10,
    priceFrom: 24.90,
    bestseller: true,
    desc: 'Vielseitige Ballondichtung mit schmalem 8 mm Ballon. Passt sich flexibel an \u2013 f\u00fcr Glas-Glas und Glas-Wand.',
    lengths: ['200 cm', '220 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830802510147 },
      '8': { '200 cm': 52830802542915 },
      '10': { '200 cm': 52830802706755 }
    }
  },
  {
    id: '5021',
    name: 'Ballondichtung mit breitem Ballon',
    artNr: '5021',
    sortType: 'ballon',
    handle: 'streifdichtung-mit-breitem-ballon-fur-6-und-8-mm-universal-art-nr-5021',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BB7A41C4-BBB5-4894-9B9C-B54742CFE2C8.png',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh', 'pendel'],
    arrangement: ['fluchtend'],
    gapMin: 13,
    gapMax: 15,
    priceFrom: 24.90,
    bestseller: true,
    desc: 'Breiter Ballon (13\u201315 mm) f\u00fcr gr\u00f6\u00dfere Spalte. Dichtet zuverl\u00e4ssig zwischen Glas-Glas und Glas-Wand ab.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830802346307 },
      '8': { '200 cm': 52830802379075 }
    }
  },
  {
    id: '5120',
    name: 'Spaltdichtung mit offenem Ballon',
    artNr: '5120',
    sortType: 'ballon',
    handle: 'spaltdichtung-mit-offener-ballondichtung-bzw-lippe-zwischen-den-glaskanten-fur-6-mm-glasdicke-mit-kurzem-glaseinstand-ca-5-mm-art-nr-5120',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5120_5130_f_2.jpg',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh', 'pendel'],
    arrangement: ['fluchtend'],
    gapMin: 2,
    gapMax: 6,
    priceFrom: 24.90,
    bestseller: false,
    desc: 'Offener Ballon mit kurzem Glaseinstand (5 mm). Ideal wenn wenig Platz f\u00fcr den Glaseinstand vorhanden ist.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830802051395 },
      '8': { '200 cm': 52830802084163 }
    }
  },
  {
    id: '007',
    name: 'Balgdichtung mit 7\u20138 mm Ballon',
    artNr: '007',
    sortType: 'ballon',
    handle: 'balgdichtung-ballondichtung-fur-duschtur-mit-7-8-mm-ballon-kleiner-spalt-art-nr-007',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/70D196E5-99B5-4CBD-95C4-7AF0832879F5.png',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh', 'pendel'],
    arrangement: ['fluchtend'],
    gapMin: 7,
    gapMax: 9,
    priceFrom: 24.90,
    bestseller: false,
    desc: 'Anti-UV Balgdichtung mit kleinem 7\u20138 mm Ballon. F\u00fcr enge Spalte zwischen Glas und Glas oder Glas und Wand.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 52830761058627 },
      '8': { '200 cm': 52830761091395 }
    }
  },
  {
    id: '007A1',
    name: 'Balgdichtung mit 12 mm Ballon',
    artNr: '007A1',
    sortType: 'ballon',
    handle: 'balgdichtung-ballondichtung-fur-duschtur-mit-12-mm-ballon-grosser-spalt-art-nr-007a1',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0FFFA8DD-3DB3-4A2E-B0D5-75B86467F0E0.png',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh', 'pendel'],
    arrangement: ['fluchtend'],
    gapMin: 12,
    gapMax: 14,
    priceFrom: 24.90,
    bestseller: false,
    desc: 'Anti-UV Balgdichtung mit gro\u00dfem 12 mm Ballon. F\u00fcr breitere Spalte \u2013 dichtet auch bei Unebenheiten zuverl\u00e4ssig ab.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 52830760206659 },
      '8': { '200 cm': 52830760239427 }
    }
  },
  {
    id: 'PCR8S',
    name: 'Ballondichtung kurzer Glaseinstand 5 mm',
    artNr: 'PCR8S',
    sortType: 'ballon',
    handle: 'streifdichtung-ballondichtung-schmaler-ballon-mit-kurzem-glaseinstand-ca-5-mm-art-nr-pcr8s',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/D4FAAAAE-F927-4873-9691-5F5816EB534D.png',
    glass: [8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh', 'pendel'],
    arrangement: ['fluchtend'],
    gapMin: 7,
    gapMax: 9,
    priceFrom: 22.90,
    bestseller: false,
    desc: 'Schmaler Ballon mit nur 5 mm Glaseinstand \u2013 speziell f\u00fcr 8 mm Glas.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '8': { '200 cm': 52830756897091 }
    }
  },

  // =============================================
  // LIPPENDICHTUNGEN 180\u00b0 FLUCHTEND (NUR Dreht\u00fcr!)
  // =============================================
  {
    id: '003',
    name: 'Lippendichtung 180\u00b0 gerade weiche Lippe',
    artNr: '003',
    sortType: 'lippe',
    handle: 'duschlippendichtung-mit-gerader-und-weicher-lippe-dichtung-zwischen-drehtur-und-seitenscheibe-fluchtend-180-fur-6-oder-8-mm-glasdicke-art-nr-003',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0C33632E-24B7-48AA-BEB5-FD2471CE81B2.png',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh'],
    arrangement: ['fluchtend'],
    gapMin: 7,
    gapMax: 25,
    priceFrom: 24.90,
    bestseller: true,
    desc: 'Klassische Lippendichtung mit gerader, weicher Lippe f\u00fcr 180\u00b0 fluchtende Anordnung. Verf\u00fcgbar in 16 oder 25 mm Lippenl\u00e4nge.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 52830756634947 },
      '8': { '200 cm': 52830756700483 }
    }
  },
  {
    id: '5001',
    name: 'Lippendichtung 180\u00b0 fluchtend mit gew\u00f6lbter Lippe',
    artNr: '5001',
    sortType: 'lippe',
    handle: 'lippendichtung-180-fur-lucken-glas-glas-fluchtend-180-tur-an-glasteil-mit-leicht-gewolbter-lippe-art-nr-5001',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5001_f_9.jpg',
    glass: [6, 8],
    application: ['glas-glas'],
    doorType: ['dreh'],
    arrangement: ['fluchtend'],
    gapMin: 5,
    gapMax: 11,
    priceFrom: 24.90,
    bestseller: true,
    desc: 'Gew\u00f6lbte Lippe f\u00fcr bessere Abdichtung bei fluchtender 180\u00b0-Anordnung. Passt sich Unebenheiten an.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830800085315 },
      '8': { '200 cm': 52830800118083 }
    }
  },
  {
    id: '5112',
    name: 'Lippendichtung 180\u00b0 gerade weiche Lippe | Glas-Glas & Glas-Wand',
    artNr: '5112',
    sortType: 'lippe',
    handle: 'lippendichtung-mit-gerader-und-weicher-dichtfahne-180-fur-6-und-8-mm-art-nr-5112',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0C33632E-24B7-48AA-BEB5-FD2471CE81B2.png',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh'],
    arrangement: ['fluchtend'],
    gapMin: 4,
    gapMax: 12,
    priceFrom: 24.90,
    bestseller: false,
    desc: 'Universelle Lippendichtung f\u00fcr Glas-Glas und Glas-Wand Anwendung. Gerade, weiche Dichtfahne.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 0 },
      '8': { '200 cm': 0 }
    }
  },
  {
    id: '5091',
    name: 'Lippendichtung 180\u00b0 mit langer Dichtfahne',
    artNr: '5091',
    sortType: 'lippe',
    handle: 'lippendichtung-180-fur-lucken-mit-langer-dichtfahne-und-leicht-gewolbter-lippe-art-nr-5091',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6E74FD41-DF6D-41E2-B2BE-1A10474A546F.png',
    glass: [6, 8, 10],
    application: ['glas-glas'],
    doorType: ['dreh'],
    arrangement: ['fluchtend'],
    gapMin: 13,
    gapMax: 26,
    priceFrom: 26.60,
    bestseller: false,
    desc: 'Lange Dichtfahne (23\u201326 mm) f\u00fcr gr\u00f6\u00dfere Spalte bei fluchtender Anordnung. Auch f\u00fcr 10 mm Glas.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830798512451 },
      '8': { '200 cm': 52830798577987 },
      '10': { '200 cm': 52830798643523 }
    }
  },

  // =============================================
  // SPALTDICHTUNGEN
  // =============================================
  {
    id: '5011',
    name: 'Spaltdichtung mit schr\u00e4ger Lippe 18 mm',
    artNr: '5011',
    sortType: 'spalt',
    handle: 'streifdichtung-mit-langer-schrager-dichtfahne-fur-6-und-8-mm-glas-art-nr-5011',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/88F2F08E-3207-4185-95A0-7541342E29DF.png',
    glass: [6, 8],
    application: ['glas-glas', 'glas-wand'],
    doorType: ['dreh'],
    arrangement: ['ueberlappend'],
    gapMin: 10,
    gapMax: 13,
    priceFrom: 15.90,
    bestseller: false,
    desc: 'Schr\u00e4ge 18 mm Dichtfahne f\u00fcr zuverl\u00e4ssige Abdichtung. Preisg\u00fcnstige L\u00f6sung, auch in 100 cm.',
    lengths: ['100 cm', '200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830753390915 },
      '8': { '200 cm': 52830753489219 }
    }
  },

  // =============================================
  // \u00dcBERLAPPUNGSDICHTUNGEN 90\u00b0 (\u00fcberlappend, Glas-Glas)
  // =============================================
  {
    id: '004',
    name: '\u00dcberlappungsdichtung 90\u00b0 Lippe',
    artNr: '004',
    sortType: 'ueberlappung',
    handle: 'schiebeturdichtung-uberlappungsdichtung-senkrecht-mit-dichtlippe-im-90-winkel-art-nr-004',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/D919BC0B-0486-4ED5-B279-D3E853D07843.png',
    glass: [6, 8],
    application: ['glas-glas'],
    doorType: ['dreh', 'schiebe'],
    arrangement: ['ueberlappend'],
    gapMin: 15,
    gapMax: 27,
    priceFrom: 24.90,
    bestseller: true,
    desc: 'Standard-\u00dcberlappungsdichtung mit 90\u00b0-Lippe. Verf\u00fcgbar in 16 oder 25 mm Lippenl\u00e4nge. F\u00fcr Dreh- und Schiebet\u00fcren.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830791860547 },
      '8': { '200 cm': 52830791926083 }
    }
  },
  {
    id: 'S004',
    name: 'Polycarbonat-\u00dcberlappungsdichtung 90\u00b0 Lippe',
    artNr: 'S004',
    sortType: 'ueberlappung',
    handle: 'schiebeturdichtung-uberlappungsdichtung-aus-polycarbonat-senkrecht-mit-90-lippe-hochtransparent-art-nr-s004-1',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/D929273D-313A-4758-9264-E5FEB1362C0C.png',
    glass: [6, 8, 10],
    application: ['glas-glas'],
    doorType: ['dreh', 'schiebe'],
    arrangement: ['ueberlappend'],
    gapMin: 6,
    gapMax: 22,
    priceFrom: 23.90,
    bestseller: false,
    desc: 'Hochtransparente Polycarbonat-\u00dcberlappungsdichtung mit 90\u00b0-Lippe. Kaum sichtbar am Glas. Auch f\u00fcr 10 mm.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830748016963 },
      '8': { '200 cm': 52830748082499 },
      '10': { '200 cm': 52830748213571 }
    }
  },
  {
    id: '5211',
    name: '\u00dcberlappungsdichtung f\u00fcr Schiebet\u00fcren',
    artNr: '5211',
    sortType: 'ueberlappung',
    handle: 'schiebeturdichtung-uberlappungsdichtung-fur-6-und-8-mm-universal-art-nr-5211',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/CDDF7199-31AA-4734-B023-4E900073F3AE.png',
    glass: [6, 8],
    application: ['glas-glas'],
    doorType: ['schiebe'],
    arrangement: ['ueberlappend'],
    gapMin: 8,
    gapMax: 20,
    priceFrom: 24.90,
    bestseller: false,
    desc: '\u00dcberlappungsdichtung speziell f\u00fcr Schiebet\u00fcren. F\u00fcr 6 und 8 mm Glas.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830790910275 },
      '8': { '200 cm': 52830790943043 }
    }
  },
  {
    id: '0890',
    name: 'Polycarbonat-\u00dcberlappungsdichtung 90\u00b0 Vinyl-Lippe',
    artNr: '0890/1090',
    sortType: 'ueberlappung',
    handle: 'schiebeturdichtung-uberlappungsdichtung',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/polycarbonat_dichtung_1.png',
    glass: [8, 10],
    application: ['glas-glas'],
    doorType: ['dreh', 'schiebe'],
    arrangement: ['ueberlappend'],
    gapMin: 14,
    gapMax: 24,
    priceFrom: 23.90,
    bestseller: false,
    desc: 'Polycarbonat-Profil mit weicher Vinyl-Lippe f\u00fcr 90\u00b0-\u00dcberlappung. F\u00fcr 8 und 10 mm Glas.',
    lengths: ['200 cm', '240 cm'],
    variants: {
      '8': { '200 cm': 52830791139651 },
      '10': { '200 cm': 52830791205187 }
    }
  },
  {
    id: '1290',
    name: 'Polycarbonat-\u00dcberlappungsdichtung 90\u00b0 | 12 mm Glas',
    artNr: '1290',
    sortType: 'ueberlappung',
    handle: 'schiebeturdichtung-uberlappungsdichtung-senkrecht-mit-langer-lippe-1290',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BD45B063-BB78-4AE1-9FE2-FF4E2EB965DB.png',
    glass: [12],
    application: ['glas-glas'],
    doorType: ['dreh', 'schiebe'],
    arrangement: ['ueberlappend'],
    gapMin: 17,
    gapMax: 22,
    priceFrom: 25.90,
    bestseller: false,
    desc: 'Speziell f\u00fcr 12 mm Glas \u2013 Polycarbonat-\u00dcberlappungsdichtung mit 90\u00b0-Vinyl-Lippe.',
    lengths: ['200 cm', '240 cm'],
    variants: {
      '12': { '200 cm': 52830791041347 }
    }
  },

  // =============================================
  // SCHIEBET\u00dcR-DICHTUNGEN (\u00fcberlappend, Glas-Glas, NUR Schiebet\u00fcr)
  // =============================================
  {
    id: '5240',
    name: '\u00dcberlappungsdichtung lange 90\u00b0 Lippe | Schiebet\u00fcr',
    artNr: '5240',
    sortType: 'ueberlappung',
    handle: 'uberlappungsdichtung-schiebeturdichtung-mit-langer-lippe-fur-6-und-8-mm-universal-art-nr-5240',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/B3AB5006-9F46-417A-875F-150B86C02334.png',
    glass: [6, 8],
    application: ['glas-glas'],
    doorType: ['schiebe'],
    arrangement: ['ueberlappend'],
    gapMin: 19,
    gapMax: 22,
    priceFrom: 32.90,
    bestseller: false,
    desc: 'Lange 90\u00b0-Lippe (19\u201322 mm) f\u00fcr Schiebet\u00fcren mit breiterem Abstand zum Festteil.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 52830791303491 },
      '8': { '200 cm': 52830791336259 }
    }
  },
  // === Welle C: 24 seitliche Dichtungen ===
  { id: '2x008A1W', name: 'Magnetdichtung 2x008A1W 90° breiter Magnetstreifen', artNr: '2x008A1W', handle: '90-duschdichtung-2-er-set-mit-magnetleiste-dichtungspaar-mit-magnetstreifen-2-er-set-aus-2x-45-magnetdichtung-art-nr-2x008a1w', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 16, gapMax: 18, priceFrom: 39.90, desc: 'Magnetdichtung 90° als 2x 45° fluchtend, breiter Magnetstreifen, 2er-Set.' },
  { id: '6072-6082-90', name: 'Magnetdichtung 6072/6082 90° (2x 45°)', artNr: '6072/6082', handle: 'magnetdichtung-90-2-er-set-fur-6-und-8-mm-glasdicke-art-nr-6072-6082', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 15, gapMax: 18, priceFrom: 39.90, desc: 'Magnetdichtungs-Paar 90° (2x 45°), für 6 und 8 mm Glasdicke.' },
  { id: '2x008BW', name: 'Magnetdichtung 2x008BW 180° breiter Magnetstreifen', artNr: '2x008BW', handle: '180-duschdichtung-2-er-set-mit-magnetleiste-art-nr-008bw', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 18, gapMax: 22, priceFrom: 39.90, desc: 'Magnetdichtung 180° fluchtend, breiter Magnetstreifen, 2er-Set.' },
  { id: '6092', name: 'Magnetdichtung 6092 180° fluchtend schmaler Magnetstreifen', artNr: '6092', handle: 'magnetdichtung-180-2-er-set-fur-6-und-8-mm-glasdicke-art-nr-6092', glass: [6,8,10], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 17, gapMax: 23, priceFrom: 39.90, desc: 'Magnetdichtung 180° fluchtend, schmaler Magnetstreifen, für 6/8/10 mm Glas.' },
  { id: '6042-6092', name: 'Magnetdichtung 6042/6092 90° Pendeltür', artNr: '6042/6092', handle: 'magnetische-dichtung-fur-pendelturen-in-90-position-zu-festem-glasteil-einzeln-oder-als-2-er-set-art-nr-6042', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 18, gapMax: 20, priceFrom: 39.90, desc: 'Magnetdichtung 90° für Pendeltüren am festen Glasteil, einzeln oder als 2er-Set.' },
  { id: 'S003A2', name: 'Polycarbonat-Fugendichtung S003A2 180°', artNr: 'S003A2', handle: 'glastur-fugendichtung-glas-glas-180-aus-polycarbonat-hochtransparent-glasklar-art-nr-s003a2', glass: [6,8,10], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 3, gapMax: 10, priceFrom: 23.90, desc: 'Polycarbonat 180° fluchtend, harter Streifen, hochtransparent.' },
  { id: '6052-6062-135', name: 'Magnetdichtung 6052/6062 135° Fünfeckdusche', artNr: '6052/6062', handle: 'magnetdichtung-135-2-er-set-fur-funfeckduschen-fur-6-und-8-mm-glasdicke-art-nr-6052-6062', glass: [9,10,12,13], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 9, gapMax: 13, priceFrom: 39.90, desc: 'Magnetdichtungs-Paar 135° für Fünfeckduschen, 2x 67,5° fluchtend.' },
  { id: '5050', name: 'Anschlagdichtung 5050 Glas-Glas 90°', artNr: '5050', handle: 'tur-anschlagdichtung-glas-glas-90-fur-6-und-8-mm-universal-art-nr-5050', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 4, gapMax: 8, priceFrom: 22.90, desc: 'Anschlagdichtung 90° Glas-Glas ohne Magnet, für 6/8 mm Glas.' },
  { id: 'S003', name: 'Polycarbonat-Lippendichtung S003 180° weiche Lippe', artNr: 'S003', handle: 'duschturdichtung-senkrecht-mit-weicher-lippe-hochtransparent-glasklar-dichtung-zwischen-drehtur-und-seitenscheibe-fur-6-oder-8-mm-glasdicke-art-nr-s003', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 3, gapMax: 16, priceFrom: 23.90, desc: 'Polycarbonat 180° fluchtend mit weicher Lippe, zwischen Drehtür und Seitenscheibe.' },
  { id: '006', name: 'Verbindungsdichtung 006 aufsteckbar Glas-Glas', artNr: '006', handle: 'verbindungs-dichtung-fur-glastur-an-feststehender-glasscheibe-aufsteckbar-auf-beiden-glasscheiben-tur-u-festteil-art-nr-006', glass: [8,9,10,11,12], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 8, gapMax: 12, priceFrom: 28.90, desc: 'Verbindungsdichtung aufsteckbar auf beide Glasscheiben (Tür + Festteil).' },
  { id: 'S007', name: 'Polycarbonat-Ballondichtung S007 hochtransparent', artNr: 'S007', handle: 'streifdichtung-ballondichtung-schmaler-ballon-hochtransparent-fur-6-oder-8-mm-wahlbar-artnr-s007', glass: [6,8], application: ['glas-wand'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 8, gapMax: 9, priceFrom: 23.90, desc: 'Polycarbonat-Ballondichtung schmaler Ballon, hochtransparent, Glas-Wand.' },
  { id: '6072-6082-180', name: 'Magnetdichtungspaar 6072/6082 180° 2x 45°', artNr: '6072/6082', handle: 'magnetdichtung-180-2-er-set-aus-2x-45-magnetdichtung-fur-6-und-8-mm-glasdicke-art-nr-6072-6082', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 22, gapMax: 26, priceFrom: 39.90, desc: 'Magnetdichtung 180° fluchtend aus 2x 45°, für 6/8 mm Glas.' },
  { id: '8874', name: 'Flexible Magnetdichtung 8874 alle Winkel', artNr: '8874', handle: 'magnetleiste-fur-flexible-anpassung-an-samtliche-situationen-2-er-set-art-nr-8874', glass: [6,8], application: ['glas-glas','glas-wand'], doorType: ['dreh'], arrangement: ['fluchtend','versetzt'], gapMin: 8, gapMax: 22, priceFrom: 43.90, desc: 'Flexible Magnetleiste für alle Winkel von 90° bis 180°, beidseitig.' },
  { id: '5071', name: 'Lippendichtung 5071 135° Fünfeckdusche', artNr: '5071', handle: 'lippendichtung-135-spaltdichtung-fur-drehturen-an-seitenscheiben-bei-funfeckduschen-fur-6-und-8-mm-universal-art-nr-5071', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 5, gapMax: 7, priceFrom: 24.90, desc: 'Lippendichtung 135° für Drehtüren an Seitenscheiben bei Fünfeckduschen.' },
  { id: '6052-6062-180', name: 'Magnetdichtungspaar 6052/6062 180° 2x 45°', artNr: '6052/6062', handle: 'magnetdichtung-180-2-er-set-aus-2x-67-5-magnetdichtung-fur-6-und-8-mm-glasdicke-art-nr-6052-6062', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 18, gapMax: 22, priceFrom: 39.90, desc: 'Magnetdichtung 180° aus 2x 45°, für 6/8 mm Glas.' },
  { id: '006A', name: 'Verbindungsdichtung 006A Ziehharmonika 25/35 mm', artNr: '006A', handle: 'ziehharmonika-dichtung-fur-glastur-an-feststehender-glasscheibe-aufsteckbar-auf-beiden-glasscheiben-tur-u-festteil-art-nr-006a', glass: [6,8,10], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend','versetzt'], gapMin: 25, gapMax: 35, priceFrom: 29.90, desc: 'Ziehharmonika-Dichtung aufsteckbar auf beide Glasscheiben, für 25–35 mm Spaltmaß.' },
  { id: '5080', name: 'Anschlagdichtung 5080 180° fluchtend Federspannung', artNr: '5080', handle: 'tur-anschlagdichtung-glas-glas-180-fur-6-und-8-mm-universal-art-nr-5080', glass: [6,8], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 4, gapMax: 8, priceFrom: 22.90, desc: 'Anschlagdichtung 180° fluchtend mit Federspannung, für 6/8 mm Glas.' },
  { id: '5119', name: 'Streifdichtung 5119 kurze schräge Dichtfahne Glas-Wand', artNr: '5119', handle: 'streifdichtung-mit-kurzer-schrager-dichtfahne-fur-glas-wand-lucken-fur-6-und-8-mm-glas-art-nr-5119', glass: [6,8], application: ['glas-wand'], doorType: ['dreh','schiebe'], arrangement: ['fluchtend'], gapMin: 5, gapMax: 8, priceFrom: 21.80, desc: 'Streifdichtung kurze schräge Dichtfahne für Glas-Wand-Lücken.' },
  { id: 'PCC8-10-12', name: 'Spaltdichtung PCC8/10/12 180° weiche Vinyl-Lippe', artNr: 'PCC8/10/12', handle: 'fugendichtung-180-fur-geringes-spaltmass-fur-8-10-oder-12-mm-glas-pcc8-10-12', glass: [8,10,12], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 3, gapMax: 6, priceFrom: 24.90, desc: 'Spaltdichtung 180° mit weicher Vinyl-Lippe für geringes Spaltmaß, für 8/10/12 mm Glas.' },
  { id: '6092-6082-135', name: 'Magnetdichtung 6092/6082 135° Fünfeckdusche', artNr: '6092/6082', handle: 'magnetdichtungspaar-135-1x90-1-x45-funfeckduschen', glass: [9,10,12,13], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 9, gapMax: 13, priceFrom: 39.90, desc: 'Magnetdichtung 135° für Fünfeckduschen, 1x 90° + 1x 45°.' },
  { id: '1600635-35mm', name: 'Ziehharmonika-Dichtung 1600635 Glas-Glas 35 mm', artNr: '1600635', handle: 'ziehharmonika-dichtung_35mm', glass: [6,8,10], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend','versetzt'], gapMin: 20, gapMax: 35, priceFrom: 29.90, desc: 'Ziehharmonika-Dichtung Glas-Glas, flexibel für 20–35 mm Spaltmaß.' },
  { id: 'PCR8L', name: 'Ballondichtung PCR8L breiter Ballon kurzer Glaseinstand', artNr: 'PCR8L', handle: 'streifdichtung-ballondichtung-breiter-ballon-mit-kurzem-glaseinstand-ca-5-mm-art-nr-pcr8l', glass: [8], application: ['glas-wand'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 12, gapMax: 13, priceFrom: 24.90, desc: 'Ballondichtung breiter Ballon mit kurzem Glaseinstand (ca. 5 mm), für 8 mm Glas.' },
  { id: 'PHJ-8-12', name: 'Wintergarten-Fugendichtung PHJ 8/12 harte Anschlagschiene', artNr: 'PHJ 8/12', handle: 'fugendichtung-180-mit-weicher-lippe-fur-geringes-spaltmass-pcc8-10-12-kopie', glass: [8,12], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 3, gapMax: 6, priceFrom: 24.90, desc: 'Wintergarten-Fugendichtung 180° mit harter Anschlagschiene, für 8/12 mm Glas.' },
  { id: '6062-6072-112', name: 'Magnetdichtung 6062/6072 112° Sonderwinkel', artNr: '6062/6072', handle: 'magnetdichtungspaar_112grad_sonderwinkel', glass: [9,10,12,13], application: ['glas-glas'], doorType: ['dreh'], arrangement: ['fluchtend'], gapMin: 16, gapMax: 18, priceFrom: 39.90, desc: 'Magnetdichtung 112° Sonderwinkel asymmetrisch, für Fünfeckduschen mit nicht-Standard-Winkel.' }
,

  // =============================================
  // POLYCARBONAT-DICHTUNGEN f\u00fcr \u00dcBERLAPPEND (Dreh+Schiebe)
  // =============================================

  // =============================================
  // SONSTIGE (Wintergarten, 135\u00b0)
  // =============================================
];

    function filterProducts(state, includeGap, list) {
        return (list || PRODUCTS).filter(function (p) {
            if (state.glass != null && p.glass && p.glass.indexOf(parseInt(state.glass)) === -1) return false;
            if (state.application && p.application && p.application.indexOf(state.application) === -1) return false;
            if (state.door && p.doorType && p.doorType.indexOf(state.door) === -1) return false;
            if (state.arrangement && p.arrangement && p.arrangement.indexOf(state.arrangement) === -1) return false;
            if (includeGap !== false && state.gap != null && p.gapMin != null && p.gapMax != null) {
                if (state.gap < p.gapMin || state.gap > p.gapMax) return false;
            }
            return true;
        });
    }

    global.DichtungSeitlichData = {
        products: PRODUCTS,
        filterProducts: filterProducts
    };
})(window);




