import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
// TODO исправить ошибку с importom
import "quasar/src/css/index.sass";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import quasarUserOptions from "./plugins/quasar";
import i18n from "@/plugins/i18n";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia()).use(router).use(vuetify).use(i18n).use(Quasar, {
  plugins: {
    Notify,
  },
});

app.mount("#app");
