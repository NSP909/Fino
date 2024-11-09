import { defineConfig } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '80px',
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {},
  },
  plugins: [],
};
