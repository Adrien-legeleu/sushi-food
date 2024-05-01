/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greenBlack: "#0B1517",
        redBG: "#DD2B2D",
      },
      colors: {
        green: "#A6977C",
        red: "#DD2B2D",
        whiteTitle: "#FCFEFF",
        whiteText: "#FCFEFFD5",
      },
      boxShadow: {
        about: "0 -10px 40px 10px #0C0D11",
        picture: " 0 -8px  80px 0px #ffffffC2",
        menu: "0 0 30px 30px #000000B6",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
      text: ["Nanum Gothic Coding", "monospace"],
    },
  },
  plugins: [],
};
