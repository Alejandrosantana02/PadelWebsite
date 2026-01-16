<script lang="ts">
	import type { Rating } from '$lib/types';

	interface Props {
		rating: Rating;
		label?: string;
		size?: 'sm' | 'md' | 'lg';
		showValue?: boolean;
	}

	let {
		rating,
		label,
		size = 'md',
		showValue = true
	}: Props = $props();

	function getStarClasses(index: number): string {
		const baseClasses = 'inline-block';
		const sizeClasses = {
			sm: 'w-4 h-4',
			md: 'w-5 h-5',
			lg: 'w-6 h-6'
		};

		if (index <= rating) {
			return `${baseClasses} ${sizeClasses[size]} fill-yellow-400 text-yellow-400`;
		}
		return `${baseClasses} ${sizeClasses[size]} fill-gray-300 text-gray-300`;
	}
</script>

<div class="rating-stars flex items-center gap-1">
	{#if label}
		<span class="text-sm font-medium mr-2">{label}:</span>
	{/if}

	<div class="flex items-center">
		{#each Array(5) as _, i}
			<svg class={getStarClasses(i + 1)} viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		{/each}
	</div>

	{#if showValue}
		<span class="text-sm text-gray-600 ml-2">({rating}/5)</span>
	{/if}
</div>