/* ============================================================
   REINIGUNGS-KONFIGURATOR — Daten v1
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

    // === REINIGER (Einzelprodukte) ===
    {
        id: 'duschblitz-2000',
        title: 'DuschBlitz 2000 Pflegereiniger 750 ml',
        handle: 'duschblitz-2000-flasche-a-750-ml-art-nr-di6903015',
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
        title: 'BriteGuard\u00ae Pro Glasversiegelung 500 ml',
        handle: 'briteguard\u00ae-pro-500-ml-fur-glatte-und-leicht-zu-reinigende-glasoberflachen-wie-z-b-duschtrennwande-aus-glas-mit-spruhkopf',
        type: 'beschichtung',
        ziel: ['schutz', 'beides'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet'],
        price: '58,95',
        desc: 'Premium-Glasversiegelung mit Lotuseffekt. Monatelanger Schutz vor Kalkablagerungen. Spr\u00fchkopf f\u00fcr einfache Anwendung.',
        isSet: false
    },
    {
        id: 'nano-sio2',
        title: 'Nano-Oberfl\u00e4chenschutz SiO\u2082 125 ml',
        handle: 'nano-sio2-oberflachenschutz-fur-glas-u-keramik-oberflachenschutz-125-ml',
        type: 'beschichtung',
        ziel: ['schutz', 'beides'],
        verschmutzung: ['leicht', 'mittel', 'stark'],
        oberflaeche: ['unbeschichtet'],
        price: '69,90',
        desc: 'Professioneller SiO\u2082-basierter Nanoschutz f\u00fcr Glas und Keramik. Wasser und Schmutz perlen einfach ab. Langanhaltend.',
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
    }
];

    const productImages = {
    'duschglas-versiegelung_reiniger-set': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/produkt_set_3x2_36544c3b-a072-4c99-9c73-152670719a99.png',
    'duschglas-top-reinigungs-set-art-nr-951809': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Reinigungs-Set_queer.jpg',
    'kristhal-top-reinigungs-u-schutz-set-fur-verhartete-verschmutzungen-der-oberflachen-von-duschglasern-inkl-oberflachen-versiegeler-art-nr-101123': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/101123_99076cee-ded0-4aeb-a7d7-44f0f8744bad.png',
    'duschblitz-bundle-doppelter-glanz-fur-streifenfreie-duschen-2x-duschblitz-3m-stahlwolle-0000-fur-sauberes-duschglas': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Reinigungs-Set_queer_Bundle.jpg',
    'kristhal-top-reinigungs-set-fur-verhartete-verschmutzungen-der-oberflachen-von-duschglasern-art-nr-061022': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/061022.png',
    'kristhal-top-reinigungs-set-fur-leicht-verschmutzte-oberflachen-von-duschglasern-art-nr-0307': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0307.jpg',
    'duschblitz-2000-flasche-a-750-ml-art-nr-di6903015': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Duschblitz_Format.jpg',
    'kalkreiniger_sanitaerreiniger': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Foerch_Sanitaerreiniger11.jpg',
    'invisible-shield-nanobeschichtung-mit-lotuseffekt': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Inivisible_Shield_1.png',
    'briteguard\u00ae-pro-500-ml-fur-glatte-und-leicht-zu-reinigende-glasoberflachen-wie-z-b-duschtrennwande-aus-glas-mit-spruhkopf': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BriteGuardExpress2.jpg',
    'nano-sio2-oberflachenschutz-fur-glas-u-keramik-oberflachenschutz-125-ml': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/nano_SIO2_2.jpg',
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