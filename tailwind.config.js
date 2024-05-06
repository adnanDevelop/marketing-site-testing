/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        '1xl': '0px 17px 44px rgba(179, 179, 179, 0.25)',
      }
    },
    colors: {
      'blue': "#020332",
      'sky': {
        300: "#9ECEE7",
        500: "#2AABE1",
        900: "#146C94",
      },
      'white': "#FFFFFF",
      'light-white': "#F9F9F9",
      'soft-white': "#EEEEEE",
      'black': "#000000",
      'gray': '#797979',

    },

    fontFamily: {
      'primary': ['Plus Jakarta Sans', "sans-serif"],
      'secondary': ['Poppins', 'sans-serif'],
      'heading': ['Montserrat', 'sans-serif'],
      'blog': ['Nunito Sans', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

