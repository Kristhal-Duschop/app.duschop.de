/* ============================================================
   METALLPROFILE-KONFIGURATOR — Daten v1
   Aus metallprofile-konfigurator/legacy.html extrahiert.
   ============================================================ */
(function (global) {
    'use strict';

    var materialDefs = {
        'alu':       { name: 'Aluminium', desc: 'Leichtes, eloxiertes Aluminium. Große Farbauswahl. Preisgünstiger.' },
        'edelstahl': { name: 'Edelstahl V2A', desc: 'Massiver V2A-Edelstahl. Extrem langlebig und korrosionsbeständig. Premium.' }
    };
    const products = [
    // ====================================
    // IN FLIESENEBENE: Fliesen-U-Winkelprofile (nur diese!)
    // ====================================
    {
        id: 'fliesen-slimline-edelstahl-gebuerstet',
        title: 'Fliesen-U-Winkelprofil "Slimline" Edelstahl K220 geb\u00fcrstet \u2013 Art.Nr. UEK220',
        handle: 'fliesen-u-winkelprofil-slimline-edelstahl-matt-geschliffen',
        type: 'profil',
        material: 'edelstahl',
        einbau: 'in-fliesenebene',
        colors: ['edelstahl-gebuerstet'],
        abschluss: ['silikonverklebung'],
        price: '59,90',
        priceMax: '119,90',
        desc: '"Slimline" mit Schenkel als Fliesenunterlage. F\u00fcr 8 und 10 mm Glas. 116\u2013250 cm. Montage ohne Bohren.',
        isMain: true
    },
    {
        id: 'fliesen-alu-silber-matt',
        title: 'Alu-U-Winkelprofil mit Auflageschenkel f\u00fcr Fliesen \u2013 Typ PP-TGU1214',
        handle: 'fliesen-u-winkelprofil-aluminium-silber-matt',
        type: 'profil',
        material: 'alu',
        einbau: 'in-fliesenebene',
        colors: ['silber-matt'],
        abschluss: ['silikonverklebung'],
        price: '20,90',
        priceMax: '67,90',
        desc: 'Alu-U-Winkelprofil mit Auflageschenkel unter Fliesen. F\u00fcr 8 oder 10 mm Glas. 130\u2013250 cm. Ohne Bohren.',
        isMain: true
    },
    {
        id: 'fliesen-edelstahl-gps2',
        title: 'Fliesen-U-Winkelprofil Edelstahl geb\u00fcrstet \u2013 Typ PP-GPS2, Art.Nr. 31543',
        handle: 'fliesen-u-winkelprofil-edelstahl-gebuerstet',
        type: 'profil',
        material: 'edelstahl',
        einbau: 'in-fliesenebene',
        colors: ['edelstahl-gebuerstet'],
        abschluss: ['silikonverklebung'],
        price: '99,50',
        priceMax: '139,90',
        desc: 'Edelstahl geb\u00fcrstet. F\u00fcr 8 oder 10 mm Glas. Fliesen 10\u201319 mm. 200\u2013250 cm. Ohne Bohren.',
        isMain: true
    },
    {
        id: 'fliesen-slimline-gefaellekeil',
        title: 'Fliesen-U-Winkelprofil "Slimline" mit Gef\u00e4llekeil f\u00fcr Duschboden \u2013 Art.Nr. GPDU',
        handle: 'fliesen-u-winkelprofil-mit-gefallekeil-typ-slimline-edelstahl-matt-geschliffen',
        type: 'profil',
        material: 'edelstahl',
        einbau: 'in-fliesenebene',
        colors: ['edelstahl-gebuerstet'],
        abschluss: ['silikonverklebung'],
        price: '114,00',
        priceMax: '152,00',
        desc: '"Slimline" mit 2-tlg. Gef\u00e4llekeil f\u00fcr Duschboden. Edelstahl K220. 116\u2013200 cm. Links/Rechts w\u00e4hlbar.',
        isMain: true
    },
    {
        id: 'fliesen-slimline-chrom',
        title: 'Fliesen-U-Winkelprofil "Slimline" Edelstahl verchromt hochglanz \u2013 Art.Nr. UCHR',
        handle: 'fliesen-u-winkelprofil-slimline-edelstahl-chrom-glanz-art-nr-u-chr',
        type: 'profil',
        material: 'edelstahl',
        einbau: 'in-fliesenebene',
        colors: ['chrom-poliert'],
        abschluss: ['silikonverklebung'],
        price: '139,90',
        desc: '"Slimline" Edelstahl verchromt (hochglanz). F\u00fcr 8 und 10 mm Glas. 250 cm. Ohne Bohren.',
        isMain: true
    },

    // ====================================
    // AUF FLIESE: U-Profile
    // ====================================
    {
        id: 'alu-u-profil-silikon',
        title: 'Alu U-Profil zur Silikonverklebung \u2013 13 Farben \u2013 Art.Nr. SDCD3812',
        handle: 'alu-u-profil',
        type: 'profil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt', 'silber-matt', 'graphit-poliert', 'graphit-matt', 'messing-poliert', 'messing-matt', 'messing-matt-gebuerstet', 'bronze-matt', 'weiss-matt', 'kupfer-poliert', 'kupfer-matt'],
        abschluss: ['silikonverklebung'],
        price: '39,50',
        priceMax: '99,90',
        desc: 'Alu U-Profil, 19 mm H\u00f6he. \u00d6ffnungsweite 10 oder 13 mm. F\u00fcr 6\u201310 mm Glas. 2000 oder 2400 mm.',
        isMain: true
    },
    {
        id: 'alu-u-profil-kunststoff',
        title: 'Alu U-Profil mit L-Vinyl und Kederstab \u2013 silikonfrei \u2013 Art.Nr. DUC',
        handle: 'alu-u-wandprofil',
        type: 'profil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt'],
        abschluss: ['kunststoff-einlage'],
        price: '59,90',
        priceMax: '89,90',
        desc: 'Silikonfreie Klemmung mit L-Vinyl und Kederstab. F\u00fcr 8 oder 10 mm Glas. 2000 oder 2400 mm.',
        isMain: true
    },
    {
        id: 'edelstahl-mantel-u-profil',
        title: 'U-Profil mit Edelstahlmantel \u2013 11 Farben \u2013 2400 mm inkl. 2 Endkappen',
        handle: 'u-profil-mit-edelstahlmantel-fur-8-10-mm-esg-farblich-passend-zu-bellagio-2-400-mm-inkl-2-endkappen',
        type: 'profil',
        material: 'edelstahl',
        materialAll: true,
        einbau: 'auf-fliese',
        colors: ['chrom-poliert', 'edelstahl-gebuerstet', 'schwarz-matt', 'bronze-matt', 'messing-matt', 'messing-poliert', 'weiss-matt', 'graphit-poliert', 'graphit-matt', 'kupfer-poliert', 'kupfer-matt'],
        abschluss: ['silikonverklebung'],
        price: '64,90',
        priceMax: '89,90',
        desc: 'Premium: Alu-Kern mit Edelstahl-Blenden in 11 Farben. 2400 mm, k\u00fcrzbar. Inkl. 2 Endkappen. F\u00fcr 8 mm Glas.',
        isMain: true
    },

    // ====================================
    // AUF FLIESE: Klemmprofile
    // ====================================
    {
        id: 'klemmprofil-cr-eumb',
        title: 'Klemmprofil-Set Typ CR mit Abdeckprofilen \u2013 Inkl. 5 Glasklemmen \u2013 Art.Nr. EUMB',
        handle: 'klemmprofil-set-mit-abdeckprofilen-art-nr-eumb',
        type: 'klemmprofil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert', 'schwarz-matt'],
        abschluss: ['klemmung'],
        price: '125,90',
        priceMax: '159,50',
        desc: 'Klemmprofil-Set mit Abdeckprofilen. F\u00fcr 8 mm Glas. Inkl. 5 Klemmhalter. Ohne Glasbohrung.',
        isMain: true
    },
    {
        id: 'klemmprofil-gr-eckig',
        title: 'Klemmprofil-Set Typ GR mit eckigen Abdeckprofilen \u2013 Art.Nr. 74127',
        handle: 'klemmprofil-set-mit-eckigen-abdeckprofilen-art-nr-74127',
        type: 'klemmprofil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert', 'silber-matt', 'schwarz-matt'],
        abschluss: ['klemmung'],
        price: '159,90',
        priceMax: '286,90',
        desc: 'Eckige Abdeckprofile. F\u00fcr 8 mm Glas. Inkl. 5 Klemmhalter. Ohne Glasbohrung.',
        isMain: true
    },
    {
        id: 'klemmprofil-gr-rund',
        title: 'Klemmprofil-Set Typ GR mit abgerundeten Abdeckprofilen \u2013 Art.Nr. 74128',
        handle: 'klemmprofil-set-mit-abgerundeten-abdeckprofilen-fur-wandbefestigung-art-nr-74128',
        type: 'klemmprofil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert'],
        abschluss: ['klemmung'],
        price: '198,90',
        desc: 'Abgerundete Abdeckprofile. F\u00fcr 8 mm Glas. Inkl. 5 Klemmhalter. Ohne Glasbohrung.',
        isMain: true
    },
    {
        id: 'led-klemmprofil-eckig',
        title: 'LED-Klemmprofil-Set mit eckigen Abdeckprofilen \u2013 inkl. L-Profil f\u00fcr LED',
        handle: 'led-klemmprofil-set-mit-eckigen-abdeckprofilen-typ-gr-fur-glasdicke-8-mm-inkl-l-profil-13-x-13-mm-fur-led-lichtband',
        type: 'klemmprofil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert', 'silber-matt', 'schwarz-matt'],
        abschluss: ['klemmung'],
        price: '199,90',
        priceMax: '319,90',
        desc: 'Eckige Abdeckprofile mit L-Profil 13\u00d713 mm f\u00fcr LED-Lichtband. F\u00fcr 8 mm Glas.',
        isMain: true
    },
    {
        id: 'led-klemmprofil-rund',
        title: 'LED-Klemmprofil-Set mit abgerundeten Abdeckprofilen \u2013 inkl. L-Profil f\u00fcr LED',
        handle: 'led-klemmprofil-set-mit-abgerundeten-abdeckprofilen-fur-wandbefestigung-art-nr-74128',
        type: 'klemmprofil',
        material: 'alu',
        einbau: 'auf-fliese',
        colors: ['chrom-poliert'],
        abschluss: ['klemmung'],
        price: '224,90',
        desc: 'Abgerundete Abdeckprofile mit L-Profil 13\u00d713 mm f\u00fcr LED-Lichtband. F\u00fcr 8 mm Glas.',
        isMain: true
    },

    // ====================================
    // ZUBEH\u00d6R: OTTO S100 Silikon
    // ====================================
    {
        id: 'otto-s100-silikon',
        title: 'OTTO S100 Premium Sanit\u00e4r-Silikon 300 ml transparent',
        handle: 'sanitaer-silikon-otto-s100-premium-qualitat-300-ml',
        type: 'zubehoer',
        material: 'alu',
        materialAll: true,
        einbau: 'auf-fliese',
        einbauAll: true,
        colors: ['transparent'],
        abschluss: ['silikonverklebung'],
        price: '10,90',
        desc: 'Profi-Silikon f\u00fcr Glasduschen, Fugen und Glasverklebung. Schimmelhemmend, transparent.',
        isMain: false
    },
    {
        id: 'transparente-unterlagen',
        title: 'Transparente Unterlagen f\u00fcr rahmenlose Glasduschen \u2013 6 \u00d7 51 mm \u2013 Art.Nr. PSB',
        handle: 'transparente-unterlagen-fur-rahmenlose-glasduschen',
        type: 'zubehoer',
        material: 'alu',
        materialAll: true,
        einbau: 'auf-fliese',
        einbauAll: true,
        colors: ['transparent'],
        abschluss: ['silikonverklebung'],
        price: '0,25',
        priceMax: '39,00',
        desc: 'Transparente Abstandhalter zwischen Glas und Bauteil. F\u00fcr 6/8/10 mm Glas. In 1\u201310 mm St\u00e4rke erh\u00e4ltlich.',
        isMain: false
    },
    // === Welle C: 12 Profile-Annotationen ===
    { id: 'emily-wandprofil', title: 'Drehbares Wandprofil Emily Hebe-Senk 41.0901 (6 mm)', handle: 'drehbares-duschtur-wandprofil-typ-emily', material: 'alu', einbau: 'auf-fliese', colors: ['chrom-poliert','schwarz-matt','messing-matt','silber-matt'], abschluss: ['silikonverklebung'], price: '149,90', desc: 'Drehbares Pendeltürwandprofil 180° mit Hebe-Senk-Funktion, 6 mm ESG, in 4 Oberflächen.' },
    { id: 'alu-u-677', title: 'Alu U-Profil 677XX, 30 oder 40 mm Höhe, Silber matt', handle: 'u-profil_aluminium', material: 'alu', einbau: 'auf-fliese', colors: ['silber-matt'], abschluss: ['silikonverklebung'], price: '24,90', desc: 'Aluminium U-Profil für 8–12 mm Glas, 30/40 mm Höhe, in 130/200/250 cm, silber matt.' },
    { id: 'u-wandprofil-32000', title: 'U-Wandprofil 32000 Edelstahl gebürstet mit Vorbohrungen', handle: 'u-wandprofil-auf-fliesenwand-fur-feststehende-glasabtrennung', material: 'edelstahl', einbau: 'auf-fliese', colors: ['edelstahl-gebuerstet'], abschluss: ['silikonverklebung'], price: '39,90', desc: 'Edelstahl-U-Wandprofil mit Vorbohrungen, für 8 oder 10 mm Glas, 100–250 cm.' },
    { id: 'abdeckkappe-duc', title: 'Abdeckkappe SDCEC12 für U-Profil DUC', handle: 'abdeckkappe-fur-u-profil-typ-duc', material: 'alu', einbau: 'auf-fliese', colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'], abschluss: [], price: '2,90', desc: 'Endabdeckkappe für U-Profil Typ DUC in 3 Farben.' },
    { id: 'alu-eckprofil', title: 'Aluminium-Eckprofil 90° SDCP38, 19×19 mm, 240 cm', handle: 'aluminium-eckprofil', material: 'alu', einbau: 'auf-fliese', colors: ['chrom-poliert','schwarz-matt','messing-poliert','messing-matt','silber-matt'], abschluss: ['silikonverklebung'], price: '59,90', desc: '90°-Eckprofil aus Aluminium, 19×19 mm, 240 cm, für 8 mm Glas, in 5 Oberflächen.' },
    { id: 'fliesen-gefälleprofil-gpd', title: 'Fliesen-Gefälleprofil GPD mit Keil, Edelstahl K220', handle: 'fliesen-winkelprofil-mit-gefallekeil-typ-slimline-edelstahl-matt-geschliffen', material: 'edelstahl', einbau: 'in-fliesenebene', colors: ['edelstahl-gebuerstet'], abschluss: [], price: '99,90', desc: 'Fliesen-Gefälleprofil mit 2-tlg. Keil für bündigen Bodenabschluss, Edelstahl K220, 116/166/200 cm.' },
    { id: 'magnetträger-74-109', title: 'Magnetträgerprofil 74.109 Aluminium 28×12 mm', handle: 'magnettragerprofil-fur-nischensituation-zum-aufstecken-einer-magnetdichtung-art-nr-74-109', material: 'alu', einbau: 'auf-fliese', colors: ['chrom-poliert','silber-matt','weiss-matt'], abschluss: [], price: '59,50', desc: 'Magnetträgerprofil für Nischensituation, Aluminium 28×12 mm, 200/220 cm, in 3 Oberflächen.' },
    { id: 'edelstahl-u-ub15', title: 'Edelstahl-U-Wandprofil UB15 Höhe 15 mm', handle: 'edelstahl-u-wandprofil-zur-innenseitigen-silikonverklebung-hohe-15-mm-art-nr-ub15', material: 'edelstahl', einbau: 'auf-fliese', colors: ['edelstahl-gebuerstet','chrom-poliert'], abschluss: ['silikonverklebung'], price: '49,90', desc: 'Edelstahl-U-Wandprofil 15 mm für innenseitige Silikonverklebung, 250 cm.' },
    { id: 'magnetträger-52-05-0300', title: 'Magnetträgerprofil 52.05.0300 Aluminium 29×15 mm', handle: 'magnettragerprofil-fur-nischensituation-zum-aufstecken-einer-duschturdichtung-art-nr-52-05-0300', material: 'alu', einbau: 'auf-fliese', colors: ['chrom-poliert'], abschluss: [], price: '79,50', desc: 'Magnetträgerprofil für Nischensituation, Aluminium 29×15 mm, 200/250 cm.' },
    { id: 'walk-in-pfosten-vigo', title: 'Walk-in-Pfosten Vigo Edelstahl Ø 30 mm', handle: 'walk-in-pfosten-set-typ-vigo-vertikale-stabilisierung-fur-freistehende-glaswande', material: 'edelstahl', einbau: 'auf-fliese', colors: ['edelstahl-gebuerstet','chrom-poliert'], abschluss: ['silikonverklebung'], price: '129,90', desc: 'Vertikale Stabilisierung für freistehende Glaswände, rund oder eckig, 8/10 mm Glas.' },
    { id: 'fliesen-winkelprofil-edelstahl', title: 'Fliesen-Winkelprofil mit Gefällekeil Edelstahl (Abverkauf)', handle: 'fliesen-winkelprofil-mit-gefallekeil-edelstahl-geburstet-abverkauf', material: 'edelstahl', einbau: 'in-fliesenebene', colors: ['edelstahl-gebuerstet'], abschluss: [], price: '79,90', desc: 'Fliesen-Winkelprofil mit Gefällekeil, Edelstahl gebürstet, 98/120/148 cm. Abverkauf.' },
    { id: 'u-profil-pvd', title: 'U-Profil 14×13×1 mm Edelstahl PVD-beschichtet 6 Farben', handle: 'u-profil-14x13x1mm-2500mm-pvd', material: 'edelstahl', einbau: 'auf-fliese', colors: ['edelstahl-poliert','edelstahl-gebuerstet','messing-matt','graphit-matt','kupfer-matt'], abschluss: [], price: '49,90', desc: 'Schmales U-Profil 14×13×1 mm, Edelstahl PVD-beschichtet, in 6 Farben, 250 cm.' }

];

    const productImages = {
    // Fliesen-U-Winkelprofile
    'fliesen-u-winkelprofil-slimline-edelstahl-matt-geschliffen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/UEK220.png?v=1773299573',
    'fliesen-u-winkelprofil-aluminium-silber-matt': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/TGU1214.png?v=1773299775',
    'fliesen-u-winkelprofil-edelstahl-gebuerstet': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/31543.png?v=1773300035',
    'fliesen-u-winkelprofil-mit-gefallekeil-typ-slimline-edelstahl-matt-geschliffen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/GPDU.png?v=1773304613',
    'fliesen-u-winkelprofil-slimline-edelstahl-chrom-glanz-art-nr-u-chr': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/U-CHR.png?v=1752907501',
    // U-Profile auf Fliese
    'alu-u-profil': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/SDCD_CH.png?v=1774367302',
    'alu-u-wandprofil': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/DUC.png?v=1773300407',
    'u-profil-mit-edelstahlmantel-fur-8-10-mm-esg-farblich-passend-zu-bellagio-2-400-mm-inkl-2-endkappen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/poliert_2ee0851e-6413-4b90-bf10-f108a45e6cf0.png',
    // Klemmprofile
    'klemmprofil-set-mit-abdeckprofilen-art-nr-eumb': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/IMG-8115.png?v=1766944402',
    'klemmprofil-set-mit-eckigen-abdeckprofilen-art-nr-74127': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/127_2024-06-09T08_59_03.530Z.png?v=1742635526',
    'klemmprofil-set-mit-abgerundeten-abdeckprofilen-fur-wandbefestigung-art-nr-74128': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/GR-Profil_rund.jpg?v=1763023810',
    'led-klemmprofil-set-mit-eckigen-abdeckprofilen-typ-gr-fur-glasdicke-8-mm-inkl-l-profil-13-x-13-mm-fur-led-lichtband': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Klemmprofil_4.jpg?v=1763023712',
    'led-klemmprofil-set-mit-abgerundeten-abdeckprofilen-fur-wandbefestigung-art-nr-74128': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/GR-Profil_rund.jpg?v=1763023810',
    // Zubeh\u00f6r
    'sanitaer-silikon-otto-s100-premium-qualitat-300-ml': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/S100.png?v=1770918900',
    'transparente-unterlagen-fur-rahmenlose-glasduschen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/FullSizeRender_8afe7acc-8818-46bf-ad58-e05d0f0569b9.jpg?v=1757793855'
};

    const colorDefs = {
    'chrom-poliert': { name: 'Chrom poliert gl\u00e4nzend', gradient: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 25%, #f5f5f5 50%, #a8a8a8 75%, #d4d4d4 100%)', finish: 'Gl\u00e4nzend' },
    'edelstahl-gebuerstet': { name: 'Edelstahl geb\u00fcrstet matt', gradient: 'linear-gradient(135deg, #c8c4be 0%, #b5b0a8 25%, #d0ccc5 50%, #a8a39a 75%, #bfbab2 100%)', finish: 'Matt' },
    'edelstahl-poliert': { name: 'Edelstahl poliert', gradient: 'linear-gradient(135deg, #d6d2cc 0%, #bfbab3 25%, #e0dcd6 50%, #b0aaa2 75%, #ccc7c0 100%)', finish: 'Gl\u00e4nzend' },
    'silber-matt': { name: 'Silber matt', gradient: 'linear-gradient(135deg, #c5c5c5 0%, #b0b0b0 25%, #cbcbcb 50%, #a0a0a0 75%, #bdbdbd 100%)', finish: 'Matt' },
    'schwarz-matt': { name: 'Schwarz matt', gradient: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 25%, #333333 50%, #111111 75%, #262626 100%)', finish: 'Matt' },
    'messing-poliert': { name: 'Messing poliert gl\u00e4nzend (goldfarbig)', gradient: 'linear-gradient(135deg, #dcc260 0%, #c4a840 25%, #e8d070 50%, #b89a30 75%, #d0b850 100%)', finish: 'Gl\u00e4nzend' },
    'messing-matt': { name: 'Messing matt (goldfarbig)', gradient: 'linear-gradient(135deg, #c8a84e 0%, #b08f30 25%, #d4b55a 50%, #a08228 75%, #bfa042 100%)', finish: 'Matt' },
    'messing-matt-gebuerstet': { name: 'Messing matt geb\u00fcrstet (goldfarbig)', gradient: 'linear-gradient(135deg, #c0a048 0%, #a8882c 25%, #ccac54 50%, #987a24 75%, #b79840 100%)', finish: 'Matt' },
    'bronze-matt': { name: 'Bronze matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #8B6914 0%, #6d5010 25%, #9a7520 50%, #5c430d 75%, #7d5e12 100%)', finish: 'Matt' },
    'graphit-poliert': { name: 'Graphit poliert gl\u00e4nzend', gradient: 'linear-gradient(135deg, #5a5a5a 0%, #454545 25%, #666666 50%, #3a3a3a 75%, #525252 100%)', finish: 'Gl\u00e4nzend' },
    'graphit-matt': { name: 'Graphit matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #686868 0%, #555555 25%, #737373 50%, #484848 75%, #606060 100%)', finish: 'Matt' },
    'kupfer-poliert': { name: 'Kupfer poliert gl\u00e4nzend (Rose-Gold)', gradient: 'linear-gradient(135deg, #d4956a 0%, #c07d50 25%, #e0a57a 50%, #b07040 75%, #cc8d60 100%)', finish: 'Gl\u00e4nzend' },
    'kupfer-matt': { name: 'Kupfer matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #b8805a 0%, #a06840 25%, #c49068 50%, #905a32 75%, #af7850 100%)', finish: 'Matt' },
    'weiss-matt': { name: 'Wei\u00df matt', gradient: 'linear-gradient(135deg, #f5f2ef 0%, #e8e4e0 25%, #faf8f6 50%, #e0dcd8 75%, #f0ece8 100%)', finish: 'Matt' },
    'transparent': { name: 'Transparent', gradient: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 25%, #fafafa 50%, #e0e0e0 75%, #f5f5f5 100%)', finish: 'Transparent' }
};

    const einbauDefs = {
    'in-fliesenebene': {
        name: 'In Fliesenebene (b\u00fcndig)',
        desc: 'Das Profil wird unter der Fliese eingebaut und schlie\u00dft b\u00fcndig mit der Fliesenoberfl\u00e4che ab. Muss vor dem Fliesen montiert werden.',
        info: 'Das Profil wird beim Fliesen in den Fliesenkleber eingebettet. Das Ergebnis ist eine glatte, b\u00fcndige Oberfl\u00e4che \u2013 sehr edel und modern.'
    },
    'auf-fliese': {
        name: 'Auf Fliese (Aufputz)',
        desc: 'Das Profil wird auf die fertige Fliese aufgesetzt und verschraubt oder verklebt. Auch nachtr\u00e4glich montierbar.',
        info: 'Ideal f\u00fcr nachtr\u00e4gliche Montage oder Renovierung. Das Profil sitzt auf der Fliese und wird mit Schrauben oder Spezialkleber befestigt.'
    }
};

    const abschlussDefs = {
    'kunststoff-einlage': {
        name: 'Kunststoff-Einlage (L-Vinyl)',
        desc: 'Eine weiche Kunststofflippe (L-Vinyl mit Kederstab) im Profil klemmt das Glas fest. Kein Silikon n\u00f6tig \u2013 das Glas kann sp\u00e4ter entnommen werden.',
        pro: ['Glas herausnehmbar', 'Kein Silikon n\u00f6tig', 'Saubere Optik'],
        contra: ['Weniger Farbauswahl']
    },
    'silikonverklebung': {
        name: 'Silikonverklebung',
        desc: 'Das Glas wird mit Sanit\u00e4rsilikon im Profil fixiert. Dauerhafte, feste Verbindung.',
        pro: ['Maximale Dichtheit', 'Gro\u00dfe Farbauswahl', 'Sehr stabile Verbindung'],
        contra: ['Glas nicht herausnehmbar', 'Silikon muss sauber verarbeitet werden']
    },
    'klemmung': {
        name: 'Klemmprofil (ohne Silikon)',
        desc: 'Das Glas wird mit Klemmhaltern im Profil gehalten. Kein Bohren ins Glas n\u00f6tig. Abdeckprofile verdecken die Schrauben.',
        pro: ['Ohne Glasbohrung', 'Professionelle Optik', 'Glas austauschbar'],
        contra: ['Nur f\u00fcr 8 mm Glas', 'H\u00f6here Investition']
    }
};
    function filterProducts(state, list) {
        return (list || products).filter(function (p) {
            if (state.material && p.material !== state.material) return false;
            if (state.einbau && p.einbau !== state.einbau) return false;
            if (state.color && p.colors && p.colors.indexOf(state.color) === -1) return false;
            if (state.abschluss && p.abschluss && p.abschluss.indexOf(state.abschluss) === -1) return false;
            return true;
        });
    }

    global.MetallprofileData = {
        products: products,
        productImages: productImages,
        colorDefs: colorDefs,
        einbauDefs: einbauDefs,
        abschlussDefs: abschlussDefs,
        materialDefs: materialDefs,
        filterProducts: filterProducts
    };

})(window);