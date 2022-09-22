/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('./img/pizza01.png')",
      },
    },
  },
  plugins: [],
};
