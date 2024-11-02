import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    colors: {
      transparent: "#00000000",
      dark: {
        "normal-text": "#e5edf2",
        bg: "#101010",
        "bg-lighter": "#231f1d",
        "header-text": "#a1d94f",
        "sub-header-text": "#cdbff0",
      },
    },
    extend: {
      fontSize: {
        md: "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
