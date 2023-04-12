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
    },
  },
  plugins: [],
};
