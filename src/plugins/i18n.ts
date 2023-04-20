import { createI18n } from "vue-i18n";
import localeRu from "@/locales/ru.json";
import localeEn from "@/locales/en.json";

export default createI18n({
  locale: "ru",
  fallBackLocale: "ru",
  messages: {
    ru: localeRu,
    en: localeEn,
  },
});
