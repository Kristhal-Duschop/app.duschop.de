/* MAGNETDICHTUNG-FINDER, Daten v1 */
(function (global) {
    'use strict';
    // Bewusst NICHT annotiert (12.08.2026): die beiden Magnettraegerprofile
    // 74.109 und 52.05.0300. Sie liegen in der Magnetdichtungs-Collection,
    // sind aber Traegerprofile und keine Dichtungen. Die Achsen dieses
    // Finders (Winkel, Glasdicke, Spaltmass) treffen auf sie nicht zu.
    // Beide sind ueber den Metallprofile-Konfigurator auffindbar.


    const PRODUCTS = [
  {
    id: '2x008A1W',
    name: 'Magnetdichtung 90° mit breitem Magnetstreifen',
    artNr: '2x008A1W',
    handle: '90-duschdichtung-2-er-set-mit-magnetleiste-dichtungspaar-mit-magnetstreifen-2-er-set-aus-2x-45-magnetdichtung-art-nr-2x008a1w',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/2578FEDB-AE0F-417C-9BCA-5CF25EDEA21E.png',
    glass: [6, 8],
    angle: [90],
    gapByGlass: { '6': [16, 16], '8': [18, 18] },
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Breiter Magnetstreifen für starken Halt. Anti-UV und Anti-Schimmel. Made in Germany.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 52830788026691 },
      '8': { '200 cm': 52830788059459 }
    }
  },
  {
    id: '6072/6082-90',
    name: 'Magnetdichtung 90° (2x 45°)',
    artNr: '6072/6082',
    handle: 'magnetdichtung-90-2-er-set-fur-6-und-8-mm-glasdicke-art-nr-6072-6082',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/CA905A83-A179-47ED-A466-2CB2573064C3.png',
    glass: [6, 8, 10],
    angle: [90],
    gapByGlass: { '6': [15, 15], '8': [18, 18], '10': [16, 16] },
    priceFrom: 39.90,
    bestseller: true,
    desc: 'Unser Bestseller für 90°-Ecken. Schmaler Magnetstreifen, auch für 10 mm Glas verfügbar. In 200 cm und 250 cm.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830809391427, '250 cm': 52830809456963 },
      '8': { '200 cm': 52830809424195, '250 cm': 52830809489731 },
      '10': { '200 cm': 52830809522499, '250 cm': 52830809555267 }
    }
  },
  {
    id: '6072-B/6082-B',
    name: 'Schwarze Magnetdichtung 90° (2x 45°)',
    artNr: '6072-B/6082-B',
    handle: 'schwarze-tur-magnetdichtung-90-1-paar-fur-6-und-8-mm-universal-art-nr-6072-b-6082-b',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/607282B.jpg',
    glass: [6, 8],
    angle: [90],
    gapByGlass: { '6': [15, 15], '8': [18, 18] },
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Schwarze Ausführung für moderne Duschen mit schwarzen Beschlägen. Gleiche Technik wie die transparente Variante.',
    lengths: ['200 cm', '225 cm'],
    variants: {
      '6': { '200 cm': 52830766203203, '225 cm': 52830766268739 },
      '8': { '200 cm': 52830766235971, '225 cm': 52830766301507 }
    }
  },
  {
    id: '6042',
    name: 'Magnetdichtung 90° für Pendeltüren',
    artNr: '6042',
    handle: 'magnetische-dichtung-fur-pendelturen-in-90-position-zu-festem-glasteil-einzeln-oder-als-2-er-set-art-nr-6042',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8106.png',
    glass: [6, 8],
    angle: [90],
    pendel: true,
    // Shop: Luecke ca. 20 mm bei 6 und 8 mm (26/28 ist das Aussenmass Glas-Glas)
    gapByGlass: { '6': [20, 20], '8': [20, 20] },
    priceFrom: 39.90,
    bestseller: true,
    desc: 'Speziell für Pendeltüren die nach innen UND außen öffnen. Asymmetrisches Profil (6042 + 6092), die Tür schließt in beide Richtungen magnetisch.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830803034435, '250 cm': 52830803132739 },
      '8': { '200 cm': 52830803067203, '250 cm': 52830803165507 }
    }
  },
  {
    id: '2x008BW',
    name: 'Magnetdichtung 180° mit breitem Magnetstreifen',
    artNr: '2x008BW',
    handle: '180-duschdichtung-2-er-set-mit-magnetleiste-art-nr-008bw',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8126.png',
    glass: [6, 8],
    angle: [180],
    gapByGlass: { '6': [17, 19], '8': [21, 23] },
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Breiter Magnetstreifen für 180° fluchtende Anordnung. Anti-UV und Anti-Schimmel. Made in Germany.',
    lengths: ['200 cm'],
    variants: {
      '6': { '200 cm': 52830787961155 },
      '8': { '200 cm': 52830787993923 }
    }
  },
  {
    id: '6092',
    name: 'Magnetdichtung 180° fluchtend (schmaler Streifen)',
    artNr: '6092',
    handle: 'magnetdichtung-180-2-er-set-fur-6-und-8-mm-glasdicke-art-nr-6092',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8085.png',
    glass: [6, 8, 10],
    angle: [180],
    gapByGlass: { '6': [17, 19], '8': [21, 23], '10': [21, 23] },
    priceFrom: 39.90,
    bestseller: true,
    desc: 'Schmaler Magnetstreifen für 180° fluchtende Glasscheiben. Auch für 10 mm Glas verfügbar. In 200 cm und 250 cm.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830806704451, '250 cm': 52830806769987 },
      '8': { '200 cm': 52830806737219, '250 cm': 52830806802755 },
      '10': { '200 cm': 52830806835523, '250 cm': 52830806868291 }
    }
  },
  {
    id: '6072/6082-180',
    name: 'Magnetdichtung 180° fluchtend (2x 45°)',
    artNr: '6072/6082',
    handle: 'magnetdichtung-180-2-er-set-aus-2x-45-magnetdichtung-fur-6-und-8-mm-glasdicke-art-nr-6072-6082',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/45CD5853-44FD-456E-B1FA-8259E7F176DA.png',
    glass: [6, 8, 10],
    angle: [180],
    gapByGlass: { '6': [21, 23], '8': [25, 27], '10': [25, 27] },
    priceFrom: 39.90,
    bestseller: false,
    desc: '45°-Profile als 180°-Paar montiert, für größere Spaltmaße bei fluchtender Anordnung. Spaltmaß 22–26 mm.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830803657027, '250 cm': 52830803722563 },
      '8': { '200 cm': 52830803689795, '250 cm': 52830803755331 },
      '10': { '250 cm': 52830803788099 }
    }
  },
  {
    id: '6052/6062-180',
    name: 'Magnetdichtung 180° fluchtend (2x 67,5°)',
    artNr: '6052/6062',
    handle: 'magnetdichtung-180-2-er-set-aus-2x-67-5-magnetdichtung-fur-6-und-8-mm-glasdicke-art-nr-6052-6062',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/A82A2D96-FC23-4867-9A79-E673AAF55E48.png',
    glass: [6, 8],
    angle: [180],
    gapByGlass: { '6': [19, 21], '8': [23, 25] },
    priceFrom: 39.90,
    bestseller: true,
    desc: 'Bestseller für 180°: 67,5°-Profile als fluchtende Anordnung. Optimal für mittlere Spaltmaße (20–24 mm).',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830806475075, '250 cm': 52830806540611 },
      '8': { '200 cm': 52830806507843, '250 cm': 52830806573379 }
    }
  },
  {
    id: '6052/6062-135',
    name: 'Magnetdichtung 135° für Fünfeckduschen (2x 67,5°)',
    artNr: '6052/6062',
    handle: 'magnetdichtung-135-2-er-set-fur-funfeckduschen-fur-6-und-8-mm-glasdicke-art-nr-6052-6062',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8128.png',
    glass: [6, 8],
    angle: [135],
    // Shop: Luecke ca. 10 / 13 mm (19/24 ist das Aussenmass Glas-Glas)
    gapByGlass: { '6': [10, 10], '8': [13, 13] },
    priceFrom: 39.90,
    bestseller: true,
    desc: 'Speziell für Fünfeckduschen mit 135°-Winkel. Zwei 67,5°-Profile ergeben zusammen den passenden Winkel.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830803427651, '250 cm': 52830803493187 },
      '8': { '200 cm': 52830803460419, '250 cm': 52830803525955 }
    }
  },
  // Schwarze Ausfuehrungen (seit 25.09.2026): dasselbe Profil 6052/6062 in Schwarz,
  // Spaltmasse deshalb wie bei den weissen Eintraegen oben.
  {
    id: '6052/6062-B-180',
    name: 'Magnetdichtung 180° fluchtend (2x 67,5°), schwarz',
    artNr: '6052/6062-B',
    handle: 'schwarze-tur-magnetdichtung-180-anschlag-aus-2x-67-5-magnetdichtung-1-paar-6052-6062-b',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/schwarze-tur-magnetdichtung-180-anschlag-aus-2x-67-5-magnetd_3x2_acc848fb-6195-42a0-b82d-11f9cdff1eca.png?v=1790257876',
    glass: [6, 8],
    angle: [180],
    gapByGlass: { '6': [19, 21], '8': [23, 25] },
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Das 180°-Magnetpaar aus 67,5°-Profilen in Schwarz, passend zu schwarzen Beschlägen und Profilen.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830765482307, '250 cm': 52830765547843 },
      '8': { '200 cm': 52830765515075, '250 cm': 52830765580611 }
    }
  },
  {
    id: '6052/6062-B-135',
    name: 'Magnetdichtung 135° für Fünfeckduschen (2x 67,5°), schwarz',
    artNr: '6052/6062-B',
    handle: 'schwarze-tur-magnetdichtung-135-1-paar-einer-funfeckdusche-fur-6-und-8-mm-universal-art-nr-6052-6062-b',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/D4500A32-B9E6-4464-B244-6D06F8E9392E.png?v=1742636552',
    glass: [6, 8],
    angle: [135],
    // Shop: Luecke ca. 10 / 13 mm (19/24 ist das Aussenmass Glas-Glas)
    gapByGlass: { '6': [10, 10], '8': [13, 13] },
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Das 135°-Magnetpaar für Fünfeckduschen in Schwarz, passend zu schwarzen Beschlägen und Profilen.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830765220163, '250 cm': 52830765285699 },
      '8': { '200 cm': 52830765252931, '250 cm': 52830765318467 }
    }
  },
  {
    id: '6092/6082-135',
    name: 'Magnetdichtung 135° (1x 45° + 1x 90°)',
    artNr: '6092/6082',
    handle: 'magnetdichtungspaar-135-1x90-1-x45-funfeckduschen',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6092-6082_3.png',
    glass: [6, 8],
    angle: [135],
    gapByGlass: { '6': [15, 20], '8': [18, 24] },
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Asymmetrische Kombination (45° + 90°) für Fünfeckduschen. Alternative zum symmetrischen 2x 67,5°-Paar.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 54165040464195, '250 cm': 54165040529731 },
      '8': { '200 cm': 54165040496963, '250 cm': 54165040562499 }
    }
  },
  {
    id: '8874',
    name: 'Flexible Magnetdichtung 90°–180°',
    artNr: '8874',
    handle: 'magnetleiste-fur-flexible-anpassung-an-samtliche-situationen-2-er-set-art-nr-8874',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/531C2DBC-1308-430F-8DCD-235C415B049B.png',
    glass: [6, 8],
    angle: [90, 135, 180],
    fallback: true,
    gapByGlass: { '6': [16, 31], '8': [18, 31] },
    priceFrom: 43.90,
    bestseller: false,
    desc: 'Universell einsetzbar: Stufenlos verstellbar von 90° bis 180°. Die Lösung wenn der Winkel unklar ist oder ein Sonderwinkel vorliegt.',
    lengths: ['200 cm', '250 cm'],
    variants: {
      '6': { '200 cm': 52830787764547, '250 cm': 52830787830083 },
      '8': { '200 cm': 52830787797315, '250 cm': 52830787862851 }
    }
  },
  {
    id: '6092-B',
    name: 'Schwarze Magnetdichtung 180° (6092-B)',
    artNr: '6092-B',
    handle: 'schwarze-tur-magnetdichtung-180-1-paar-fur-6-und-8-mm-universal-art-nr-6092-b',
    image: '',
    glass: [6, 8],
    angle: [180],
    gapByGlass: { '6': [18, 18], '8': [22, 22] },
    gapMin: 18,
    gapMax: 22,
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Schwarze 180°-Magnetdichtung, schmaler Streifen. Fluchtende Anordnung.',
    lengths: ['200 cm'],
    variants: {}
  },
  {
    id: '6072-6082-B',
    name: 'Schwarze Magnetdichtung 180° (2x 45°) (6072-B/6082-B)',
    artNr: '6072-B/6082-B',
    handle: 'schwarze-tur-magnetdichtung-180-anschlag-aus-2x-45-magnetdichtung-1-paar-fur-6-und-8-mm-universal-art-nr-6072-b-6082-b',
    image: '',
    glass: [6, 8],
    angle: [180],
    gapByGlass: { '6': [22, 22], '8': [26, 26] },
    gapMin: 22,
    gapMax: 26,
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Schwarze 180°-Magnetdichtung als 2x 45°-Anschlag. Für versetzte Anordnung.',
    lengths: ['200 cm'],
    variants: {}
  },
  {
    id: '6062-6072-112',
    name: 'Magnetdichtung 112° Sonderwinkel (6062/6072)',
    artNr: '6062/6072',
    handle: 'magnetdichtungspaar_112grad_sonderwinkel',
    image: '',
    // Shop: 6 und 8 mm Glas, Spaltmass ca. 9 / 13 mm (vorher standen die Spalt-Tags als
    // Glasdicken hier). 112 Grad ist im Wizard nicht waehlbar, der Eintrag bleibt, damit
    // das Produkt nicht als unannotiert in jeder Trefferliste erscheint.
    glass: [6, 8],
    angle: [112],
    gapByGlass: { '6': [9, 9], '8': [13, 13] },
    gapMin: 9,
    gapMax: 13,
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Sonderwinkel 112° asymmetrisch, für Fünfeckduschen mit nicht-Standard-Winkel. Für 6 und 8 mm Glas.',
    lengths: ['200 cm'],
    variants: {}
  },
  {
    id: '52091400',
    name: 'Magnetstreifendichtung selbstklebend 180°, Set aufschiebbar + anklebbar',
    artNr: '52091400',
    handle: 'magnetstreifendichtung-selbstklebend-180-set-aufschiebbar-und-anklebbar-fur-glas-wand-und-glas-glas-6-8-mm-glas-art-nr-52091400',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/52091400_magnetdichtung_selbstklebend.jpg',
    glass: [6, 8],
    angle: [180],
    gapByGlass: { '6': [11, 11], '8': [13, 13] },
    gapMin: 11,
    gapMax: 13,
    priceFrom: 39.90,
    bestseller: false,
    desc: 'Für Glas-Wand: Magnetdichtung zum Aufschieben plus selbstklebender Magnetstreifen als Gegenstück auf Wand, Profil oder Glas. 6 und 8 mm, 200 oder 225 cm.',
    lengths: ['200 cm', '225 cm'],
    variants: {
      '6': { '200 cm': 54833605181763, '225 cm': 54833605214531 },
      '8': { '200 cm': 54833605181763, '225 cm': 54833605214531 }
    }
  }
];

    // Handles, die vom Sync uebersprungen werden, Magnettraegerprofile
    // sind technisch keine Magnetdichtungen, sondern Aufnahme-Profile aus Aluminium.
    // Gehoeren in metallprofile-konfigurator, nicht in magnetdichtung-finder.
    const _syncSkip = [
        'magnettragerprofil-fur-nischensituation-zum-aufstecken-einer-magnetdichtung-art-nr-74-109',
        'magnettragerprofil-fur-nischensituation-zum-aufstecken-einer-duschturdichtung-art-nr-52-05-0300',
        // Magnetstreifen 6099 ist ein Einzelstreifen zum Aufkleben, kein Dichtungspaar mit
        // eigenem Spaltmass. Er wirkt nur mit einem Gegenstueck, das Spaltmass ergibt sich
        // aus der Kombination. Nicht geraten, deshalb ohne Annotation (25.09.2026).
        'magnetstreifendichtung-selbstklebend-6099-typ-a'
    ];

    function filterProducts(state, includeGap, list) {
        return (list || PRODUCTS).filter(function (p) {
            // Live-Produkte ohne Annotation (z.B. _syncSkip) haben weder Winkel noch
            // Glasdicke und rutschten sonst durch jeden Filter.
            if (!p.angle || !p.glass) return false;
            if (state.angle != null && p.angle && p.angle.indexOf(parseInt(state.angle)) === -1) return false;
            if (state.glass != null && p.glass && p.glass.indexOf(parseInt(state.glass)) === -1) return false;
            if (includeGap !== false && state.gap != null && p.gapMin != null && p.gapMax != null) {
                if (state.gap < p.gapMin || state.gap > p.gapMax) return false;
            }
            return true;
        });
    }

    global.MagnetdichtungData = {
        products: PRODUCTS,
        filterProducts: filterProducts
    };
})(window);