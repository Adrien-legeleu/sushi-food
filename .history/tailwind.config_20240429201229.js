/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greenBlack: "#0B1517",
        red: "#DD2B2D",
      },
      colors: {
        green: "#A6977C",
        red: "#DD2B2D",
        whiteTitle: "#FCFEFF",
        whiteText: "#FCFEFFD5",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
      text: ["Nanum Gothic Coding", "monospace"],
    },
  },
  plugins: [],
};
