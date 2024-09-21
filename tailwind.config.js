/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
  extend: {
   
    fontFamily: {
      primary: "slabo",
    },
    backgroundImage: {
      'logo_headr': "url('../img/bg-1.png')",
      'img-nav1': "url('../img/ss1.JPG')",
      'img-nav2': "url('../img/ss2.jpg')",
      'img-nav3': "url('../img/ss3.jpg')",
      'axs-shakhs': "url('../img/MG.jpg')",
      'backg-top': "url('../img/bg-07.png')",
      'back-poli': "url('../img/poli.png')",
      'footer-bg': "url('../img/footer-bg.png')",
      'bg-flog': "url('../img/flag.png')",
      'bg-banner': "url('../img/banner.jpg')",
      
      'cover-cg': "url('../img/cover.png')",
      'my-gradint': "linear-gradient(-45deg, rgba(10, 10, 133, 0.518), hsla(0, 85%, 28%, 0.485) ) ",
      'my-gradint2': "linear-gradient(-45deg, rgba(10, 10, 133, 0.800), hsla(0, 85%, 28%, 0.800) ) ",
      
    },
    animation:{
      txt1: 'anime1 3s linear infinite alternate ',
      txt2: 'anime2 3s linear infinite alternate ',
    }
    
 
  
 
  },
  
  },

  plugins: [],
  }


