/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
