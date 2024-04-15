/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5847eb",
        paleBlue: "hsl(236, 100%, 87%)",
        darkBlue: "hsl(235, 46%, 20%)",
        lightRed: "hsl(15, 100%, 70%)",
      },
    },
  },
  plugins: [],
};
