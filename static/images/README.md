# Images Folder Structure

This folder contains all static images for the Padel Reviews website.

## Folder Organization

### `/static/images/` (Root Images Folder)
- General website images, logos, icons
- Hero images, backgrounds
- Social media graphics

### `/static/images/paddles/`
- Individual paddle product images
- **Naming convention:** `{brand}-{model}-{angle}.jpg`
- **Examples:**
  - `nox-ml10-pro-carbon-front.jpg`
  - `bullpadel-vertex-03-side.jpg`
  - `adidas-metalbone-carbon-back.jpg`

### `/static/images/brands/`
- Brand logos and manufacturer images
- **Naming convention:** `{brand}-logo.{extension}`
- **Examples:**
  - `nox-logo.png`
  - `bullpadel-logo.svg`
  - `adidas-logo.jpg`

### `/static/images/reviews/`
- Review-specific images (not product photos)
- Screenshots, comparison charts
- User-submitted content
- **Naming convention:** `review-{paddle-slug}-{type}.jpg`

### `/static/images/guides/`
- Buyer's guide illustrations
- Infographics, diagrams
- Tutorial images
- **Naming convention:** `guide-{topic}-{step}.jpg`

### `/static/images/comparisons/`
- Side-by-side comparison images
- Feature comparison graphics
- **Naming convention:** `compare-{paddle1}-vs-{paddle2}.jpg`

### `/static/images/components/`
- UI component screenshots
- Design system elements
- Icon sets

### `/static/images/ui/`
- User interface elements
- Buttons, badges, icons
- Theme-related graphics

## Image Specifications

### Product Images (Paddles)
- **Format:** JPG, WebP
- **Resolution:** Minimum 800x600px, preferred 1200x900px
- **Quality:** 80-90% JPEG quality
- **File size:** Under 500KB per image

### Logos & Icons
- **Format:** PNG (transparent), SVG (preferred for logos)
- **Resolution:** 200x200px minimum for logos
- **Background:** Transparent preferred

### Web Graphics
- **Format:** WebP (modern browsers), JPG/PNG fallback
- **Optimization:** Use image compression tools
- **Responsive:** Consider multiple sizes for different screen sizes

## Usage in Components

```svelte
<!-- Static images in SvelteKit -->
<img src="/images/paddles/nox-ml10-pro-carbon-front.jpg" alt="Nox ML10 Pro Carbon Front View" />

<!-- In component props -->
<PaddleReviewCard
  review={{
    ...reviewData,
    image: '/images/paddles/nox-ml10-pro-carbon-front.jpg'
  }}
/>
```

## Image Optimization Tips

1. **Compress images** before uploading
2. **Use WebP format** for better compression
3. **Provide alt text** for accessibility
4. **Use responsive images** with `srcset`
5. **Lazy load** images below the fold

## Tools for Image Optimization

- **TinyPNG/TinyJPG** - Online compression
- **ImageOptim** (Mac) - Desktop optimization
- **Squoosh** - Google's web-based optimizer
- **Sharp** (Node.js) - Programmatic optimization

## File Naming Best Practices

- Use lowercase only
- Use hyphens instead of spaces/underscores
- Include descriptive keywords
- Add size suffix if multiple versions: `image-800x600.jpg`
- Use consistent naming across similar content

## Deployment Notes

- Images in `/static/` are served directly
- No build processing required
- Include in version control if small (<1MB)
- Consider CDN for larger images in production