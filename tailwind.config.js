/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C78D4E",
        secondary: "#F5CEA3",
        "custom-white": "#E7E7E7",
        "bg-primary": "#0A1018",
        "bg-secondary": "#161C23",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            transform: "translateY(0.25rem)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(0rem)",
            opacity: "100%",
          },
        },
        openUp: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out ",
        openUp: "openUp 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
