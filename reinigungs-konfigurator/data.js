/* ============================================================
   REINIGUNGS-KONFIGURATOR, Daten v1
   ============================================================ */
(function (global) {
    'use strict';
    const products = [
    // === SETS ===
    {
        id: 'glanz-paket',
        title: 'Glanz-Paket: Komplett-Set f\u00fcr Reinigung & Schutz',
        handle: 'duschglas-versiegelung_reiniger-set',
        type: 'set',
        ziel: ['reinigung', 'beides'],
        verschmutzung: ['mittel', 'stark'],
        oberflaeche: ['unbeschichtet'],
        price: '59,90',
        desc: '2\u00d7 DuschBlitz (750 ml), Invisible Shield Versiegelung, 5 m Stahlwolle, 2\u00d7 Poliertuch. Die Rundum-L\u00f6sung f\u00fcr Reinigung und langfristigen Schutz.',
        isSet: true,
        highlight: true
    },
    {
        id: 'profi-plus-set',
        title: 'Profi-Plus-Set f\u00fcr einwandfreie Reinigung',
        handle: 'duschglas-top-reinigungs-set-art-nr-951809',
        type: 'set',
        ziel: ['reinigung', 'beides'],
        verschmutzung: ['mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'unbekannt'],
        price: '44,90',
        desc: '2\u00d7 DuschBlitz (750 ml), 3 m Stahlwolle Typ 0000, 2 Pflegeschw\u00e4mme, 2 High-Performance Reinigungst\u00fccher. Bestseller.',
        isSet: true,
        highlight: false
    },
    {
        id: 'top-reinigungs-schutz-set',
        title: 'Top Reinigungs- und Schutz-Set',
        handle: 'kristhal-top-reinigungs-u-schutz-set-fur-verhartete-verschmutzungen-der-oberflachen-von-duschglasern-inkl-oberflachen-versiegeler-art-nr-101123',
        type: 'set',
        ziel: ['beides'],
        verschmutzung: ['mittel', 'stark'],
        oberflaeche: ['unbeschichtet'],
        price: '37,90',
        desc: 'Intensivreiniger, feine Stahlwolle, Schwamm, Mikrofasert\u00fccher und Oberfl\u00e4chenversiegler. Alles in einem Set.',
        isSet: true,
        highlight: false
    },
    {
        id: 'duschblitz-bundle',
        title: 'DuschBlitz Bundle \u2013 doppelter Glanz',
        handle: 'duschblitz-bundle-doppelter-glanz-fur-streifenfreie-duschen-2x-duschblitz-3m-stahlwolle-0000-fur-sauberes-duschglas',
        type: 'set',
        ziel: ['reinigung'],
        verschmutzung: ['mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'unbekannt'],
        price: '35,90',
        desc: '2\u00d7 DuschBlitz Pflegereiniger (750 ml) plus 3 m Stahlwolle Typ 0000. F\u00fcr streifenfreie Duschen.',
        isSet: true,
        highlight: false
    },
    {
        id: 'top-reinigungs-set',
        title: 'Top-Reinigungs-Set f\u00fcr Intensivreinigung',
        handle: 'kristhal-top-reinigungs-set-fur-verhartete-verschmutzungen-der-oberflachen-von-duschglasern-art-nr-061022',
        type: 'set',
        ziel: ['reinigung'],
        verschmutzung: ['mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'unbekannt'],
        price: '19,90',
        desc: 'Starter-Set mit Reiniger, Stahlwolle, Schwamm und Poliertuch. Ideal f\u00fcr die erste Intensivreinigung.',
        isSet: true,
        highlight: false
    },
    {
        id: 'kleines-reinigungs-set',
        title: 'Kleines Reinigungs-Set f\u00fcr leichte Verschmutzungen',
        handle: 'kristhal-top-reinigungs-set-fur-leicht-verschmutzte-oberflachen-von-duschglasern-art-nr-0307',
        type: 'set',
        ziel: ['reinigung'],
        verschmutzung: ['leicht'],
        oberflaeche: ['unbeschichtet', 'beschichtet', 'unbekannt'],
        price: '19,30',
        desc: 'Pflegereiniger, Schwamm und 2 Premium-Mikrofasert\u00fccher. F\u00fcr regelm\u00e4\u00dfige, schonende Pflege.',
        isSet: true,
        highlight: false
    },

    {
        id: 'intensiv-set-061023',
        title: 'Intensiv-Set für stark verkalktes Duschglas',
        handle: 'intensiv-set-verkalktes-duschglas-kalkloeser-stahlwolle-061023',
        type: 'set',
        ziel: ['reinigung'],
        verschmutzung: ['stark'],
        oberflaeche: ['unbeschichtet'],
        price: '39,90',
        desc: 'DuschBlitz 2000, saures Sanitärreiniger-Konzentrat und 2 m superfeine Stahlwolle für jahrelang festsitzenden Kalk. Nicht für beschichtetes Glas.',
        isSet: true,
        highlight: false
    },

    // === REINIGER (Einzelprodukte) ===
    {
        id: 'duschblitz-2000',
        title: 'DuschBlitz 2000 Pflegereiniger 750 ml',
        handle: 'duschkabinenreiniger-kalk-duschglas-750-ml',
        type: 'reiniger',
        ziel: ['reinigung', 'beides'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'beschichtet', 'unbekannt'],
        price: '12,90',
        priceMax: '32,90',
        desc: 'Stark gegen Kalk und Wasserflecken, schonend zu allen Oberfl\u00e4chen. Der meistverkaufte Duschglas-Reiniger.',
        isSet: false
    },
    {
        id: 'sanitaerreiniger',
        title: 'Stark saures Sanit\u00e4r Reinigungs-Konzentrat 1 L',
        handle: 'kalkreiniger_sanitaerreiniger',
        type: 'reiniger',
        ziel: ['reinigung'],
        verschmutzung: ['stark'],
        oberflaeche: ['unbeschichtet'],
        price: '12,90',
        desc: 'Hochkonzentrierter Kalkreiniger f\u00fcr extrem hartn\u00e4ckige Ablagerungen auf Glas, Fliesen und Keramik. Nicht f\u00fcr beschichtetes Glas!',
        isSet: false
    },

    // === BESCHICHTUNGEN / VERSIEGELUNGEN ===
    {
        id: 'invisible-shield',
        title: 'Invisible Shield Nanobeschichtung 300 ml',
        handle: 'invisible-shield-nanobeschichtung-mit-lotuseffekt',
        type: 'beschichtung',
        ziel: ['schutz', 'beides'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'unbekannt'],
        price: '19,60',
        desc: 'Transparente Polymer-Beschichtung mit Lotuseffekt. F\u00fcllt mikroskopische Poren und verhindert, dass Kalk und Seife haften. Einfache DIY-Anwendung.',
        isSet: false
    },
    {
        id: 'briteguard-pro',
        title: 'BriteGuard® Pro Glasversiegelung 100 oder 500 ml',
        handle: 'briteguard_bohle',
        type: 'beschichtung',
        ziel: ['schutz', 'beides'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'unbekannt'],
        price: '19,90',
        priceMax: '73,90',
        desc: 'Werkstatt-Versiegelung von Bohle mit Lotuseffekt, ausgelegt auf 100.000 Wischzüge. 100 ml reichen für eine Glasdusche.',
        isSet: false
    },
    {
        id: 'easyclean',
        title: 'EasyClean Nanobeschichtung f\u00fcr Duschglas',
        handle: 'easyclean-glasbeschichtung',
        type: 'beschichtung',
        ziel: ['schutz'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet'],
        price: '39,00',
        priceMax: '59,00',
        desc: 'Werksseitig aufgetragene Nano-Beschichtung. Wird vor dem Versand auf das Duschglas aufgebracht \u2013 ideal bei Neukauf einer Glasdusche.',
        isSet: false
    },

    // === ZUBEHOER ===
    {
        id: 'stahlwolle',
        title: 'Superfeine Stahlwolle Typ 0000',
        handle: 'kristhal-superfeine-stahlwolle-typ-0000-fur-reinigung-und-politur-von-glas-speziell-zum-saubern-von-hartnackigen-ablagerungen',
        type: 'zubehoer',
        ziel: ['reinigung', 'beides'],
        verschmutzung: ['mittel', 'stark'],
        oberflaeche: ['unbeschichtet'],
        price: '5,90',
        priceMax: '20,90',
        desc: 'L\u00f6st mechanisch, was chemisch allein nicht zu schaffen ist \u2013 ohne das Glas zu zerkratzen. Typ 0000 ist feiner als jedes Schleifpapier.',
        isSet: false
    },
    {
        id: 'reinigungstuch',
        title: 'Kristhal Reinigungstuch BavariaClean 40\u00d740 cm',
        handle: 'kristhal-duschglas-reinigungstuch-der-extraklasse-high-performance-tuch-40x40-cm-typ-bavariaclean',
        type: 'zubehoer',
        ziel: ['reinigung', 'schutz', 'beides'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet', 'beschichtet', 'unbekannt'],
        price: '2,90',
        desc: 'High-Performance Mikrofasertuch mit Fischschuppen-Struktur. Absorbiert das 7-fache seines Eigengewichts. Streifenfreies Trocknen.',
        isSet: false
    },
    {
        id: 'fugenbuerste',
        title: 'Fugenb\u00fcrste f\u00fcr Fliesenfugen Art. 77700',
        handle: 'fugenburste-fur-fliesenfugen-gezielte-reinigung-von-zementfugen-art-nr-77700',
        type: 'zubehoer',
        ziel: ['reinigung'],
        verschmutzung: ['leicht', 'mittel'],
        oberflaeche: ['unbeschichtet', 'beschichtet', 'unbekannt'],
        price: '4,50',
        desc: 'Speziell geformte B\u00fcrste f\u00fcr die Reinigung von Fliesenfugen. F\u00fcr regelm\u00e4\u00dfige Pflege zwischen den Fliesen.',
        isSet: false
    },

    // Nachgetragen 12.08.2026: lagen in der Shop-Collection, hatten aber keine
    // Annotation und waren damit ueber den Wizard nicht erreichbar.
    { id: 'pflegeschwamm', title: 'Pflegeschwamm für empfindliche Oberflächen, schleifmittelfreies Vlies', handle: 'pflegeschwamm-fur-empfindliche-oberflachen-schleifmittelfreies-vlies-blau-weiss-ca-7-x-15-cm-art-nr-41227', type: 'zubehoer', ziel: ['reinigung','beides'], verschmutzung: ['leicht','mittel'], oberflaeche: ['unbeschichtet','beschichtet','unbekannt'], price: '1,50', desc: 'Schleifmittelfreies Vlies zum Auftragen des Reinigers. Kratzt auch auf beschichtetem Glas nicht.' },
    { id: 'profi-set-1615', title: 'Profi-Reinigungs-Set für hartnäckige Verkrustungen', handle: 'profi-reinigungs-set-fur-hartnackige-verkrustungen-mehrstufen-system-fur-stark-verkalktes-duschglas-art-nr-1615', type: 'set', ziel: ['reinigung'], verschmutzung: ['stark'], oberflaeche: ['unbeschichtet'], price: '74,90', desc: 'Mehrstufen-System für jahrelang eingebrannten Kalk. Für Glas, das schon aufgegeben war.', isSet: true },
    { id: 'reinigungs-set-1615ssr', title: 'Reinigungs-Set für Ablagerungen und starke Verschmutzungen', handle: 'reinigungs-set-fur-ablagerungen-und-starke-verschmutzungen-mehrstufige-duschglas-reinigung-mit-saure-vorreiniger-art-nr-1615ssr', type: 'set', ziel: ['reinigung'], verschmutzung: ['mittel','stark'], oberflaeche: ['unbeschichtet'], price: '34,90', desc: 'Mehrstufige Reinigung mit saurem Vorreiniger, wenn ein einzelner Reiniger nicht mehr reicht.', isSet: true },
    { id: 'shine3-polierpaste', title: 'iWETEC Shine³ Polierpaste 500 g', handle: 'iwetec-shine-polierpaste-reinigen-polieren-und-schutzen-in-einem-arbeitsgang-500-g-art-nr-907611', type: 'reiniger', ziel: ['reinigung','schutz','beides'], verschmutzung: ['mittel','stark'], oberflaeche: ['unbeschichtet'], price: '39,90', desc: 'Reinigt, poliert und versiegelt in einem Arbeitsgang. Auch für matte Armaturen und angelaufenes Metall.' },
    { id: 'glas-versiegelung-tpc16', title: 'Glas-Versiegelung für Duschglas, 473 ml', handle: 'glas-versiegelung-fur-duschglas-wasser-und-schmutzabweisend-transparent-473-ml-art-nr-tpc16', type: 'beschichtung', ziel: ['schutz','beides'], verschmutzung: ['leicht','mittel','stark'], oberflaeche: ['unbeschichtet'], price: '32,90', desc: 'Versiegelt die Glasporen, Wasser perlt ab. Die Pflege wird spürbar leichter.' },
    // Aus der Collection glasreiniger_dusche nachgetragen (25.09.2026). Bewusst ohne
    // Annotation: iWETEC Abfluss-Free (Rohrreiniger, kein Duschglas-Bezug).
    { id: 'profi-glasreiniger-eb1701', title: 'Profi-Glasreiniger Spraydose 600 ml, EB1701', handle: 'profi-glasreiniger-fur-duschglas-und-spiegel-spraydose-600-ml-art-nr-eb1701', type: 'reiniger', ziel: ['reinigung','beides'], verschmutzung: ['leicht'], oberflaeche: ['unbeschichtet','beschichtet','unbekannt'], price: '12,90', priceMax: '32,90', desc: 'Schaumreiniger aus der Glasverarbeitung, haftet an senkrechtem Glas und nimmt Fingerabdrücke und Wasserflecken streifenfrei ab.', isSet: false },
    { id: 'radora-brillant-358', title: 'Radora Brillant Spezialreiniger 500 ml, Art. 358', handle: 'radora-brillant-fensterglanz-leicht-abrasiver-glasreiniger-gegen-silikonschleier-und-schlieren-500-ml-art-nr-358', type: 'reiniger', ziel: ['reinigung'], verschmutzung: ['mittel'], oberflaeche: ['unbeschichtet'], price: '36,90', desc: 'Leicht abrasiv, entfernt Saugnapfabdrücke, Trennmittelfilm und Silikonreste auf neuem Glas.', isSet: false },
    { id: 'iwetec-ssr85', title: 'iWETEC SSR85 Säurereiniger-Konzentrat 1 L', handle: 'iwetec-ssr85-reiniger', type: 'reiniger', ziel: ['reinigung'], verschmutzung: ['stark'], oberflaeche: ['unbeschichtet'], price: '19,50', desc: 'Säurekonzentrat mit pH 1 gegen Kalk, Rost und Zementschleier. Nicht für beschichtetes Glas.', isSet: false },
    { id: 'abzieher-riva', title: 'Duschabzieher Riva mit weicher Abziehlippe', handle: 'duschabzieher-duschwischer-mit-weicher-abziehlippe', type: 'zubehoer', ziel: ['schutz','beides'], verschmutzung: ['leicht','mittel','stark'], oberflaeche: ['unbeschichtet','beschichtet','unbekannt'], price: '5,90', priceMax: '6,50', desc: 'Nach jedem Duschen einmal abziehen, dann trocknet kein Kalk an. Wahlweise mit Haken.', isSet: false },
    { id: 'abzieher-smart', title: 'Duschabzieher Smart, Silikon mit Edelstahlkern', handle: 'duschwischer-als-glasabzieher-silikonummantelt', type: 'zubehoer', ziel: ['schutz','beides'], verschmutzung: ['leicht','mittel','stark'], oberflaeche: ['unbeschichtet','beschichtet','unbekannt'], price: '17,95', desc: 'Durchgehend mit Silikon ummantelt, Edelstahlkern, mit Wandhalterung.', isSet: false },
];

    const productImages = {
    'duschglas-versiegelung_reiniger-set': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/produkt_set_3x2_36544c3b-a072-4c99-9c73-152670719a99.png',
    'duschglas-top-reinigungs-set-art-nr-951809': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Reinigungs-Set_queer.jpg',
    'kristhal-top-reinigungs-u-schutz-set-fur-verhartete-verschmutzungen-der-oberflachen-von-duschglasern-inkl-oberflachen-versiegeler-art-nr-101123': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/101123_99076cee-ded0-4aeb-a7d7-44f0f8744bad.png',
    'duschblitz-bundle-doppelter-glanz-fur-streifenfreie-duschen-2x-duschblitz-3m-stahlwolle-0000-fur-sauberes-duschglas': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Reinigungs-Set_queer_Bundle.jpg',
    'kristhal-top-reinigungs-set-fur-verhartete-verschmutzungen-der-oberflachen-von-duschglasern-art-nr-061022': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/061022.png',
    'kristhal-top-reinigungs-set-fur-leicht-verschmutzte-oberflachen-von-duschglasern-art-nr-0307': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0307.jpg',
    'duschkabinenreiniger-kalk-duschglas-750-ml': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Duschblitz_Format.jpg',
    'kalkreiniger_sanitaerreiniger': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Foerch_Sanitaerreiniger11.jpg',
    'invisible-shield-nanobeschichtung-mit-lotuseffekt': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Inivisible_Shield_1.png',
    'briteguard_bohle': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BriteGuardExpress2.jpg',
    'easyclean-glasbeschichtung': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Easy-Clean_2_8c1f39d4-2998-4cd0-b66d-1c6b5b148088.png',
    'kristhal-superfeine-stahlwolle-typ-0000-fur-reinigung-und-politur-von-glas-speziell-zum-saubern-von-hartnackigen-ablagerungen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Stahlwolle_3.jpg',
    'kristhal-duschglas-reinigungstuch-der-extraklasse-high-performance-tuch-40x40-cm-typ-bavariaclean': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Bavariaclean3-01.jpg'
};

    function filterProducts(state, list) {
        return (list || products).filter(function (p) {
            if (state.ziel && (!p.ziel || p.ziel.indexOf(state.ziel) === -1)) return false;
            if (state.verschmutzung && (!p.verschmutzung || p.verschmutzung.indexOf(state.verschmutzung) === -1)) return false;
            if (state.oberflaeche && (!p.oberflaeche || p.oberflaeche.indexOf(state.oberflaeche) === -1)) return false;
            return true;
        });
    }

    global.ReinigungData = {
        products: products,
        productImages: productImages,
        filterProducts: filterProducts
    };
})(window);
