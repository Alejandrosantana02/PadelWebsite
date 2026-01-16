<script lang="ts">
	interface BreadcrumbItem {
		label: string;
		href: string;
	}

	interface Props {
		title: string;
		publishedAt: Date;
		updatedAt?: Date;
		author?: string;
		category?: string;
		breadcrumbs?: BreadcrumbItem[];
	}

	let {
		title,
		publishedAt,
		updatedAt,
		author = 'Padel Reviews',
		category,
		breadcrumbs = []
	}: Props = $props();

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<header class="article-header mb-8">
	{#if breadcrumbs.length > 0}
		<nav class="breadcrumbs text-sm mb-4" aria-label="Breadcrumb">
			<ul class="flex items-center gap-2">
				<li>
					<a href="/" class="text-gray-500 hover:text-primary">Home</a>
				</li>
				{#each breadcrumbs as breadcrumb, index}
					<li class="flex items-center gap-2">
						<svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
						</svg>
						{#if index === breadcrumbs.length - 1}
							<span class="text-gray-900 font-medium">{breadcrumb.label}</span>
						{:else}
							<a href={breadcrumb.href} class="text-gray-500 hover:text-primary">
								{breadcrumb.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	{/if}

	{#if category}
		<div class="mb-2">
			<span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium capitalize">
				{category}
			</span>
		</div>
	{/if}

	<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
		{title}
	</h1>

	<div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
		<div class="flex items-center gap-2">
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>
				Published {formatDate(publishedAt)}
				{#if updatedAt && updatedAt > publishedAt}
					• Updated {formatDate(updatedAt)}
				{/if}
			</span>
		</div>

		{#if author}
			<div class="flex items-center gap-2">
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
				</svg>
				<span>By {author}</span>
			</div>
		{/if}
	</div>
</header>