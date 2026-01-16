<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let searchQuery = $state('');
	let isSearchFocused = $state(false);

	function handleSearch(event: KeyboardEvent) {
		if (event.key === 'Enter' && searchQuery.trim()) {
			goto(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
			searchQuery = '';
		}
	}

	function handleSearchSubmit() {
		if (searchQuery.trim()) {
			goto(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
			searchQuery = '';
		}
	}

	// Check if current page is active
	let isActive = $derived((path: string) => $page.url.pathname === path || $page.url.pathname.startsWith(path + '/'));
</script>

<!-- Navigation component -->
<nav class="navbar bg-base-100 shadow-lg sticky top-0 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</label>
			<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/reviews" class:active={isActive('/reviews')}>Reviews</a></li>
				<li><a href="/guides" class:active={isActive('/guides')}>Guides</a></li>
				<li><a href="/compare" class:active={isActive('/compare')}>Comparisons</a></li>
				<li><a href="/about" class:active={isActive('/about')}>About</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl font-bold text-primary">
			Padel Reviews
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/reviews" class="font-medium" class:active={isActive('/reviews')}>Reviews</a></li>
			<li><a href="/guides" class="font-medium" class:active={isActive('/guides')}>Guides</a></li>
			<li><a href="/compare" class="font-medium" class:active={isActive('/compare')}>Comparisons</a></li>
			<li><a href="/about" class="font-medium" class:active={isActive('/about')}>About</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<!-- Enhanced Search bar -->
		<div class="form-control">
			<div class="input-group">
				<input
					type="text"
					placeholder="Search paddles..."
					class="input input-bordered w-24 md:w-48"
					bind:value={searchQuery}
					onkeydown={handleSearch}
					use:focus={() => isSearchFocused = true}
					use:blur={() => setTimeout(() => isSearchFocused = false, 150)}
				/>
				<button class="btn btn-square" onclick={handleSearchSubmit} aria-label="Search">
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>

<style>
	.active {
		@apply text-primary font-semibold;
	}
</style>