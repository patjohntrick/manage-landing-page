module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'be': ['Be Vietnam Pro', 'sans-serif']
      },
      colors: {
        'title': '#242d52',
        'paragraph': '#9095a7',
        'button': '#f25f3a',
        'button-text': 'hsl(0, 0%, 98%)',
        'button-shadow': 'rgba(242, 95, 58, .5)',
      }
    },
  },
  plugins: [],
}
