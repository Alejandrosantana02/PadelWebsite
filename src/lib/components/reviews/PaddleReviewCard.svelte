<script lang="ts">
	import type { PaddleReview } from '$lib/types';
	import RatingStars from './RatingStars.svelte';
	import AffiliateButton from './AffiliateButton.svelte';

	interface Props {
		review: PaddleReview | {
			id: string;
			title: string;
			brand: string;
			model: string;
			slug: string;
			image?: string;
			powerRating: number;
			controlRating: number;
			price: number;
			affiliateLinks: {
				padelusa?: string;
				amazon?: string;
			};
		};
	}

	let { review }: Props = $props();

	// Calculate average rating
	let averageRating = $derived(
		review.powerRating && review.controlRating && review.comfortRating
			? Math.round(((review.powerRating + review.controlRating + review.comfortRating) / 3) * 10) / 10
			: 0
	);
</script>

<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
	{#if review.image}
		<figure class="px-4 pt-4">
			<img
				src={review.image}
				alt={`${review.brand} ${review.model} paddle`}
				class="rounded-xl h-48 w-full object-cover"
				loading="lazy"
			/>
		</figure>
	{/if}

	<div class="card-body">
		<h3 class="card-title text-lg">
			{review.brand} {review.model}
		</h3>

		{#if averageRating > 0}
			<div class="flex items-center gap-2 mb-2">
				<RatingStars rating={averageRating as any} size="sm" showValue={false} />
				<span class="text-sm font-medium">{averageRating}/5</span>
			</div>
		{/if}

		{#if review.price}
			<p class="text-xl font-bold text-primary">
				${review.price}
			</p>
		{/if}

		{#if review.powerRating && review.controlRating}
			<div class="grid grid-cols-2 gap-2 text-sm mt-2">
				<div>
					<span class="font-medium">Power:</span>
					<RatingStars rating={review.powerRating} size="sm" showValue={false} />
				</div>
				<div>
					<span class="font-medium">Control:</span>
					<RatingStars rating={review.controlRating} size="sm" showValue={false} />
				</div>
			</div>
		{/if}

		<div class="card-actions justify-end mt-4">
			<button
				class="btn btn-outline btn-sm"
				onclick={() => {
					// Dispatch custom event to toggle paddle details
					window.dispatchEvent(new CustomEvent('togglePaddleDetails', {
						detail: { paddleId: review.id }
					}));
				}}
			>
				View Details
			</button>
		</div>

		{#if review.affiliateLinks}
			<div class="mt-3">
				<AffiliateButton
					padelusaLink={review.affiliateLinks.padelusa}
					amazonLink={review.affiliateLinks.amazon}
					variant="compact"
				/>
			</div>
		{/if}
	</div>
</div>