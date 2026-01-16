---
name: Phase 4 Routes Pages
overview: ""
todos: []
---

# Phase 4: Routes & Pages

## Overview
Build all routes and pages for the Padel reviews website, implementing dynamic routes for content, static pages, and proper data loading using SvelteKit's load functions.

## Route Structure

```
src/routes/
  +page.svelte                    # Homepage
  +layout.svelte                  # Root layout (from Phase 1)
  +error.svelte                   # Error page
  reviews/
    +page.svelte                  # Reviews listing/category page
    [slug]/
      +page.svelte                # Individual review page
      +page.ts                    # Load function for review data
  guides/
    +page.svelte                  # Guides listing page
    [slug]/
      +page.svelte                # Individual guide page
      +page.ts                    # Load function for guide data
  compare/
    [slug]/
      +page.svelte                # Comparison page
      +page.ts                    # Load function for comparison data
  about/
    +page.svelte                  # About page
  contact/
    +page.svelte                  # Contact page
  privacy/
    +page.svelte                  # Privacy policy
  disclosure/
    +page.svelte                  # Affiliate disclosure
```

## Implementation Steps

### Step 4.1: Homepage (`src/routes/+page.svelte`)

**Load Function (`src/routes/+page.ts`):**
```typescript
export async function load() {
  const featuredReviews = await loadFeaturedPaddleReviews(6);
  const popularGuides = await loadPopularBuyersGuides(3);
  
  return {
    featuredReviews,
    popularGuides
  };
}
```

**Page Components:**
1. **Hero Section**
   - Large headline: "Find Your Perfect Padel Paddle"
   - Subheadline describing the site's purpose
   - CTA buttons: "Brows