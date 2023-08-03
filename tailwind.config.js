/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", //設定要套用的路徑
  ],
  theme: {
    extend: {},
    colors:{
      primary: {
        default:'#650300',
        light:'#AA0601',
      },
      secondary:{
        default:'#FBF2F2',
        light:'#FFD700',
      },
      white:'#FFFFFF',
      black:'#000000',
      gary:'#707070',
      glass:{
        dark:'#5F3E2D',
        light:'#B75929',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        // 使用與 Bootstrap 斷點相同的值
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
    fontSize: {
      sm: ['14px', '1.5'],
      base: ['16px', '1.5'],
      lg: ['18px', '1.5'],
      xl: ['20px', '1.5'],
      '2xl' : ['24px', '1.5'], 
      '3xl' : ['30px', '1.5'],
      '4xl' : ['36px', '1.5'],
      '5xl' :['40px', '1.5'],
      '6xl' :['48px', '1.5'],
      '7xl' :['64px', '1.5'],
    },
    dropShadow:{
      'md': '0 2px 6px #00000029',
    },
  },
  plugins: [],
}