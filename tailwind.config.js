/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/business-street-header-image.jpg')",
      },
    },
  },
  plugins: [],
};
