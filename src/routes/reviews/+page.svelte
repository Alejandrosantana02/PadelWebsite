<script lang="ts">
	import ProductGrid from '$lib/components/content/ProductGrid.svelte';
	import CategoryFilter from '$lib/components/content/CategoryFilter.svelte';

	// Placeholder data for demonstration
	const sampleReviews = [
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

	let selectedFilters = $state({
		shape: [],
		material: [],
		priceRange: undefined,
		weightRange: undefined,
		balance: [],
		category: [],
		tags: []
	});

	function handleFilterChange(newFilters: typeof selectedFilters) {
		selectedFilters = newFilters;
		// TODO: Apply filters to the reviews data
	}
</script>

<svelte:head>
	<title>Padel Paddle Reviews - Expert Reviews & Comparisons</title>
	<meta name="description" content="Browse our comprehensive collection of expert Padel paddle reviews with detailed specifications, ratings, and buying guides." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Page Header -->
	<section class="bg-primary text-primary-content py-16">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Padel Paddle Reviews</h1>
			<p class="text-xl max-w-2xl mx-auto">
				Expert reviews of the best Padel paddles on the market. Find your perfect paddle with detailed specifications and ratings.
			</p>
		</div>
	</section>

	<!-- Main Content -->
	<div class="container mx-auto px-4 py-8">
		<div class="flex flex-col lg:flex-row gap-8">
			<!-- Sidebar Filters -->
			<aside class="lg:w-80">
				<CategoryFilter
					filters={selectedFilters}
					onFilterChange={handleFilterChange}
					variant="sidebar"
				/>
			</aside>

			<!-- Main Content -->
			<main class="flex-1">
				<div class="mb-6 flex justify-between items-center">
					<h2 class="text-2xl font-bold">All Reviews ({sampleReviews.length})</h2>
					<div class="flex gap-2">
						<select class="select select-bordered">
							<option>Newest First</option>
							<option>Price: Low to High</option>
							<option>Price: High to Low</option>
							<option>Highest Rated</option>
						</select>
					</div>
				</div>

				<ProductGrid
					products={sampleReviews}
					columns={3}
				/>
			</main>
		</div>
	</div>
</div>