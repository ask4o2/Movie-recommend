/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        colors: {
          "lights-gray": "",
          "lights-blue": "",
          "lights-red": "",
          "lights-green": "",
          main: "#18171F",
        },
      },
      variants: {
        lineClamp: ["responsive", "hover"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
