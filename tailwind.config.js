module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        bgr: '#BBCFDF',
        bttl: '#456276',
        bl: '#64829F',
        bd: '#456276',
        txt: '#6A6A6A',
        txt2: '#4B667A'
  
      },
      fontFamily: {
        heads:['JoannaSans'],
        text:['JoannaSansnor'],
        text2:['Montserrat']
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
