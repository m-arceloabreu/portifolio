/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'primary': '#9000FF',
      'secondary': '#79FDAE',
      'white': '#fff',
      'black': '#000000'
    },
    extend: {
      fontFamily:{
        museo:['var(--font-museo-bolder)'],
        lato:['var(--font-lato)']
      }
    },
  },
  plugins: [],
}
