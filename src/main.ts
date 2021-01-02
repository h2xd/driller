import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia as installPinia } from "pinia";

createApp(App)
  .use(installPinia())
  .use(router)
  .mount("#app");
