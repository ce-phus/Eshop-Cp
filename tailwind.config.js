/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Serif Display'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        bgprimary:"#OC1821",
        accent: "#efdfbb",
        primary: "#181818",
        secondary: "#111111",
        tertiary: "#FFF200",
        grade: "#c30010"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-slider-1.jpg')",
        "hero-bg": "url('/src/assets/products/GamingPc.jpg')",
        "hero-footer": "url('/src/assets/footer-bg.jpg')"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
