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
      bottomBackground: "#DAFFE2",
      inputBorder: "#9BC6A3",
      greenFooter: "#5F8A75",
      darkGreen: "#082D17",
    },
    borderRadius: {
      inputRadius: '30px',
      mainRadius: '36px',
    },
    fontFamily: {
      alexandria: ['Alexandria', 'sans-serif'],
    },
    boxShadow: {
      formInput: '-1px 1px 4px 0px rgba(0, 0, 0, 0.25)'
    },
    fontSize: {
      'title': '70px',
      'subtitle': '40px',
      'body': '24px',
      'input': '20px',
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