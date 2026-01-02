/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b', // Zinc 950
        foreground: '#fafafa', // Zinc 50
        muted: '#27272a', // Zinc 800
        'muted-foreground': '#a1a1aa', // Zinc 400
        card: '#18181b', // Zinc 900
        'card-foreground': '#fafafa',
        border: '#27272a', // Zinc 800
        primary: {
            DEFAULT: '#fafafa',
            foreground: '#18181b',
        },
        secondary: {
            DEFAULT: '#27272a',
            foreground: '#fafafa',
        },
        accent: {
            DEFAULT: '#27272a',
            foreground: '#fafafa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
