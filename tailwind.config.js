/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('./src/img/mainbgimg.jpg')",
      },
    },
  },
  plugins: [],
};
