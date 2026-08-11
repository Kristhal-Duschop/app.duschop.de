/* DUSCHGLAS-KONFIGURATOR, Daten v1 */
(function (global) {
    'use strict';

    const products = [
    {
        id: 'esg-klarglas',
        title: 'ESG Klarglas f\u00fcr Duschen \u2013 Sicherheitsglas nach Ma\u00df',
        handle: 'sicherheitsglas-esg-fur-duschtrennwande',
        type: 'glas',
        glasoptik: 'klar',
        qualitaet: 'standard',
        glasdicken: ['6', '8', '10'],
        price: '219,00',
        desc: 'Transparentes ESG-Sicherheitsglas nach Ma\u00df. Breite 200\u20131200 mm, H\u00f6he 2000/2100 mm. 6, 8 oder 10 mm Glasdicke. Made in Germany.',
        isMain: true,
        highlight: true
    },
    {
        id: 'antikorrosionsglas',
        title: 'Antikorrosionsglas mit Nano-Versiegelung und Lotus-Effekt',
        handle: 'anti-korrosionsglas-mit-nano-veredelung',
        type: 'glas',
        glasoptik: 'klar',
        qualitaet: 'antikorrosion',
        glasdicken: ['8'],
        price: '279,00',
        desc: 'Antikorrosions-ESG mit werkseitiger Nano-Versiegelung, Wasser perlt ab. 10 Jahre Garantie. Breite 200 bis 1400 mm, H\u00f6he 2000/2100 mm, 8 mm.',
        isMain: true,
        highlight: true
    },
    {
        id: 'satinato-milchglas',
        title: 'Kristhal Satinato Milchglas (ESG) f\u00fcr Duschtrennw\u00e4nde',
        handle: 'kristhal-satinato-einscheiben-sicherheitsglas-esg-fur-duschtrennwande',
        type: 'glas',
        glasoptik: 'satiniert',
        qualitaet: 'standard',
        glasdicken: ['6', '8', '10'],
        price: '259,00',
        desc: 'Blickdichtes Satinato-Glas mit samtiger Oberfl\u00e4che. Breite 200\u20131400 mm, H\u00f6he 2000/2100 mm. 6, 8 oder 10 mm. Made in Germany.',
        isMain: true,
        highlight: true
    },
    {
        id: 'motivglas',
        title: 'Designduschglas mit Lasergravur, \u00fcber 40 Motive',
        handle: 'duschglas_mit_motiv',
        type: 'glas',
        glasoptik: 'motiv',
        qualitaet: 'motiv',
        glasdicken: ['8'],
        price: '699,00',
        desc: 'Duschglas mit individuellem Motiv per Lasertechnologie, \u00fcber 40 Motive von floral bis abstrakt. 8 mm ESG, ab 500 mm Breite.',
        isMain: true
    },
    {
        id: 'easyclean',
        title: 'Easyclean Nanobeschichtung f\u00fcr Duschglas',
        handle: 'easyclean-glasbeschichtung',
        type: 'veredelung',
        glasoptik: 'alle',
        qualitaet: 'alle',
        price: '39,00',
        desc: 'Nano-Oberfl\u00e4chentechnologie f\u00fcr dauerhaften Glanz. Werksseitig aufgebracht. Wasser und Schmutz perlen ab.',
        isMain: false
    },
    {
        id: 'weissglas',
        title: 'Mehrpreis f\u00fcr Wei\u00dfglas (farbneutral ohne Gr\u00fcnstich)',
        handle: 'mehrpreis-fur-weissglas-nahezu-farbneutrales-glas-ohne-grunstich',
        type: 'veredelung',
        glasoptik: 'klar',
        qualitaet: 'alle',
        price: '79,00',
        desc: 'Nahezu farbneutrales Glas ohne den typischen Gr\u00fcnstich. Maximale Klarheit und Brillanz f\u00fcr anspruchsvolle Badgestaltung.',
        isMain: false
    },
];

    const productImages = {
    'sicherheitsglas-esg-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/ESG.png?v=1768485378',
    'anti-korrosionsglas-mit-nano-veredelung': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/vetroShower.png?v=1777109177',
    'kristhal-satinato-einscheiben-sicherheitsglas-esg-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Satinato_Milchglas_2.png?v=1746638054',
    'duschglas_mit_motiv': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Lasermotiv_b2761e21-0f3d-4723-8186-3145bdecae94.jpg?v=1769002885',
    'easyclean-glasbeschichtung': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Easy-Clean_2_8c1f39d4-2998-4cd0-b66d-1c6b5b148088.png?v=1773563753',
    'mehrpreis-fur-weissglas-nahezu-farbneutrales-glas-ohne-grunstich': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Weissglas_2.png?v=1767100026',
    'restposten-kristhal-duschglas-klarglas-durchsichtig-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/esg-glas-8mm_2a6c2aaf-d737-4940-b54d-3319650d2d00.jpg?v=1767100408'
};

    const qualitaetDefs = {
    'standard': {
        name: 'Standard ESG',
        desc: 'Hochwertiges Einscheiben-Sicherheitsglas (ESG), thermisch vorgespannt nach DIN EN 12150. Made in Germany.',
        info: 'Standard-ESG bietet 5-fache Biegefestigkeit gegen\u00fcber normalem Glas und sicheres Bruchverhalten. F\u00fcr die allermeisten Anwendungen die richtige Wahl.'
    },
    'antikorrosion': {
        name: 'Antikorrosionsglas mit Nano-Versiegelung',
        desc: 'Premium-Glas mit dauerhaftem Korrosionsschutz und zus\u00e4tzlicher Nano-Versiegelung. Verhindert das gef\u00fcrchtete \u201eBlindwerden\u201c der Glasoberfl\u00e4che.',
        info: 'Glaskorrosion entsteht durch Kalk und Feuchtigkeit und l\u00e4sst Glas mit der Zeit milchig-stumpf wirken. Dieses Glas ist dagegen dauerhaft gesch\u00fctzt, dazu perlt Wasser auf der nanoversiegelten Seite ab. 10 Jahre Garantie.'
    },
    'motiv': {
        name: 'Designglas mit Lasergravur',
        desc: '\u00dcber 40 Motive, von floral \u00fcber abstrakt bis zu Wasser- und Naturmustern, dauerhaft ins Glas eingearbeitet.',
        info: 'Das Motiv wird per Lasertechnologie dauerhaft in das ESG-Glas eingearbeitet und ist beidseitig sichtbar. Die Motivwahl treffen Sie nach der Bestellung gemeinsam mit uns.'
    }
};

    const veredelungDefs = {
    'easyclean': {
        name: 'Easyclean Nanobeschichtung',
        desc: 'Nano-Beschichtung wird werksseitig aufgebracht. Wasser perlt ab, Kalk und Seifenreste haften kaum. Deutlich weniger Reinigungsaufwand.',
        price: '39,00',
        info: 'Die Easyclean-Beschichtung versiegelt die Glasoberfl\u00e4che mit einer unsichtbaren Nano-Schicht. Das Ergebnis: Wasser und Schmutz perlen ab, das Glas bleibt l\u00e4nger sauber.'
    },
    'weissglas': {
        name: 'Wei\u00dfglas-Upgrade (OptiWhite)',
        desc: 'Nahezu farbneutrales Glas ohne den typischen Gr\u00fcnstich von Standard-Floatglas. Maximale Transparenz und Brillanz.',
        price: '79,00',
        info: 'Normales Glas hat durch seinen Eisenoxidgehalt einen leichten Gr\u00fcnstich, der besonders an den Kanten sichtbar wird. Wei\u00dfglas (OptiWhite) reduziert diesen Effekt auf ein Minimum.'
    },
    'keine': {
        name: 'Keine Veredelung',
        desc: 'Ihr Duschglas ohne zus\u00e4tzliche Veredelung. Nat\u00fcrlich trotzdem hochwertiges ESG-Sicherheitsglas.',
        price: null,
        info: null
    }
};

    function filterProducts(state, list) {
        return (list || products).filter(function (p) {
            if (state.glasoptik && p.glasoptik !== state.glasoptik && p.glasoptik !== 'alle') return false;
            if (state.qualitaet && p.qualitaet !== state.qualitaet && p.qualitaet !== 'alle') return false;
            return true;
        });
    }

    global.DuschglasData = {
        products: products,
        productImages: productImages,
        qualitaetDefs: qualitaetDefs,
        veredelungDefs: veredelungDefs,
        filterProducts: filterProducts
    };
})(window);
