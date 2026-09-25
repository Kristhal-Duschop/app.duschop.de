/* MONTAGEBEDARF-FINDER, Daten v1 */
(function (global) {
    'use strict';
    // Bewusst NICHT annotiert (12.08.2026): Schallschutzset Waschtisch
    // (schallschutzset-waschtisch-...) und Waschtisch-Befestigungssatz M10
    // (waschtisch-befestigungssatz-m10-...). Beide liegen in der Collection,
    // haben aber keinen Duschbezug. Die vier Vorhaben des Wizards heissen
    // Glasdusche, Duschwanne, Nassbereich und Fugen; ein Waschtisch passt
    // unter keines davon, ohne dass man es hinbiegt.


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

    // Mapei-Abdichtung (6 Eintraege) am 25.09.2026 entfernt: Sortiment seit 05.09.2026
    // pausiert, Produkte auf DRAFT (Wiki entscheidung-mapei-pausiert).

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
        id: 'wannenabdichtband-set-trwdb',
        title: 'Wannenabdichtband-Set 3,4 m – DIN 18534, Nass- und Trockenanbindung',
        handle: 'wannenabdichtband-set-3-4-m-din-18534-nass-und-trockenanbindung-art-nr-trwdb',
        type: 'wannendichtband',
        vorhaben: ['duschwanne'],
        befestigung: ['bohren', 'kleben', 'beides'],
        price: '49,90',
        desc: 'Komplettes Set für die Wannenanbindung nach DIN 18534: selbstklebendes Wannenabdichtband 80 mm plus Vliesstreifen, für Nass- und Trockenanbindung vor dem Verfliesen.',
        isMain: true
    },
    {
        id: 'densaband-bohrlochset',
        title: 'DENSABAND Bohrlochset \u2013 Wasserdicht nach DIN 18534',
        handle: 'densaband-bohrlochset',
        type: 'abdichtung',
        vorhaben: ['glasdusche'],
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
        vorhaben: ['glasdusche', 'duschwanne', 'fugen'],
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
    // === Welle C: Klebe-Sets + TOX-Sortimente ===
    { id: 'giese-gifix-88001', title: 'Giese Gifix Klebe-Set 88001', handle: 'giese-gifix-klebeset-88001', type: 'kleber', vorhaben: ['glasdusche'], befestigung: ['kleben', 'beides'], price: '9,90', desc: 'Klebe-Set für Wandbefestigung ohne Bohren. Speziell für leichte Bad-Accessoires.', isMain: false },
    { id: 'smedbo-icomposite-gluemix', title: 'Smedbo XTRA iComposite GlueMix Montagekleber', handle: 'smedbo-xtra-icomposite-gluemix-6000-10', type: 'kleber', vorhaben: ['glasdusche'], befestigung: ['kleben', 'beides'], price: '13,95', desc: 'Bohrerfreier Montagekleber von Smedbo. Für Bad-Accessoires aus der XTRA-Serie.', isMain: false },
    { id: 'smedbo-icomposite-icleaner', title: 'Smedbo XTRA iComposite iCleaner Reinigungstuch', handle: 'xtra-icomposite-icleaner-reinigungstuch-fur-die-klebemontage-art-nr-6000-11', type: 'zubehoer-montage', vorhaben: ['glasdusche'], befestigung: ['kleben', 'beides'], price: '3,10', desc: 'Reinigungstuch zur Vorbereitung der Klebefläche. Entfettet den Untergrund für sicheren Halt des Montageklebers.', isMain: false },
    // 11.08.2026: Eintrag 'smedbo-extra-iglue-ifast' (Art.Nr. 6000-14) entfernt, das Produkt ist
    // im Shop ARCHIVED und der Link lief auf 404. Kein Ersatz noetig: der Nachfolger
    // 'smedbo-xtra-icomposite-gluemix-6000-10' steht bereits als eigener Eintrag direkt darueber.
    { id: 'smedbo-xtra-adapter', title: 'Smedbo XTRA Adapter zum Kleben (2er-Set)', handle: 'smedbo-xtra-adapter-kleben', type: 'zubehoer-montage', vorhaben: ['glasdusche'], befestigung: ['kleben', 'beides'], price: '10,90', desc: 'Adapter-Set für Smedbo XTRA-Halter ohne Bohren. Chrom oder Schwarz.', isMain: false },
    { id: 'tox-duebel-sortiment', title: 'TOX Dübel-Sortiment L-Boxx Micro Allround 140-tlg.', handle: 'tox-duebel-sortiment-l-boxx-micro-allround', type: 'duebel', vorhaben: ['glasdusche'], befestigung: ['bohren', 'beides'], price: '17,90', desc: 'Allround-Dübelsortiment mit 140 Teilen in praktischer L-Boxx.', isMain: false },
    { id: 'tox-torx-schrauben', title: 'TOX Torx-Schrauben Sortiment L-Boxx 260 Stück', handle: 'tox-torx-schrauben-sortiment-l-boxx', type: 'schrauben', vorhaben: ['glasdusche'], befestigung: ['bohren', 'beides'], price: '31,50', desc: 'Torx-Schrauben in vier Längen, 260 Stück, sortiert in L-Boxx.', isMain: false },
    { id: 'tox-starter-set', title: 'TOX Starter Set Dübel-Sortiment 264-tlg.', handle: 'tox-starter-set-sortiment', type: 'duebel', vorhaben: ['glasdusche'], befestigung: ['bohren', 'beides'], price: '21,95', desc: 'Komplettes Starter-Set mit 264 Dübeln in verschiedenen Größen.', isMain: false },
    { id: 'tox-handschuh', title: 'TOX Arbeitshandschuh Flex Fit', handle: 'tox-arbeitshandschuh-flex-fit', type: 'zubehoer-montage', vorhaben: ['glasdusche'], befestigung: ['bohren', 'kleben', 'beides'], price: '4,50', desc: 'Nylonfeinstrick-Handschuh in S bis XL. Gutes Tastgefühl für feine Montagearbeiten.', isMain: false },
    { id: 'tox-meterstab', title: 'TOX Meterstab farbenfroh 2 m', handle: 'tox-meterstab-farbenfroh', type: 'zubehoer-montage', vorhaben: ['glasdusche'], befestigung: ['bohren', 'kleben', 'beides'], price: '6,95', desc: 'Klassischer 2 m-Meterstab mit Winkelmessfunktion. Farbenfroh.', isMain: false },
    { id: 'tox-bleistift', title: 'TOX Zimmermanns-Bleistift Neon 250 mm', handle: 'tox-zimmermanns-bleistift-neon', type: 'zubehoer-montage', vorhaben: ['glasdusche'], befestigung: ['bohren', 'kleben', 'beides'], price: '1,50', desc: 'Großer Zimmermanns-Bleistift in Neon, 250 mm, Härtegrad HB.', isMain: false },
    { id: 'tox-o-ring-box', title: 'TOX Basic Box O-Ring Sortiment 225-tlg.', handle: 'tox-basic-box-o-ring-sortiment', type: 'zubehoer-montage', vorhaben: ['glasdusche', 'duschwanne', 'fugen'], befestigung: ['bohren', 'kleben', 'beides'], price: '17,90', desc: 'O-Ring-Sortiment mit 225 Teilen in 18 verschiedenen Größen.', isMain: false },
    { id: 'tox-camping-set', title: 'TOX Mini Camping-Set L-BOXX', handle: 'tox-mini-camping-set-l-boxx', type: 'zubehoer-montage', vorhaben: ['glasdusche'], befestigung: ['bohren', 'beides'], price: '36,90', desc: 'Zeltsicherung mit Schraubheringen in L-BOXX. Off-Topic, aber im TOX-Sortiment.', isMain: false }
,
    { id: 'veribor-saugheber-2kopf', title: 'Veribor Saugheber 2-Kopf für Glasscheiben, 50 kg Tragkraft', handle: 'veribor-saugheber-2-kopf-fur-glasscheiben-50-kg-tragkraft-kipphebel-art-nr-bo602-1g', type: 'werkzeug', vorhaben: ['glasdusche'], befestigung: ['bohren', 'kleben', 'beides'], price: '64,90', desc: 'Vakuum-Saugheber mit zwei Saugtellern zum sicheren Tragen und millimetergenauen Einsetzen von Glasscheiben. 50 kg Tragkraft.', isMain: false }
,

// Nachgetragen 12.08.2026: lagen in der Shop-Collection, hatten aber keine
// Annotation und waren damit ueber den Wizard nicht erreichbar.
    { id: 'montage-kleber-129941', title: 'Montage-Kleber für Duschkörbe und Bad-Accessoires', handle: 'montage-kleber-129941', type: 'kleber', vorhaben: ['glasdusche'], befestigung: ['kleben','beides'], price: '6,90', desc: 'Kleber für die bohrfreie Montage von Duschkörben und Accessoires mit Klebe-Wandadapter.' },
    { id: 'ersatzpads-3m', title: 'Selbstklebende Ersatzpads 3M, 2 Stück', handle: 'selbstklebende-ersatzpads-3m-2-stuck-art-nr-698', type: 'kleber', vorhaben: ['glasdusche'], befestigung: ['kleben','beides'], price: '9,20', desc: 'Ersatzpads für selbstklebende Haken und Halter, wenn das Original-Pad seine Kraft verloren hat.' },
    { id: 'metallkleber-hochfest', title: 'Metallkleber hochfest, 50 ml', handle: 'metallkleber-hochfest-50-ml-zum-einkleben-von-rohrverbindern-und-gewinden-art-nr-19-1330-000-00', type: 'kleber', vorhaben: ['glasdusche'], befestigung: ['kleben','beides'], price: '24,70', desc: 'Anaerober Kleber zum Einkleben von Rohrverbindern in Stabistangen und zum Sichern von Gewinden.' }
,];

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
    'densaband_basis': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Densaband_Basic3_18d751b6-32ec-444a-9543-98ba098c5d79.jpg?v=1770049307',
    'densaband_schallschutz-dichtband': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Densaband_Schallschutz_3.jpg?v=1770048794',
    'densaband-bohrlochset': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Bohrlochset1.jpg?v=1746171064',
    'handsage-vernickelt-fur-den-zuschnitt-von-duschdichtungsprofilen-art-nr-671146': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Saege_e338ee08-400f-4e58-b378-200566d23095.jpg?v=1744804681',
    'cuttermesser-fur-den-zuschnitt-von-duschdichtungsprofilen-art-nr-745118': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Cuttermesser9mm.jpg?v=1744804760',
    'unbenannt-28-mai_21-47': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/FullSizeRender_5ee63f2c-6557-4cbf-b88c-2db05616f616.jpg?v=1748464730',
    'arbeitshandschuh-fur-montagen-transport-u-handwerkliche-tatigkeiten-typ-flex-fit-nylonfeinstrick-grau-schwarz-abriebfest-und-vielseitig-einsetzbar-art-nr-00690010x': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/HandschuheTox.jpg?v=1749129735',
    'veribor-saugheber-2-kopf-fur-glasscheiben-50-kg-tragkraft-kipphebel-art-nr-bo602-1g': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BO_602_1G_PF1_A.png?v=1784362050'
};

    // Vom Annotations-Sync und vom Audit uebersprungen (25.09.2026): Waschtisch-Teile,
    // der Finder deckt Dusche, Duschwanne und Fugen ab.
    const _syncSkip = [
        'schallschutzset-waschtisch-60-bis-80-cm-korperschalldammung-din-52219-art-nr-schalluniwt',
        'waschtisch-befestigungssatz-m10-x-140-stahl-verzinkt-mit-dubel-und-mutter-art-nr-wtb'
    ];

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
