---
name: Phase 1 Project Setup
overview: Initialize SvelteKit project with Cloudflare adapter, configure Tailwind CSS and DaisyUI with Padel-themed styling, set up Cloudflare configuration, and create the foundational project structure with base layout components.
todos:
  - id: init-sveltekit
    content: Initialize SvelteKit project with TypeScript, ESLint, Prettier, and Playwright
    status: pending
  - id: setup-cloudflare-adapter
    content: Install and configure @sveltejs/adapter-cloudflare in svelte.config.js
    status: pending
    dependencies:
      - init-sveltekit
  - id: setup-tailwind
    content: Install Tailwind CSS, initialize config, and setup app.css with directives
    status: pending
    dependencies:
      - init-sveltekit
  - id: setup-daisyui
    content: Install DaisyUI and configure Padel-themed custom theme in tailwind.config.js
    status: pending
    dependencies:
      - setup-tailwind
  - id: cloudflare-config
    content: Create wrangler.toml and .dev.vars for Cloudflare configuration
    status: pending
    dependencies:
      - init-sveltekit
  - id: project-structure
    content: Create directory structure (lib/components, lib/utils, lib/stores, lib/types, routes groups)
    status: pending
    dependencies:
      - init-sveltekit
  - id: base-layout
    content: Create src/routes/+layout.svelte with theme and component structure
    status: pending
    dependencies:
      - project-structure
      - setup-daisyui
  - id: navigation-component
    content: Create Navigation component using DaisyUI navbar with mobile menu
    status: pending
    dependencies:
      - base-layout
  - id: footer-component
    content: Create Footer component with links, newsletter placeholder, and disclosure
    status: pending
    dependencies:
      - base-layout
  - id: validate-setup
    content: Test dev server, build process, and verify all components render correctly
    status: pending
    dependencies:
      - navigation-component
      - footer-component
---

# Phase 1: Project Setup & Infrastructure

## Overview

Set up the foundational infrastructure for the Padel paddle reviews website using SvelteKit, Tailwind CSS, DaisyUI, and Cloudflare Pages.

## Implementation Steps

### 1. Initialize SvelteKit Project

- Run `npm create svelte@latest .` in the project root (use current directory)
- Select options:
  - Template: Skeleton project
  - Type checking: TypeScript
  - Add ESLint: Yes
  - Add Prettier: Yes
  - Add Playwright: Yes
- Install dependencies: `npm install`
- Install Cloudflare adapter: `npm install -D @sveltejs/adapter-cloudflare`
- Update `svelte.config.js` to use Cloudflare adapter:
  ```typescript
  import adapter from '@sveltejs/adapter-cloudflare';
  // ... other imports
  
  export default {
    adapter: adapter(),
    // ... rest of config
  };
  ```


### 2. Configure Tailwind CSS & DaisyUI

- Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- Initialize Tailwind: `npx tailwindcss init -p` (creates `tailwind.config.js` and `postcss.config.js`)
- Install DaisyUI: `npm install -D daisyui`
- Update `tailwind.config.js`:
  ```typescript
  import daisyui from 'daisyui';
  
  export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: { extend: {} },
    plugins: [daisyui],
    daisyui: {
      themes: [
        {
          padel: {
            primary: '#2563eb',      // Blue for sporty feel
            secondary: '#10b981',    // Green for Padel courts
            accent: '#f59e0b',       // Orange for energy
            neutral: '#1f2937',      // Dark gray
            'base-100': '#ffffff',   // White background
            info: '#3b82f6',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
          },
        },
      ],
      darkTheme: 'dark',
      base: true,
      styled: true,
      utils: true,
    },
  };
  ```

- Create/update `src/app.css` with Tailwind directives:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Import `app.css` in `src/app.html` or root layout

### 3. Cloudflare Configuration

- Create `wrangler.toml` in project root:
  ```toml
  name = "padel-website"
  compatibility_date = "2024-01-01"
  pages_build_output_dir = ".svelte-kit/cloudflare"
  
  [env.production]
  name = "padel-website-prod"
  
  # D1 database (optional, for future use)
  # [[d1_databases]]
  # binding = "DB"
  # database_name = "padel-db"
  # database_id = "your-database-id"
  ```

- Create `.dev.vars` file (gitignored) for local development:
  ```
  PUBLIC_PADELUSA_AFFILIATE_ID=
  PUBLIC_AMAZON_ASSOCIATE_TAG=
  PUBLIC_GA_MEASUREMENT_ID=
  PUBLIC_SITE_URL=http://localhost:5173
  ```

- Update `.gitignore` to include `.dev.vars` and Cloudflare build artifacts
- Note: Cloudflare Pages project setup will be done via dashboard/CLI separately

### 4. Project Structure Setup

Create the following directory structure:

```
src/
  lib/
    components/          # Reusable components
      ui/               # Base UI components
    utils/              # Helper functions
    stores/             # Svelte stores
    types/              # TypeScript type definitions
  routes/
    (blog)/             # Blog/review routes group
    (guides)/           # Guide routes group
    (comparisons)/      # Comparison routes group
    api/                # API endpoints
    +layout.svelte      # Root layout
    +page.svelte        # Homepage
    +error.svelte       # Error page
  app.html
  app.d.ts
```

### 5. Base Layout Components

- Create `src/routes/+layout.svelte`:
  - Import and use Navigation component
  - Import and use Footer component
  - Apply DaisyUI theme class: `data-theme="padel"`
  - Include main content slot
- Create `src/lib/components/Navigation.svelte`:
  - Use DaisyUI navbar component
  - Include logo/brand name
  - Navigation links (Reviews, Guides, Comparisons, About)
  - Search bar placeholder
  - Mobile hamburger menu
- Create `src/lib/components/Footer.svelte`:
  - Footer links (About, Contact, Privacy, Disclosure)
  - Newsletter signup placeholder
  - Affiliate disclosure
  - Copyright notice

### 6. Update Configuration Files

- Update `vite.config.js` (if needed) for Cloudflare compatibility
- Update `tsconfig.json` to include proper paths
- Update `package.json` scripts if needed:
  ```json
  {
    "scripts": {
      "dev": "vite dev",
      "build": "vite build",
      "preview": "vite preview",
      "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
      "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
      "lint": "prettier --check . && eslint .",
      "format": "prettier --write ."
    }
  }
  ```


## Files to Create/Modify

**New Files:**

- `svelte.config.js` (modified)
- `tailwind.config.js`
- `postcss.config.js`
- `wrangler.toml`
- `.dev.vars` (gitignored)
- `src/app.css`
- `src/routes/+layout.svelte`
- `src/lib/components/Navigation.svelte`
- `src/lib/components/Footer.svelte`
- `src/lib/types/index.ts` (empty initially)

**Modified Files:**

- `package.json` (dependencies added)
- `.gitignore` (add `.dev.vars`, Cloudflare artifacts)
- `src/app.html` (add theme class, import CSS)

## Validation Steps

- Run `npm run dev` and verify site loads
- Check that Tailwind classes work
- Verify DaisyUI components render correctly
- Test navigation and footer components
- Verify TypeScript compilation succeeds
- Run `npm run build` to ensure Cloudflare adapter works

## Notes

- Cloudflare Pages project creation will be done manually via dashboard
- Environment variables will be configured in Cloudflare Pages dashboard
- D1 database setup is optional and can be deferred
- Theme colors can be adjusted later based on design requirements