import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const translation = require("./translation.json")

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translation,
    lng: "ru",

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

// eslint-disable-next-line  import/no-default-export
export default i18n
