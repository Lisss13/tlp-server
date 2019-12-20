const NextI18Next = require("next-i18next/dist/commonjs").default

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["ru"],
  localeSubpaths: "foreign",
})
