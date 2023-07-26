/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#4F4F4F',
        'gray-2': '#828282',
        'gray-3': '#BDBDBD',
        'gray-4': '#F6F8FB',
        'gray-5': '#FAFAFB',
        'gray-6': '#E0E0E0',
        primary: '#2F80ED',
        caption: '#97BEF4',
      },

      fontSize: {
        title: '18px',
        subtitle: '10px',
        action: '12px',
      },
      boxShadow: {
        card: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
