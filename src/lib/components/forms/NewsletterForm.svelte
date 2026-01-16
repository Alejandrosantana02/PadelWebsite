<script lang="ts">
	interface Props {
		variant?: 'inline' | 'modal' | 'sidebar';
		onSuccess?: () => void;
		title?: string;
		description?: string;
	}

	let {
		variant = 'inline',
		onSuccess,
		title = 'Stay Updated',
		description = 'Get the latest Padel reviews and guides delivered to your inbox.'
	}: Props = $props();

	let email = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let error = $state('');

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (!email.trim()) {
			error = 'Email is required';
			return;
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			error = 'Please enter a valid email address';
			return;
		}

		isSubmitting = true;
		error = '';

		try {
			// TODO: Replace with actual API call
			const response = await fetch('/api/newsletter/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			if (!response.ok) {
				throw new Error('Failed to subscribe');
			}

			isSuccess = true;
			email = '';
			onSuccess?.();

		} catch (err) {
			error = 'Failed to subscribe. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}

	function resetForm() {
		isSuccess = false;
		error = '';
		email = '';
	}
</script>

{#if variant === 'modal'}
	<!-- Modal variant -->
	<div class="modal" id="newsletter-modal">
		<div class="modal-box">
			<h3 class="font-bold text-lg">{title}</h3>
			<p class="py-4">{description}</p>

			{#if isSuccess}
				<div class="alert alert-success mb-4">
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span>Successfully subscribed! Check your email for confirmation.</span>
				</div>
				<div class="modal-action">
					<button class="btn" onclick={resetForm}>Close</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-4">
				<div class="form-control">
					<label class="label" for="newsletter-email">
						<span class="label-text">Email address</span>
					</label>
					<input
						id="newsletter-email"
						type="email"
						placeholder="your@email.com"
						class="input input-bordered"
						bind:value={email}
						required
						disabled={isSubmitting}
					/>
				</div>

					{#if error}
						<div class="alert alert-error">
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
							</svg>
							<span>{error}</span>
						</div>
					{/if}

					<div class="modal-action">
						<button type="button" class="btn" onclick={resetForm}>Cancel</button>
						<button type="submit" class="btn btn-primary" disabled={isSubmitting}>
							{#if isSubmitting}
								<span class="loading loading-spinner loading-sm"></span>
								Subscribing...
							{:else}
								Subscribe
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
{:else if variant === 'sidebar'}
	<!-- Sidebar variant -->
	<div class="bg-primary/5 p-6 rounded-lg border border-primary/20">
		<h3 class="font-bold text-lg mb-2">{title}</h3>
		<p class="text-sm mb-4">{description}</p>

		{#if isSuccess}
			<div class="alert alert-success">
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-sm">Successfully subscribed!</span>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-3">
				<input
					type="email"
					placeholder="Enter your email"
					class="input input-bordered input-sm w-full"
					bind:value={email}
					required
					disabled={isSubmitting}
				/>

				{#if error}
					<p class="text-error text-xs">{error}</p>
				{/if}

				<button
					type="submit"
					class="btn btn-primary btn-sm w-full"
					disabled={isSubmitting}
				>
					{#if isSubmitting}
						<span class="loading loading-spinner loading-xs"></span>
						Subscribing...
					{:else}
						Subscribe
					{/if}
				</button>
			</form>
		{/if}
	</div>
{:else}
	<!-- Inline variant (default) -->
	<div class="text-center">
		{#if isSuccess}
			<div class="alert alert-success max-w-md mx-auto">
				<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span>Successfully subscribed! Check your email for confirmation.</span>
			</div>
		{:else}
			<div class="max-w-md mx-auto">
				<h3 class="font-bold text-xl mb-2">{title}</h3>
				<p class="mb-4">{description}</p>

				<form onsubmit={handleSubmit} class="flex gap-2 max-w-sm mx-auto">
					<input
						type="email"
						placeholder="your@email.com"
						class="input input-bordered flex-1"
						bind:value={email}
						required
						disabled={isSubmitting}
					/>
					<button
						type="submit"
						class="btn btn-primary"
						disabled={isSubmitting}
					>
						{#if isSubmitting}
							<span class="loading loading-spinner loading-sm"></span>
						{:else}
							Subscribe
						{/if}
					</button>
				</form>

				{#if error}
					<p class="text-error text-sm mt-2">{error}</p>
				{/if}
			</div>
		{/if}
	</div>
{/if}