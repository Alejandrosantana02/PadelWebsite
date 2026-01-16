/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				padel: {
					primary: '#2563eb',
					secondary: '#10b981',
					accent: '#f59e0b',
					neutral: '#1f2937',
					'base-100': '#ffffff',
					info: '#3b82f6',
					success: '#10b981',
					warning: '#f59e0b',
					error: '#ef4444',
				},
			},
		],
	},
}