/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#50CC49", // primary color for buttons and elements
        secondary: "#89E883",
        accent: "#5FEC56",
      },
    },
  },
  plugins: [],
};
