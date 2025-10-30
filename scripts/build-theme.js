// Helper script to set theme and build
// This file ensures theme is set correctly for Cloudflare Pages
const theme = process.env.NEXT_PUBLIC_THEME || 'default';
console.log(`Building with theme: ${theme}`);

// The actual build happens through Next.js
// This is just to verify the theme is set

