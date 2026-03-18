/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,svx,md}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			typography: {
				slate: {
					css: {
						'--tw-prose-body': 'var(--text)',
						'--tw-prose-headings': 'var(--prose-headings)',
						'--tw-prose-links': 'var(--prose-links)',
						'--tw-prose-bold': 'var(--text)',
						'--tw-prose-counters': 'var(--text)',
						'--tw-prose-bullets': 'var(--prose-bullets)',
						'--tw-prose-quotes': 'var(--text)',
						'--tw-prose-code': 'var(--text)',
						'--tw-prose-hr': 'var(--border)',
						'--tw-prose-th-borders': 'var(--border)',
						'--tw-prose-td-borders': 'var(--border)',
						'color': 'var(--text)',
						'p, li, h1, h2, h3, h4, h5, h6': {
							'color': 'var(--text)',
							'font-weight': '400'
						},
						'strong, b': {
							'color': 'var(--text)',
							'font-weight': '600'
						},
						'code': {
							'color': 'var(--text)'
						},
						'a': {
							'color': 'var(--prose-links)',
							'&:hover': {
								'color': 'var(--primary-hover)'
							}
						},
						'blockquote': {
							'border-left-color': 'var(--primary)',
							'background-color': 'rgba(236, 72, 153, 0.05)',
							'padding': '1rem 1.5rem',
							'border-radius': '0 0.5rem 0.5rem 0',
							'font-style': 'italic',
							'color': 'var(--text)'
						}
					}
				}
			},
			colors: {
				background: 'var(--background)',
				primary: 'var(--primary)',
				'primary-hover': 'var(--primary-hover)',
				text: 'var(--text)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
