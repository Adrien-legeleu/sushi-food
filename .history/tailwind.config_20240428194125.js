/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greenBlack: "#0B1517",
        green: "#0B1517",
        white: "#0B1517",
      },
    },
    fontFamily: {
      title: ["Kaushan Script", "cursive"],
    },
  },
  plugins: [],
};
