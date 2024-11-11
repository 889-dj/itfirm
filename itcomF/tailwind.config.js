/** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: ["class"],
//     content: ["./src/**/*.{html,js}"],
//   theme: {
//   	extend: {
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		colors: {}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// }

/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  './index.html',
	  './src/**/*.{js,jsx,ts,tsx}', // Include your JS/JSX/TS/TSX files
	],
	theme: {
	  extend: {
		backgroundImage:{
			'home':"url('./public/home.jpg')",
			'woman':"url('./public/woman.jpg')",
			'logo':"url('./public/logoipsum.svg')",
			'team':"url('./public/team.png')"
		},
		scale:{
			'200':'2'
		},
	  },
	},
	plugins: [],
  };
  