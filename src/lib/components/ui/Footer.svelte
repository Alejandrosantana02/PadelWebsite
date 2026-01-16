<script lang="ts">
	let { children } = $props();
</script>

<!-- Footer component -->
<footer class="footer p-10 bg-neutral text-neutral-content">
	<div>
		<span class="footer-title">Services</span>
		<a href="/reviews" class="link link-hover">Paddle Reviews</a>
		<a href="/guides" class="link link-hover">Buyer's Guides</a>
		<a href="/compare" class="link link-hover">Comparisons</a>
		<a href="/about" class="link link-hover">About Us</a>
	</div>
	<div>
		<span class="footer-title">Company</span>
		<a href="/contact" class="link link-hover">Contact</a>
		<a href="/privacy" class="link link-hover">Privacy Policy</a>
		<a href="/disclosure" class="link link-hover">Affiliate Disclosure</a>
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
				<a href="/disclosure" class="link link-hover">Learn more</a>
			</p>
			<p>&copy; 2024 Padel Reviews. All rights reserved.</p>
		</div>
	</div>
</div>