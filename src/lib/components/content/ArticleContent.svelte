<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	interface Props {
		content: string; // Markdown content
	}

	let { content }: Props = $props();
	let htmlContent = $state('');

	onMount(() => {
		// Configure marked options
		marked.setOptions({
			breaks: true,
			gfm: true,
			headerIds: true,
			mangle: false
		});

		// Render markdown to HTML
		htmlContent = marked(content);

		// Add external link indicators and affiliate link handling
		htmlContent = htmlContent.replace(
			/<a href="([^"]+)"/g,
			(match, url) => {
				const isExternal = url.startsWith('http') && !url.includes('yourdomain.com');
				const isAffiliate = url.includes('amazon.com') || url.includes('padelusa.com');

				let classes = 'link link-primary';
				if (isExternal) classes += ' external-link';
				if (isAffiliate) classes += ' affiliate-link';

				return `<a href="${url}" class="${classes}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''}`;
			}
		);
	});
</script>

<div class="article-content prose prose-lg max-w-none">
	{@html htmlContent}
</div>

<style>
	.article-content {
		/* Typography improvements */
		line-height: 1.7;
	}

	.article-content h2 {
		@apply text-2xl font-bold mt-8 mb-4 text-gray-900;
		border-bottom: 2px solid #e5e7eb;
		padding-bottom: 0.5rem;
	}

	.article-content h3 {
		@apply text-xl font-semibold mt-6 mb-3 text-gray-800;
	}

	.article-content h4 {
		@apply text-lg font-medium mt-4 mb-2 text-gray-800;
	}

	.article-content p {
		@apply mb-4 text-gray-700;
	}

	.article-content ul, .article-content ol {
		@apply mb-4 pl-6;
	}

	.article-content li {
		@apply mb-2;
	}

	.article-content blockquote {
		@apply border-l-4 border-primary pl-4 italic my-4 text-gray-600;
	}

	.article-content code {
		@apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
	}

	.article-content pre {
		@apply bg-gray-100 p-4 rounded-lg overflow-x-auto my-4;
	}

	.article-content pre code {
		@apply bg-transparent p-0;
	}

	.article-content img {
		@apply rounded-lg shadow-sm my-4;
		max-width: 100%;
		height: auto;
	}

	.article-content table {
		@apply w-full border-collapse my-4;
	}

	.article-content th, .article-content td {
		@apply border border-gray-300 px-4 py-2 text-left;
	}

	.article-content th {
		@apply bg-gray-50 font-semibold;
	}

	.article-content .external-link::after {
		content: ' ↗';
		font-size: 0.8em;
		opacity: 0.7;
	}

	.article-content .affiliate-link {
		@apply font-medium;
	}
</style>