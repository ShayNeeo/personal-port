# Black & White Theme Build

This project supports building a black-and-white, finance-focused minimalist version of the portfolio.

## Usage

### Build Default Theme (Colorful)
```bash
npm run build
# or
npm run build:default
```

### Build Black & White Theme
```bash
npm run build:bw
```

## Deployment

### Cloudflare Pages - Default Theme
- Build command: `npm run build`
- Build output directory: `out`

### Cloudflare Pages - Black & White Theme
- Build command: `npm run build:bw`
- Build output directory: `out`
- Environment variable: `NEXT_PUBLIC_THEME=black-white`

## Theme Differences

### Black & White Theme Features:
- Clean black and white color scheme
- Sharp, professional borders (no rounded corners)
- Finance-focused minimalist design
- High contrast for readability
- Professional typography
- Simple, effective layouts
- Clean geometric shapes

### Default Theme Features:
- Vibrant gradient backgrounds
- Colorful accents and highlights
- Modern rounded corners
- Dynamic animations
- Tech-focused design

Both themes share the same content structure and functionality - only the visual styling differs.

