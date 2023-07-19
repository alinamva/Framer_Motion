/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      indigo: "rgb(100,0,123)",
      gray: "rgba(255,255,255,0.2)",
      grey: "#C5C5C5",
      white: "#FFFF",
      active: "#FFA500",
      black: "#000000",
      back: "radial-gradient(var(--tw-gradient-stops))",
    },

    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
      },
    },
  },
  plugins: [],
};
