<script lang="ts">
	import type { PaddleReview } from '$lib/types';
	import RatingStars from './RatingStars.svelte';
	import AffiliateButton from './AffiliateButton.svelte';

	interface Props {
		paddles: PaddleReview[];
		columns?: string[];
		sortable?: boolean;
	}

	let {
		paddles,
		columns = ['name', 'price', 'rating', 'shape', 'weight', 'affiliate'],
		sortable = true
	}: Props = $props();

	let sortColumn = $state('name');
	let sortDirection = $state<'asc' | 'desc'>('asc');

	// Default columns to display
	const allColumns = [
		{ key: 'name', label: 'Paddle', sortable: true },
		{ key: 'price', label: 'Price', sortable: true },
		{ key: 'rating', label: 'Rating', sortable: true },
		{ key: 'shape', label: 'Shape', sortable: true },
		{ key: 'weight', label: 'Weight', sortable: true },
		{ key: 'material', label: 'Material', sortable: false },
		{ key: 'balance', label: 'Balance', sortable: false },
		{ key: 'affiliate', label: 'Buy Now', sortable: false }
	];

	const visibleColumns = allColumns.filter(col => columns.includes(col.key));

	function sortPaddles() {
		if (!sortable) return paddles;

		return [...paddles].sort((a, b) => {
			let aVal: any, bVal: any;

			switch (sortColumn) {
				case 'name':
					aVal = `${a.brand} ${a.model}`.toLowerCase();
					bVal = `${b.brand} ${b.model}`.toLowerCase();
					break;
				case 'price':
					aVal = a.price;
					bVal = b.price;
					break;
				case 'rating':
					aVal = (a.powerRating + a.controlRating + a.comfortRating) / 3;
					bVal = (b.powerRating + b.controlRating + b.comfortRating) / 3;
					break;
				case 'shape':
					aVal = a.shape;
					bVal = b.shape;
					break;
				case 'weight':
					aVal = a.weight;
					bVal = b.weight;
					break;
				default:
					return 0;
			}

			if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
			if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
			return 0;
		});
	}

	function toggleSort(column: string) {
		if (!sortable) return;

		if (sortColumn === column) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn = column;
			sortDirection = 'asc';
		}
	}

	let sortedPaddles = $derived(sortPaddles());
</script>

<div class="overflow-x-auto">
	<table class="table table-zebra w-full">
		<thead>
			<tr>
				{#each visibleColumns as column}
					<th
						class="cursor-pointer select-none"
						class:cursor-not-allowed={!column.sortable}
						onclick={() => column.sortable && toggleSort(column.key)}
					>
						<div class="flex items-center gap-1">
							{column.label}
							{#if column.sortable && sortColumn === column.key}
								<span class="text-sm">
									{sortDirection === 'asc' ? '↑' : '↓'}
								</span>
							{/if}
						</div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each sortedPaddles as paddle}
				<tr>
					{#if columns.includes('name')}
						<td>
							<div class="font-medium">
								{paddle.brand} {paddle.model}
							</div>
							{#if paddle.category}
								<div class="text-sm opacity-70 capitalize">
									{paddle.category}
								</div>
							{/if}
						</td>
					{/if}

					{#if columns.includes('price')}
						<td class="font-bold text-primary">
							${paddle.price}
						</td>
					{/if}

					{#if columns.includes('rating')}
						<td>
							<RatingStars
								rating={Math.round((paddle.powerRating + paddle.controlRating + paddle.comfortRating) / 3) as any}
								size="sm"
								showValue={false}
							/>
						</td>
					{/if}

					{#if columns.includes('shape')}
						<td class="capitalize">
							{paddle.shape}
						</td>
					{/if}

					{#if columns.includes('weight')}
						<td>
							{paddle.weight}g
						</td>
					{/if}

					{#if columns.includes('material')}
						<td>
							{paddle.material}
						</td>
					{/if}

					{#if columns.includes('balance')}
						<td class="capitalize">
							{paddle.balance.replace('-', ' ')}
						</td>
					{/if}

					{#if columns.includes('affiliate')}
						<td>
							<AffiliateButton
								padelusaLink={paddle.affiliateLinks.padelusa}
								amazonLink={paddle.affiliateLinks.amazon}
								variant="compact"
							/>
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>