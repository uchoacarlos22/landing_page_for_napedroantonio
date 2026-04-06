/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient-conic": (value) => ({
            "background-image": `conic-gradient(${value})`,
          }),
        },
        { values: theme("conicGradientPositions") }
      );
    },
  ],
}

