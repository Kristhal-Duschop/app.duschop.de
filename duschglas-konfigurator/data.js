/* DUSCHGLAS-KONFIGURATOR — Daten v1 */
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
        title: 'SGG Timeless Planiclear \u2013 Antikorrosions-Duschglas ESG',
        handle: 'anti-korrosionsglas-sgg-timeless-planiclear-korrosionsbestandiges-esg-fur-duschtrennwande',
        type: 'glas',
        glasoptik: 'klar',
        qualitaet: 'antikorrosion',
        glasdicken: ['8', '10'],
        price: '279,00',
        desc: 'Korrosionsbest\u00e4ndiges ESG von Saint-Gobain. Widersteht Glaskorrosion (Blindwerden) dauerhaft. Breite 200\u20131200 mm, 8 oder 10 mm.',
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
        id: 'motivglas-paimu',
        title: 'ESG Motivglas Serie Paimu \u2013 Lasertechnologie',
        handle: 'esg-sicherheitsglas-fur-duschen-mit-motiv-oder-bild-mittels-lasertechnologie-uber-40-motive-zur-auswahl-kopie',
        type: 'glas',
        glasoptik: 'motiv',
        qualitaet: 'serie-paimu',
        glasdicken: ['8'],
        price: '699,00',
        desc: 'Duschglas mit individuellem Motiv per Lasertechnologie. Serie Paimu: Wasser- und Naturmotive. 8 mm ESG, ab 500 mm Breite.',
        isMain: true
    },
    {
        id: 'motivglas-makai',
        title: 'ESG Motivglas Serie Makai \u2013 Lasertechnologie',
        handle: 'duschglas_mit_motiv',
        type: 'glas',
        glasoptik: 'motiv',
        qualitaet: 'serie-makai',
        glasdicken: ['8'],
        price: '699,00',
        desc: 'Duschglas mit individuellem Motiv per Lasertechnologie. Serie Makai: Florale und abstrakte Designs. 8 mm ESG, ab 500 mm Breite.',
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
    {
        id: 'restposten-klarglas',
        title: 'Restposten Kristhal Duschglas 8 mm Klarglas, 1437 \u00d7 2053 mm',
        handle: 'restposten-kristhal-duschglas-klarglas-durchsichtig-fur-duschtrennwande',
        type: 'glas',
        glasoptik: 'klar',
        qualitaet: 'standard',
        glasdicken: ['8'],
        price: '329,00',
        priceOld: '479,00',
        desc: 'Sonderpreis: Kristhal Duschglas 8 mm, 1437 \u00d7 2053 mm. Sofort lieferbar, solange Vorrat reicht.',
        isMain: false,
        isSale: true
    }
];

    const productImages = {
    'sicherheitsglas-esg-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/ESG.png?v=1768485378',
    'anti-korrosionsglas-sgg-timeless-planiclear-korrosionsbestandiges-esg-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Timeless_1_1978fdaa-4e7d-42a4-8c29-ecdebfd656b8.png?v=1767099231',
    'kristhal-satinato-einscheiben-sicherheitsglas-esg-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Satinato_Milchglas_2.png?v=1746638054',
    'duschglas_mit_motiv': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Lasermotiv_b2761e21-0f3d-4723-8186-3145bdecae94.jpg?v=1769002885',
    'esg-sicherheitsglas-fur-duschen-mit-motiv-oder-bild-mittels-lasertechnologie-uber-40-motive-zur-auswahl-kopie': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Lasermotiv_27.jpg?v=1768647224',
    'easyclean-glasbeschichtung': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Easy-Clean_2_8c1f39d4-2998-4cd0-b66d-1c6b5b148088.png?v=1773563753',
    'mehrpreis-fur-weissglas-nahezu-farbneutrales-glas-ohne-grunstich': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/Weissglas_2.png?v=1767100026',
    'restposten-kristhal-duschglas-klarglas-durchsichtig-fur-duschtrennwande': 'https://cdn.shopify.com/s/files/1/0936/3439/6483/files/esg-glas-8mm_2a6c2.png'
};

    const qualitaetDefs = {
    'standard': {
        name: 'Standard ESG',
        desc: 'Hochwertiges Einscheiben-Sicherheitsglas (ESG), thermisch vorgespannt nach DIN EN 12150. Made in Germany.',
        info: 'Standard-ESG bietet 5-fache Biegefestigkeit gegen\u00fcber normalem Glas und sicheres Bruchverhalten. F\u00fcr die allermeisten Anwendungen die richtige Wahl.'
    },
    'antikorrosion': {
        name: 'Antikorrosionsglas (SGG Timeless)',
        desc: 'Premium-Glas von Saint-Gobain mit dauerhaftem Korrosionsschutz. Verhindert das gef\u00fcrchtete \u201eBlindwerden\u201c der Glasoberfl\u00e4che.',
        info: 'Glaskorrosion entsteht durch Kalk und Feuchtigkeit und l\u00e4sst Glas mit der Zeit milchig-stumpf wirken. SGG Timeless Planiclear ist dagegen dauerhaft gesch\u00fctzt \u2013 die Premium-Wahl f\u00fcr langj\u00e4hrige Klarheit.'
    },
    'serie-paimu': {
        name: 'Serie Paimu',
        desc: 'Wasser- und Naturmotive \u2013 dynamische Designs inspiriert von Wellen, Str\u00f6mungen und organischen Formen.',
        info: 'Die Serie Paimu umfasst \u00fcber 40 verschiedene Motive, die per Lasertechnologie dauerhaft in das Glas eingearbeitet werden. Das Motiv ist beidseitig sichtbar.'
    },
    'serie-makai': {
        name: 'Serie Makai',
        desc: 'Florale und abstrakte Designs \u2013 elegante Muster von Bl\u00e4ttern, Blumen bis zu modernen Grafiken.',
        info: 'Die Serie Makai bietet \u00fcber 40 Designmotive f\u00fcr ein individuelles Badezimmer. Jedes Motiv wird per Lasertechnologie dauerhaft in das ESG-Glas eingearbeitet.'
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