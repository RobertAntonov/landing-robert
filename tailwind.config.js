/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  safelist: [
    'fixed',
    'top-4',
    'right-4',
    'z-50',
    'bg-neutral-800',
    'text-white',
    'dark:bg-white',
    'dark:text-black',
    'px-4',
    'py-2',
    'rounded',
    'shadow',
    'border'
  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
