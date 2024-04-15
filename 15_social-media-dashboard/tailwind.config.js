/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightGreen: "#1cb58a",
        brightRed: "#db404a",
        facebook: "#1a8ef5",
        twitter: "#1ca0f2",
        youtube: "#c40329",
        // dark mode
        veryDarkBlue: "hsl(230, 17%, 14%)",
        topBgBlue: "hsl(232, 19%, 15%)",
        darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        desaturatedBlue: "hsl(228, 34%, 66%)",
        white: "hsl(0, 0%, 100%)",
        // light mode
        veryPaleBlue: "hsl(225, 100%, 98%)",
        lightGrayishBlue: "hsl(227, 47%, 96%)",
        darkGrayishBlue: "hsl(228, 12%, 44%)",
        veryDarkBlue: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
