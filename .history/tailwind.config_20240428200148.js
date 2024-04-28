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
