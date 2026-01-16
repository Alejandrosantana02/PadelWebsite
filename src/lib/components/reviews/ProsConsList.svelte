<script lang="ts">
	interface Props {
		pros: string[];
		cons: string[];
		columns?: boolean; // Side-by-side layout
	}

	let {
		pros,
		cons,
		columns = true
	}: Props = $props();
</script>

<div class="pros-cons-list">
	{#if columns}
		<!-- Two-column layout for larger screens -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="pros">
				<h4 class="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					Pros
				</h4>
				<ul class="space-y-2">
					{#each pros as pro}
						<li class="flex items-start gap-2">
							<svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm">{pro}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="cons">
				<h4 class="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
					Cons
				</h4>
				<ul class="space-y-2">
					{#each cons as con}
						<li class="flex items-start gap-2">
							<svg class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm">{con}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{:else}
		<!-- Single column layout -->
		<div class="space-y-6">
			<div class="pros">
				<h4 class="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					Pros
				</h4>
				<ul class="space-y-2">
					{#each pros as pro}
						<li class="flex items-start gap-2">
							<svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm">{pro}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="cons">
				<h4 class="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
					Cons
				</h4>
				<ul class="space-y-2">
					{#each cons as con}
						<li class="flex items-start gap-2">
							<svg class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm">{con}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>