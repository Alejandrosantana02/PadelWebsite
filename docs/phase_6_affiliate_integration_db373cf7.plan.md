---
name: Phase 6 Affiliate Integration
overview: ""
todos: []
---

# Phase 6: Affiliate Integration

## Overview
Build a complete affiliate link management system with utilities for generating and tracking affiliate links for both PadelUSA and Amazon, including click tracking, analytics integration, and FTC compliance features.

## Architecture

```
src/lib/
  utils/
    affiliate/
      padelusa.ts          # PadelUSA link builder
      amazon.ts            # Amazon link builder
      tracking.ts          # Click tracking utilities
      validation.ts         # Link validation
  components/
    affiliate/
      AffiliateButton.svelte      # Enhanced from Phase 2
      AffiliateLink.svelte        # Inline affiliate links
      DisclosureBadge.svelte      # FTC compliance badge
```

## Implementation Steps

### Step 6.1: Affiliate Link Management

#### Affiliate Link Types (`src/lib/types/affiliate.ts`)
```typescript
export type AffiliatePlatform = 'padelusa' | 'amazon';

export interface AffiliateLink {
  platform: AffiliatePlatform;
  url: string;
  productId?: string;
  productName?: string;
  cloaked?: boolean;
}

export interface AffiliateClickEvent {
  platform: AffiliatePlatform;
  url: string;
  productId?: string;
  productName?: string;
  pageUrl: string;
  timestamp: Date;
  userAgent?: string;
}
```

#### Affiliate Link Utility (`src/lib/utils/affiliate/index.ts`)
**Core Functions:**
- `buildAffiliateLink(platform: AffiliatePlatform, baseUrl: string, params?: Record<string, string>): string`
- `validateAffiliateLink(url: string, platform: AffiliatePlatform): boolean`
- `trackAffiliateClick(link: AffiliateLink, metadata?: Record<string, any>): Promise<void>`
- `getAffiliateId(platform: AffiliatePlatform): string | null`

**Link Cloaking (Optional):**
- `cloakAffiliateLink(url: string, platform: AffiliatePlatform): string`
- Create internal redirect route: `src/routes/affiliate/[platform]/+server.ts`
- Track clicks before redirecting
- Benefits: Cleaner URLs, better tracking, link management

### Step 6.2: PadelUSA Integration

#### PadelUSA Link Builder (`src/lib/utils/affiliate/padelusa.ts`)

**Environment Variable:**
- `PUBLIC_PADELUSA_AFFILIATE_ID` or `PADELUSA_AFFILIATE_ID`

**Functions:**
```typescript
export function buildPadelUSALink(
  productUrl: string,
  options?: {
    affiliateId?: string;
    campaign?: string;
    medium?: string;
  }
): string;

export function validatePadelUSALink(url: string): boolean;

export function extractProductId(url: string): string | null;
```

**Link Format:**
- Standard: `https://padelusa.com/product/...?ref=AFFILIATE_ID`
- Or use PadelUSA's specific affiliate URL structure
- Support UTM parameters for tracking

**Button Styles:**
- Create PadelUSA-specific button variant
- Use brand colors if available
- Icon/logo integration

**Testing:**
- Test link generation with various product URLs
- Verify affiliate ID is correctly appended
- Test link validation
- Verify clicks are tracked

### Step 6.3: Amazon Associates Integration

#### Amazon Link Builder (`src/lib/utils/affiliate/amazon.ts`)

**Environment Variables:**
- `PUBLIC_AMAZON_ASSOCIATE_TAG` or `AMAZON_ASSOCIATE_TAG`
- `AMAZON_ACCESS_KEY` (if using Product Advertising API)
- `AMAZON_SECRET_KEY` (if using Product Advertising API)

**Functions:**
```typescript
export function buildAmazonLink(
  asin: string,
  options?: {
    tag?: string;
    linkCode?: string;
    campaign?: string;
  }
): string;

export function buildAmazonLinkFromUrl(
  productUrl: string,
  options?: {
    tag?: string;
  }
): string;

export function extractASIN(url: string): string | null;

export function validateAmazonLink(url: string): boolean;
```

**Link Format:**
- Standard: `https://amazon.com/dp/ASIN?tag=ASSOCIATE_TAG`
- Or: `https://amazon.com/product-name/dp/ASIN/ref=...?tag=ASSOCIATE_TAG`
- Support for different Amazon marketplaces (US, UK, etc.)

**Amazon Product Advertising API (Optional):**
- Install AWS SDK: `npm install @aws-sdk/client-paapi5`
- Create API client utility
- Functions to fetch product details, prices, availability
- Cache API responses (Cloudflare KV or D1)
- Rate limiting and error handling

**Amazon Disclosure Requirements:**
- FTC-compliant disclosure text
- Required on pages with Amazon links
- DisclosureBadge component
- Link to full disclosure page

**Button Styles:**
- Amazon-specific button variant
- Amazon logo/branding compliance
- "Buy on Amazon" text

### Step 6.4: Affiliate Tracking

#### Click Tracking Utility (`src/lib/utils/affiliate/tracking.ts`)

**Functions:**
```typescript
export async function trackAffiliateClick(
  event: AffiliateClickEvent
): Promise<void>;

export function createClickHandler(
  link: AffiliateLink,
  metadata?: Record<string, any>
): (event: MouseEvent) => void;
```

**Tracking Methods:**

1. **Google Analytics 4 Events**
   - Event: `affiliate_click`
   - Parameters: platform, product_id, product_name, url
   - Integration with GA4 utility from Phase 5

2. **Cloudflare Analytics (Optional)**
   - Custom events via Workers
   - Store in Cloudflare D1 or KV
   - Dashboard for performance metrics

3. **Internal Tracking API**
   - Create `src/routes/api/affiliate/track/+server.ts`
   - Store click events in D1 or KV
   - Return success/failure

**Click Handler Implementation:**
- Intercept link clicks
- Send tracking event
- Open link in new tab
- Handle errors gracefully
- Prevent double-tracking

#### Analytics Dashboard (Optional)

**API Endpoints:**
- `src/routes/api/affiliate/stats/+server.ts`
- Return aggregated statistics:
  - Total clicks by platform
  - Clicks by product
  - Clicks by date range
  - Conversion rates (if available)

**Admin Dashboard Page:**
- `src/routes/admin/affiliate/+page.svelte` (protected route)