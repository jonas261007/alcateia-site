/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],

  theme: {
    backgroundImage: {
      img_bg_hero: "url('../src/images/logo.png')",
    },
    container: {
      center: "true",
    },
    extend: {
      colors: {
        color1: "#09090B",
        color2: "#7690B6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
