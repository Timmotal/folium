/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit', 
  theme: {
    extend: {
      colors: {
        blue: "#a3552f",
        red: "#8A837E",
        yellow: "#A4A2AC",
        gumbo: "#7AA5AC",
        grey: "#EDEDED",
        "deep-blue": "#292429",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue": "linear-gradient(90deg, #7AA5AC 14.53%, #a3552f 69.36%, #9f542e 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
