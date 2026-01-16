<script lang="ts">
	import ComparisonTable from '$lib/components/reviews/ComparisonTable.svelte';
	import AffiliateButton from '$lib/components/reviews/AffiliateButton.svelte';

	// Placeholder data for demonstration
	const comparisonData = [
		{
			id: 'nox-ml10-pro-carbon',
			title: 'Nox ML10 Pro Carbon',
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
			excerpt: 'The Nox ML10 Pro Carbon offers exceptional control and comfort.'
		},
		{
			id: 'bullpadel-vertex-03',
			title: 'Bullpadel Vertex 03',
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
		},
		{
			id: 'adidas-metalbone-carbon',
			title: 'Adidas Metalbone Carbon',
			slug: 'adidas-metalbone-carbon',
			brand: 'Adidas',
			model: 'Metalbone Carbon',
			shape: 'round',
			weight: 355,
			balance: 'balanced',
			material: 'Carbon fiber',
			evaFoamType: 'Soft EVA',
			powerRating: 4,
			controlRating: 4,
			comfortRating: 5,
			price: 199.99,
			pros: ['Great comfort', 'Balanced performance', 'Affordable premium paddle'],
			cons: ['Less power than diamond shapes', 'May feel slow to some players'],
			affiliateLinks: {
				padelusa: 'https://padelusa.com/adidas-metalbone-carbon',
				amazon: 'https://amazon.com/dp/B08N1Q8Q9Z'
			},
			images: [],
			content: '',
			publishedAt: new Date('2024-01-25'),
			excerpt: 'The Adidas Metalbone Carbon offers excellent comfort and balanced performance.'
		}
	];

	const comparisons = [
		{
			title: 'Nox ML10 vs Bullpadel Vertex 03',
			slug: 'nox-ml10-vs-bullpadel-vertex-03',
			description: 'Compare two premium paddles: control-focused ML10 vs power-focused Vertex 03',
			paddles: [comparisonData[0], comparisonData[1]]
		},
		{
			title: 'Adidas Metalbone vs Bullpadel Vertex 03',
			slug: 'adidas-metalbone-vs-bullpadel-vertex-03',
			description: 'Budget-friendly premium vs professional-level power paddle',
			paddles: [comparisonData[2], comparisonData[1]]
		}
	];
</script>

<svelte:head>
	<title>Padel Paddle Comparisons - Side-by-Side Reviews</title>
	<meta name="description" content="Detailed side-by-side comparisons of Padel paddles. Compare specifications, performance, and value to find your perfect paddle." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Page Header -->
	<section class="bg-accent text-accent-content py-16">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Padel Paddle Comparisons</h1>
			<p class="text-xl max-w-2xl mx-auto">
				Detailed side-by-side comparisons to help you choose between similar paddles and find the best option for your game.
			</p>
		</div>
	</section>

	<!-- Featured Comparison -->
	<div class="container mx-auto px-4 py-12">
		<div class="mb-8">
			<h2 class="text-3xl font-bold mb-4">Featured Comparison</h2>
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-2xl">Nox ML10 Pro Carbon vs Bullpadel Vertex 03</h3>
					<p class="mb-6">Compare two premium paddles with different playing characteristics - control-focused vs power-focused.</p>

					<ComparisonTable
						paddles={comparisonData.slice(0, 2)}
						columns={['name', 'price', 'rating', 'shape', 'weight', 'material', 'affiliate']}
					/>

					<div class="mt-6">
						<a href="/compare/nox-ml10-vs-bullpadel-vertex-03" class="btn btn-primary">
							Read Full Comparison
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- All Comparisons -->
		<div>
			<h2 class="text-3xl font-bold mb-8">All Comparisons</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each comparisons as comparison}
					<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
						<div class="card-body">
							<h3 class="card-title text-xl mb-2">{comparison.title}</h3>
							<p class="text-gray-600 mb-4">{comparison.description}</p>

							<div class="flex flex-wrap gap-2 mb-4">
								{#each comparison.paddles as paddle}
									<span class="badge badge-outline">
										{paddle.brand} {paddle.model}
									</span>
								{/each}
							</div>

							<a href="/compare/{comparison.slug}" class="btn btn-outline">
								View Comparison
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Comparison Tips -->
	<section class="bg-base-200 py-16">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl font-bold mb-8">How to Choose the Right Paddle</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="text-center">
						<div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-2xl font-bold text-primary-content">🎯</span>
						</div>
						<h3 class="text-xl font-semibold mb-2">Know Your Style</h3>
						<p>Determine if you're a control player, power player, or somewhere in between.</p>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-2xl font-bold text-secondary-content">⚖️</span>
						</div>
						<h3 class="text-xl font-semibold mb-2">Consider Your Level</h3>
						<p>Beginner paddles prioritize comfort, while advanced paddles maximize performance.</p>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-2xl font-bold text-accent-content">💰</span>
						</div>
						<h3 class="text-xl font-semibold mb-2">Set Your Budget</h3>
						<p>Quality paddles range from $100-$400+. Find the best value for your price range.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>