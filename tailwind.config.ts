import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-body': '#141414',
        'bg-primary': '#1c1c1cf2',
        'bg-secondary': '#262626f2',
        'text-primary': '#cccccc',
        'text-secondary': '#aaaaaa',
        'brand-primary': '#00cc33',
        'brand-secondary': '#663399',
        'accent-primary': '#ff4d4d',
        'border-primary': '#4a4a4af2',
      },
      boxShadow: {
        'brand-primary': '0 0 10px rgba(102, 51, 153, 0.5)',
        'brand-secondary': '0 0 10px rgba(0, 204, 51, 0.5)',
      },
      backdropBlur: {
        tiny: '2px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
