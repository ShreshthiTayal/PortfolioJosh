/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customLight': '5px 5px 10px 0px #0000001A',
       
      }
    },
  },
  plugins: [],
}

