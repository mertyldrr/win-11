/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // win11: "url('assets/win11bg.jpg')",
        win11:
          "url('https://github.com/mertyldrr/win-11/blob/master/src/assets/win11bg.jpg?raw=true')",
      },
      fontFamily: {
        sagoeUI: "SagoeUI",
      },
    },
  },
  plugins: [],
};
