<script lang="ts">
	import PaddleReviewCard from '$lib/components/reviews/PaddleReviewCard.svelte';
	import type { PaddleReview } from '$lib/types';

	interface Props {
		products: PaddleReview[];
		columns?: number; // 2, 3, or 4 columns
		loading?: boolean;
		emptyMessage?: string;
	}

	let {
		products,
		columns = 3,
		loading = false,
		emptyMessage = 'No products found matching your criteria.'
	}: Props = $props();

	// Responsive grid classes based on columns
	let gridClasses = $derived({
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
	}[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3');
</script>

<div class="product-grid">
	{#if loading}
		<!-- Loading skeleton -->
		<div class="grid {gridClasses} gap-6">
			{#each Array(6) as _}
				<div class="card bg-base-100 shadow-lg">
					<div class="skeleton h-48 w-full rounded-t-xl"></div>
					<div class="card-body">
						<div class="skeleton h-4 w-3/4 mb-2"></div>
						<div class="skeleton h-4 w-1/2 mb-4"></div>
						<div class="skeleton h-8 w-20 mb-2"></div>
						<div class="flex gap-2 mb-4">
							<div class="skeleton h-4 w-16"></div>
							<div class="skeleton h-4 w-16"></div>
						</div>
						<div class="flex gap-2">
							<div class="skeleton h-8 w-20"></div>
							<div class="skeleton h-8 w-20"></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else if products.length === 0}
		<!-- Empty state -->
		<div class="text-center py-12">
			<svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-5.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
			</svg>
			<h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3>
			<p class="mt-1 text-sm text-gray-500">{emptyMessage}</p>
			<div class="mt-6">
				<a href="/reviews" class="btn btn-primary">
					View All Reviews
				</a>
			</div>
		</div>
	{:else}
		<!-- Product grid -->
		<div class="grid {gridClasses} gap-6">
			{#each products as product}
				<PaddleReviewCard review={product} />
			{/each}
		</div>
	{/if}
</div>