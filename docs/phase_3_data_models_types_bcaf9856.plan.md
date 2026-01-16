---
name: Phase 3 Data Models Types
overview: ""
todos: []
---

# Phase 3: Data Models & Types

## Overview
Define TypeScript types for all content models and implement a markdown-based content storage system with utilities for loading and parsing content files.

## Content Storage Strategy

**Recommended Approach: Markdown Files**
- Store content as markdown files in `src/content/` directory
- Frontmatter (YAML) for metadata
- Markdown body for content
- Benefits: Version control friendly, fast, no database overhead, easy to edit
- Future: Can migrate to D1 or headless CMS if needed

## Type Definitions

### Step 3.1: Core Type Definitions

#### File: `src/lib/types/index.ts`

**PaddleReview Type:**
```typescript
export type PaddleShape = 'round' | 'teardrop' | 'diamond';
export type PaddleBalance = 'head-heavy' | 'balanced' | 'handle-heavy';
export type Rating = 1 | 2 | 3 | 4 | 5;

export interface AffiliateLinks {
  padelusa?: string;
  amazon?: string;
}

export interface PaddleReview {
  id: string;
  title: string;
  slug: string;
  brand: string;
  model: string;
  shape: PaddleShape;
  weight: number; // in grams
  balance: PaddleBalance;
  material: string;
  evaFoamType: string;
  powerRating: Rating;
  controlRating: Rating;
  comfortRating: Rating;
  price: number; // in USD
  pros: string[];
  cons: string[];
  affiliateLinks: AffiliateLinks;
  images: string[]; // URLs or paths
  content: string; // Markdown content
  excerpt?: string; // Short description for cards
  publishedAt: Date;
  updatedAt?: Date;
  category?: 'control' | 'power' | 'hybrid' | 'beginner' | 'advanced';
  tags?: string[];
  featured?: boolean;
}
```

**GearReview Type:**
```typescript
export type GearType = 'balls' | 'shoes' | 'bags' | 'grips' | 'accessories';

export interface GearReview {
  id: string;
  title: string;
  slug: string;
  brand: string;
  model: string;
  gearType: GearType;
  price: number;
  pros: string[];
  cons: string[];
  affiliateLinks: AffiliateLinks;
  images: string[];
  content: string; // Markdown content