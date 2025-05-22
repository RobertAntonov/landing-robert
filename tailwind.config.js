/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin linear infinite',
      },
      transitionDuration: {
        500: '500ms',
      },
      animationDuration: {
        'spin-slow': '12s',
        'spin-medium': '3s',
        'spin-fast': '0.5s',
      },
    },
  },
  plugins: [],
};
