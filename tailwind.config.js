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
      anekTelugu: ["AnekTelugu", "sans-serif"], // Regular
      AnekTeluguBold: ["AnekTeluguBold", "sans-serif"],
      AnekTeluguExtraBold: ["AnekTeluguExtraBold", "sans-serif"],
      anekTeluguSemiExpanded: ["AnekTeluguSemiExpanded", "sans-serif"], // SemiExpanded
      AnekTeluguSemiExpandedBold: ["AnekTeluguSemiExpandedBold", "sans-serif"],
      AnekTeluguSemiExpandedExtraBold: [
        "AnekTeluguSemiExpandedExtraBold",
        "sans-serif",
      ],
      anekTeluguCondensed: ["AnekTeluguCondensed", "sans-serif"],
      AnekTeluguCondensedBold: ["AnekTeluguCondensedBold", "sans-serif"],
      AnekTeluguCondensedExtraBold: [
        "AnekTeluguCondensedExtraBold",
        "sans-serif",
      ],
    },
  },
  plugins: [],
}
