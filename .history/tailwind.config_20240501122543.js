/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
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
        picture: " 0 -8px  80px 0px #ffffff30",
        menu: "0 0 30px 30px #000000A2",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
      text: ["Nanum Gothic Coding", "monospace"],
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "0 2px 4px var(--tw-shadow-color)",
      lg: "0 8px 16pxblack",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
