/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Layout/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-100":"#FAFAFA",
        "primary-200":"#9F9F9F",
        "primary-300":"#10111C",
        "secondary-100":"#00AA5B",
        "secondary-200":"#007D43"
      },
      backgroundColor:{
        "primary-100":"#FAFAFA",
        "primary-200":"#9F9F9F",
        "primary-300":"#10111C",
        "secondary-100":"#00AA5B",
        "secondary-200":"#007D43"
      },
      fontFamily:{
        "font-100":"poppins"
      }
    },
  },
  plugins: [],
}
