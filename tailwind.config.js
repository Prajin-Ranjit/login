/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",

        text: "rgba(var(--text))",
        background: "rgba(var(--background))",
      },
      screens: {
        xs: "495px",
        md2: "865px",
      },
      boxShadow: {
        nav: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
