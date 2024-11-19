import type { Config } from 'tailwindcss';

export default {
  content: ['./shared/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './layout/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
