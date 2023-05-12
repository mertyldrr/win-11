/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        win11: "url('assets/win11bg.jpg')",
      },
      fontFamily: {
        sagoeUI: "SagoeUI",
      },
    },
  },
  plugins: [],
};
