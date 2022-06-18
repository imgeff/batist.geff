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
				gray: {
					1: '#696969',
					2: '#202828',
				}
			}
		},
	},
	plugins: [],
};
