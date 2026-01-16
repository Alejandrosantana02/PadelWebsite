---
name: Phase 2 Core Components
overview: ""
todos: []
---

# Phase 2: Core Components & UI

## Overview
Build reusable UI components for the Padel paddle reviews website using DaisyUI components, ensuring responsive design and proper integration with affiliate links.

## Component Architecture

```
src/lib/components/
  ui/                    # Base UI components
    Navigation.svelte
    Footer.svelte
    SearchBar.svelte
  reviews/              # Review-specific components
    PaddleReviewCard.svelte
    RatingStars.svelte
    AffiliateButton.svelte
    ComparisonTable.svelte
    ProsConsList.svelte
    SpecsTable.svelte
  content/              # Content display components
    ArticleHeader.svelte
    ArticleContent.svelte
    RelatedArticles.svelte
    CategoryFilter.svelte
    ProductGrid.svelte
  forms/                # Form components
    NewsletterForm.svelte
    ContactForm.svelte
```

## Implementation Steps

### Step 2.1: Navigation & Layout Components

#### Navigation Component (`src/lib/components/ui/Navigation.svelte`)
- Use DaisyUI `navbar` component with `sticky` class
- Include brand logo/text: "Padel Reviews" or similar
- Navigation links:
  - Reviews (dropdown: All, Control, Power, Hybrid, Beginner)
  - Guides
  - Comparisons
  - About
- Search bar component (integrated)
- Mobile hamburger menu using DaisyUI `dropdown` or `drawer`
- Responsive breakpoints: mobile menu below `lg` breakpoint
- Active route highlighting using SvelteKit's `$page` store

#### SearchBar Component (`src/lib/components/ui/SearchBar.svelte`)
- DaisyUI `input` with search icon
- Autocomplete dropdown (DaisyUI `dropdown` or custom)
- Search suggestions based on paddle names/brands
- Debounced input handling
- Navigate to search results page on submit
- Keyboard navigation support (arrow keys, enter)

#### Footer Component (`src/lib/components/ui/Footer.svelte`)
- Footer sections:
  - Quick links (Reviews, Guides, About, Contact)
  - Legal (Privacy, Disclosure, Terms)
  - Newsletter signup (NewsletterForm component)
- Affiliate disclosure text: "We may earn commissions from purchases made through affiliate links"
- Social media links (if applicable)
- Copyright notice
- Use DaisyUI `footer` component

### Step 2.2: Review Components

#### PaddleReviewCard Component (`src/lib/components/reviews/PaddleReviewCard.svelte`)
**Props:**
```typescript
{
  review: PaddleReview | {
    id: string
    title: string
    brand: string
    model: string
    slug: string
    image: string
    powerRating: number
    controlRating: number
    price: number
    affiliateLinks: { padelusa: string; amazon: string }
  }
}
```

**Features:**
- DaisyUI `card` component
- Product image with lazy loading
- Brand and model name
- RatingStars component for power/control ratings
- Price display
- "View Review" button linking to review page
- AffiliateButton component (compact version)
- Hover effects for better UX

#### RatingStars Component (`src/lib/components/reviews/RatingStars.svelte`)
**Props:**
```typescript
{
  rating: number  // 1-5
  label?: string
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
}
```

**Features:**
- Display 5 stars using DaisyUI icons or SVG
- Fill stars based on rating (full, half, empty)
- Optional label and numeric value display
- Accessible with ARIA labels
- Color-coded (green for high, yellow for medium, etc.)

#### AffiliateButton Component (`src/lib/components/reviews/AffiliateButton.svelte`)
**Props:**
```typescript
{
  padelusaLink?: string
  amazonLink?: string
  variant?: 'single' | 'dual' | 'compact'
  trackClick?: (platform: 'padelusa' | 'amazon') => void
}
```

**Features:**
- Dual CTA layout: "Check Price at PadelUSA" + "Check Price on Amazon"
- DaisyUI `btn` components with appropriate colors
- External link icons
- Click tracking for analytics
- Opens in new tab with `rel="noopener noreferrer"`
- Disabled state if link not available
- Compact variant for cards, full variant for article pages

#### ComparisonTable Component (`src/lib/components/reviews/ComparisonTable.svelte`)
**Props:**
```typescript
{
  paddles: PaddleReview[]
  columns?: string[]  // Customizable columns to display
  sortable?: boolean
}
```

**Features:**
- DaisyUI `table` component
- Sortable columns (price, weight, power, control)
- Responsive: horizontal scroll on mobile
- AffiliateButton in each row
- Highlight differences between paddles
- Export/print functionality (optional)

#### ProsConsList Component (`src/lib/components/reviews/ProsConsList.svelte`)
**Props:**
```typescript
{
  pros: string[]
  cons: string[]
  columns?: boolean  // Side-by-side layout
}
```

**Features:**
- Two-column layout (pros left, cons right) on desktop
- Single column on mobile
- DaisyUI `list` or custom styling
- Icons: checkmark for pros, X for cons
- Color coding: green for pros, red for cons

#### SpecsTable Component (`src/lib/components/reviews/SpecsTable.svelte`)
**Props:**
```typescript
{
  specs: {
    shape: string
    weight: number
   