/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greenBlack: "#0B1517",
        green: "#A6977C",
        white: "#FCFEFF",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
    },
  },
  plugins: [],
};
