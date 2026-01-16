<script lang="ts">
	import type { PaddleReview } from '$lib/types';
	import PaddleReviewCard from '$lib/components/reviews/PaddleReviewCard.svelte';
	import RatingStars from '$lib/components/reviews/RatingStars.svelte';
	import AffiliateButton from '$lib/components/reviews/AffiliateButton.svelte';
	import ComparisonTable from '$lib/components/reviews/ComparisonTable.svelte';
	import ProsConsList from '$lib/components/reviews/ProsConsList.svelte';
	import SpecsTable from '$lib/components/reviews/SpecsTable.svelte';
	import NewsletterForm from '$lib/components/forms/NewsletterForm.svelte';

	// Sample data for demonstration
	const sampleReviews: PaddleReview[] = [
		{
			id: 'nox-ml10-pro-carbon',
			title: 'Nox ML10 Pro Carbon Paddle Review',
			slug: 'nox-ml10-pro-carbon',
			brand: 'Nox',
			model: 'ML10 Pro Carbon',
			shape: 'teardrop',
			weight: 365,
			balance: 'balanced',
			material: 'Carbon fiber',
			evaFoamType: 'Soft EVA',
			powerRating: 4,
			controlRating: 5,
			comfortRating: 5,
			price: 249.99,
			pros: ['Excellent control', 'Great for intermediate players', 'Durable construction'],
			cons: ['Higher price point', 'May lack power for some players'],
			affiliateLinks: {
				padelusa: 'https://padelusa.com/nox-ml10-pro-carbon',
				amazon: 'https://amazon.com/dp/B08N1Q8Q9Z'
			},
			images: [],
			content: '',
			publishedAt: new Date('2024-01-15'),
			excerpt: 'The Nox ML10 Pro Carbon offers exceptional control and comfort for intermediate players.'
		},
		{
			id: 'bullpadel-vertex-03',
			title: 'Bullpadel Vertex 03 Paddle Review',
			slug: 'bullpadel-vertex-03',
			brand: 'Bullpadel',
			model: 'Vertex 03',
			shape: 'diamond',
			weight: 370,
			balance: 'head-heavy',
			material: 'Carbon fiber',
			evaFoamType: 'Medium EVA',
			powerRating: 5,
			controlRating: 4,
			comfortRating: 4,
			price: 299.99,
			pros: ['Excellent power', 'Professional level performance', 'Premium materials'],
			cons: ['Expensive', 'Requires advanced technique', 'Less forgiving'],
			affiliateLinks: {
				padelusa: 'https://padelusa.com/bullpadel-vertex-03',
				amazon: 'https://amazon.com/dp/B08N1Q8Q9Z'
			},
			images: [],
			content: '',
			publishedAt: new Date('2024-01-20'),
			excerpt: 'The Bullpadel Vertex 03 delivers maximum power for competitive players.'
		}
	];
</script>

<svelte:head>
	<title>Padel Paddle Reviews - Expert Reviews & Guides</title>
	<meta name="description" content="Find your perfect Padel paddle with expert reviews, comparisons, and buying guides. Trusted by players worldwide." />
</svelte:head>

<!-- Hero Section -->
<section class="hero min-h-[60vh] bg-gradient-to-r from-primary to-secondary">
	<div class="hero-content text-center text-primary-content">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Find Your Perfect Padel Paddle</h1>
			<p class="py-6">
				Expert reviews, detailed comparisons, and buying guides to help you choose the right paddle for your game.
			</p>
			<div class="flex gap-4 justify-center">
				<a href="/reviews" class="btn btn-accent">Browse Reviews</a>
				<a href="/guides" class="btn btn-outline btn-accent">View Guides</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Reviews Section -->
<section class="py-16 px-4">
	<div class="container mx-auto max-w-6xl">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold mb-4">Featured Paddle Reviews</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Read our in-depth reviews of the most popular Padel paddles on the market.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
			{#each sampleReviews as review}
				<PaddleReviewCard {review} />
			{/each}
		</div>

		<div class="text-center">
			<a href="/reviews" class="btn btn-primary btn-lg">View All Reviews</a>
		</div>
	</div>
</section>

<!-- Component Showcase Section -->
<section class="py-16 px-4 bg-gray-50">
	<div class="container mx-auto max-w-6xl">
		<h2 class="text-4xl font-bold text-center mb-12">Component Showcase</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Rating Stars -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title">Rating Stars Component</h3>
					<div class="space-y-4">
						<div>
							<span class="font-medium">Power Rating:</span>
							<RatingStars rating={4} label="Power" />
						</div>
						<div>
							<span class="font-medium">Control Rating:</span>
							<RatingStars rating={5} label="Control" />
						</div>
						<div>
							<span class="font-medium">Comfort Rating:</span>
							<RatingStars rating={4} label="Comfort" />
						</div>
					</div>
				</div>
			</div>

			<!-- Affiliate Buttons -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title">Affiliate Buttons</h3>
					<div class="space-y-4">
						<AffiliateButton
							padelusaLink="https://padelusa.com/example"
							amazonLink="https://amazon.com/dp/example"
							variant="dual"
						/>
						<AffiliateButton
							padelusaLink="https://padelusa.com/example"
							variant="single"
						/>
					</div>
				</div>
			</div>

			<!-- Pros/Cons List -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title">Pros & Cons</h3>
					<ProsConsList
						pros={['Excellent control', 'Comfortable grip', 'Durable construction']}
						cons={['Higher price point', 'May feel heavy']}
						columns={false}
					/>
				</div>
			</div>

			<!-- Specs Table -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title">Specifications</h3>
					<SpecsTable specs={{
						shape: 'teardrop',
						weight: 365,
						balance: 'balanced',
						material: 'Carbon fiber',
						face: 'Fiberglass',
						core: 'Soft EVA'
					}} />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Comparison Table Section -->
<section class="py-16 px-4">
	<div class="container mx-auto max-w-6xl">
		<h2 class="text-4xl font-bold text-center mb-12">Paddle Comparison</h2>
		<ComparisonTable
			paddles={sampleReviews}
			columns={['name', 'price', 'rating', 'shape', 'weight', 'affiliate']}
		/>
	</div>
</section>

<!-- Newsletter Signup -->
<section class="py-16 px-4 bg-primary text-primary-content">
	<div class="container mx-auto max-w-4xl text-center">
		<NewsletterForm
			variant="inline"
			title="Stay Updated"
			description="Get the latest Padel reviews and guides delivered to your inbox."
		/>
	</div>
</section>
