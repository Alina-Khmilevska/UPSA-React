/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    colors: {
      mainText: "#243541",
      mint: "#AFDAB6",
      lemon: "#FFE671",
      input: "#DAFFE233",
      inputBorder: "#9BC6A3",
    },
    borderRadius: {
      inputRadius: '30px',
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [require("flowbite/plugin"),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1700px',
          },
        }
      })
    }
  ],
};
