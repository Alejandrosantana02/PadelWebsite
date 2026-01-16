<script lang="ts">
	import type { PaddleShape, PaddleBalance, FilterOptions } from '$lib/types';

	interface Props {
		filters: FilterOptions;
		onFilterChange: (filters: FilterOptions) => void;
		variant?: 'sidebar' | 'inline' | 'dropdown';
		collapsed?: boolean;
	}

	let {
		filters,
		onFilterChange,
		variant = 'sidebar',
		collapsed = false
	}: Props = $props();

	let isExpanded = $state(!collapsed);

	// Available filter options
	const shapeOptions: { value: PaddleShape; label: string }[] = [
		{ value: 'round', label: 'Round' },
		{ value: 'teardrop', label: 'Teardrop' },
		{ value: 'diamond', label: 'Diamond' }
	];

	const materialOptions = [
		'Carbon Fiber',
		'Fiberglass',
		'Hybrid',
		'Polypropylene'
	];

	const balanceOptions: { value: PaddleBalance; label: string }[] = [
		{ value: 'head-heavy', label: 'Head Heavy' },
		{ value: 'balanced', label: 'Balanced' },
		{ value: 'handle-heavy', label: 'Handle Heavy' }
	];

	const skillLevelOptions = [
		{ value: 'beginner', label: 'Beginner' },
		{ value: 'intermediate', label: 'Intermediate' },
		{ value: 'advanced', label: 'Advanced' }
	];

	function updateShapeFilter(shape: PaddleShape, checked: boolean) {
		const currentShapes = filters.shape || [];
		const newShapes = checked
			? [...currentShapes, shape]
			: currentShapes.filter(s => s !== shape);

		onFilterChange({
			...filters,
			shape: newShapes.length > 0 ? newShapes : undefined
		});
	}

	function updateMaterialFilter(material: string, checked: boolean) {
		const currentMaterials = filters.material || [];
		const newMaterials = checked
			? [...currentMaterials, material]
			: currentMaterials.filter(m => m !== material);

		onFilterChange({
			...filters,
			material: newMaterials.length > 0 ? newMaterials : undefined
		});
	}

	function updateBalanceFilter(balance: PaddleBalance, checked: boolean) {
		const currentBalances = filters.balance || [];
		const newBalances = checked
			? [...currentBalances, balance]
			: currentBalances.filter(b => b !== balance);

		onFilterChange({
			...filters,
			balance: newBalances.length > 0 ? newBalances : undefined
		});
	}

	function updateSkillLevelFilter(skillLevel: string, checked: boolean) {
		const currentLevels = filters.skillLevel || [];
		const newLevels = checked
			? [...currentLevels, skillLevel]
			: currentLevels.filter(l => l !== skillLevel);

		onFilterChange({
			...filters,
			skillLevel: newLevels.length > 0 ? newLevels : undefined
		});
	}

	function updatePriceRange(min?: number, max?: number) {
		const currentRange = filters.priceRange;
		const newRange = (min !== undefined || max !== undefined)
			? {
				min: min ?? currentRange?.min ?? 0,
				max: max ?? currentRange?.max ?? 500
			}
			: undefined;

		onFilterChange({
			...filters,
			priceRange: newRange
		});
	}

	function updateWeightRange(min?: number, max?: number) {
		const currentRange = filters.weightRange;
		const newRange = (min !== undefined || max !== undefined)
			? {
				min: min ?? currentRange?.min ?? 300,
				max: max ?? currentRange?.max ?? 400
			}
			: undefined;

		onFilterChange({
			...filters,
			weightRange: newRange
		});
	}

	function clearAllFilters() {
		onFilterChange({});
	}

	function hasActiveFilters(): boolean {
		return !!(
			filters.shape?.length ||
			filters.material?.length ||
			filters.balance?.length ||
			filters.priceRange ||
			filters.weightRange ||
			filters.skillLevel?.length ||
			filters.category?.length ||
			filters.tags?.length
		);
	}

	let activeFiltersCount = $derived([
		filters.shape?.length || 0,
		filters.material?.length || 0,
		filters.balance?.length || 0,
		filters.priceRange ? 1 : 0,
		filters.weightRange ? 1 : 0,
		filters.skillLevel?.length || 0,
		filters.category?.length || 0,
		filters.tags?.length || 0
	].reduce((sum, count) => sum + count, 0));
</script>

<div class="category-filter {variant} bg-base-100 rounded-lg p-4">
	{#if variant === 'sidebar'}
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-lg font-semibold">Filters</h3>
			{#if hasActiveFilters()}
				<button
					class="btn btn-sm btn-ghost text-error"
					onclick={clearAllFilters}
				>
					Clear All ({activeFiltersCount})
				</button>
			{/if}
		</div>
	{:else if variant === 'dropdown'}
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-outline">
				Filters
				{#if hasActiveFilters()}
					<span class="badge badge-primary ml-2">{activeFiltersCount}</span>
				{/if}
			</label>
			<div tabindex="0" class="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-80">
				<!-- Filter content -->
			</div>
		</div>
	{/if}

	<div class="filter-content {variant === 'dropdown' ? 'hidden' : ''}">
		<!-- Shape Filter -->
		<div class="filter-group mb-4">
			<h4 class="font-medium mb-2">Shape</h4>
			<div class="flex flex-wrap gap-2">
				{#each shapeOptions as option}
					<label class="cursor-pointer label">
						<input
							type="checkbox"
							class="checkbox checkbox-primary checkbox-sm"
							checked={filters.shape?.includes(option.value) || false}
							onchange={(e) => updateShapeFilter(option.value, e.target.checked)}
						/>
						<span class="label-text ml-2">{option.label}</span>
					</label>
				{/each}
			</div>
		</div>

		<!-- Material Filter -->
		<div class="filter-group mb-4">
			<h4 class="font-medium mb-2">Material</h4>
			<div class="flex flex-wrap gap-2">
				{#each materialOptions as material}
					<label class="cursor-pointer label">
						<input
							type="checkbox"
							class="checkbox checkbox-primary checkbox-sm"
							checked={filters.material?.includes(material) || false}
							onchange={(e) => updateMaterialFilter(material, e.target.checked)}
						/>
						<span class="label-text ml-2">{material}</span>
					</label>
				{/each}
			</div>
		</div>

		<!-- Price Range -->
		<div class="filter-group mb-4">
			<h4 class="font-medium mb-2">Price Range</h4>
			<div class="flex gap-2 items-center">
				<input
					type="number"
					placeholder="Min"
					class="input input-bordered input-sm w-20"
					value={filters.priceRange?.min || ''}
					oninput={(e) => updatePriceRange(Number(e.target.value) || undefined, filters.priceRange?.max)}
				/>
				<span class="text-sm">-</span>
				<input
					type="number"
					placeholder="Max"
					class="input input-bordered input-sm w-20"
					value={filters.priceRange?.max || ''}
					oninput={(e) => updatePriceRange(filters.priceRange?.min, Number(e.target.value) || undefined)}
				/>
			</div>
		</div>

		<!-- Weight Range -->
		<div class="filter-group mb-4">
			<h4 class="font-medium mb-2">Weight (grams)</h4>
			<div class="flex gap-2 items-center">
				<input
					type="number"
					placeholder="Min"
					class="input input-bordered input-sm w-20"
					value={filters.weightRange?.min || ''}
					oninput={(e) => updateWeightRange(Number(e.target.value) || undefined, filters.weightRange?.max)}
				/>
				<span class="text-sm">-</span>
				<input
					type="number"
					placeholder="Max"
					class="input input-bordered input-sm w-20"
					value={filters.weightRange?.max || ''}
					oninput={(e) => updateWeightRange(filters.weightRange?.min, Number(e.target.value) || undefined)}
				/>
			</div>
		</div>

		<!-- Balance Filter -->
		<div class="filter-group mb-4">
			<h4 class="font-medium mb-2">Balance</h4>
			<div class="flex flex-wrap gap-2">
				{#each balanceOptions as option}
					<label class="cursor-pointer label">
						<input
							type="checkbox"
							class="checkbox checkbox-primary checkbox-sm"
							checked={filters.balance?.includes(option.value) || false}
							onchange={(e) => updateBalanceFilter(option.value, e.target.checked)}
						/>
						<span class="label-text ml-2">{option.label}</span>
					</label>
				{/each}
			</div>
		</div>

		<!-- Skill Level Filter -->
		<div class="filter-group mb-4">
			<h4 class="font-medium mb-2">Skill Level</h4>
			<div class="flex flex-wrap gap-2">
				{#each skillLevelOptions as option}
					<label class="cursor-pointer label">
						<input
							type="checkbox"
							class="checkbox checkbox-primary checkbox-sm"
							checked={filters.skillLevel?.includes(option.value) || false}
							onchange={(e) => updateSkillLevelFilter(option.value, e.target.checked)}
						/>
						<span class="label-text ml-2">{option.label}</span>
					</label>
				{/each}
			</div>
		</div>

		{#if hasActiveFilters()}
			<div class="mt-4 pt-4 border-t">
				<button
					class="btn btn-outline btn-sm w-full"
					onclick={clearAllFilters}
				>
					Clear All Filters
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.category-filter.sidebar {
		min-width: 280px;
	}

	.category-filter.inline {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 0;
		background: transparent;
	}

	.filter-group {
		border-bottom: 1px solid #e5e7eb;
		padding-bottom: 1rem;
	}

	.filter-group:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
</style>