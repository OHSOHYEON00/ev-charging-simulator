/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        box: "rgb(226 232 240)",
        button: "rgb(59 130 246)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
