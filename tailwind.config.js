/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "grey-background": "#f9fafc",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
