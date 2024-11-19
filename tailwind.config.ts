import type { Config } from 'tailwindcss';

export default {
  content: ['./shared/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './layout/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#00cc33',
        'brand-secondary': '#663399',
      },
      screens: {
        '2xl': '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '3.5rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
