/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2962FF",
        secondary: "#0D47A1",
        accent: "#00C853",
        danger: "#D50000",
      },
    },
  },
  plugins: [],
};