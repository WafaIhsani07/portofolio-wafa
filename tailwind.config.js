/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        navy: "#0F1B2D",
        gold: "#C9A24D",
        cream: "#F8F5ED",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(15, 27, 45, 0.08)",
      },
    },
  },
  plugins: [],
};
