<script lang="ts">
	let { children } = $props();

	// Smooth scroll function
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<!-- Footer component -->
<footer class="footer p-10 bg-neutral text-neutral-content">
	<div>
		<span class="footer-title">Services</span>
		<button class="link link-hover text-left" onclick={() => scrollToSection('reviews')}>Paddle Reviews</button>
		<button class="link link-hover text-left" onclick={() => scrollToSection('guides')}>Buyer's Guides</button>
		<button class="link link-hover text-left" onclick={() => scrollToSection('compare')}>Comparisons</button>
		<button class="link link-hover text-left" onclick={() => scrollToSection('about')}>About Us</button>
	</div>
	<div>
		<span class="footer-title">Company</span>
		<button class="link link-hover text-left" onclick={() => scrollToSection('about')}>Contact</button>
		<button class="link link-hover text-left opacity-50 cursor-not-allowed">Privacy Policy</button>
		<button class="link link-hover text-left" onclick={() => scrollToSection('about')}>Affiliate Disclosure</button>
	</div>
	<div>
		<span class="footer-title">Newsletter</span>
		<div class="w-80">
			<p class="text-sm mb-2">Subscribe to our newsletter</p>
			<div class="relative">
				<input type="email" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
				<button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
			</div>
		</div>
	</div>
</footer>

<div class="bg-neutral text-neutral-content">
	<div class="container mx-auto px-4 py-4">
		<div class="text-sm opacity-75">
			<p class="mb-2">
				<strong>Affiliate Disclosure:</strong> We may earn commissions from purchases made through affiliate links.
				<button class="link link-hover" onclick={() => scrollToSection('about')}>Learn more</button>
			</p>
			<p>&copy; 2024 Padel Reviews. All rights reserved.</p>
		</div>
	</div>
</div>