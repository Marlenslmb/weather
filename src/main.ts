import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import quasarUserOptions from "./plugins/quasar";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia()).use(router).use(vuetify).use(Quasar, quasarUserOptions);

app.mount("#app");
