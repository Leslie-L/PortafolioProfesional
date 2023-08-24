/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monserrat': ['Montserrat'],
        'bebas':['Bebas Neue']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'blue': '#224769',
        'pink': '#BD8787',
        'beige': '#D6D6BD',
        'orange': '#FA8C29',
      },
    },
  },
  plugins: [],
}

