/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        arabic: ["Tajawal", "Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 19, 0.12)",
        glow: "0 20px 70px rgba(76, 175, 80, 0.24)",
      },
    },
  },
  plugins: [],
};
