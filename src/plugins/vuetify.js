/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          mainBackground: "#ffffff",
          secondaryBackground: "#1a237e",
          cardBackground: "#f5f5f5",
          footerBackground: "#f8f9f9",
          mainText: "#000000",
          secondaryText: "#5b8fb9",
          offText: "#ffffff",
          navLinks: "#6495ed",
          switch: "#ffffff",
          spaceGreen: "#01411C",
        },
      },
      dark: {
        colors: {
          mainBackground: "#212121",
          secondaryBackground: "#232a3b",
          cardBackground: "#232a3b",
          footerBackground: "#181a20",
          mainText: "#e0e0e0",
          secondaryText: "#bb86fc",
          offText: "#121212",
          navLinks: "#bb86fc",
          switch: "#ffffff",
          spaceGreen: "#0f0",
        },
      },
    },
  },
});
