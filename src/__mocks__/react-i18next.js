const en = require("../locales/en.json")

module.exports = {
  useTranslation: () => ({
    t: (key, opts) => {
      // Naive plural/count handling; falls back to flat key lookup
      if (opts && typeof opts.count !== "undefined") {
        const value = en[key]
        if (typeof value === "string") {
          return value.replace("{{count}}", String(opts.count))
        }
      }
      return en[key] || key
    },
    i18n: { changeLanguage: () => Promise.resolve() },
  }),
  Trans: ({ children }) => children,
  initReactI18next: { type: "3rdParty", init: () => {} },
}
