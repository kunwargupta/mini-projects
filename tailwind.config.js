/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'font-1': ["Poppins", "system-ui"], // system-ui should be in quotes
      },
    },
  },
  plugins: [],
}
