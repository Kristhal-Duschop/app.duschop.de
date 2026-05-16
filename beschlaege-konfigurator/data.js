/* ============================================================
   BESCHLAEGE-KONFIGURATOR — Daten v2 (Phase 4)
   Hybrid: Live-Shopify-Fetch fuer Bestand/Preis/Bild,
           statische Annotations fuer Klassifizierung
   Wird vom Wizard in index.html geladen.
   ============================================================ */

(function (global) {
    'use strict';
    // products[]: Annotationen pro Shopify-handle.
    //   Live aus duschop.de (Collection beschlagsteile-...) bringt Title,
    //   Image, Preis und Tags mit. Was hier steht: Kategorie + Untertyp +
    //   manuell gepflegte Felder, die nicht aus Shopify-Daten ableitbar sind.
    const products = [

    // ===================== SCHARNIERE =====================

    // --- Pendeltuerband Glas-Wand ---
    {
        id: 'bellagio-gw-90',
        title: 'Bellagio Pendelt\u00fcrband 90\u00b0 Glas-Wand BEL344',
        handle: 'bellagio-pendelturband-90-glas-wand-anschraubplatte-einseitig-inkl-abdeckplatten-bel344',
        kategorie: 'scharnier',
        montage: 'glas-wand',
        typ: 'pendel',
        winkel: 90,
        hebeSenk: false,
        glasdicken: '8/10 mm',
        tragkraft: '50 kg',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt','graphit-poliert','graphit-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '78,15',
        priceMax: '139,90',
        desc: 'Eckiges Pendelt\u00fcrband, 50 kg Tragkraft, 8 oder 10 mm ESG. 11 Oberfl\u00e4chen.',
        serie: 'Bellagio'
    },
    {
        id: 'lugano-gw-90',
        title: 'Lugano Scharnier 90\u00b0 Glas-Wand Hebe-Senk LUG044',
        handle: 'lugano-duschband-90-glas-wand-mit-hebe-senk-funktion',
        kategorie: 'scharnier',
        montage: 'glas-wand',
        typ: 'pendel',
        winkel: 90,
        hebeSenk: true,
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','messing-matt','bronze-matt'],
        price: '59,90',
        priceMax: '98,90',
        desc: 'Fl\u00e4chenb\u00fcndiges Pendelt\u00fcrband mit Hebe-Senk-Funktion. Rundes Design.',
        serie: 'Lugano'
    },
    {
        id: 'nobiallo-gw-90',
        title: 'Nobiallo Pendelt\u00fcrband 90\u00b0 Glas-Wand Hebe-Senk',
        handle: 'pendelturband-mit-hebe-senk-wandscharnier',
        kategorie: 'scharnier',
        montage: 'glas-wand',
        typ: 'pendel',
        winkel: 90,
        hebeSenk: true,
        glasdicken: '8/10 mm',
        tragkraft: '50 kg',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '109,90',
        priceMax: '119,90',
        desc: 'Premium Pendelt\u00fcrband mit Hebe-Senk, 50 kg Tragkraft. Rundes Design.',
        serie: 'Nobiallo'
    },
    {
        id: 'como-gw-90',
        title: 'COMO Anschlagband 90\u00b0 Glas-Wand',
        handle: 'como-anschlagband-180-glas-glas-messing-massiv-8-10-mm-esg-verdeckte-verschraubung-eckiges-design-kopie',
        kategorie: 'scharnier',
        montage: 'glas-wand',
        typ: 'anschlag',
        winkel: 90,
        hebeSenk: false,
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '75,90',
        priceMax: '79,90',
        desc: 'Anschlagband (nur in eine Richtung \u00f6ffnend). Eckiges Messing-Design, verdeckte Verschraubung.',
        serie: 'COMO'
    },
    {
        id: 'emily-gw-180',
        title: 'Drehbares Wandprofil Emily Hebe-Senk 180\u00b0',
        handle: 'drehbares-duschtur-wandprofil-typ-emily',
        kategorie: 'scharnier',
        montage: 'glas-wand',
        typ: 'drehprofil',
        winkel: 180,
        hebeSenk: true,
        glasdicken: '6 mm',
        colors: ['chrom-poliert','schwarz-matt','messing-matt','silber-matt'],
        price: '179,90',
        priceMax: '199,90',
        desc: 'Drehbares Wandprofil f\u00fcr 6 mm ESG. 180\u00b0 Pendelt\u00fcr, Hebe-Senk. L\u00e4nge 1900 mm.',
        serie: 'Emily'
    },
    {
        id: 'nlo60-gw',
        title: 'Drehbares Wandprofil NLO60 eckig 8 mm',
        handle: 'drehbares-duschtuerwandprofil-nlo60-eckig-8mm',
        kategorie: 'scharnier',
        montage: 'glas-wand',
        typ: 'drehprofil',
        winkel: 180,
        hebeSenk: false,
        glasdicken: '8 mm',
        colors: ['chrom-poliert'],
        price: '179,00',
        desc: 'Eckiges Drehprofil f\u00fcr 8 mm Glas, L\u00e4nge 1900 mm. Pendelt\u00fcr-Funktion.',
        serie: 'NLO60'
    },

    // --- Pendeltuerband Glas-Glas ---
    {
        id: 'bellagio-gg-180',
        title: 'Bellagio Pendelt\u00fcrband 180\u00b0 Glas-Glas BEL380',
        handle: 'bellagio-pendelturband-180-glas-glas-farbe-bronze-geburstet-anschraubplatte-einseitig-inkl-abdeckplatten-bel380',
        kategorie: 'scharnier',
        montage: 'glas-glas',
        typ: 'pendel',
        winkel: 180,
        hebeSenk: false,
        glasdicken: '8/10 mm',
        tragkraft: '50 kg',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt','graphit-poliert','graphit-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '84,50',
        priceMax: '159,90',
        desc: 'Eckiges Pendelt\u00fcrband 180\u00b0, 50 kg Tragkraft. 11 Oberfl\u00e4chen.',
        serie: 'Bellagio'
    },
    {
        id: 'bellagio-gg-90',
        title: 'Bellagio Pendelt\u00fcrband 90\u00b0 Glas-Glas BEL392',
        handle: 'bellagio-pendelturband-90-glas-glas-anschraubplatte-einseitig-inkl-abdeckplatten-einstellbar-art-nr-bel392',
        kategorie: 'scharnier',
        montage: 'glas-glas',
        typ: 'pendel',
        winkel: 90,
        hebeSenk: false,
        glasdicken: '8/10 mm',
        tragkraft: '50 kg',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt'],
        price: '84,50',
        priceMax: '129,90',
        desc: 'Eckiges Pendelt\u00fcrband 90\u00b0, 50 kg. F\u00fcr Eck-Duschkabinen mit Glas-Glas-Verbindung.',
        serie: 'Bellagio'
    },
    {
        id: 'lugano-gg-180',
        title: 'Lugano Scharnier 180\u00b0 Glas-Glas Hebe-Senk LUG180',
        handle: 'lugano-duschband-180-glas-glas-mit-hebe-senk-funktion',
        kategorie: 'scharnier',
        montage: 'glas-glas',
        typ: 'pendel',
        winkel: 180,
        hebeSenk: true,
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','messing-matt','schwarz-matt','edelstahl-gebuerstet','bronze-matt'],
        price: '56,90',
        priceMax: '89,90',
        desc: 'Fl\u00e4chenb\u00fcndiges Pendelt\u00fcrband 180\u00b0 mit Hebe-Senk. Rundes Design.',
        serie: 'Lugano'
    },
    {
        id: 'nobiallo-gg-180',
        title: 'Nobiallo Pendelt\u00fcrband 180\u00b0 Glas-Glas Hebe-Senk',
        handle: 'pendelturband-mit-hebe-senk-funktion-glas-glas',
        kategorie: 'scharnier',
        montage: 'glas-glas',
        typ: 'pendel',
        winkel: 180,
        hebeSenk: true,
        glasdicken: '8/10 mm',
        tragkraft: '50 kg',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '119,90',
        priceMax: '129,90',
        desc: 'Premium Pendelt\u00fcrband mit Hebe-Senk, 50 kg. Glas-Glas 180\u00b0.',
        serie: 'Nobiallo'
    },
    {
        id: 'como-gg-180',
        title: 'COMO Anschlagband 180\u00b0 Glas-Glas',
        handle: 'bellagio-pendelturband-180-glas-glas-bel380-50-kg-8-10-mm-esg-kopie',
        kategorie: 'scharnier',
        montage: 'glas-glas',
        typ: 'anschlag',
        winkel: 180,
        hebeSenk: false,
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '79,90',
        priceMax: '89,90',
        desc: 'Anschlagband 180\u00b0 Glas-Glas. Eckiges Messing-Design, verdeckte Verschraubung.',
        serie: 'COMO'
    },

    // ===================== HALTEWINKEL =====================
    {
        id: 'bellagio-winkel-gw',
        title: 'Bellagio Winkelverbinder 90\u00b0 Glas-Wand BEL90S',
        handle: 'bellagio-winkelverbinder-glas-wand-90-bel90s',
        kategorie: 'haltewinkel',
        montage: 'glas-wand',
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt','graphit-poliert','graphit-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '47,20',
        priceMax: '71,90',
        desc: 'Massiver Messing-Winkelverbinder. 11 Oberfl\u00e4chen. Glasbohrung 16 mm erforderlich.',
        serie: 'Bellagio'
    },
    {
        id: 'lugano-winkel-gw',
        title: 'Lugano Winkelhalter 90\u00b0 Glas-Wand fl\u00e4chenb\u00fcndig LU90S',
        handle: 'lugano_wandwinkel',
        kategorie: 'haltewinkel',
        montage: 'glas-wand',
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '49,90',
        priceMax: '59,90',
        desc: 'Fl\u00e4chenb\u00fcndiger Winkelhalter, rundes Design. Wandschenkel innen- oder au\u00dfenseitig w\u00e4hlbar.',
        serie: 'Lugano'
    },
    {
        id: 'bellagio-winkel-gg',
        title: 'Bellagio Winkelverbinder 90\u00b0 Glas-Glas BEL090',
        handle: 'bellagio-winkelverbinder-90-glas-glas',
        kategorie: 'haltewinkel',
        montage: 'glas-glas',
        glasdicken: '8/10 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','weiss-matt','schwarz-matt','bronze-matt'],
        price: '59,90',
        priceMax: '79,90',
        desc: 'Massiver Glas-Glas-Winkelverbinder 90\u00b0. 70\u00d770\u00d774 mm, Glasbohrung 16 mm.',
        serie: 'Bellagio'
    },

    // ===================== TUERGRIFFE =====================

    // Rundgriffe
    {
        id: 'griff-rund-30',
        title: 'Duscht\u00fcrgriff rund \u00d8 30 mm \u2013 Messing, 11 Farben',
        handle: 'duschtuergriff-rund',
        kategorie: 'griff',
        grifftyp: 'rundgriff',
        glasdicken: '6\u201312 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt','graphit-poliert','graphit-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '22,50',
        priceMax: '39,90',
        desc: 'Runder Zylindergriff \u00d8 30 mm, Messing massiv. Alle 11 Bellagio-Oberfl\u00e4chen.',
        serie: 'Bellagio'
    },
    {
        id: 'griff-rund-35',
        title: 'Duscht\u00fcrgriff zylindrisch \u00d8 35 mm mit Rille',
        handle: 'dusch-tuergriff',
        kategorie: 'griff',
        grifftyp: 'rundgriff',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '26,50',
        priceMax: '36,50',
        desc: 'Messing verchromt, zylindrisch mit dekorativer Rille. Klassisches Design.',
        serie: ''
    },
    {
        id: 'griff-fluegel',
        title: 'Duscht\u00fcrgriff Fl\u00fcgelform',
        handle: 'dusch-turgriff-flugelform-art-nr-8297',
        kategorie: 'griff',
        grifftyp: 'rundgriff',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert'],
        price: '52,90',
        desc: 'Eleganter Griff in Fl\u00fcgelform. Chrom poliert, Messing.',
        serie: ''
    },
    {
        id: 'griff-kegel',
        title: 'Duscht\u00fcrgriff Kegelform',
        handle: 'dusch-tuergriff-kegelform',
        kategorie: 'griff',
        grifftyp: 'rundgriff',
        glasdicken: '6\u20138 mm',
        colors: ['chrom-poliert'],
        price: '36,50',
        desc: 'Konischer Griff in Kegelform. Messing verchromt.',
        serie: ''
    },

    // Eckige Griffe
    {
        id: 'griff-eckig-sdk300',
        title: 'Duscht\u00fcrgriff eckig SDK300 Style Premium 32\u00d732 mm',
        handle: 'duschturgriff-eckig-art-nr-sdk300',
        kategorie: 'griff',
        grifftyp: 'eckig',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt','graphit-poliert','graphit-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '30,90',
        priceMax: '49,90',
        desc: 'Moderner eckiger Griff 32\u00d732 mm, Messing massiv. Alle 11 Bellagio-Oberfl\u00e4chen.',
        serie: 'Bellagio'
    },
    {
        id: 'griff-quader',
        title: 'Duscht\u00fcrgriff Quader',
        handle: 'dusch-turgriff-quader-art-nr-0517',
        kategorie: 'griff',
        grifftyp: 'eckig',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert'],
        price: '42,50',
        desc: 'Quaderf\u00f6rmiger Griff mit markanter Optik. Messing verchromt.',
        serie: ''
    },
    {
        id: 'griff-eckig-40-beidseitig',
        title: 'Duschgriff eckig 40\u00d740 mm beidseitig',
        handle: 'duschgriff-eckig-40x40mm-beidseitig-glasdusche',
        kategorie: 'griff',
        grifftyp: 'eckig',
        glasdicken: '6\u201313,52 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '49,90',
        priceMax: '79,90',
        desc: 'Beidseitiger eckiger Griff 40\u00d740 mm. Durchgehend durch das Glas montiert.',
        serie: ''
    },

    // Knopfgriffe
    {
        id: 'knopf-alu-30',
        title: 'Duscht\u00fcrknopf Aluminium \u00d8 30 mm',
        handle: 'duschturknopf-aluminium-30mm',
        kategorie: 'griff',
        grifftyp: 'knopf',
        glasdicken: '6\u201312 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '14,90',
        priceMax: '19,90',
        desc: 'Kompakter Aluminium-Knopf \u00d8 30 mm. G\u00fcnstiger Einstieg.',
        serie: ''
    },
    {
        id: 'knopf-v2a-102',
        title: 'Duscht\u00fcrknopf V2A Edelstahl \u00d8 26 mm',
        handle: 'dusch-turknopf-v2a-in-schwarz-fur-8-12-mm-glasstarke',
        kategorie: 'griff',
        grifftyp: 'knopf',
        glasdicken: '8\u201312 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '19,50',
        priceMax: '29,50',
        desc: 'V2A Edelstahl-Knopf, massiv. In Schwarz, Chrom oder Edelstahl.',
        serie: ''
    },
    {
        id: 'knopf-4106',
        title: 'Duscht\u00fcrknopf \u00d8 25 mm Art. 4106',
        handle: 'dusch-tuerknopf-4106',
        kategorie: 'griff',
        grifftyp: 'knopf',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '23,50',
        priceMax: '35,90',
        desc: 'Kompakter Messing-Knopf \u00d8 25 mm. Klassisches Design.',
        serie: ''
    },
    {
        id: 'knopf-107',
        title: 'Duscht\u00fcrknopf \u00d8 35 mm Art. 107',
        handle: 'dusch-tuerknopf-107',
        kategorie: 'griff',
        grifftyp: 'knopf',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt'],
        price: '23,50',
        priceMax: '35,90',
        desc: 'Gr\u00f6\u00dferer Messing-Knopf \u00d8 35 mm. Angenehme Haptik.',
        serie: ''
    },
    {
        id: 'knopf-v2a-101',
        title: 'Duscht\u00fcrknopf V2A \u00d8 40 mm Art. 101',
        handle: 'dusch-tuerknopf-v2a-101',
        kategorie: 'griff',
        grifftyp: 'knopf',
        glasdicken: '6\u201310 mm',
        colors: ['edelstahl-poliert','edelstahl-gebuerstet'],
        price: '19,50',
        desc: 'Gro\u00dfer V2A Edelstahl-Knopf \u00d8 40 mm. Poliert oder geb\u00fcrstet.',
        serie: ''
    },
    {
        id: 'knopf-rund-40-beidseitig',
        title: 'Knopfgriff rund \u00d8 40 mm beidseitig',
        handle: 'knopfgriff-rund-40mm-beidseitig-glasdusche',
        kategorie: 'griff',
        grifftyp: 'knopf',
        glasdicken: '6\u201313,52 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '32,90',
        priceMax: '59,90',
        desc: 'Beidseitiger Knopfgriff \u00d8 40 mm. Durchgehend durch das Glas.',
        serie: ''
    },

    // Stangengriffe
    {
        id: 'stangengriff-19',
        title: 'Duschgriff Stangengriff 19\u00d719 mm',
        handle: 'duschgriff-stangengriff',
        kategorie: 'griff',
        grifftyp: 'stangengriff',
        glasdicken: '6\u201310 mm',
        colors: ['chrom-poliert','edelstahl-gebuerstet','schwarz-matt','weiss-matt','graphit-poliert','graphit-matt','messing-poliert','messing-matt','bronze-matt','kupfer-poliert','kupfer-matt'],
        price: '69,90',
        priceMax: '84,90',
        desc: 'Eckiger Stangengriff 19\u00d719 mm, Lochabstand 203 mm. 11 Oberfl\u00e4chen.',
        serie: 'Bellagio'
    },
    {
        id: 'griffstange-19-v2a',
        title: 'Edelstahl Griffstange \u00d8 19 mm beidseitig',
        handle: 'edelstahl-griffstange_19mm',
        kategorie: 'griff',
        grifftyp: 'stangengriff',
        glasdicken: '6\u201312 mm',
        colors: ['schwarz-matt','edelstahl-gebuerstet','edelstahl-poliert'],
        price: '39,90',
        priceMax: '149,90',
        desc: 'Beidseitige V2A Edelstahl-Griffstange \u00d8 19 mm. L\u00e4ngen 200\u20131000 mm.',
        serie: ''
    },

    // ===================== GRIFFMUSCHELN =====================
    {
        id: 'muschel-rund-verschraubt',
        title: 'Griffmuschel rund \u00d8 60 mm verschraubt',
        handle: 'griffmuschel-aus-edelstahl-fur-glasturen-o-60-mm-38-mm-mit-bohrung-verschraubt',
        kategorie: 'griffmuschel',
        befestigung: 'verschraubt',
        form: 'rund',
        glasdicken: '6\u201312 mm',
        colors: ['chrom-poliert','schwarz-matt','edelstahl-gebuerstet'],
        price: '25,90',
        priceMax: '39,90',
        desc: 'Runde Edelstahl-Griffmuschel zum Verschrauben. Glasbohrung erforderlich.',
        serie: ''
    },
    {
        id: 'muschel-rund-offen',
        title: 'Griffmuschel offen rund Edelstahl verschraubt',
        handle: 'griffmuschel-offen-rund-aus-edelstahl-zum-verschrauben',
        kategorie: 'griffmuschel',
        befestigung: 'verschraubt',
        form: 'rund',
        glasdicken: '6\u201312 mm',
        colors: ['schwarz-matt','chrom-poliert','edelstahl-gebuerstet'],
        price: '27,90',
        priceMax: '42,90',
        desc: 'Offene runde Griffmuschel aus V2A. Griffmulde oben offen.',
        serie: ''
    },
    {
        id: 'muschel-rund-klebend',
        title: 'Griffmuschel rund \u00d8 65 mm selbstklebend',
        handle: 'griffmuschel-aus-edelstahl-fur-glasturen-selbstklebend-o-65-mm-55-mm',
        kategorie: 'griffmuschel',
        befestigung: 'selbstklebend',
        form: 'rund',
        glasdicken: '6\u201312 mm',
        colors: ['schwarz-matt','chrom-poliert','edelstahl-gebuerstet'],
        price: '23,90',
        priceMax: '35,50',
        desc: 'Selbstklebende runde Griffmuschel. Keine Glasbohrung n\u00f6tig!',
        serie: ''
    },
    {
        id: 'muschel-eckig-verschraubt',
        title: 'Griffmuschel quadratisch 65 mm verschraubt',
        handle: 'griffmuschel-quadratisch-edelstahl-zum-verschrauben-o-65-45-mm',
        kategorie: 'griffmuschel',
        befestigung: 'verschraubt',
        form: 'eckig',
        glasdicken: '6\u201312 mm',
        colors: ['schwarz-matt','edelstahl-gebuerstet'],
        price: '36,90',
        priceMax: '68,90',
        desc: 'Quadratische Edelstahl-Griffmuschel zum Verschrauben. Beidseitig oder einseitig.',
        serie: ''
    },
    {
        id: 'muschel-eckig-klebend',
        title: 'Griffmuschel quadratisch selbstklebend V2A',
        handle: 'griffmuschel-quadratisch-selbstklebend-aus-v2a-edelstahl-fur-glasturen',
        kategorie: 'griffmuschel',
        befestigung: 'selbstklebend',
        form: 'eckig',
        glasdicken: '6\u201312 mm',
        colors: ['schwarz-matt','chrom-poliert','edelstahl-gebuerstet'],
        price: '29,90',
        priceMax: '36,90',
        desc: 'Selbstklebende quadratische Griffmuschel. Keine Glasbohrung n\u00f6tig!',
        serie: ''
    }
];

    // Handles, die vom Annotation-Sync uebersprungen werden sollen.
    // Diese 8 Produkte sind Duplikat-Eintraege des Stangengriffs (handle
    // 'duschgriff-stangengriff'), der schon als Hauptprodukt mit 11 Farben
    // annotiert ist. Statt 8 nutzlose Annotation-Eintraege anzulegen,
    // ueberspringt der Sync sie hier.
    const _syncSkip = [
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-schwarz-matt',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-bronze-geburstet',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-graphit',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-chrom-glanz',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-weiss',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-kupfer',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-goldfarbig',
        'duschgriff-stangengriff-19-x-19-mm-lochabstand-203-mm-edelstahl-geburstet'
    ];

    const productImages = {
    // Scharniere
    'bellagio-pendelturband-90-glas-wand-anschraubplatte-einseitig-inkl-abdeckplatten-bel344': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/bel344-ch-1.jpg?v=1773413917',
    'lugano-duschband-90-glas-wand-mit-hebe-senk-funktion': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/lug044l_-_ch_-12_d4e82fdb-3fb3-4411-9024-430843eba5c9.jpg?v=1773418375',
    'pendelturband-mit-hebe-senk-wandscharnier': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/N0B044RCH.png?v=1773417835',
    'como-anschlagband-180-glas-glas-messing-massiv-8-10-mm-esg-verdeckte-verschraubung-eckiges-design-kopie': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Como_Wand_1.png?v=1774027644',
    'drehbares-duschtur-wandprofil-typ-emily': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/emily_2.png?v=1773932672',
    'drehbares-duschtuerwandprofil-nlo60-eckig-8mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Gemini_Generated_Image_8dwtdp8dwtdp8dwt_5da10c55-43fe-4d10-86d4-c8e6e8aa9b7a.png?v=1776165503',
    'bellagio-pendelturband-180-glas-glas-farbe-bronze-geburstet-anschraubplatte-einseitig-inkl-abdeckplatten-bel380': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BEL_Glas-Glas_6.png?v=1774028817',
    'bellagio-pendelturband-90-glas-glas-anschraubplatte-einseitig-inkl-abdeckplatten-einstellbar-art-nr-bel392': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/BEL392CH_f112a662-5c46-4907-894c-c2f89d2110e1.png?v=1773418312',
    'lugano-duschband-180-glas-glas-mit-hebe-senk-funktion': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/lug180l_-_ch_-12_66d6c33b-e3ad-4f4e-9f46-766ee510fb70.jpg?v=1773417291',
    'pendelturband-mit-hebe-senk-funktion-glas-glas': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/N0B044RCH.png?v=1773417835',
    'bellagio-pendelturband-180-glas-glas-bel380-50-kg-8-10-mm-esg-kopie': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Como_Glas_1.png?v=1774028226',

    // Haltewinkel
    'bellagio-winkelverbinder-glas-wand-90-bel90s': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/bel90s-ch-1_69a2c54a-6e0c-4352-bb05-d48d2612174d.jpg?v=1773414789',
    'lugano_wandwinkel': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/lug90sa-ch-2_4fd78b66-e8f9-49aa-ad99-df7ab0c1508b.jpg?v=1773416819',
    'bellagio-winkelverbinder-90-glas-glas': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/bel090-ch-2.jpg?v=1773415342',

    // Tuergriffe
    'duschtuergriff-rund': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/EUSDK1-CH.jpg?v=1773413148',
    'dusch-tuergriff': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/6702_1.jpg?v=1768301345',
    'dusch-turgriff-flugelform-art-nr-8297': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/8297.jpg?v=1768299553',
    'dusch-tuergriff-kegelform': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0510.jpg?v=1768301576',
    'duschturgriff-eckig-art-nr-sdk300': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/SDK300CH.jpg?v=1773413198',
    'dusch-turgriff-quader-art-nr-0517': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/0517.jpg?v=1768301825',
    'duschgriff-eckig-40x40mm-beidseitig-glasdusche': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/eckig_40_ch_1.jpg?v=1773413264',
    'duschturknopf-aluminium-30mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/EUSDK2-CH.jpg?v=1773413322',
    'dusch-turknopf-v2a-in-schwarz-fur-8-12-mm-glasstarke': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/v2a_102_ch.jpg?v=1773413370',
    'dusch-tuerknopf-4106': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/4106.jpg?v=1768302053',
    'dusch-tuerknopf-107': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/107.jpg?v=1768302230',
    'dusch-tuerknopf-v2a-101': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/101.jpg?v=1768302419',
    'knopfgriff-rund-40mm-beidseitig-glasdusche': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/knopf_40_ch_1.jpg?v=1773413416',
    'duschgriff-stangengriff': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Stangengriff_CH_1.jpg?v=1773413460',
    'edelstahl-griffstange_19mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/53_1.jpg?v=1768302676',

    // Griffmuscheln
    'griffmuschel-aus-edelstahl-fur-glasturen-o-60-mm-38-mm-mit-bohrung-verschraubt': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Griffmuschel_rund-2_3.jpg',
    'griffmuschel-offen-rund-aus-edelstahl-zum-verschrauben': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Griffmuschel_ofen_1.jpg',
    'griffmuschel-aus-edelstahl-fur-glasturen-selbstklebend-o-65-mm-55-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Griffmuschel_einseitig_3.jpg',
    'griffmuschel-quadratisch-edelstahl-zum-verschrauben-o-65-45-mm': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Griffmuschel_beidseitig_eckig_6.jpg',
    'griffmuschel-quadratisch-selbstklebend-aus-v2a-edelstahl-fur-glasturen': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Griffmuschel_einseitig_eckig_7.jpg'
};

    const colorDefs = {
    'chrom-poliert': { name: 'Chrom poliert gl\u00e4nzend', gradient: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 25%, #f5f5f5 50%, #a8a8a8 75%, #d4d4d4 100%)', finish: 'Gl\u00e4nzend' },
    'edelstahl-gebuerstet': { name: 'Edelstahl geb\u00fcrstet matt', gradient: 'linear-gradient(135deg, #c8c4be 0%, #b5b0a8 25%, #d0ccc5 50%, #a8a39a 75%, #bfbab2 100%)', finish: 'Matt' },
    'edelstahl-poliert': { name: 'Edelstahl poliert', gradient: 'linear-gradient(135deg, #d6d2cc 0%, #bfbab3 25%, #e0dcd6 50%, #b0aaa2 75%, #ccc7c0 100%)', finish: 'Gl\u00e4nzend' },
    'silber-matt': { name: 'Silber matt', gradient: 'linear-gradient(135deg, #c5c5c5 0%, #b0b0b0 25%, #cbcbcb 50%, #a0a0a0 75%, #bdbdbd 100%)', finish: 'Matt' },
    'schwarz-matt': { name: 'Schwarz matt', gradient: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 25%, #333333 50%, #111111 75%, #262626 100%)', finish: 'Matt' },
    'messing-poliert': { name: 'Messing poliert (goldfarbig)', gradient: 'linear-gradient(135deg, #dcc260 0%, #c4a840 25%, #e8d070 50%, #b89a30 75%, #d0b850 100%)', finish: 'Gl\u00e4nzend' },
    'messing-matt': { name: 'Messing matt (goldfarbig)', gradient: 'linear-gradient(135deg, #c8a84e 0%, #b08f30 25%, #d4b55a 50%, #a08228 75%, #bfa042 100%)', finish: 'Matt' },
    'bronze-matt': { name: 'Bronze matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #8B6914 0%, #6d5010 25%, #9a7520 50%, #5c430d 75%, #7d5e12 100%)', finish: 'Matt' },
    'graphit-poliert': { name: 'Graphit poliert gl\u00e4nzend', gradient: 'linear-gradient(135deg, #5a5a5a 0%, #454545 25%, #666666 50%, #3a3a3a 75%, #525252 100%)', finish: 'Gl\u00e4nzend' },
    'graphit-matt': { name: 'Graphit matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #686868 0%, #555555 25%, #737373 50%, #484848 75%, #606060 100%)', finish: 'Matt' },
    'kupfer-poliert': { name: 'Kupfer poliert (Rose-Gold)', gradient: 'linear-gradient(135deg, #d4956a 0%, #c07d50 25%, #e0a57a 50%, #b07040 75%, #cc8d60 100%)', finish: 'Gl\u00e4nzend' },
    'kupfer-matt': { name: 'Kupfer matt geb\u00fcrstet', gradient: 'linear-gradient(135deg, #b8805a 0%, #a06840 25%, #c49068 50%, #905a32 75%, #af7850 100%)', finish: 'Matt' },
    'weiss-matt': { name: 'Wei\u00df matt', gradient: 'linear-gradient(135deg, #f5f2ef 0%, #e8e4e0 25%, #faf8f6 50%, #e0dcd8 75%, #f0ece8 100%)', finish: 'Matt' }
};

    const step1Defs = {
    scharnier: {
        title: 'Wie wird das Scharnier montiert?',
        subtitle: 'W\u00e4hlen Sie, ob die T\u00fcr an einer Wand oder an einer Glasscheibe befestigt wird.',
        options: [
            {
                value: 'glas-wand',
                name: 'Glas \u2013 Wand',
                desc: 'Das Scharnier verbindet die Glast\u00fcr mit einer festen Wand oder Nische. Die h\u00e4ufigste Variante.',
                meta: 'H\u00e4ufigste Montage',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><rect x="2" y="4" width="8" height="32" rx="1" fill="#e8e4df" stroke="#999"/><rect x="24" y="4" width="8" height="32" rx="1" fill="#d4eeff" stroke="#7ab8e0" stroke-dasharray="4 2"/><circle cx="18" cy="14" r="3" fill="#c8956c"/><circle cx="18" cy="26" r="3" fill="#c8956c"/></svg>'
            },
            {
                value: 'glas-glas',
                name: 'Glas \u2013 Glas',
                desc: 'Das Scharnier verbindet die Glast\u00fcr mit einer festen Glasscheibe. F\u00fcr freistehende Duschen.',
                meta: 'F\u00fcr freistehende Duschen',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none"><rect x="2" y="4" width="8" height="32" rx="1" fill="#d4eeff" stroke="#7ab8e0" stroke-width="2" stroke-dasharray="4 2"/><rect x="24" y="4" width="8" height="32" rx="1" fill="#d4eeff" stroke="#7ab8e0" stroke-width="2" stroke-dasharray="4 2"/><circle cx="18" cy="14" r="3" fill="#c8956c"/><circle cx="18" cy="26" r="3" fill="#c8956c"/></svg>'
            }
        ]
    },
    haltewinkel: {
        title: 'Wie wird der Winkel montiert?',
        subtitle: 'W\u00e4hlen Sie, ob der Winkel Glas mit Wand oder Glas mit Glas verbindet.',
        options: [
            {
                value: 'glas-wand',
                name: 'Glas \u2013 Wand',
                desc: 'Festglas wird \u00fcber den Winkel an einer Wand oder Nische gehalten.',
                meta: 'Nischenmontage',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><rect x="2" y="4" width="8" height="32" rx="1" fill="#e8e4df" stroke="#999"/><rect x="24" y="24" width="8" height="12" rx="1" fill="#d4eeff" stroke="#7ab8e0" stroke-dasharray="4 2"/><path d="M10 28 L24 28" stroke="#c8956c" stroke-width="3"/><path d="M10 28 L10 12" stroke="#c8956c" stroke-width="3"/></svg>'
            },
            {
                value: 'glas-glas',
                name: 'Glas \u2013 Glas',
                desc: 'Zwei Glasscheiben werden \u00fcber den Winkel im 90\u00b0-Winkel verbunden.',
                meta: 'Eckmontage',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none"><rect x="2" y="24" width="8" height="12" rx="1" fill="#d4eeff" stroke="#7ab8e0" stroke-width="2" stroke-dasharray="4 2"/><rect x="24" y="24" width="8" height="12" rx="1" fill="#d4eeff" stroke="#7ab8e0" stroke-width="2" stroke-dasharray="4 2"/><path d="M10 28 L24 28" stroke="#c8956c" stroke-width="3"/><path d="M10 28 L10 12" stroke="#c8956c" stroke-width="3"/></svg>'
            }
        ]
    },
    griff: {
        title: 'Welcher Grifftyp passt zu Ihnen?',
        subtitle: 'W\u00e4hlen Sie zwischen verschiedenen Griffformen f\u00fcr Ihre Duschglast\u00fcr.',
        options: [
            {
                value: 'rundgriff',
                name: 'Rundgriff',
                desc: 'Zylindrischer Griff in runder Form. Klassisch und zeitlos.',
                meta: 'Klassiker',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><rect x="14" y="6" width="12" height="28" rx="6"/></svg>'
            },
            {
                value: 'eckig',
                name: 'Eckiger Griff',
                desc: 'Griff mit eckigem/quadratischem Querschnitt. Modern und markant.',
                meta: 'Modern',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><rect x="12" y="6" width="16" height="28" rx="2"/></svg>'
            },
            {
                value: 'knopf',
                name: 'T\u00fcrknopf',
                desc: 'Kompakter Drehknopf. Platzsparend und dezent.',
                meta: 'Dezent & kompakt',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><circle cx="20" cy="20" r="10"/><circle cx="20" cy="20" r="4" fill="rgba(200,149,108,0.3)"/></svg>'
            },
            {
                value: 'stangengriff',
                name: 'Stangengriff',
                desc: 'L\u00e4ngerer Griff mit zwei Befestigungspunkten. Komfortabel und stabil.',
                meta: 'Premium',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><rect x="16" y="4" width="8" height="32" rx="4"/><line x1="12" y1="10" x2="28" y2="10" stroke-width="2"/><line x1="12" y1="30" x2="28" y2="30" stroke-width="2"/></svg>'
            }
        ]
    },
    griffmuschel: {
        title: 'Wie soll die Griffmuschel befestigt werden?',
        subtitle: 'Selbstklebend ist einfacher zu montieren, verschraubt ist stabiler.',
        options: [
            {
                value: 'verschraubt',
                name: 'Verschraubt',
                desc: 'Feste Montage mit Glasbohrung. Stabil und dauerhaft.',
                meta: 'Stabiler Halt',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><ellipse cx="20" cy="20" rx="12" ry="8"/><circle cx="14" cy="20" r="2" fill="#c8956c"/><circle cx="26" cy="20" r="2" fill="#c8956c"/></svg>'
            },
            {
                value: 'selbstklebend',
                name: 'Selbstklebend',
                desc: 'Ohne Bohren! Einfach aufkleben. Ideal f\u00fcr nachtr\u00e4gliche Montage.',
                meta: 'Ohne Bohren',
                icon: '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="#c8956c" stroke-width="2.5"><ellipse cx="20" cy="20" rx="12" ry="8"/><path d="M14 16 L26 16" stroke-width="1.5" stroke-dasharray="3 2"/></svg>'
            }
        ]
    }
};
    global.BeschlaegeData = {
        products: products,
        productImages: productImages,
        colorDefs: colorDefs,
        step1Defs: step1Defs
    };

})(window);