/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //primary
        'active-input-border': 'linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
        'input-errors': 'hsl(0, 100%, 66%)',
        //Neutral
        'white': 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
      },
      fontFamily:{
        'SpaceGrotesk': ['Space Grotesk', 'sans-serif']
      },
      backgroundImage: {
        'bg-credit-card-mv': "url('/src/assets/images/bg-main-mobile.png')",
        'bg-credit-card-desk': "url('/src/assets/images/bg-main-desktop.png')",
        'card-credit-back': "url('/src/assets/images/bg-card-back.png')",
        'card-credit-front': "url('/src/assets/images/bg-card-front.png')",
    },
  },
  plugins: [],
}
}
