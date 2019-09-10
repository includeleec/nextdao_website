const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    defaultLanguage: 'zh',
    otherLanguages: ['en'],
    localeSubpaths: {
        en: 'en',
        zh: 'zh'
    }
});