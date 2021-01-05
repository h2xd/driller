import { createApp } from "vue";
import { createPinia as installPinia } from "pinia";
import { createI18n } from "vue-i18n";

import "./registerServiceWorker";
import router from "./router";

import App from "./App.vue";
import { allTranslations } from "@/translations";
import { loadFromLocalStorage } from "@/utils/localStorage";

const ls = loadFromLocalStorage("locale", { value: "en" });

const i18n = createI18n({
  locale: ls.value,
  fallbackLocale: ls.value,
  messages: allTranslations
});

createApp(App)
  .use(installPinia())
  .use(router)
  .use(i18n)
  .mount("#app");
