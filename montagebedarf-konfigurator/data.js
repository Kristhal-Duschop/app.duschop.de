/* MONTAGEBEDARF-FINDER — Daten v1 */
(function (global) {
    'use strict';

    const products = [
    // === BEFESTIGUNG (Duebel & Schrauben) ===
    {
        id: 'aqua-stop-pro',
        title: 'TOX Aqua Stop Pro \u2013 Abdichtender Allzweckd\u00fcbel',
        handle: 'allzweckdubel-mit-schraube-fur-dusche-u-bad-aqua-stop-pro',
        type: 'duebel',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'beides'],
        price: '0,79',
        priceMax: '19,99',
        desc: 'D\u00fcbel mit integrierter Dichtscheibe. Verhindert Wassereintritt ins Bohrloch \u2013 speziell f\u00fcr Nassbereich und Dusche.',
        isMain: true,
        highlight: true
    },
    {
        id: 'allzweckduebel',
        title: 'Allzweckd\u00fcbel f\u00fcr Dusche und Bad \u2013 6x36, 6x51, 8x51 mm',
        handle: 'allzweckdubel-fur-dusche-u-bad-6x36-6x51-oder-8x51-mm',
        type: 'duebel',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'beides'],
        price: '7,95',
        priceMax: '11,65',
        desc: 'Standard-Allzweckd\u00fcbel in verschiedenen Gr\u00f6\u00dfen. Zuverl\u00e4ssiger Halt in Beton, Vollstein und Lochstein.',
        isMain: false
    },
    {
        id: 'tox-tri',
        title: 'TOX Allzweckd\u00fcbel TRI f\u00fcr Dusche und Bad',
        handle: 'tox-allzweckduebel-tri',
        type: 'duebel',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'beides'],
        price: '0,15',
        priceMax: '11,65',
        desc: 'Dreifach-Spreizd\u00fcbel mit optimaler Verankerung in Voll- und Hohlbaustoffen. F\u00fcr leichte bis mittlere Befestigungen.',
        isMain: false
    },
    {
        id: 'blechschrauben',
        title: 'Blechschrauben A2 TX 3,9x16 mm inkl. Abdeckkappen',
        handle: 'schrauben-zum-verbinden-von-duschprofilen-aus-aluminium-art-nr-59881650',
        type: 'schrauben',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'beides'],
        price: '0,50',
        priceMax: '3,50',
        desc: 'Edelstahl-Schrauben (A2) mit Torx-Antrieb zum Befestigen von Duschprofilen. Inkl. Abdeckkappen f\u00fcr saubere Optik.',
        isMain: false
    },
    {
        id: 'unterlagen',
        title: 'Transparente Unterlagen f\u00fcr rahmenlose Glasduschen',
        handle: 'transparente-unterlagen-fur-rahmenlose-glasduschen',
        type: 'zubehoer-montage',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '0,25',
        priceMax: '39,00',
        desc: 'Distanzunterlagen aus transparentem Kunststoff (6\u00d751 mm). Gleichen Unebenheiten aus und sch\u00fctzen Glas vor direktem Metallkontakt.',
        isMain: false
    },
    {
        id: 'trenneinlagen',
        title: 'Trenneinlagen transparent 30x50 mm',
        handle: 'einlagen-zur-trennung-von-glas-und-metall',
        type: 'zubehoer-montage',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '0,75',
        priceMax: '0,95',
        desc: 'Trenneinlagen verhindern direkten Kontakt zwischen Glas und Metall. Wichtig f\u00fcr spannungsfreie Montage und Glasschutz.',
        isMain: false
    },

    // === KLEBER & KLEBEBAND ===
    {
        id: 'ms80',
        title: 'Zettex MS 80 Strongbond \u2013 Premium MS-Polymer Kleber',
        handle: 'zettex-ms-polymerkleber-strongbond-ms-80-maximale-klebkraft-fur-hoch-beanspruchte-flachen',
        type: 'kleber',
        vorhaben: ['glasdusche'],
        befestigung: ['kleben', 'beides'],
        price: '14,90',
        desc: 'Maximale Klebkraft f\u00fcr hochbeanspruchte Fl\u00e4chen. Haftet auf Glas, Metall, Fliesen, Holz und Kunststoff. \u00dcberstreichbar, silikonfrei.',
        isMain: true,
        highlight: true
    },
    {
        id: 'ms70',
        title: 'Zettex MS 70 High Tack \u2013 MS-Polymer Kleber',
        handle: 'zettex-ms-70',
        type: 'kleber',
        vorhaben: ['glasdusche'],
        befestigung: ['kleben', 'beides'],
        price: '12,90',
        desc: 'Sofortige Anfangshaftung \u2013 ideal wenn Fixierung ohne Hilfsmittel n\u00f6tig ist. Universeller MS-Polymer Montage-Kleber.',
        isMain: false
    },
    {
        id: 'ms60',
        title: 'Zettex MS 60 Polymer \u2013 Professioneller Universalkleber',
        handle: 'zettex-ms-polymerkleber-ms-60-der-flexible-universalkleber',
        type: 'kleber',
        vorhaben: ['glasdusche'],
        befestigung: ['kleben', 'beides'],
        price: '10,90',
        desc: 'Flexibler Universalkleber mit guter Haftung auf vielen Untergr\u00fcnden. Ideal f\u00fcr dauerelastische Verklebungen.',
        isMain: false
    },
    {
        id: 'klebeband',
        title: 'Acrylat Hochleistungs-Klebeband transparent doppelseitig',
        handle: 'acrylat-hochleistungsklebeband-transparent-doppelseitig-klebend-art-nr-2800',
        type: 'kleber',
        vorhaben: ['glasdusche'],
        befestigung: ['kleben', 'beides'],
        price: '14,90',
        desc: 'Doppelseitiges Acrylat-Klebeband f\u00fcr dauerhafte Verklebungen. Transparent und extrem haltbar \u2013 auch auf glatten Oberfl\u00e4chen.',
        isMain: false
    },

    // === SILIKON ===
    {
        id: 'otto-s100',
        title: 'OTTO S100 Premium Sanit\u00e4r-Silikon 300 ml transparent',
        handle: 'sanitaer-silikon-otto-s100-premium-qualitat-300-ml',
        type: 'silikon',
        vorhaben: ['glasdusche', 'duschwanne', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '10,90',
        desc: 'Premium Sanit\u00e4r-Silikon mit Fungizid-Ausr\u00fcstung gegen Schimmel. Pilzhemmend, hochelastisch, essigs\u00e4urefrei. Der Profi-Standard.',
        isMain: true,
        highlight: true
    },
    {
        id: 'fertigfuge',
        title: 'ee-zee Fertigfuge \u2013 Perfekte Silikonfuge ohne Werkzeug',
        handle: 'fertigfuge_silikonfuge',
        type: 'silikon',
        vorhaben: ['duschwanne', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '19,90',
        priceMax: '69,90',
        desc: 'Selbstklebendes Fugenband als Silikonersatz. Saubere, gleichm\u00e4\u00dfige Fuge ohne Kartuschenpistole \u2013 einfach aufkleben, fertig.',
        isMain: false
    },
    {
        id: 'silikonspray',
        title: 'Silikonspray farblos',
        handle: 'care-silikonspray',
        type: 'silikon',
        vorhaben: ['glasdusche', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '9,50',
        desc: 'Schmiert, sch\u00fctzt und pflegt Gummidichtungen, Scharniere und Laufschienen. H\u00e4lt Dusch-Beschl\u00e4ge g\u00e4ngig.',
        isMain: false
    },

    // === FUGENPROFILE ===
    {
        id: 'fugenprofil',
        title: 'Fugenabdeckprofil PVC Wei\u00df BP/25 \u2013 Duschwanne zu Wand',
        handle: 'fugenabdeckprofil-pvc-weiss-bp25-ubergang-duschwanne-zu-fliesenwand',
        type: 'fugenprofil',
        vorhaben: ['duschwanne', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '8,90',
        priceMax: '21,90',
        desc: 'Flexibles PVC-Profil zum Abdecken der Fuge zwischen Duschwanne und Fliesenwand. Verhindert Wassereintritt und sieht sauber aus.',
        isMain: false
    },
    {
        id: 'fugenprofil-zubehoer',
        title: 'Zubeh\u00f6r-Set f\u00fcr Fugenabdeckprofil BPT/25',
        handle: 'zubehor-set-fur-fugenabdeckprofil-bpt-25-innenecke-endkappen-weiss',
        type: 'fugenprofil',
        vorhaben: ['duschwanne', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '7,90',
        desc: 'Innenecke und Endkappen in Wei\u00df f\u00fcr das Fugenabdeckprofil BPT/25. F\u00fcr einen sauberen Abschluss an Ecken und Enden.',
        isMain: false
    },

    // === ABDICHTUNG (Mapei Nassbereich unter Fliesen) ===
    {
        id: 'mapei-abdichtungsbahn',
        title: 'Mapei Mapeguard WP 200 \u2013 Abdichtungsbahn f\u00fcr Dusche & Bad',
        handle: 'mapei_abdichtungsbahn',
        type: 'abdichtung',
        vorhaben: ['nassbereich'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '39,90',
        priceMax: '349,00',
        desc: 'Hochflexible Verbund-Abdichtungsbahn f\u00fcr Wand und Boden. DIN 18534 konform. Direkt unter Fliesen verlegbar \u2013 ohne Trocknungszeit.',
        isMain: true,
        highlight: true
    },
    {
        id: 'mapei-dichtband',
        title: 'Mapei Mapeguard ST \u2013 Dichtband f\u00fcr Ecken & Fugen',
        handle: 'mapei_dichtband_dusche',
        type: 'abdichtung',
        vorhaben: ['nassbereich'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '5,90',
        priceMax: '54,90',
        desc: 'Elastisches Dichtband zum Abdichten von Boden-Wand-Anschl\u00fcssen und Bewegungsfugen. Wasserdicht nach DIN 18534.',
        isMain: true
    },
    {
        id: 'mapei-dichtecke-innen',
        title: 'Mapei Dichtecke Innen \u2013 12x12 cm, 90\u00b0',
        handle: 'mapeguard-ic-dichtecke-innen',
        type: 'abdichtung',
        vorhaben: ['nassbereich'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '6,90',
        desc: 'Vorgefertigte Dichtecke f\u00fcr 90\u00b0-Innenecken. Passt sich flexibel an und gew\u00e4hrleistet wasserdichte Eckabdichtung.',
        isMain: false
    },
    {
        id: 'mapei-dichtecke-aussen',
        title: 'Mapei Mapeguard EC \u2013 Dichtecke Au\u00dfen 270\u00b0',
        handle: 'mapeguard-ec-dichtecke-aussen-art-nr-2853025',
        type: 'abdichtung',
        vorhaben: ['nassbereich'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '6,90',
        desc: 'Vorgefertigte Dichtecke f\u00fcr Au\u00dfenecken. Einfach einbauen f\u00fcr l\u00fcckenlose Abdichtung an vorspringenden Ecken.',
        isMain: false
    },
    {
        id: 'mapei-manschette',
        title: 'Mapei Mapeguard PC \u2013 Dichtmanschette Rohr 15\u201338 mm',
        handle: 'mapeguard-pc',
        type: 'abdichtung',
        vorhaben: ['nassbereich'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '6,95',
        desc: 'Rohrdurchf\u00fchrungsmanschette f\u00fcr Leitungen mit 15\u201338 mm Durchmesser. Abdichtung an Rohrdurchf\u00fchrungen in Wand und Boden.',
        isMain: false
    },
    {
        id: 'mapeflex',
        title: 'Mapei Mapeflex MS45 \u2013 Hybrid-Dichtstoff f\u00fcr Dusche & Bad',
        handle: 'mapeflex-ms45-ms-dicht-und-klebstoff',
        type: 'abdichtung',
        vorhaben: ['nassbereich'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '11,50',
        desc: 'MS-Polymer Dicht- und Klebstoff. Dauerhaft elastisch, schimmelhemmend, \u00fcberstreichbar. Zum Verkleben der Abdichtungsbahn.',
        isMain: false
    },

    // === WANNENDICHTBAND ===
    {
        id: 'densaband-basis',
        title: 'DENSABAND BASIS \u2013 Wannendichtband DIN 18534',
        handle: 'densaband_basis',
        type: 'wannendichtband',
        vorhaben: ['duschwanne'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '49,90',
        priceMax: '59,90',
        desc: 'Selbstklebendes Dichtband f\u00fcr Wannenrand-Abdichtung. DIN 18534 konform \u2013 einfach auf den Wannenrand kleben und verfliesen.',
        isMain: true,
        highlight: true
    },
    {
        id: 'densaband-schallschutz',
        title: 'DENSABAND SCHALLSCHUTZ \u2013 Wannendichtband DIN 18534 + DIN 4109',
        handle: 'densaband_schallschutz-dichtband',
        type: 'wannendichtband',
        vorhaben: ['duschwanne'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '98,90',
        desc: 'Premium-Wannendichtband mit zus\u00e4tzlichem Schallschutz nach DIN 4109. Verhindert K\u00f6rperschall\u00fcbertragung in angrenzende R\u00e4ume.',
        isMain: true
    },
    {
        id: 'densaband-bohrlochset',
        title: 'DENSABAND Bohrlochset \u2013 Wasserdicht nach DIN 18534',
        handle: 'densaband-bohrlochset',
        type: 'abdichtung',
        vorhaben: ['glasdusche', 'nassbereich'],
        befestigung: ['bohren', 'beides'],
        price: '19,95',
        desc: 'Abdichtungsset f\u00fcr Bohrl\u00f6cher im Nassbereich. Dichtmanschetten + Kleber f\u00fcr wasserdichte Befestigungspunkte nach DIN 18534.',
        isMain: true
    },

    // === WERKZEUG & ZUBEHOER ===
    {
        id: 'buegelsaege',
        title: 'B\u00fcgels\u00e4ge 150 mm vernickelt',
        handle: 'handsage-vernickelt-fur-den-zuschnitt-von-duschdichtungsprofilen-art-nr-671146',
        type: 'werkzeug',
        vorhaben: ['glasdusche', 'duschwanne', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '2,90',
        desc: 'Kleine Hands\u00e4ge zum pr\u00e4zisen Zuschneiden von Dichtungsprofilen, Fugenabdeckprofilen und Kunststoffleisten.',
        isMain: false
    },
    {
        id: 'cutter',
        title: 'UNIVERSAL-CUTTER mit 18 mm Abbrechklinge',
        handle: 'cuttermesser-fur-den-zuschnitt-von-duschdichtungsprofilen-art-nr-745118',
        type: 'werkzeug',
        vorhaben: ['glasdusche', 'duschwanne', 'nassbereich', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '2,90',
        desc: 'Robustes Cuttermesser f\u00fcr saubere Schnitte in Dichtungsprofilen, Abdichtungsbahnen und Silikon.',
        isMain: false
    },
    {
        id: 'klotzhebel',
        title: 'Klotzhebel aus Holz',
        handle: 'unbenannt-28-mai_21-47',
        type: 'werkzeug',
        vorhaben: ['glasdusche'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '5,90',
        desc: 'Praktischer Holz-Klotzhebel zum Anheben und Positionieren von schweren Glasscheiben bei der Montage.',
        isMain: false
    },
    {
        id: 'handschuhe',
        title: 'Arbeitshandschuh Flex Fit \u2013 Nylonfeinstrick',
        handle: 'arbeitshandschuh-fur-montagen-transport-u-handwerkliche-tatigkeiten-typ-flex-fit-nylonfeinstrick-grau-schwarz-abriebfest-und-vielseitig-einsetzbar-art-nr-00690010x',
        type: 'werkzeug',
        vorhaben: ['glasdusche', 'duschwanne', 'nassbereich', 'fugen'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '4,90',
        desc: 'Griffige Montagehandschuhe aus Nylonfeinstrick. Sch\u00fctzen die H\u00e4nde beim Arbeiten mit Glas, Metall und scharfkantigen Profilen.',
        isMain: false
    }
];

    const productImages = {
    'allzweckdubel-mit-schraube-fur-dusche-u-bad-aqua-stop-pro': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Duebelschraube.png?v=1768235881',
    'allzweckdubel-fur-dusche-u-bad-6x36-6x51-oder-8x51-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/PT1_Tri.jpg?v=1746179320',
    'tox-allzweckduebel-tri': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0101000XX.1.jpg?v=1775896654',
    'schrauben-zum-verbinden-von-duschprofilen-aus-aluminium-art-nr-59881650': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Marketing_240.jpg?v=1757693678',
    'transparente-unterlagen-fur-rahmenlose-glasduschen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/FullSizeRender_8afe7acc-8818-46bf-ad58-e05d0f0569b9.jpg?v=1757793855',
    'einlagen-zur-trennung-von-glas-und-metall': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/FullSizeRender_1bdf4675-c497-4c4f-bbb7-d95a4abe05fc.jpg?v=1766952891',
    'zettex-ms-polymerkleber-strongbond-ms-80-maximale-klebkraft-fur-hoch-beanspruchte-flachen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/MS80_2.jpg?v=1770917009',
    'zettex-ms-70': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/MS70.png?v=1770916801',
    'zettex-ms-polymerkleber-ms-60-der-flexible-universalkleber': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/MS60_1.jpg?v=1758175014',
    'acrylat-hochleistungsklebeband-transparent-doppelseitig-klebend-art-nr-2800': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Hochleistungsklebeband.jpg?v=1748959089',
    'sanitaer-silikon-otto-s100-premium-qualitat-300-ml': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/S100.png?v=1770918900',
    'fertigfuge_silikonfuge': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/ee_zee_2.jpg?v=1772132626',
    'care-silikonspray': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Silikonspray.jpg?v=1753604050',
    'fugenabdeckprofil-pvc-weiss-bp25-ubergang-duschwanne-zu-fliesenwand': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Fugenprofil_PP_9_efe00c7a-6557-4d14-abdc-295a5d614b95.png?v=1773215506',
    'zubehor-set-fur-fugenabdeckprofil-bpt-25-innenecke-endkappen-weiss': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BPT25_7b86427c-99e0-4663-acb2-886450f4550e.png?v=1776160821',
    'mapei_abdichtungsbahn': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Abdichtung_unter_Fliese_1.png?v=1767877044',
    'mapei_dichtband_dusche': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Abdichtung_unter_Fliese_9.png?v=1767877096',
    'mapeguard-ic-dichtecke-innen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Abdichtung_unter_Fliese_6.png?v=1767877140',
    'mapeguard-ec-dichtecke-aussen-art-nr-2853025': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Abdichtung_unter_Fliese_2.png?v=1767877178',
    'mapeguard-pc': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Manschette_1.png?v=1767878275',
    'mapeflex-ms45-ms-dicht-und-klebstoff': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Polymerkleber.png?v=1767878721',
    'densaband_basis': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Densaband_Basic3_18d751b6-32ec-444a-9543-98ba098c5d79.jpg?v=1770049307',
    'densaband_schallschutz-dichtband': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Densaband_Schallschutz_3.jpg?v=1770048794',
    'densaband-bohrlochset': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Bohrlochset1.jpg?v=1746171064',
    'handsage-vernickelt-fur-den-zuschnitt-von-duschdichtungsprofilen-art-nr-671146': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Saege_e338ee08-400f-4e58-b378-200566d23095.jpg?v=1744804681',
    'cuttermesser-fur-den-zuschnitt-von-duschdichtungsprofilen-art-nr-745118': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Cuttermesser9mm.jpg?v=1744804760',
    'unbenannt-28-mai_21-47': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/FullSizeRender_5ee63f2c-6557-4cbf-b88c-2db05616f616.jpg?v=1748464730',
    'arbeitshandschuh-fur-montagen-transport-u-handwerkliche-tatigkeiten-typ-flex-fit-nylonfeinstrick-grau-schwarz-abriebfest-und-vielseitig-einsetzbar-art-nr-00690010x': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/HandschuheTox.jpg?v=1749129735'
};

    function filterProducts(state, list) {
        return (list || products).filter(function (p) {
            if (state.vorhaben && (!p.vorhaben || p.vorhaben.indexOf(state.vorhaben) === -1)) return false;
            if (state.befestigung && (!p.befestigung || p.befestigung.indexOf(state.befestigung) === -1)) return false;
            return true;
        });
    }

    global.MontageData = {
        products: products,
        productImages: productImages,
        filterProducts: filterProducts
    };
})(window);