<script lang="ts">
	import type { PaddleReview } from '$lib/types';
	import PaddleReviewCard from '$lib/components/reviews/PaddleReviewCard.svelte';
	import RatingStars from '$lib/components/reviews/RatingStars.svelte';
	import AffiliateButton from '$lib/components/reviews/AffiliateButton.svelte';
	import ComparisonTable from '$lib/components/reviews/ComparisonTable.svelte';
	import ProsConsList from '$lib/components/reviews/ProsConsList.svelte';
	import SpecsTable from '$lib/components/reviews/SpecsTable.svelte';
	import NewsletterForm from '$lib/components/forms/NewsletterForm.svelte';
	import ContactForm from '$lib/components/forms/ContactForm.svelte';

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
		},
		{
			id: 'adidas-metalbone-carbon',
			title: 'Adidas Metalbone Carbon Paddle Review',
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

	const guides = [
		{
			title: 'Best Padel Paddles for Beginners',
			excerpt: 'Find the perfect paddle to start your Padel journey with our comprehensive guide for beginners.',
			content: `# Best Padel Paddles for Beginners

Choosing your first Padel paddle can be overwhelming. This guide will help you find the perfect paddle to start your Padel journey.

## Key Factors for Beginners

### Comfort and Control
Beginner paddles should prioritize comfort and control over power. Look for paddles with soft EVA foam and balanced weight distribution.

### Budget-Friendly Options
Don't invest in premium paddles until you're sure you'll stick with the sport. Start with paddles in the $100-200 range.

### Weight and Balance
Lighter paddles (350-370g) with balanced or handle-heavy balance are easier for beginners to control.

## Recommended Beginner Paddles

### 1. Nox AT10 Luxury
- **Price**: $149
- **Weight**: 365g
- **Shape**: Round
- **Best For**: Complete beginners

### 2. Bullpadel Hack 03 Comfort
- **Price**: $179
- **Weight**: 360g
- **Shape**: Teardrop
- **Best For**: Those wanting some power

## Conclusion

Start with comfort and control, then upgrade as you improve. The most important thing is enjoying the game!`
		},
		{
			title: 'Padel Paddle Shapes Explained',
			excerpt: 'Understanding the different Padel paddle shapes and how they affect your game.',
			content: `# Padel Paddle Shapes Explained

Padel paddle shapes significantly impact how the paddle performs. Understanding the differences will help you choose the right paddle for your playing style.

## The Three Main Shapes

### Round Shape
- **Characteristics**: Equal surface area, balanced control and power
- **Best For**: All-around players, beginners
- **Advantages**: Versatile, easier to control
- **Disadvantages**: Less specialized performance

### Teardrop Shape
- **Characteristics**: More surface area in sweet spot, slightly more control
- **Best For**: Intermediate players, control-oriented players
- **Advantages**: Better control, larger sweet spot
- **Disadvantages**: Slightly less power

### Diamond Shape
- **Characteristics**: Concentrated power in sweet spot, maximum power
- **Best For**: Advanced players, aggressive players
- **Advantages**: Maximum power, competitive edge
- **Disadvantages**: Smaller sweet spot, harder to control

## Choosing the Right Shape

Consider your playing style:
- **Defensive players**: Round or teardrop shapes
- **Aggressive players**: Diamond shapes
- **All-around players**: Round shapes

## Conclusion

Your paddle shape should match your playing style and skill level. Don't be afraid to try different shapes to find what works best for you.`
		}
	];

	// Smooth scroll function
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Padel Reviews - Expert Padel Paddle Reviews, Guides & Comparisons</title>
	<meta name="description" content="Your complete Padel resource: expert paddle reviews, buying guides, comparisons, and everything you need to excel at Padel." />
</svelte:head>

<!-- Navigation Bar -->
<nav class="navbar bg-base-100/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-base-200">
	<div class="navbar-start">
		<a class="btn btn-ghost text-xl font-bold text-primary hover:bg-primary/10 transition-colors" onclick={() => scrollToSection('home')}>
			🎾 Padel Reviews
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 gap-2">
			<li>
				<a
					class="btn btn-ghost hover:btn-primary transition-all duration-200 font-medium"
					onclick={() => scrollToSection('home')}
				>
					Home
				</a>
			</li>
			<li>
				<a
					class="btn btn-ghost hover:btn-primary transition-all duration-200 font-medium"
					onclick={() => scrollToSection('reviews')}
				>
					Reviews
				</a>
			</li>
			<li>
				<a
					class="btn btn-ghost hover:btn-primary transition-all duration-200 font-medium"
					onclick={() => scrollToSection('guides')}
				>
					Guides
				</a>
			</li>
			<li>
				<a
					class="btn btn-ghost hover:btn-primary transition-all duration-200 font-medium"
					onclick={() => scrollToSection('compare')}
				>
					Compare
				</a>
			</li>
			<li>
				<a
					class="btn btn-ghost hover:btn-primary transition-all duration-200 font-medium"
					onclick={() => scrollToSection('about')}
				>
					About
				</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end lg:hidden">
			<label tabindex="0" class="btn btn-ghost lg:hidden hover:bg-base-200 transition-colors">
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</label>
			<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
				<li>
					<a class="hover:bg-primary/10 transition-colors" onclick={() => scrollToSection('home')}>
						Home
					</a>
				</li>
				<li>
					<a class="hover:bg-primary/10 transition-colors" onclick={() => scrollToSection('reviews')}>
						Reviews
					</a>
				</li>
				<li>
					<a class="hover:bg-primary/10 transition-colors" onclick={() => scrollToSection('guides')}>
						Guides
					</a>
				</li>
				<li>
					<a class="hover:bg-primary/10 transition-colors" onclick={() => scrollToSection('compare')}>
						Compare
					</a>
				</li>
				<li>
					<a class="hover:bg-primary/10 transition-colors" onclick={() => scrollToSection('about')}>
						About
					</a>
				</li>
			</ul>
		</div>
		<!-- Search functionality could be added here in the future -->
		<div class="hidden md:flex form-control">
			<div class="input-group">
				<input
					type="text"
					placeholder="Search paddles..."
					class="input input-bordered input-sm w-32 lg:w-48 focus:input-primary transition-colors"
				/>
				<button class="btn btn-square btn-sm btn-primary">
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Hero Section -->
<section id="home" class="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center">
	<div class="container mx-auto px-4 text-center text-primary-content">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">Find Your Perfect Padel Paddle</h1>
			<p class="text-xl md:text-2xl mb-8 opacity-90">
				Expert reviews, detailed comparisons, comprehensive guides, and everything you need to excel at Padel tennis.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button class="btn btn-accent btn-lg" onclick={() => scrollToSection('reviews')}>
					Browse Reviews
				</button>
				<button class="btn btn-outline btn-accent btn-lg" onclick={() => scrollToSection('guides')}>
					Read Guides
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Featured Reviews Section -->
<section id="reviews" class="py-20 px-4 bg-base-100">
	<div class="container mx-auto max-w-6xl">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-bold mb-6">Expert Paddle Reviews</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				In-depth reviews of the most popular Padel paddles with detailed specifications, performance analysis, and buying recommendations.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
			{#each sampleReviews as review}
				<PaddleReviewCard {review} />
			{/each}
		</div>

		<!-- Component Showcase -->
		<div class="bg-gray-50 rounded-2xl p-8">
			<h3 class="text-3xl font-bold text-center mb-8">Review Components</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="card bg-base-100 shadow-lg">
					<div class="card-body text-center">
						<h4 class="card-title text-lg">Rating System</h4>
						<div class="space-y-2">
							<div><span class="font-medium">Power:</span> <RatingStars rating={4} /></div>
							<div><span class="font-medium">Control:</span> <RatingStars rating={5} /></div>
							<div><span class="font-medium">Comfort:</span> <RatingStars rating={4} /></div>
						</div>
					</div>
				</div>

				<div class="card bg-base-100 shadow-lg">
					<div class="card-body text-center">
						<h4 class="card-title text-lg">Affiliate Links</h4>
						<div class="space-y-2">
							<AffiliateButton
								padelusaLink="https://padelusa.com/example"
								amazonLink="https://amazon.com/dp/example"
								variant="dual"
							/>
						</div>
					</div>
				</div>

				<div class="card bg-base-100 shadow-lg">
					<div class="card-body text-center">
						<h4 class="card-title text-lg">Pros & Cons</h4>
						<ProsConsList
							pros={['Excellent control', 'Comfortable grip']}
							cons={['Higher price', 'May feel heavy']}
							columns={false}
						/>
					</div>
				</div>

				<div class="card bg-base-100 shadow-lg">
					<div class="card-body text-center">
						<h4 class="card-title text-lg">Specifications</h4>
						<SpecsTable specs={{
							shape: 'teardrop',
							weight: 365,
							balance: 'balanced',
							material: 'Carbon fiber'
						}} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Guides Section -->
<section id="guides" class="py-20 px-4 bg-gray-50">
	<div class="container mx-auto max-w-6xl">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-bold mb-6">Buyer's Guides</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Comprehensive guides to help you make informed decisions about Padel equipment, from choosing your first paddle to advanced techniques.
			</p>
		</div>

		<!-- Best Paddles for Beginners Guide -->
		<div class="bg-white rounded-2xl p-8 shadow-lg mb-12">
			<div class="flex items-center gap-4 mb-6">
				<div class="badge badge-primary badge-lg">Beginner Guide</div>
				<span class="text-sm text-gray-500">5 min read</span>
			</div>
			<h3 class="text-4xl font-bold mb-6">Best Padel Paddles for Beginners</h3>
			<p class="text-lg text-gray-600 mb-8">{guides[0].excerpt}</p>

			<div class="prose prose-lg max-w-none">
				<h4 class="text-2xl font-bold mb-4">Key Factors for Beginners</h4>
				<h5 class="text-xl font-semibold mb-2">Comfort and Control</h5>
				<p class="mb-4">Beginner paddles should prioritize comfort and control over power. Look for paddles with soft EVA foam and balanced weight distribution.</p>

				<h5 class="text-xl font-semibold mb-2">Budget-Friendly Options</h5>
				<p class="mb-4">Don't invest in premium paddles until you're sure you'll stick with the sport. Start with paddles in the $100-200 range.</p>

				<h5 class="text-xl font-semibold mb-2">Weight and Balance</h5>
				<p class="mb-6">Lighter paddles (350-370g) with balanced or handle-heavy balance are easier for beginners to control.</p>

				<h4 class="text-2xl font-bold mb-4">Recommended Beginner Paddles</h4>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div class="card bg-base-100 border border-base-200">
						<div class="card-body">
							<h5 class="card-title text-xl">Nox AT10 Luxury</h5>
							<div class="space-y-2 text-sm">
								<p><strong>Price:</strong> $149</p>
								<p><strong>Weight:</strong> 365g</p>
								<p><strong>Shape:</strong> Round</p>
								<p><strong>Best For:</strong> Complete beginners</p>
							</div>
						</div>
					</div>

					<div class="card bg-base-100 border border-base-200">
						<div class="card-body">
							<h5 class="card-title text-xl">Bullpadel Hack 03 Comfort</h5>
							<div class="space-y-2 text-sm">
								<p><strong>Price:</strong> $179</p>
								<p><strong>Weight:</strong> 360g</p>
								<p><strong>Shape:</strong> Teardrop</p>
								<p><strong>Best For:</strong> Those wanting some power</p>
							</div>
						</div>
					</div>
				</div>

				<div class="alert alert-info">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<div>
						<h5 class="font-bold">Pro Tip</h5>
						<p>Start with comfort and control, then upgrade as you improve. The most important thing is enjoying the game!</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Paddle Shapes Guide -->
		<div class="bg-white rounded-2xl p-8 shadow-lg mb-12">
			<div class="flex items-center gap-4 mb-6">
				<div class="badge badge-secondary badge-lg">Shapes Guide</div>
				<span class="text-sm text-gray-500">4 min read</span>
			</div>
			<h3 class="text-4xl font-bold mb-6">Padel Paddle Shapes Explained</h3>
			<p class="text-lg text-gray-600 mb-8">{guides[1].excerpt}</p>

			<div class="prose prose-lg max-w-none">
				<h4 class="text-2xl font-bold mb-6">The Three Main Shapes</h4>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
					<div class="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
						<div class="card-body text-center">
							<div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-3xl text-white">⚫</span>
							</div>
							<h4 class="card-title text-2xl mb-4">Round Shape</h4>
							<h5 class="font-semibold mb-2">Characteristics:</h5>
							<p class="text-sm mb-4">Equal surface area, balanced control and power</p>
							<h5 class="font-semibold mb-2">Best For:</h5>
							<p class="text-sm mb-4">All-around players, beginners</p>
							<h5 class="font-semibold mb-2">Advantages:</h5>
							<ul class="text-sm text-left list-disc list-inside">
								<li>Versatile performance</li>
								<li>Easier to control</li>
								<li>Forgiving for mistakes</li>
							</ul>
						</div>
					</div>

					<div class="card bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
						<div class="card-body text-center">
							<div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-3xl text-white">🔺</span>
							</div>
							<h4 class="card-title text-2xl mb-4">Teardrop Shape</h4>
							<h5 class="font-semibold mb-2">Characteristics:</h5>
							<p class="text-sm mb-4">More surface area in sweet spot, slightly more control</p>
							<h5 class="font-semibold mb-2">Best For:</h5>
							<p class="text-sm mb-4">Intermediate players, control-oriented players</p>
							<h5 class="font-semibold mb-2">Advantages:</h5>
							<ul class="text-sm text-left list-disc list-inside">
								<li>Better control</li>
								<li>Larger sweet spot</li>
								<li>More forgiving</li>
							</ul>
						</div>
					</div>

					<div class="card bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
						<div class="card-body text-center">
							<div class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-3xl text-white">💎</span>
							</div>
							<h4 class="card-title text-2xl mb-4">Diamond Shape</h4>
							<h5 class="font-semibold mb-2">Characteristics:</h5>
							<p class="text-sm mb-4">Concentrated power in sweet spot, maximum power</p>
							<h5 class="font-semibold mb-2">Best For:</h5>
							<p class="text-sm mb-4">Advanced players, aggressive players</p>
							<h5 class="font-semibold mb-2">Advantages:</h5>
							<ul class="text-sm text-left list-disc list-inside">
								<li>Maximum power</li>
								<li>Competitive edge</li>
								<li>More spin potential</li>
							</ul>
						</div>
					</div>
				</div>

				<h4 class="text-2xl font-bold mb-4">Choosing the Right Shape</h4>
				<div class="bg-gray-50 rounded-lg p-6">
					<h5 class="text-xl font-semibold mb-4">Consider your playing style:</h5>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h6 class="font-bold text-green-600 mb-2">🛡️ Defensive Players</h6>
							<ul class="list-disc list-inside text-sm space-y-1">
								<li>Round or teardrop shapes</li>
								<li>Focus on control and consistency</li>
								<li>More forgiving on off-center hits</li>
							</ul>
						</div>
						<div>
							<h6 class="font-bold text-red-600 mb-2">⚡ Aggressive Players</h6>
							<ul class="list-disc list-inside text-sm space-y-1">
								<li>Diamond shapes</li>
								<li>Maximum power and spin</li>
								<li>Requires good technique</li>
							</ul>
						</div>
						<div>
							<h6 class="font-bold text-blue-600 mb-2">🎯 All-Around Players</h6>
							<ul class="list-disc list-inside text-sm space-y-1">
								<li>Round shapes</li>
								<li>Balanced performance</li>
								<li>Versatile in different situations</li>
							</ul>
						</div>
						<div>
							<h6 class="font-bold text-purple-600 mb-2">🔄 Improving Players</h6>
							<ul class="list-disc list-inside text-sm space-y-1">
								<li>Start with round, progress to teardrop</li>
								<li>Focus on consistency first</li>
								<li>Power comes with experience</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="alert alert-success mt-6">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<div>
						<h5 class="font-bold">Remember</h5>
						<p>Your paddle shape should match your playing style and skill level. Don't be afraid to try different shapes to find what works best for you!</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Quick Tips Section -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
				<div class="card-body text-center">
					<div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-xl">💰</span>
					</div>
					<h4 class="card-title text-lg">Budget Guide</h4>
					<p class="text-sm">Quality paddles range from $100-$400. Start affordable and upgrade as you improve.</p>
				</div>
			</div>

			<div class="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
				<div class="card-body text-center">
					<div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-xl">⚖️</span>
					</div>
					<h4 class="card-title text-lg">Weight Matters</h4>
					<p class="text-sm">Lighter paddles (350-370g) for beginners, heavier (370-390g) for advanced players.</p>
				</div>
			</div>

			<div class="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
				<div class="card-body text-center">
					<div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-xl">🎯</span>
					</div>
					<h4 class="card-title text-lg">Try Before Buying</h4>
					<p class="text-sm">Visit a Padel club to try different paddles before making a purchase.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Comparison Section -->
<section id="compare" class="py-20 px-4 bg-base-100">
	<div class="container mx-auto max-w-6xl">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-bold mb-6">Paddle Comparisons</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Side-by-side comparisons to help you choose between similar paddles and find the best option for your playing style and budget.
			</p>
		</div>

		<!-- Featured Comparison -->
		<div class="card bg-base-100 shadow-2xl mb-12">
			<div class="card-body">
				<h3 class="card-title text-3xl mb-6">Nox ML10 Pro Carbon vs Bullpadel Vertex 03</h3>
				<p class="text-lg mb-6">Compare two premium paddles with different playing characteristics - control-focused vs power-focused.</p>
				<ComparisonTable
					paddles={sampleReviews.slice(0, 2)}
					columns={['name', 'price', 'rating', 'shape', 'weight', 'material', 'affiliate']}
				/>
			</div>
		</div>

		<!-- Comparison Tips -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
					<span class="text-2xl font-bold text-primary-content">🎯</span>
				</div>
				<h4 class="text-xl font-bold mb-2">Know Your Style</h4>
				<p class="text-gray-600">Determine if you're a control player, power player, or somewhere in between.</p>
			</div>
			<div class="text-center">
				<div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
					<span class="text-2xl font-bold text-secondary-content">⚖️</span>
				</div>
				<h4 class="text-xl font-bold mb-2">Consider Your Level</h4>
				<p class="text-gray-600">Beginner paddles prioritize comfort, while advanced paddles maximize performance.</p>
			</div>
			<div class="text-center">
				<div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
					<span class="text-2xl font-bold text-accent-content">💰</span>
				</div>
				<h4 class="text-xl font-bold mb-2">Set Your Budget</h4>
				<p class="text-gray-600">Quality paddles range from $100-$400+. Find the best value for your price range.</p>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-20 px-4 bg-gradient-to-r from-neutral to-base-200 text-neutral-content">
	<div class="container mx-auto max-w-6xl">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-bold mb-6">About Padel Reviews</h2>
			<p class="text-xl opacity-90 max-w-3xl mx-auto">
				Your trusted source for honest, comprehensive Padel equipment reviews and expert guidance.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div>
				<h3 class="text-3xl font-bold mb-6">Our Mission</h3>
				<p class="text-lg mb-6">
					To provide Padel players with honest, comprehensive reviews and expert guidance to help them choose the best equipment for their game.
				</p>

				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-sm font-bold">✓</span>
						</div>
						<div>
							<h4 class="font-bold">Independent & Unbiased</h4>
							<p class="opacity-80">Our recommendations are based solely on product quality and performance.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-sm font-bold">✓</span>
						</div>
						<div>
							<h4 class="font-bold">Data-Driven Insights</h4>
							<p class="opacity-80">We combine detailed testing with user feedback for comprehensive analysis.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-sm font-bold">✓</span>
						</div>
						<div>
							<h4 class="font-bold">Regular Updates</h4>
							<p class="opacity-80">New paddles and equipment are regularly reviewed and added to our database.</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h3 class="text-3xl font-bold mb-6">Get In Touch</h3>
				<div class="bg-base-100 rounded-2xl p-8 text-base-content">
					<ContactForm onSuccess={() => console.log('Message sent!')} />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Newsletter & Footer -->
<section class="py-20 px-4 bg-neutral text-neutral-content">
	<div class="container mx-auto max-w-4xl text-center">
		<h2 class="text-4xl font-bold mb-6">Stay Updated</h2>
		<p class="text-xl mb-8 opacity-90">
			Get the latest Padel reviews, equipment guides, and expert tips delivered to your inbox.
		</p>
		<NewsletterForm
			variant="inline"
			title=""
			description=""
		/>

		<div class="mt-12 pt-8 border-t border-neutral-content border-opacity-20">
			<p class="text-sm opacity-70">
				© 2026 Padel Reviews. Your trusted source for Padel equipment guidance.
			</p>
		</div>
	</div>
</section>
