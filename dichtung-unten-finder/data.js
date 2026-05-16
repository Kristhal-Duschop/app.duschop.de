/* DICHTUNG-UNTEN-FINDER — Daten v1 */
(function (global) {
    'use strict';

    const PRODUCTS = [
  {
    id: '424',
    name: 'Schleiflippendichtung mit Wasserabweiser für 5 u. 6 mm',
    artNr: '424',
    handle: 'neu-schleiflippendichtung-fur-duschtur-mit-wasserabweiser-u-schleiflippe-unten-fur-5-u-6-mm-glas',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/1402_1.jpg?v=1751992503',
    glass: [5, 6],
    gapMin: 10, gapMax: 13,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 15.90,
    bestseller: false,
    desc: 'Speziell für dünnes 5 mm und 6 mm Glas entwickelt. Mit Wasserabweiser und Schleiflippe für zuverlässige Abdichtung.',
    lengths: ['100 cm'],
    variants: {
      '5': { '100 cm': 53613129597251 },
      '6': { '100 cm': 53418232578371 }
    }
  },
  {
    id: '5102',
    name: 'Schleiflippendichtung mit Abtropfleiste',
    artNr: '5102',
    handle: 'schleiflippendichtung-fur-duschtur-mit-abtropfleiste-u-schleiflippe-unten',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/3EE7C201-ABAF-4351-AEDA-EE783C16D06F.png?v=1772736005',
    glass: [6, 8, 10],
    gapMin: 11, gapMax: 14,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 9.90,
    bestseller: true,
    desc: 'Unser Bestseller: Universelle Bodendichtung mit flexibler Schleiflippe und integrierter Abtropfleiste. Perfekt für Standard-Duschen.',
    lengths: ['49 cm', '65 cm', '75 cm', '100 cm', '120 cm', '200 cm'],
    variants: {
      '6': { '49 cm': 52830813028675, '65 cm': 52830812963139, '75 cm': 52830812897603, '100 cm': 52830812799299, '120 cm': 53792631619907, '200 cm': 52830813094211 },
      '8': { '49 cm': 52830813061443, '65 cm': 52830812995907, '75 cm': 52830812930371, '100 cm': 52830812832067, '120 cm': 53792631652675, '200 cm': 52830813126979 },
      '10': { '100 cm': 52830812864835, '200 cm': 52830813159747 }
    }
  },
  {
    id: '5141',
    name: 'Schleifdichtung mit Schlauch und Abtropfleiste',
    artNr: '5141',
    handle: 'schleifdichtung-unten-fur-duschtur-mit-schlauch-und-abtropfleiste',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/C34DE836-C4AE-47CF-B3FF-0E54659AD3D2.png?v=1772735996',
    glass: [6, 8],
    gapMin: 12, gapMax: 15,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 11.90,
    bestseller: true,
    desc: 'Premium-Dichtung mit Schlauchprofil für besonders gute Abdichtung am Boden. Der Schlauch passt sich Unebenheiten an.',
    lengths: ['49 cm', '65 cm', '75 cm', '100 cm', '200 cm'],
    variants: {
      '6': { '49 cm': 52830812668227, '65 cm': 52830812602691, '75 cm': 52830812537155, '100 cm': 52830812471619, '200 cm': 52830812733763 },
      '8': { '49 cm': 52830812700995, '65 cm': 52830812635459, '75 cm': 52830812569923, '100 cm': 52830812504387, '200 cm': 52830812766531 }
    }
  },
  {
    id: '1402',
    name: 'Schleiflippendichtung mit kurzer Lippe',
    artNr: '1402',
    handle: 'neu-schleiflippendichtung-fur-duschtur-mit-kurzer-unterer-schleiflippe-u-mit-abtropfleiste-fur-6-und-8-mm-art-nr-1402',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-4800.jpg?v=1755708261',
    glass: [6, 8],
    gapMin: 7, gapMax: 11,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 15.90,
    bestseller: true,
    desc: 'Kurze Dichtlippe für kleine bis mittlere Spalte (7–11 mm). Ideal wenn wenig Platz zwischen Glas und Boden ist.',
    lengths: ['100 cm'],
    variants: {
      '6': { '100 cm': 53418115563843 },
      '8': { '100 cm': 53418115596611 }
    }
  },
  {
    id: '009B1',
    name: 'Duschdichtung mit doppelter Dichtlippe & Wasserabweiser',
    artNr: '009B1',
    handle: 'duschdichtung-mit-doppelten-dichtgummi-unten-art-nr-009b1',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/28C5F6C7-C162-40F2-8E6D-4AE50AFDF16D.png?v=1742636936',
    glass: [6, 8],
    gapMin: 6, gapMax: 9,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 11.90,
    bestseller: false,
    desc: 'Doppelte Dichtlippe für zuverlässige Abdichtung bei kleinen Spalten. Integrierter Wasserabweiser schützt zusätzlich.',
    lengths: ['65 cm', '100 cm'],
    variants: {
      '6': { '65 cm': 52830793761091, '100 cm': 52830793793859 },
      '8': { '65 cm': 52830793826627, '100 cm': 52830793859395 }
    }
  },
  {
    id: '009A2',
    name: 'Schleiflippendichtung mit Wasserabweiser',
    artNr: '009A2',
    handle: 'schleiflippendichtung-mit-wasserabweiser-u-schleiflippe-unten-art-nr-009a2',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8118.png?v=1766945491',
    glass: [6, 8],
    gapMin: 12, gapMax: 24,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 10.90,
    bestseller: false,
    desc: 'Vielseitige Dichtung mit Wasserabweiser – in 3 Lippenlängen (12, 17, 23 mm) bestellbar, passend für viele Spaltmaße.',
    lengths: ['65 cm', '100 cm', '200 cm'],
    variants: {
      '6': { '65 cm': 52830797857091, '100 cm': 52830797889859, '200 cm': 52830797922627 },
      '8': { '65 cm': 52830798086467, '100 cm': 52830798119235, '200 cm': 52830798152003 }
    }
  },
  {
    id: '5101',
    name: 'Streiflippendichtung mit verstärkter Lippe',
    artNr: '5101',
    handle: 'streiflippendichtung-mit-abtropfleiste-und-verstarkung-unten-fur-6-und-8-mm-universal-art-nr-5101',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5EDB6458-1C45-4D76-B0B8-A96875193985.png?v=1755709213',
    glass: [6, 8],
    gapMin: 14, gapMax: 17,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 9.30,
    bestseller: false,
    desc: 'Verstärkte Dichtlippe für zuverlässigen Halt auch bei mittleren bis größeren Spalten. Gutes Preis-Leistungs-Verhältnis.',
    lengths: ['65 cm', '100 cm', '200 cm'],
    variants: {
      '6': { '65 cm': 52830793892163, '100 cm': 52830793957699, '200 cm': 52830794023235 },
      '8': { '65 cm': 52830793924931, '100 cm': 52830793990467, '200 cm': 52830794056003 }
    }
  },
  {
    id: '5104',
    name: 'Duschdichtung mit kürzbarer 20 mm Lippe',
    artNr: '5104',
    handle: 'duschdichtlippe-mit-20-mm-lippe-fur-6-und-8-mm-universal-art-nr-5104',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8120.png?v=1766946871',
    glass: [6, 8],
    gapMin: 18, gapMax: 22,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 15.90,
    bestseller: false,
    desc: 'Lange Dichtlippe (20 mm), individuell kürzbar. Für größere Spalte – einfach auf das gewünschte Maß zuschneiden.',
    lengths: ['100 cm', '200 cm'],
    variants: {
      '6': { '100 cm': 52830797627715, '200 cm': 52830797660483 },
      '8': { '100 cm': 52830797693251, '200 cm': 52830797726019 }
    }
  },
  {
    id: '5160',
    name: 'Bodendichtung mit anpassbarer 30 mm Lippe',
    artNr: '5160',
    handle: 'universaldichtung-mit-anpassbarer-langer-lippe-und-abtropfleiste-fur-6-und-8-mm-universal-art-nr-5160',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/EB24EE0F-784C-4F3B-AEF8-8F574F13EDD4.png?v=1772735898',
    glass: [6, 8],
    gapMin: 19, gapMax: 30,
    form: 'gerade',
    doorType: ['dreh'],
    priceFrom: 15.90,
    bestseller: false,
    desc: 'Extra lange 30 mm Dichtlippe für sehr große Spalte. Individuell kürzbar – die Lösung wenn nichts anderes passt.',
    lengths: ['100 cm', '200 cm'],
    variants: {
      '6': { '100 cm': 52830735139139, '200 cm': 52830735171907 },
      '8': { '100 cm': 52830735204675, '200 cm': 52830735237443 }
    }
  },
  {
    id: '009D1',
    name: 'Schiebetürdichtung mit 22 mm Dächlein',
    artNr: '009D1',
    handle: 'schiebeturdichtung-waagrecht-mit-ca-22-mm-dachlein-art-nr-009d1',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8122.png?v=1766947842',
    glass: [6, 8],
    gapMin: 2, gapMax: 7,
    form: 'gerade',
    doorType: ['schiebe'],
    priceFrom: 16.90,
    bestseller: true,
    desc: 'Speziell für Schiebetüren: Das 22 mm Dächlein leitet Wasser zuverlässig ab und verhindert Spritzwasser nach außen.',
    lengths: ['100 cm', '200 cm'],
    variants: {
      '6': { '100 cm': 52830798381379, '200 cm': 52830798414147 },
      '8': { '100 cm': 52830798446915, '200 cm': 52830798479683 }
    }
  },
  {
    id: '5329',
    name: 'Schiebetürdichtung mit 25 mm Dächlein',
    artNr: '5329',
    handle: 'duschturdichtung-mit-ca-25-mm-dachlein-als-abtropfleiste-fur-6-und-8-mm-universal-art-nr-5329',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5329_2.jpg?v=1772736108',
    glass: [6, 8],
    gapMin: 2, gapMax: 5,
    form: 'gerade',
    doorType: ['schiebe'],
    priceFrom: 15.90,
    bestseller: false,
    desc: 'Große 25 mm Abtropfleiste als Dächlein – schützt effektiv vor Wasseraustritt bei Schiebetüren.',
    lengths: ['100 cm', '200 cm'],
    variants: {
      '6': { '100 cm': 52830792253763, '200 cm': 52830792319299 },
      '8': { '100 cm': 52830792286531, '200 cm': 52830792352067 }
    }
  },
  {
    id: '5325',
    name: 'Duschdichtung mit 25 mm Dächlein & Schleiflippe',
    artNr: '5325',
    handle: 'duschturdichtung-mit-ca-25-mm-dachlein-fur-6-und-8-mm-universal-art-nr-5325',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/C0A8E6C9-B086-4B4D-8218-D652028D0583.png?v=1742636893',
    glass: [6, 8],
    gapMin: 14, gapMax: 17,
    form: 'gerade',
    doorType: ['schiebe', 'dreh'],
    priceFrom: 16.90,
    bestseller: false,
    desc: 'Kombination: Dächlein-Abtropfleiste plus Schleiflippe für doppelten Schutz. Auch für Drehtüren mit größerem Spalt.',
    lengths: ['100 cm', '200 cm'],
    variants: {
      '6': { '100 cm': 52830792417603, '200 cm': 52830792483139 },
      '8': { '100 cm': 52830792450371, '200 cm': 52830792515907 }
    }
  },

  // =============================================
  // GEBOGENE DICHTUNGEN (Viertelkreis / Halbkreis)
  // =============================================
  {
    id: '5102.550',
    name: 'Gebogene Duschdichtung Viertelkreis & Halbkreis',
    artNr: '5102.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-und-halbkreisduschen-mit-dichtlippe-und-kurzer-abtropfleiste-fur-6-und-8-mm-glasdicke-art-nr-5102-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/51C3ED51-9A09-4B09-82FF-3565FEE34487.png',
    glass: [6, 8],
    gapMin: 11, gapMax: 14,
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 37.00,
    bestseller: true,
    desc: 'Vorgebogene Schleiflippendichtung mit Abtropfleiste – passgenau für Viertelkreis- und Halbkreisduschen.',
    lengths: ['ca. 126 cm (vorgebogen)'],
    variants: {
      '6': { 'ca. 126 cm (vorgebogen)': 52830790844739 },
      '8': { 'ca. 126 cm (vorgebogen)': 52830790877507 }
    }
  },
  {
    id: '5141.550',
    name: 'Gebogene Duschdichtung mit Schlauch | Viertelkreis',
    artNr: '5141.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-und-halbkreisduschen-mit-schlauch-und-kurzer-abtropfleiste-fur-6-und-8-mm-glasdicke-art-nr-5141-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5141_550_png.png',
    glass: [6, 8],
    gapMin: 13, gapMax: 16,
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 37.00,
    bestseller: false,
    desc: 'Vorgebogene Dichtung mit Schlauchprofil für Viertelkreisduschen. Das Schlauchprofil passt sich Unebenheiten an.',
    lengths: ['ca. 126 cm (vorgebogen)'],
    variants: {
      '6': { 'ca. 126 cm (vorgebogen)': 52830790648131 },
      '8': { 'ca. 126 cm (vorgebogen)': 52830790680899 }
    }
  },
  {
    id: '009A2.550',
    name: 'Gebogene Duschdichtung mit Wasserabweiser | 3 Lippen',
    artNr: '009A2.550',
    handle: 'gebogene-dusch-turdichtung-fur-viertelkreis-duschen-mit-dichtlippe-unten-inkl-wasserabweislippe-dichtung-009a2-550',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/5E86E727-034C-4875-9DE0-1F084325E3FC.png',
    glass: [6, 8],
    gapMin: 12, gapMax: 24,
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 30.50,
    bestseller: false,
    desc: 'Vielseitige vorgebogene Dichtung mit Wasserabweiser – in 3 Lippenlängen (12, 17, 23 mm) für verschiedene Spaltmaße.',
    lengths: ['ca. 110 cm (vorgebogen)'],
    variants: {
      '6': { 'ca. 110 cm (vorgebogen)': 52830788256067 },
      '8': { 'ca. 110 cm (vorgebogen)': 52830788354371 }
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
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 37.00,
    bestseller: false,
    desc: 'Vorgebogene Dichtung mit verstärkter Lippe für Viertelkreisduschen bei größeren Spalten (15–17 mm).',
    lengths: ['ca. 126 cm (vorgebogen)'],
    variants: {
      '6': { 'ca. 126 cm (vorgebogen)': 54122289267011 },
      '8': { 'ca. 126 cm (vorgebogen)': 54122289299779 }
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
    form: 'gebogen',
    doorType: ['schiebe', 'dreh'],
    priceFrom: 31.50,
    bestseller: false,
    desc: 'Vorgebogene Dichtung mit 20 mm Dächlein als Abtropfleiste – für Schiebe- und Drehtüren in Viertelkreisduschen.',
    lengths: ['ca. 110 cm (vorgebogen)'],
    variants: {
      '6': { 'ca. 110 cm (vorgebogen)': 52830792057155 },
      '8': { 'ca. 110 cm (vorgebogen)': 52830792089923 }
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
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 49.90,
    bestseller: false,
    desc: 'Abtropfleiste in Rinnenform mit doppelter Lippe (kurz & lang) – breiter Spaltbereich von 8 bis 15 mm abdeckbar.',
    lengths: ['98,5 cm (vorgebogen)'],
    variants: {
      '6': { '98,5 cm (vorgebogen)': 52830788190531 },
      '8': { '98,5 cm (vorgebogen)': 52830788223299 }
    }
  },
  {
    id: '4269-G86',
    name: 'Gebogene Dichtung Viertelkreis 5/6 mm kurze Lippe',
    artNr: '4269-G86',
    handle: 'dusch-turdichtung-gebogen-fur-viertelkreisdusche-fur-5-u-6-mm-glasstarke-mit-kurzer-abtropfleiste-und-kurzer-lippe-nach-unten-4269-g86',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/4269neu.jpg',
    glass: [4, 5],
    gapMin: 6, gapMax: 9,
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 45.90,
    bestseller: false,
    desc: 'Speziell für dünnes 4/5 mm Glas bei Viertelkreisduschen mit kleinem Spalt.',
    lengths: ['86 cm (vorgebogen)'],
    variants: {
      '4': { '86 cm (vorgebogen)': 52830762467651 },
      '5': { '86 cm (vorgebogen)': 52830762434883 }
    }
  },
  {
    id: '4269G',
    name: 'Gebogene Bodendichtung 2-flg. Viertelkreis 4/5 mm | 1 Paar',
    artNr: '4269G',
    handle: 'gebogene-dusch-turdichtung-fur-2-flg-viertelkreisduschen-mit-4-u-5-mm-glasdicke-mit-sehr-kurzer-abtropfleiste-1-paar-2-tlg-4269g',
    image: 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/E2268312-7733-4651-BADD-1140EB2283A2.png',
    glass: [4, 5],
    gapMin: 3, gapMax: 5,
    form: 'gebogen',
    doorType: ['dreh'],
    priceFrom: 59.10,
    bestseller: false,
    desc: '1 Paar (2 Stück) für zweiflügelige Viertelkreisduschen mit dünnem 4/5 mm Glas.',
    lengths: ['1 Paar (vorgebogen)'],
    variants: {
      '4': { '1 Paar (vorgebogen)': 52830788124995 },
      '5': { '1 Paar (vorgebogen)': 52830788092227 }
    }
  },
  // === Welle C: 11 Bodendichtungen ===
  { id: '835', name: 'Schleiflippendichtung 835', artNr: '835', handle: 'schleiflippendichtung-mit-abtropfleiste-fur-lucken-von-10-12-mm-art-nr-835', image: '', glass: [8], form: ['gerade'], doorType: ['dreh','schiebe'], gapMin: 10, gapMax: 12, priceFrom: 13.90, desc: 'Schleiflippe mit Abtropfleiste innen, für 8 mm Glas, Spalt 10–12 mm.' },
  { id: '5101-135', name: 'Gebogene Bodendichtung 5101.135 (Fünfeck 135°)', artNr: '5101.135', handle: 'gebogene-dusch-turdichtung-135-fur-funfeckduschen-art-nr-5101-135', image: '', glass: [8], form: ['gebogen'], doorType: ['dreh'], gapMin: 14, gapMax: 16, priceFrom: 33.50, desc: 'Gebogen 135° für Fünfeckduschen, verstärkte Lippe, Einzelstück oder Paar.' },
  { id: 'S009B1', name: 'Polycarbonat-Bodendichtung S009B1', artNr: 'S009B1', handle: 'duschdichtung-mit-doppelten-dichtgummi-unten-hochtransparent-glasklar-art-nr-s009b1', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 7, gapMax: 9, priceFrom: 12.30, desc: 'Polycarbonat hochtransparent, doppelte Lippe, Spalt 7–9 mm, in 65/100 cm.' },
  { id: '8879', name: 'Duschdichtung 8879 kurze Lippe', artNr: '8879', handle: 'dusch-turdichtung-mit-kurzer-abtropfleiste-und-kurzer-lippe-nach-unten-art-nr-8879', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 3, gapMax: 5, priceFrom: 14.90, desc: 'Kurze Abtropfleiste und kurze Lippe nach unten, Spalt ca. 4 mm.' },
  { id: '3249', name: 'Duschdichtung 3249 Rinnenform', artNr: '3249', handle: 'dusch-turdichtung-fur-6-u-8-mm-glas-mit-abtropfleiste-in-rinnenform-und-doppelter-lippe-nach-unten-kurz-u-lang-98-5-cm-fur-6-und-8-mm-universal-art-nr-3249', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 5, gapMax: 16, priceFrom: 49.90, desc: 'Abtropfleiste in Rinnenform mit doppelter Lippe nach unten, kurz und lang, 98,5 cm.' },
  { id: '956-914', name: 'Polycarbonat-Bodendichtung 956/914', artNr: '956/914', handle: 'duschdichtung-mit-doppelten-dichtgummi-unten-und-abtropfleiste-aus-hartem-kunststoff-art-nr-956-914', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 9, gapMax: 10, priceFrom: 15.90, desc: 'Doppelte Lippe mit Abtropfleiste aus hartem Kunststoff, Spalt 9–10 mm.' },
  { id: '009B3', name: 'Universaldichtung 009B3 (5 mm Raster)', artNr: '009B3', handle: 'universaldichtung-mit-anpassbarer-langer-lippe-5-mm-raster-und-abtropfleiste-oben-art-nr-009b3', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 19, gapMax: 25, priceFrom: 14.90, desc: 'Anpassbare lange Lippe im 5 mm Raster, Abtropfleiste oben, Spalt 19–25 mm.' },
  { id: '5102-135', name: 'Gebogene Bodendichtung 5102.135 (Fünfeck 135° Schleiflippe)', artNr: '5102.135', handle: 'gebogene-dusch-turdichtung-135-fur-funfeckduschen-art-nr-5102-135', image: '', glass: [8], form: ['gebogen'], doorType: ['dreh'], gapMin: 12, gapMax: 13, priceFrom: 33.50, desc: 'Gebogen 135° für Fünfeckduschen mit Schleiflippe, Einzelstück oder Paar.' },
  { id: '5141-B', name: 'Schwarze Schlauchdichtung 5141-B', artNr: '5141-B', handle: 'schwarze-dusch-turdichtung-mit-schlauch-und-abtropfleiste-fur-6-und-8-mm-universal-art-nr-5141-b', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 12, gapMax: 15, priceFrom: 16.90, desc: 'Schwarze Schlauchdichtung mit Abtropfleiste, Spalt 12–15 mm.' },
  { id: '5102-B', name: 'Schwarze Schleiflippendichtung 5102-B', artNr: '5102-B', handle: 'schwarze-dusch-turdichtung-mit-12-mm-lippe-nach-unten-und-kurzer-abtropfleiste-fur-6-und-8-mm-universal-art-nr-5102-b', image: '', glass: [6,8], form: ['gerade'], doorType: ['dreh'], gapMin: 11, gapMax: 14, priceFrom: 16.90, desc: 'Schwarz, 12 mm Lippe nach unten, kurze Abtropfleiste, Spalt 11–14 mm.' },
  { id: '5103-B', name: 'Schwarze Duschdichtung 5103-B lange Lippe', artNr: '5103-B', handle: 'schwarze-dusch-turdichtung-mit-langer-abtropfleiste-und-langer-dichtlippe-art-nr-5103-b', image: '', glass: [8], form: ['gerade'], doorType: ['dreh'], gapMin: 17, gapMax: 18, priceFrom: 16.90, desc: 'Schwarz, lange Abtropfleiste und lange Dichtlippe, Spalt 17–18 mm.' }

];

    function filterProducts(state, includeGap, list) {
        return (list || PRODUCTS).filter(function (p) {
            if (state.glass != null && p.glass && p.glass.indexOf(parseInt(state.glass)) === -1) return false;
            if (state.form && p.form && p.form.indexOf(state.form) === -1) return false;
            if (state.door && p.doorType && p.doorType.indexOf(state.door) === -1) return false;
            if (includeGap !== false && state.gap != null && p.gapMin != null && p.gapMax != null) {
                if (state.gap < p.gapMin || state.gap > p.gapMax) return false;
            }
            return true;
        });
    }

    global.DichtungUntenData = {
        products: PRODUCTS,
        filterProducts: filterProducts
    };
})(window);