// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import "@/styles/main.scss";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  ssr: true,
  theme: {
    defaultTheme: "light",
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
