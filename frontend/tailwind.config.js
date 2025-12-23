/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        system:[ "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"],
      inter: ['Inter', 'sans-serif'],
    jakarta: ['Plus Jakarta Sans', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
