/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/dynamics/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      // '2xl': '1440px',
    },

    extend: {
      colors: {
        headerBackground: '#1B3764',
        headerParagraphTexts: '#B4C7E7',
        white: '#FFFFFF',
        CTA: '#FFCA42',
        background: '#F6F8FC',
        mainPGParagraphTxt: '#969AA0',
      },
    },
  },
  plugins: [],
};
