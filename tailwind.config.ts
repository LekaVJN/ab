import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        surfaceSoft: '#111c36',
        surfaceLight: '#f8fafc',
        accent: '#58bcbf',
        accentSoft: '#152f3b',
        textPrimary: '#eef2f7',
        textSecondary: '#a5b1c2',
        border: '#2d3b53',
      },
      boxShadow: {
        soft: '0 22px 60px rgba(15, 23, 42, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
