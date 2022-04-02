const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.html',
		'./src/**/*.njk',
		'./src/**/*.md',
		'./src/_data/colors.js',
		'./src/_data/structure.js',
	],
	experimental: {
		applyComplexClasses: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	theme: {
		fontFamily: {
			sans: [
				'Alegreya Sans',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
			serif: [
				'Alegreya',
				'ui-serif',
				'Georgia',
				'Cambria',
				'Times New Roman',
				'Times',
				'serif',
			],
		},
		extend: {
			screens: (theme) => ({
				xs: '400px',
			}),
			backgroundColor: (theme) => ({
				'stone-150': 'rgb(238,236,234)',
			}),
			colors: (theme) => ({
				nav: {
					DEFAULT: 'rgba(255,255,255,0.7)',
				},
			}),
			opacity: (theme) => ({
				5: '.05',
				10: '.1',
				15: '.15',
				20: '.2',
			}),
			// created my own heights so can specify for Heros
			height: (theme) => ({
				'1/2': '50vh',
				'3/4': '75vh',
				'9/10': '90vh',
				'1/1': '100vh',
				'1/3': 'calc(100vh / 3)',
				'1/4': 'calc(100vh / 4)',
				'1/5': 'calc(100vh / 5)',
				96: '24rem',
				128: '32rem',
			}),
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
