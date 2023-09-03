/* @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{html,js}"],
  content: ["./*.{html,js}"],
  theme: {
    // screen: {
    //   '1050px'
    // },
    fontFamily: {
      'inter': ['Inter'],
      'montserrat': ['Montserrat']
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'green': '#1B5B31',
      'red': 'red',
      'cream': '#dcc1ab',
      'creamHover': '#dcc1ab91',
    },
    extend: {
      gradientColorStopPositions: {
        _2: '-2%',
      }
    },
  },
  plugins: [],
}

