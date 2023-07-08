/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#DB3A83",
        secondary: "#943BBA",
        black: "#23262A",
        black95: "#2E3135",
        black75: "#5A5C5F",
        black50: "#909294",
        black25: "#C8C8C9",
        black10: "#E9EAEA",
        black5: "#F4F4F4",
        background: "#EAEAEA",
        white: "#FFFFFF",
        blue: "#4D69FA",
        red: "#CF2929",
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
    screens: {
      ss: "480px",
      sm: "768px",
      md: "992px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};