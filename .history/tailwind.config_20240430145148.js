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
        about: "0 0 50px 5px black",
        picture: " 0 -5px  10px 0px #ffffff30",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
      text: ["Nanum Gothic Coding", "monospace"],
    },
  },
  plugins: [],
};
