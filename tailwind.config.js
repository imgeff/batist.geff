/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				black: {
					1: '#151514',
				},
				turquoise: {
					2: '#1CAE8E'
				},
				neutral: {
          400: '#a3a3a3',
          600: '#525252',
					800: '#262626',
					900: '#171717',
				}
			}
		},
	},
	plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisy-',
    darkTheme: 'dark',
  },
};
