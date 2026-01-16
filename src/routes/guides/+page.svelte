<script lang="ts">
	import ArticleContent from '$lib/components/content/ArticleContent.svelte';
	import NewsletterForm from '$lib/components/forms/NewsletterForm.svelte';

	// Placeholder data for demonstration
	const sampleGuides = [
		{
			title: 'Best Padel Paddles for Beginners',
			slug: 'best-paddles-beginners',
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
			slug: 'paddle-shapes-explained',
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
</script>

<svelte:head>
	<title>Padel Buyer's Guides - Expert Advice & Recommendations</title>
	<meta name="description" content="Comprehensive buyer's guides for Padel equipment. Expert advice on choosing paddles, balls, shoes, and accessories." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Page Header -->
	<section class="bg-secondary text-secondary-content py-16">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Padel Buyer's Guides</h1>
			<p class="text-xl max-w-2xl mx-auto">
				Expert advice and comprehensive guides to help you make informed decisions about Padel equipment.
			</p>
		</div>
	</section>

	<!-- Guides List -->
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each sampleGuides as guide}
				<article class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
					<div class="card-body">
						<h2 class="card-title text-2xl mb-4">{guide.title}</h2>
						<p class="text-gray-600 mb-6">{guide.excerpt}</p>

						<div class="card-actions justify-between items-center">
							<a href="/guides/{guide.slug}" class="btn btn-primary">
								Read Guide
							</a>
							<span class="text-sm text-gray-500">5 min read</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>

	<!-- Newsletter Signup -->
	<section class="bg-primary text-primary-content py-16">
		<div class="container mx-auto px-4 text-center">
			<NewsletterForm
				variant="inline"
				title="Get Padel Tips & Updates"
				description="Subscribe for expert advice, product reviews, and the latest Padel news."
			/>
		</div>
	</section>
</div>