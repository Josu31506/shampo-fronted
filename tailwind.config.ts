import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF2E5',
          beige: '#F6EFE6',
          rose: '#D7A6A1',
          brown: '#6B4F3A'
        }
      }
    }
  },
  plugins: []
};

export default config;
