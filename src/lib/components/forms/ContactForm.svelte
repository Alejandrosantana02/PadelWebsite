<script lang="ts">
	interface Props {
		onSuccess?: () => void;
	}

	let { onSuccess }: Props = $props();

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let errors = $state<Record<string, string>>({});

	async function handleSubmit(event: Event) {
		event.preventDefault();

		// Reset errors
		errors = {};

		// Validation
		if (!formData.name.trim()) {
			errors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			errors.email = 'Email is required';
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(formData.email)) {
				errors.email = 'Please enter a valid email address';
			}
		}

		if (!formData.subject.trim()) {
			errors.subject = 'Subject is required';
		}

		if (!formData.message.trim()) {
			errors.message = 'Message is required';
		} else if (formData.message.length < 10) {
			errors.message = 'Message must be at least 10 characters long';
		}

		if (Object.keys(errors).length > 0) {
			return;
		}

		isSubmitting = true;

		try {
			// TODO: Replace with actual API call
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			isSuccess = true;
			formData = { name: '', email: '', subject: '', message: '' };
			onSuccess?.();

		} catch (err) {
			errors.general = 'Failed to send message. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}

	function resetForm() {
		isSuccess = false;
		errors = {};
		formData = { name: '', email: '', subject: '', message: '' };
	}
</script>

<div class="contact-form max-w-2xl mx-auto">
	{#if isSuccess}
		<div class="alert alert-success">
			<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
			<div>
				<h3 class="font-bold">Message sent successfully!</h3>
				<p>Thank you for contacting us. We'll get back to you soon.</p>
			</div>
		</div>
		<div class="text-center mt-4">
			<button class="btn btn-outline" onclick={resetForm}>
				Send Another Message
			</button>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6">
			{#if errors.general}
				<div class="alert alert-error">
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
					</svg>
					<span>{errors.general}</span>
				</div>
			{/if}

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Name *</span>
					</label>
					<input
						type="text"
						placeholder="Your full name"
						class="input input-bordered {errors.name ? 'input-error' : ''}"
						bind:value={formData.name}
						disabled={isSubmitting}
					/>
					{#if errors.name}
						<label class="label">
							<span class="label-text-alt text-error">{errors.name}</span>
						</label>
					{/if}
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text">Email *</span>
					</label>
					<input
						type="email"
						placeholder="your@email.com"
						class="input input-bordered {errors.email ? 'input-error' : ''}"
						bind:value={formData.email}
						disabled={isSubmitting}
					/>
					{#if errors.email}
						<label class="label">
							<span class="label-text-alt text-error">{errors.email}</span>
						</label>
					{/if}
				</div>
			</div>

			<div class="form-control">
				<label class="label">
					<span class="label-text">Subject *</span>
				</label>
				<select
					class="select select-bordered {errors.subject ? 'select-error' : ''}"
					bind:value={formData.subject}
					disabled={isSubmitting}
				>
					<option value="" disabled selected>Choose a subject</option>
					<option value="general">General Inquiry</option>
					<option value="review">Product Review Request</option>
					<option value="partnership">Partnership Opportunity</option>
					<option value="technical">Technical Support</option>
					<option value="feedback">Feedback</option>
					<option value="other">Other</option>
				</select>
				{#if errors.subject}
					<label class="label">
						<span class="label-text-alt text-error">{errors.subject}</span>
					</label>
				{/if}
			</div>

			<div class="form-control">
				<label class="label">
					<span class="label-text">Message *</span>
				</label>
				<textarea
					placeholder="Tell us how we can help you..."
					class="textarea textarea-bordered h-32 {errors.message ? 'textarea-error' : ''}"
					bind:value={formData.message}
					disabled={isSubmitting}
				></textarea>
				<label class="label">
					{#if errors.message}
						<span class="label-text-alt text-error">{errors.message}</span>
					{:else}
						<span class="label-text-alt">Minimum 10 characters</span>
					{/if}
				</label>
			</div>

			<div class="form-control">
				<button
					type="submit"
					class="btn btn-primary"
					disabled={isSubmitting}
				>
					{#if isSubmitting}
						<span class="loading loading-spinner loading-sm"></span>
						Sending Message...
					{:else}
						Send Message
					{/if}
				</button>
			</div>

			<p class="text-sm text-gray-600">
				Fields marked with * are required. We typically respond within 24-48 hours.
			</p>
		</form>
	{/if}
</div>