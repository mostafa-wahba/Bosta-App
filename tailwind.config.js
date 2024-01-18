/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "3840px",
        "7xl": "5120px",
        "8xl": "7680px",
        "9xl": "10240px",
      },
      fontFamily: {
        cairo: ['"Cairo"', "sans-serif"],
      },
      colors: {
        mainColor: "#f4050d",
        secondMainColor: "#de000a",
        titleColor: "#232c45",
        subTitleColor: "#8f9bb2",
        textColor: "#4a5066",
        textGray: "#cacaca",
      },
      fontSize: {
        "3xs": "8px",
        "2xs": "10px",
      },
      borderRadius: {
        inputRadius: "1rem",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
  ],
};
