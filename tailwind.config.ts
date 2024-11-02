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
        "bg-secondary": "#2c1aa1",
        "bg-lighter": "#231f1d",
        "header-text": "#a1d94f",
        "sub-header-text": "#cdbff0",
      },
    },
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            top: "-50px",
          },
          "100%": {
            top: "0px",
          },
        },
        "slide-up": {
          "0%": {
            bottom: "-50px",
          },
          "100%": {
            bottom: "0px",
          },
        },
      },
      fontSize: {
        md: "1rem",
      },
      animation: {
        "slide-down": "slide-down 0.5s 1",
        "slide-up": "slide-up 0.5s 1",
      },
    },
  },
  plugins: [],
} satisfies Config;
