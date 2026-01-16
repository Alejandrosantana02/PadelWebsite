<script lang="ts">
	interface SpecItem {
		label: string;
		value: string | number;
		category?: string;
	}

	interface Props {
		specs: Record<string, string | number> | SpecItem[];
		grouped?: boolean;
	}

	let {
		specs,
		grouped = true
	}: Props = $props();

	// Convert specs object to array format
	let specItems = $derived(
		Array.isArray(specs)
			? specs
			: Object.entries(specs).map(([key, value]) => ({
				label: formatLabel(key),
				value,
				category: getSpecCategory(key)
			}))
	);

	// Group specs by category if grouped is true
	let groupedSpecs = $derived(
		grouped
			? specItems.reduce((acc, spec) => {
				const category = spec.category || 'General';
				if (!acc[category]) acc[category] = [];
				acc[category].push(spec);
				return acc;
			}, {} as Record<string, SpecItem[]>)
			: { 'All Specs': specItems }
	);

	function formatLabel(key: string): string {
		return key
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, str => str.toUpperCase())
			.replace(/evaFoamType/g, 'EVA Foam Type');
	}

	function getSpecCategory(key: string): string {
		const categories = {
			'Physical': ['shape', 'weight', 'balance', 'length', 'width', 'thickness'],
			'Material': ['material', 'evaFoamType', 'faceMaterial', 'coreMaterial'],
			'Performance': ['powerRating', 'controlRating', 'comfortRating', 'spinRating']
		};

		for (const [category, fields] of Object.entries(categories)) {
			if (fields.includes(key)) return category;
		}

		return 'General';
	}

	function formatValue(value: string | number): string {
		if (typeof value === 'number') {
			// Format weight in grams
			if (value >= 300 && value <= 400) return `${value}g`;
			// Format prices
			if (value >= 50 && value <= 500) return `$${value}`;
		}
		return String(value);
	}
</script>

<div class="specs-table">
	{#each Object.entries(groupedSpecs) as [category, items]}
		{#if grouped && category !== 'All Specs'}
			<h4 class="text-lg font-semibold mb-3 mt-6 first:mt-0">{category} Specifications</h4>
		{/if}

		<div class="overflow-x-auto">
			<table class="table table-zebra w-full">
				<tbody>
					{#each items as spec}
						<tr>
							<td class="font-medium w-1/3">{spec.label}</td>
							<td class="capitalize">{formatValue(spec.value)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</div>