/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440'
      },
    extend: {},
  },
  plugins: [],
}
