// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import "@/styles/main.scss";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  ssr: true,
  theme: {
    defaultTheme: "light",
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
