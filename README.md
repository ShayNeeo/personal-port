# Personal Portfolio - Pham Quoc Thanh (Neo)

A modern personal portfolio website showcasing projects and skills in Finance, AI, Blockchain, and Data Science.

## 🚀 Features

- **Modern Design**: Clean, responsive design with gradient backgrounds and smooth animations
- **Finance Focus**: Highlighting finance student background with tech enthusiasm
- **Project Showcase**: Displaying projects in AI, Blockchain, Data Science, and Web Development
- **Skills Overview**: Comprehensive skills section including programming languages, finance expertise, and soft skills
- **About Page**: Detailed information about education, experience, and achievements

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (with static export for Cloudflare Pages)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment on Cloudflare Pages

This project is configured for static export and can be deployed directly on Cloudflare Pages:

1. **Push to GitHub**: Push your code to a GitHub repository

2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect your GitHub repository

3. **Build Settings**:
   - **Build command**: `npm run build`
   - **Build output directory**: `out` (Next.js static export creates an `out` directory)
   - **Node version**: 20.x or higher

4. **Deploy**: Cloudflare Pages will automatically build and deploy your site

### Environment Variables

No environment variables are required for this static site.

## 📁 Project Structure

```
personal-port/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with Header and Footer
│   │   ├── page.tsx          # Home page
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   ├── projects/
│   │   │   └── page.tsx      # Projects page
│   │   ├── skills/
│   │   │   └── page.tsx      # Skills page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Header.tsx        # Navigation header
│       └── Footer.tsx        # Site footer
├── public/
│   ├── assets/
│   │   └── images/          # Image assets
│   ├── blogger.jpg          # Profile image
│   ├── scene.jpg            # Hero image
│   └── logo.jpg             # Logo
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Personal Information

- **Profile Image**: Replace `/public/blogger.jpg`
- **Contact Info**: Update in `/src/app/about/page.tsx`
- **Social Links**: Update in `/src/components/Footer.tsx`

### Update Projects

Edit the `projects` array in `/src/app/projects/page.tsx`

### Update Skills

Edit the `skillCategories` array in `/src/app/skills/page.tsx`

## 📝 License

This project is private and personal.

## 👤 Author

**Pham Quoc Thanh (Neo)**
- Finance Student at International University - VNU HCMC
- Email: shayneeo@0.id.vn
- GitHub: [@ShayNeeo](https://github.com/ShayNeeo)
- LinkedIn: [shayneeo](https://www.linkedin.com/in/shayneeo/)

---

Built with ❤️ using Next.js and Tailwind CSS
