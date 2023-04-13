import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // "@": path.resolve(__dirname, "src"),
    },
  },
});
