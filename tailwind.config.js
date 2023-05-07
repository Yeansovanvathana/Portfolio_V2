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
      },
      fontFamily: {
        lekton: ["Lekton"],
      },
    },
  },
  plugins: [],
};
