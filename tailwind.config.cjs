/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Bricolage Grotesque Variable',
					'Inter Variable',
					'Inter',
					...defaultTheme.fontFamily.sans,
				],
			},
			borderWidth: {
				'3.2': '3.2px',
				'3': '3px',
				'2.8': '2.8px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addComponents }) {
			addComponents({
				'.c-normal': {
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: 'var(--color-gray-500)',
					borderRadius: 'var(--radius-sm)',
					paddingInline: '0.25rem', /* px-1 */
					paddingBlock: '0.5rem', /* py-2 */
					textAlign: 'center',
					verticalAlign: 'middle',
					fontSize: '9px',
					'@screen sm': {
						paddingInline: '0.75rem', /* px-3 */
						fontSize: '1rem', /* text-base */
					},
				},
				/* Ensure c-new overrides c-normal when both are present */
				'.c-normal.c-new': {
					borderWidth: '2.8px',
					borderColor: 'var(--color-pink-400)',
				},
				'.c-normal-left': {
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: 'var(--color-gray-500)',
					borderRadius: 'var(--radius-sm)',
					paddingInline: '0.5rem', /* px-2 */
					paddingBlock: '0.5rem', /* py-2 */
					verticalAlign: 'middle',
					fontSize: '8px',
					'@screen sm': {
						paddingInline: '1rem', /* px-4 */
						fontSize: '1rem', /* text-base */
					},
				},
				'.c-new': {
					borderWidth: '2.8px',
					borderStyle: 'solid',
					borderColor: 'var(--color-pink-400)',
					borderRadius: 'var(--radius-sm)',
					paddingInline: '0.5rem', /* px-2 */
					paddingBlock: '0.5rem', /* py-2 */
					textAlign: 'center',
					verticalAlign: 'middle',
					fontSize: '9px',
					'@screen sm': {
						paddingInline: '1rem', /* px-4 */
						fontSize: '1rem', /* text-base */
					},
				},
				'.c-titles': {
					borderWidth: '3.2px',
					borderStyle: 'double',
					borderColor: 'var(--color-slate-700)',
					borderRadius: 'var(--radius-xs)', /* rounded-sm */
					paddingInline: '0.5rem', /* px-2 */
					paddingBlock: '0.5rem', /* py-2 */
					textAlign: 'center',
					verticalAlign: 'middle',
					fontWeight: '700',
					fontSize: '9px',
					'@screen sm': {
						paddingInline: '1rem', /* px-4 */
						fontSize: '1rem',
					},
				},
				'.c-underline': {
					textDecorationLine: 'underline',
					textDecorationColor: 'inherit',
					textUnderlineOffset: '4px',
				},
				'.op-compra': {
					color: 'var(--color-green-500)',
					fontWeight: '600',
					borderWidth: '2.8px',
					borderStyle: 'double',
					borderColor: 'var(--color-green-500)',
					borderRadius: 'var(--radius-lg)',
						},
						'.op-compra::before': {
							content: '"COMPRA"',
				},
				'.op-venta': {
					color: 'var(--color-red-500)',
					fontWeight: '600',
					borderWidth: '2.8px',
					borderStyle: 'double',
					borderColor: 'var(--color-red-500)',
					borderRadius: 'var(--radius-lg)',
						},
						'.op-venta::before': {
							content: '"VENTA"',
				},
				'.c-green': { backgroundColor: 'var(--color-lime-200)' },
				'.c-blue': { backgroundColor: 'var(--color-cyan-100)' },
				'.c-violet': { backgroundColor: 'var(--color-purple-200)' },
				'.c-orange': { backgroundColor: 'var(--color-orange-200)' },
				'.c-yellow': { backgroundColor: 'var(--color-yellow-300)' },
			})
		}),
	],
}
