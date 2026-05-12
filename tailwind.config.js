/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
      colors: {
        brand: { DEFAULT: "#1a1a1a", light: "#f5f5f0" },
        accent: "#c9a96e",
      },
    },
  },
  plugins: [],
};
