/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#159C98",
        orange: "#FF9248",
      },
      boxShadow: {
        neou: "5px 5px 18px #cacaca,-5px -5px 18px #f6f6f6;",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      smd: "624px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      carmen: ["Carmen", "sans-serif"],
      carmenBold: ["Carmen-bold", "sans-serif"],
      carmenLight: ["Carmen-light", "sans-serif"],
    },
  },
  plugins: [],
}
