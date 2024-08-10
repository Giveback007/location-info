import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts,svg}"],
	safelist: ["dark"],
	theme: {
		extend: {
			screens: {
				xs: '480px'
			},
			colors: {
				'black-shade': {
					900: 'hsl(0, 0%, 10%)',
					800: 'hsl(0, 0%, 20%)',
				},
				'app-cta-1': {
					// '#0451DD'
					DEFAULT: 'hsl(219, 96%, 44%)',
					hv: 'hsl(219, 96%, 41.5%)',
					cl: 'hsl(219, 96%, 39%)'
				},
				'app-cta-2': '#3112D5',
				'app-grey': '#717171',
				'app-white': {
					'30T': 'rgba(244, 244, 244, 0.7)',
					90: '#F7F7F7',
					98: '#FDFDFD',
				},
				'app-line-color': '#DDDDDD',
				'app-line-color-2': '#B8BDC6',
				'app-blue': {
					100: '#253EA8',
					200: '#0D2565',
					300: '#06173D',
				},
				'app-light-blue': {
					100: '#EFF4FF',
					200: '#C5DDF6',
					300: '#4293D8',
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};

export default config;