const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Public Sans', ...fontFamily.sans],
		},
		colors: {
			white: 'white',
			black: 'black',
			transparent: 'transparent',
			border: 'var(--color-border)',
			primary: {
				DEFAULT: 'var(--color-primary)',
				offset: 'var(--color-primary-offset)',
			},
			secondary: {
				DEFAULT: 'var(--color-secondary)',
				offset: 'var(--color-secondary-offset)',
			},
			light: {
				DEFAULT: 'var(--color-light)',
				offset: 'var(--color-light-offset)',
			},
			dark: {
				DEFAULT: 'var(--color-dark)',
				offset: 'var(--color-dark-offset)',
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
