/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mainText: "#243541",
      mint: "#AFDAB6",
      lemon: "#FFE671",
    },
  },
  plugins: [require("flowbite/plugin")],
};
