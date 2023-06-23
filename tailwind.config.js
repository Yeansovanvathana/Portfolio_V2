/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D9D9D9",
          200: "#EBEBEB",
        },
        secondary: {
          100: "#bdc3c7",
          200: "#2c3e50",
          300: "#C39D87",
          400: "#97B0A9",
        },
      },
      fontFamily: {
        lekton: ["Lekton"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        G: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
