<script lang="ts">
	import ContactForm from '$lib/components/forms/ContactForm.svelte';
	import NewsletterForm from '$lib/components/forms/NewsletterForm.svelte';
</script>

<svelte:head>
	<title>About Padel Reviews - Expert Padel Equipment Guides</title>
	<meta name="description" content="Learn about Padel Reviews, your trusted source for expert Padel paddle reviews, equipment guides, and buying advice." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-r from-primary to-secondary text-primary-content py-20">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">About Padel Reviews</h1>
			<p class="text-xl md:text-2xl max-w-3xl mx-auto">
				Your trusted source for expert Padel equipment reviews, comprehensive buying guides, and everything you need to excel at Padel.
			</p>
		</div>
	</section>

	<!-- Mission Section -->
	<section class="py-16 px-4">
		<div class="container mx-auto max-w-4xl">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-6">Our Mission</h2>
				<p class="text-xl text-gray-600">
					To provide Padel players with honest, comprehensive reviews and expert guidance to help them choose the best equipment for their game.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<div class="text-center">
					<div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
						<span class="text-3xl">🔍</span>
					</div>
					<h3 class="text-2xl font-bold mb-4">Expert Reviews</h3>
					<p class="text-gray-600">
						In-depth analysis of Padel paddles, equipment, and accessories with honest opinions and detailed specifications.
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
						<span class="text-3xl">📚</span>
					</div>
					<h3 class="text-2xl font-bold mb-4">Comprehensive Guides</h3>
					<p class="text-gray-600">
						Buyer's guides, comparison articles, and educational content to help players make informed decisions.
					</p>
				</div>

				<div class="text-center">
					<div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
						<span class="text-3xl">🤝</span>
					</div>
					<h3 class="text-2xl font-bold mb-4">Community Focused</h3>
					<p class="text-gray-600">
						Building a community of Padel enthusiasts through shared knowledge and passion for the sport.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Approach -->
	<section class="bg-base-200 py-16 px-4">
		<div class="container mx-auto max-w-4xl">
			<h2 class="text-4xl font-bold text-center mb-12">Our Approach</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<h3 class="text-2xl font-bold mb-4">Honest Reviews</h3>
					<p class="mb-4">
						We believe in complete transparency. Our reviews are based on real-world testing and honest feedback, not marketing hype.
					</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Real player testing, not just specs</li>
						<li>• Pros and cons for every product</li>
						<li>• Performance ratings you can trust</li>
						<li>• No sponsored or biased content</li>
					</ul>
				</div>

				<div>
					<h3 class="text-2xl font-bold mb-4">Expert Analysis</h3>
					<p class="mb-4">
						Our team combines technical knowledge with practical experience to provide meaningful insights.
					</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Detailed technical specifications</li>
						<li>• Performance comparisons</li>
						<li>• Recommendations by skill level</li>
						<li>• Budget-conscious advice</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Us -->
	<section class="py-16 px-4">
		<div class="container mx-auto max-w-4xl">
			<h2 class="text-4xl font-bold text-center mb-12">Why Choose Padel Reviews?</h2>

			<div class="space-y-8">
				<div class="flex flex-col md:flex-row items-center gap-6">
					<div class="md:w-1/3">
						<div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
							<span class="text-2xl text-primary-content">⭐</span>
						</div>
					</div>
					<div class="md:w-2/3">
						<h3 class="text-2xl font-bold mb-2">Independent & Unbiased</h3>
						<p class="text-gray-600">
							We maintain complete editorial independence. Our recommendations are based solely on product quality and performance, not affiliate commissions.
						</p>
					</div>
				</div>

				<div class="flex flex-col md:flex-row items-center gap-6">
					<div class="md:w-1/3">
						<div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
							<span class="text-2xl text-secondary-content">🎯</span>
						</div>
					</div>
					<div class="md:w-2/3">
						<h3 class="text-2xl font-bold mb-2">Data-Driven Insights</h3>
						<p class="text-gray-600">
							We combine detailed testing data with user feedback to provide comprehensive product analysis and recommendations.
						</p>
					</div>
				</div>

				<div class="flex flex-col md:flex-row items-center gap-6">
					<div class="md:w-1/3">
						<div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
							<span class="text-2xl text-accent-content">📈</span>
						</div>
					</div>
					<div class="md:w-2/3">
						<h3 class="text-2xl font-bold mb-2">Regular Updates</h3>
						<p class="text-gray-600">
							New paddles and equipment are constantly being released. We regularly update our reviews and add new products to our database.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="bg-neutral text-neutral-content py-16 px-4">
		<div class="container mx-auto max-w-4xl">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
				<p class="text-xl">
					Have questions about Padel equipment or suggestions for our site? We'd love to hear from you.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div>
					<h3 class="text-2xl font-bold mb-6">Contact Information</h3>
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<span class="text-2xl">📧</span>
							<div>
								<p class="font-semibold">Email</p>
								<p>hello@padelreviews.com</p>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-2xl">🐦</span>
							<div>
								<p class="font-semibold">Twitter</p>
								<p>@PadelReviews</p>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-2xl">📍</span>
							<div>
								<p class="font-semibold">Location</p>
								<p>Serving Padel players worldwide</p>
							</div>
						</div>
					</div>

					<div class="mt-8">
						<h4 class="text-xl font-bold mb-4">Follow Us</h4>
						<p class="mb-4">
							Stay updated with the latest Padel equipment reviews, tips, and news.
						</p>
						<NewsletterForm
							variant="sidebar"
							title="Newsletter"
							description="Get weekly Padel updates"
						/>
					</div>
				</div>

				<div>
					<h3 class="text-2xl font-bold mb-6">Send us a Message</h3>
					<ContactForm onSuccess={() => console.log('Message sent!')} />
				</div>
			</div>
		</div>
	</section>
</div>