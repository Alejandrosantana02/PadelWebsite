import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor-components': [
						'$lib/components/reviews/PaddleReviewCard.svelte',
						'$lib/components/reviews/ComparisonTable.svelte',
						'$lib/components/reviews/AffiliateButton.svelte'
					]
				}
			}
		},
		chunkSizeWarningLimit: 1000
	},
	optimizeDeps: {
		include: ['svelte']
	}
});
