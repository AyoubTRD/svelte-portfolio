/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	darkMode: true,
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cabin', 'ui-sans-serif', 'sans-serif'],
				'sans-2': ['Montserrat', 'Cabin', 'ui-sans-serif', 'sans-serif'],
				serif: ['DM Serif Display', 'Georgia', 'ui-serif']
			},
			colors: {
				primary: {
					200: '#ffebc8',
					300: '#ffd080',
					DEFAULT: '#FFC86A',
					400: '#FFC86A',
					500: '#ed9500',
					600: '#c87e00',
					700: '#a46700',
					800: '#5b3900'
				},
				secondary: {
					DEFAULT: '#31333B'
				},
				neutral: {
					DEFAULT: '#3D3E42'
				},
				typography: {
					DEFAULT: '#E4E4E5'
				}
			}
		}
	},
	plugins: []
};
