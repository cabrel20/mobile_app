/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-100":"#0b0b0b",
        "primary-200":"#8b8b8b",
        "secondary-100":"#e9e9e9",
        "secondary-200":"#fcfcfc"
      },
      backgroundColor:{
        "primary-100":"#0b0b0b",
        "primary-200":"#8b8b8b",
        "secondary-100":"#e9e9e9",
        "secondary-200":"#fcfcfc"
      }
    },
  },
  plugins: [],
}
