/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#16a34a",
        accent: "#101010",
      },
    },
  },
  plugins: [],
};
