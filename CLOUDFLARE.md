# Cloudflare Pages Deployment Instructions

## Build Configuration

- **Build Command**: `npm run build`
- **Build Output Directory**: `out`
- **Node Version**: 20.x or higher
- **Root Directory**: `/` (root of repository)

## Environment Variables

No environment variables needed for static export.

## Custom Domain

After deployment, you can add a custom domain in Cloudflare Pages settings.

## Notes

- This project uses Next.js static export (`output: 'export'` in next.config.ts)
- All images are optimized for static hosting
- The site is fully static and can be served from Cloudflare CDN

