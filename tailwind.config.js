/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Element: "var(--Element)",
        Background: "var(--Background)",
        Text: "var(--Text)",
        Input: "var(--Input)",
      },
      fontFamily: {
        NunitoSans: ["NunitoSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
