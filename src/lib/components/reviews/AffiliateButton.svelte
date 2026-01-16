<script lang="ts">
	import type { AffiliateLinks } from '$lib/types';

	interface Props {
		padelusaLink?: string;
		amazonLink?: string;
		variant?: 'single' | 'dual' | 'compact';
		showDisclosure?: boolean;
	}

	let {
		padelusaLink,
		amazonLink,
		variant = 'dual',
		showDisclosure = false
	}: Props = $props();

	function handleClick(platform: 'padelusa' | 'amazon', url: string) {
		// Track affiliate click
		if (typeof window !== 'undefined' && (window as any).gtag) {
			(window as any).gtag('event', 'affiliate_click', {
				platform,
				page_location: window.location.href
			});
		}

		// Open link in new tab
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

<div class="affiliate-buttons">
	{#if variant === 'dual' && padelusaLink && amazonLink}
		<div class="flex flex-col sm:flex-row gap-2">
			<button
				class="btn btn-primary flex-1"
				onclick={() => handleClick('padelusa', padelusaLink)}
			>
				<span class="hidden sm:inline">Check Price at PadelUSA</span>
				<span class="sm:hidden">PadelUSA</span>
			</button>
			<button
				class="btn btn-secondary flex-1"
				onclick={() => handleClick('amazon', amazonLink)}
			>
				<span class="hidden sm:inline">Check Price on Amazon</span>
				<span class="sm:hidden">Amazon</span>
			</button>
		</div>
	{:else if variant === 'single' && (padelusaLink || amazonLink)}
		<button
			class="btn btn-primary w-full"
			onclick={() => handleClick(padelusaLink ? 'padelusa' : 'amazon', padelusaLink || amazonLink)}
		>
			{padelusaLink ? 'Check Price at PadelUSA' : 'Check Price on Amazon'}
		</button>
	{:else if variant === 'compact' && (padelusaLink || amazonLink)}
		<div class="flex gap-1">
			{#if padelusaLink}
				<button
					class="btn btn-primary btn-sm"
					onclick={() => handleClick('padelusa', padelusaLink)}
				>
					PadelUSA
				</button>
			{/if}
			{#if amazonLink}
				<button
					class="btn btn-secondary btn-sm"
					onclick={() => handleClick('amazon', amazonLink)}
				>
					Amazon
				</button>
			{/if}
		</div>
	{/if}

	{#if showDisclosure}
		<p class="text-xs text-gray-500 mt-2">
			* Affiliate links may earn commissions
		</p>
	{/if}
</div>