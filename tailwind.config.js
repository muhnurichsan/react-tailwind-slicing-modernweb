/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        secondary: "#F59E0B",
        tertiary: "#047857",
        greeny: "#D1FAE5",
        reddy: "#FEE2E2",
      },
    },
  },
  plugins: [],
};
