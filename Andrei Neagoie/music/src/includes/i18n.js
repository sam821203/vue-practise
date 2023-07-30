import { createI18n } from 'vue-i18n'
import en from "@/locales/en.json"
import zhTw from "@/locales/zh-tw.json"

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    zhTw,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency", currency: "USD",
      }
    },
    ja: {
      currency: {
        style: "currency", currency: "JPY",
      }
    },
  }
})