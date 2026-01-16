<script lang="ts">
	import PaddleReviewCard from '$lib/components/reviews/PaddleReviewCard.svelte';
	import type { PaddleReview } from '$lib/types';

	interface RelatedArticle {
		id: string;
		title: string;
		slug: string;
		image?: string;
		excerpt?: string;
		type?: 'paddle' | 'gear' | 'guide' | 'comparison';
		affiliateLinks?: {
			padelusa?: string;
			amazon?: string;
		};
		price?: number;
		brand?: string;
		model?: string;
		powerRating?: number;
		controlRating?: number;
	}

	interface Props {
		articles: RelatedArticle[];
		title?: string;
		maxItems?: number;
	}

	let {
		articles,
		title = 'Related Articles',
		maxItems = 3
	}: Props = $props();

	let displayArticles = $derived(articles.slice(0, maxItems));
</script>

<section class="related-articles">
	<h3 class="text-2xl font-bold mb-6 text-gray-900">{title}</h3>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each displayArticles as article}
			{#if article.type === 'paddle' || !article.type}
				<!-- Paddle review card -->
				<PaddleReviewCard
					review={{
						id: article.id,
						title: article.title,
						slug: article.slug,
						brand: article.brand || '',
						model: article.model || '',
						shape: 'round', // Default, would be populated from actual data
						weight: 365, // Default
						balance: 'balanced', // Default
						material: 'Carbon', // Default
						evaFoamType: 'Soft EVA', // Default
						powerRating: article.powerRating || 4,
						controlRating: article.controlRating || 4,
						comfortRating: 4, // Default
						price: article.price || 0,
						pros: [], // Would be populated from actual data
						cons: [], // Would be populated from actual data
						affiliateLinks: article.affiliateLinks || {},
						images: article.image ? [article.image] : [],
						content: '', // Not needed for card
						publishedAt: new Date(),
						excerpt: article.excerpt
					}}
				/>
			{:else}
				<!-- Generic article card -->
				<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
					{#if article.image}
						<figure class="px-4 pt-4">
							<img
								src={article.image}
								alt={article.title}
								class="rounded-xl h-48 w-full object-cover"
								loading="lazy"
							/>
						</figure>
					{/if}

					<div class="card-body">
						<h4 class="card-title text-lg">
							{article.title}
						</h4>

						{#if article.excerpt}
							<p class="text-sm text-gray-600 line-clamp-3">
								{article.excerpt}
							</p>
						{/if}

						<div class="card-actions justify-end mt-4">
							<a
								href={`/${article.type === 'guide' ? 'guides' : article.type === 'comparison' ? 'compare' : 'reviews'}/${article.slug}`}
								class="btn btn-outline btn-sm"
							>
								Read More
							</a>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>