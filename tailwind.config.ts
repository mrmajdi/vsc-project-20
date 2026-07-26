import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/rtl'),
  ],
};

export default config;