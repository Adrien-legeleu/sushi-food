/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greenBlack: "#0B1517",
      },
      colors: {
        green: "#A6977C",
        whiteTitle: "#FCFEFF",
        whiteText: "#FCFEFFC3",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
    },
  },
  plugins: [],
};
