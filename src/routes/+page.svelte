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
			image: '/images/paddles/nox-ml10-pro-carbon-front.webp',
			images: ['/images/paddles/nox-ml10-pro-carbon-front.webp'],
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
			image: '/images/paddles/bullpadel-vertex-03-front.webp',
			images: ['/images/paddles/bullpadel-vertex-03-front.webp'],
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
			image: '/images/paddles/adidas-metalbone-carbon.webp',
			images: ['/images/paddles/adidas-metalbone-carbon.webp'],
			content: '',
			publishedAt: new Date('2024-01-25'),
			excerpt: 'The Adidas Metalbone Carbon offers excellent comfort and balanced performance.'
		}
	];

	// Detailed paddle information
	const paddleDetails = {
		'nox-ml10-pro-carbon': {
			fullDescription: `The Nox ML10 Pro Carbon is a premium control-oriented paddle that delivers exceptional precision and comfort. Designed for intermediate to advanced players who prioritize control over raw power, this paddle features advanced carbon fiber construction and a soft EVA core that provides outstanding touch and feel.

The ML10's teardrop shape offers an extended sweet spot, making it forgiving on off-center hits while maintaining excellent maneuverability. The 16K carbon fiber face provides optimal stiffness for control without sacrificing comfort.

Perfect for players who want to dictate the pace of the game through precise shot placement rather than overwhelming power.`,
			keyFeatures: [
				'16K Carbon Fiber face for optimal control',
				'Soft EVA foam core for superior comfort',
				'Teardrop shape with extended sweet spot',
				'Fiberglass backing for enhanced durability',
				'Anti-vibration system for reduced shock',
				'Anatomical handle for better grip'
			],
			playingStyle: 'Control-oriented players who prefer precision over power',
			skillLevel: 'Intermediate to Advanced',
			performanceData: {
				power: 4,
				control: 5,
				comfort: 5,
				durability: 5,
				value: 4
			},
			userReviews: [
				{
					rating: 5,
					user: 'Carlos M.',
					date: '2024-01-15',
					review: 'This paddle has transformed my game. The control is incredible, and I can place shots exactly where I want them. Worth every penny!'
				},
				{
					rating: 4,
					user: 'Maria L.',
					date: '2024-01-10',
					review: 'Great control and comfort. Perfect for my playing style. Only wish it had a bit more power for certain shots.'
				}
			]
		},
		'bullpadel-vertex-03': {
			fullDescription: `The Bullpadel Vertex 03 is a professional-grade power paddle designed for competitive players who demand maximum performance. This diamond-shaped weapon features TriCarbon technology and X5 core for explosive power and spin.

The Vertex 03 is built for players who want to dominate rallies with powerful shots and aggressive play. The diamond shape concentrates power in the sweet spot, while the carbon fiber construction provides the stiffness needed for competitive play.

Ideal for tournament players and those who want to take their game to the next level with raw power and precision.`,
			keyFeatures: [
				'TriCarbon face technology for maximum power',
				'X5 core for enhanced spin and control',
				'Diamond shape for concentrated power',
				'CarbonFlex face for optimal flex',
				'Vortex system for better aerodynamics',
				'Professional-grade construction'
			],
			playingStyle: 'Aggressive players who want maximum power',
			skillLevel: 'Advanced to Professional',
			performanceData: {
				power: 5,
				control: 4,
				comfort: 4,
				durability: 5,
				value: 4
			},
			userReviews: [
				{
					rating: 5,
					user: 'Antonio R.',
					date: '2024-01-20',
					review: 'Unbelievable power! This paddle gives me the edge in tournaments. The spin generation is incredible.'
				},
				{
					rating: 5,
					user: 'Isabel G.',
					date: '2024-01-18',
					review: 'Professional quality paddle. The power is exactly what I needed to compete at a higher level.'
				}
			]
		},
		'adidas-metalbone-carbon': {
			fullDescription: `The Adidas Metalbone Carbon offers premium performance at an accessible price point. This round-shaped paddle combines structural carbon with a soft EVA core to deliver balanced performance across all areas of the game.

Perfect for players looking for a high-quality paddle that doesn't break the bank, the Metalbone Carbon provides excellent comfort, good control, and sufficient power for most playing situations. The round shape ensures versatility and forgiveness.

An excellent choice for club players and those transitioning from recreational to competitive play.`,
			keyFeatures: [
				'Structural Carbon face for balanced performance',
				'Soft EVA core for comfort and control',
				'Round shape for versatility',
				'Carbon tubing for lightweight strength',
				'Metalbone technology for enhanced power',
				'EVA Soft rubber for superior grip'
			],
			playingStyle: 'All-around players seeking balanced performance',
			skillLevel: 'Beginner to Intermediate',
			performanceData: {
				power: 4,
				control: 4,
				comfort: 5,
				durability: 4,
				value: 5
			},
			userReviews: [
				{
					rating: 5,
					user: 'Roberto S.',
					date: '2024-01-25',
					review: 'Excellent value for money! Comfortable, good control, and performs well in all situations. Highly recommended.'
				},
				{
					rating: 4,
					user: 'Carmen D.',
					date: '2024-01-22',
					review: 'Great paddle for the price. Very comfortable to play with and good all-around performance.'
				}
			]
		}
	};

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

	// Calculate average rating for each review
	function getAverageRating(review: typeof sampleReviews[0]): number {
		if (review.powerRating && review.controlRating && review.comfortRating) {
			return Math.round(((review.powerRating + review.controlRating + review.comfortRating) / 3) * 10) / 10;
		}
		return 0;
	}

	// State for expanded paddle details
	let expandedPaddle = $state<string | null>(null);

	// Toggle expanded view for a paddle
	function togglePaddleDetails(paddleId: string) {
		expandedPaddle = expandedPaddle === paddleId ? null : paddleId;
		// Scroll to the paddle card after a short delay to allow for expansion
		setTimeout(() => {
			const element = document.getElementById(`paddle-${paddleId}`);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);
	}

	// Listen for paddle detail toggle events from components
	$effect(() => {
		const handleToggle = (event: CustomEvent) => {
			togglePaddleDetails(event.detail.paddleId);
		};

		window.addEventListener('togglePaddleDetails', handleToggle as EventListener);

		return () => {
			window.removeEventListener('togglePaddleDetails', handleToggle as EventListener);
		};
	});

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

		<!-- Detailed Paddle Reviews -->
		<div class="space-y-12">
			{#each sampleReviews as review, index}
				<div id="paddle-{review.id}" class="bg-white rounded-2xl p-8 shadow-lg border border-base-200">
					<div class="flex items-start justify-between mb-6">
						<div>
							<h3 class="text-3xl font-bold mb-2">{review.brand} {review.model}</h3>
							<div class="flex items-center gap-4 text-sm text-gray-600">
								<span class="badge badge-primary">{review.shape} shape</span>
								<span class="badge badge-secondary">{review.weight}g</span>
								<span class="badge badge-accent">{review.material}</span>
								<span class="text-lg font-bold text-primary">${review.price}</span>
							</div>
						</div>
						<div class="flex flex-col items-end gap-2">
							{#if getAverageRating(review) > 0}
								<div class="text-right">
									<div class="text-2xl font-bold mb-1">{getAverageRating(review)}/5</div>
									<RatingStars rating={getAverageRating(review)} size="md" showValue={false} />
								</div>
							{/if}
							<button
								class="btn btn-outline btn-sm"
								onclick={() => togglePaddleDetails(review.id)}
							>
								{expandedPaddle === review.id ? 'Hide Details' : 'View Details'}
							</button>
						</div>
					</div>

					<!-- Quick Specs Overview -->
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
						<div class="stat bg-base-100 rounded-lg">
							<div class="stat-title">Power</div>
							<div class="stat-value text-2xl">{review.powerRating}/5</div>
							<div class="stat-desc">
								<RatingStars rating={review.powerRating} size="sm" showValue={false} />
							</div>
						</div>
						<div class="stat bg-base-100 rounded-lg">
							<div class="stat-title">Control</div>
							<div class="stat-value text-2xl">{review.controlRating}/5</div>
							<div class="stat-desc">
								<RatingStars rating={review.controlRating} size="sm" showValue={false} />
							</div>
						</div>
						<div class="stat bg-base-100 rounded-lg">
							<div class="stat-title">Comfort</div>
							<div class="stat-value text-2xl">{review.comfortRating}/5</div>
							<div class="stat-desc">
								<RatingStars rating={review.comfortRating} size="sm" showValue={false} />
							</div>
						</div>
					</div>

					<!-- Pros and Cons -->
					<div class="mb-8">
						<h4 class="text-xl font-bold mb-4">Pros & Cons</h4>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ProsConsList
								pros={review.pros}
								cons={review.cons}
								columns={true}
							/>
						</div>
					</div>

					<!-- Affiliate Links -->
					<div class="border-t border-base-200 pt-6">
						<h4 class="text-xl font-bold mb-4">Where to Buy</h4>
						<div class="flex flex-col sm:flex-row gap-4">
							<AffiliateButton
								padelusaLink={review.affiliateLinks.padelusa}
								amazonLink={review.affiliateLinks.amazon}
								variant="dual"
							/>
						</div>
					</div>

					<!-- Expanded Detailed View -->
					{#if expandedPaddle === review.id}
						<div class="mt-8 pt-8 border-t border-base-200">
							<div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
								<!-- Detailed Description -->
								<div class="xl:col-span-2">
									<h4 class="text-2xl font-bold mb-4">Detailed Review</h4>
									<div class="prose prose-lg max-w-none mb-6">
										<p class="text-gray-700 leading-relaxed">{paddleDetails[review.id].fullDescription}</p>
									</div>

									<!-- Key Features -->
									<h5 class="text-xl font-bold mb-4">Key Features</h5>
									<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
										{#each paddleDetails[review.id].keyFeatures as feature}
											<div class="flex items-center gap-2">
												<span class="text-green-500">✓</span>
												<span class="text-sm">{feature}</span>
											</div>
										{/each}
									</div>

									<!-- Performance Data -->
									<h5 class="text-xl font-bold mb-4">Performance Breakdown</h5>
									<div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
										{#each Object.entries(paddleDetails[review.id].performanceData) as [key, value]}
											<div class="text-center">
												<div class="text-2xl font-bold text-primary">{value}/5</div>
												<div class="text-sm text-gray-600 capitalize">{key}</div>
											</div>
										{/each}
									</div>

									<!-- Playing Style & Skill Level -->
									<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div class="bg-blue-50 p-4 rounded-lg">
											<h6 class="font-bold text-blue-800 mb-2">Best For</h6>
											<p class="text-blue-700 text-sm">{paddleDetails[review.id].playingStyle}</p>
										</div>
										<div class="bg-green-50 p-4 rounded-lg">
											<h6 class="font-bold text-green-800 mb-2">Skill Level</h6>
											<p class="text-green-700 text-sm">{paddleDetails[review.id].skillLevel}</p>
										</div>
									</div>
								</div>

								<!-- User Reviews -->
								<div>
									<h4 class="text-xl font-bold mb-4">User Reviews</h4>
									<div class="space-y-4">
										{#each paddleDetails[review.id].userReviews as userReview}
											<div class="bg-gray-50 p-4 rounded-lg">
												<div class="flex items-center justify-between mb-2">
													<span class="font-semibold">{userReview.user}</span>
													<RatingStars rating={userReview.rating} size="sm" showValue={false} />
												</div>
												<p class="text-sm text-gray-600 mb-2">{userReview.review}</p>
												<span class="text-xs text-gray-500">{new Date(userReview.date).toLocaleDateString()}</span>
											</div>
										{/each}
									</div>

									<!-- Specifications Sidebar -->
									<div class="mt-6">
										<h5 class="text-lg font-bold mb-4">Complete Specifications</h5>
										<SpecsTable specs={{
											shape: review.shape,
											weight: review.weight,
											balance: review.balance,
											material: review.material,
											face: 'Fiberglass',
											core: review.evaFoamType
										}} />
									</div>
								</div>
							</div>
						</div>
					{/if}

					{#if index < sampleReviews.length - 1}
						<div class="divider my-8"></div>
					{/if}
				</div>
			{/each}
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
