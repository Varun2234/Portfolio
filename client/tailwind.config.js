/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0e1a',
          darker: '#050811',
          primary: '#00d4ff',
          secondary: '#0099cc',
          accent: '#00ffcc',
          surface: '#111827',
        },
        ocean: {
          deep: '#0f172a',
          foam: '#94a3b8'
        }
      },
    },
  },
  plugins: [],
}