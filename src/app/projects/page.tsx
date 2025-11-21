import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Globe, Code, Database, Brain, TrendingUp, Mail, Smartphone, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Pham Quoc Thanh (Neo)",
  description: "Explore my projects in Finance, AI, Blockchain, and Data Science",
};

const projects = [
  {
    title: 'w9-tools - Link Shortener & File Sharing',
    description: 'Lightweight utility stack for instant link shortening, markdown notepads, and secure file sharing. Built with Rust (Axum) backend and React/Vite frontend with QR code generation.',
    image: '/scene.jpg',
    tech: ['Rust', 'Axum', 'React', 'Vite', 'TypeScript', 'SQLite'],
    category: 'Systems Programming',
    link: 'https://w9.se',
    github: 'https://github.com/ShayNeeo/w9-tools',
    icon: Link2
  },
  {
    title: 'w9-mail - Email Service Layer',
    description: 'Email service layer sitting between applications and Microsoft SMTP/IMAP/POP3. Features account management, API for transactional emails, and admin dashboard. Built with Rust backend and Next.js frontend.',
    image: '/logo.jpg',
    tech: ['Rust', 'Axum', 'Next.js', 'TypeScript', 'SQLite', 'Microsoft SMTP'],
    category: 'Full-Stack Application',
    link: 'https://w9.nu',
    github: 'https://github.com/ShayNeeo/w9-mail',
    icon: Mail
  },
  {
    title: 'LocalShare - LAN File Sharing',
    description: 'Privacy-first Flutter app for transferring files between devices on the same local network. No accounts, no cloud storage - files are sent directly between devices on your LAN.',
    image: '/logo.jpg',
    tech: ['Flutter', 'Dart', 'Android'],
    category: 'Mobile Development',
    link: 'https://localshare.xyz',
    github: 'https://github.com/ShayNeeo/localshare',
    icon: Smartphone
  },
  {
    title: 'Nguyen Restaurant - Management Platform',
    description: 'Full-stack restaurant management system with payment integration (PayPal/Stripe), email notifications via Brevo, and admin dashboard. Features gift code system with QR scanning and order management.',
    image: '/scene.jpg',
    tech: ['TypeScript', 'Rust', 'Next.js', 'SQLite', 'PayPal API', 'Nginx'],
    category: 'Full-Stack Application',
    link: 'https://github.com/ShayNeeo/nguyen-restaurant',
    github: 'https://github.com/ShayNeeo/nguyen-restaurant',
    icon: Database
  },
  {
    title: 'Personal Website & Blog',
    description: 'A modern full-stack website featuring AI chatbot, QR generator, URL shortener, and private search engine. Built with Next.js and TypeScript.',
    image: '/scene.jpg',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PHP', 'Docker'],
    category: 'Web Development',
    link: 'https://shayneeo.id.vn',
    github: 'https://github.com/ShayNeeo',
    icon: Globe
  },
  {
    title: 'ping0 - Link & File Sharer',
    description: 'A minimal, fast link and file sharing web application built entirely in Rust. Features instant sharing, QR codes, smart image previews, and admin panel.',
    image: '/logo.jpg',
    tech: ['Rust', 'Axum', 'SQLite', 'Docker', 'Askama'],
    category: 'Systems Programming',
    link: 'https://github.com/ShayNeeo/ping0',
    github: 'https://github.com/ShayNeeo/ping0',
    icon: Code
  },
  {
    title: 'Vocabulary Learning App',
    description: 'AI-powered vocabulary learning application with spaced repetition (SM-2 algorithm), flashcard generation, and multilingual support. Supports English, Korean, Mandarin, and Japanese.',
    image: '/logo.jpg',
    tech: ['SvelteKit', 'TypeScript', 'Firebase', 'AI APIs', 'Unsplash API'],
    category: 'AI & Education',
    link: 'https://github.com/ShayNeeo/vocab-app',
    github: 'https://github.com/ShayNeeo/vocab-app',
    icon: Brain
  },
  {
    title: 'AI Chatbot Integration',
    description: 'Multi-model AI chatbot with web search capabilities and conversation management. Supports multiple AI providers and privacy-focused search integration.',
    image: '/scene.jpg',
    tech: ['JavaScript', 'AI APIs', 'Web Search APIs', 'Privacy Tools'],
    category: 'Artificial Intelligence',
    link: 'https://chatbot.shayneeo.id.vn',
    github: 'https://github.com/ShayNeeo',
    icon: Brain
  },
  {
    title: 'Private Search Engine',
    description: 'Privacy-focused search engine powered by SearXNG with multiple search providers. Self-hosted DNS resolvers across multiple regions for optimal performance.',
    image: '/logo.jpg',
    tech: ['SearXNG', 'Docker', 'DNS Management', 'Privacy Tools'],
    category: 'Privacy & Infrastructure',
    link: 'https://search.shayneeo.id.vn',
    github: 'https://github.com/ShayNeeo',
    icon: TrendingUp
  }
];

const categories = ['All', 'Web Development', 'Systems Programming', 'Full-Stack Application', 'Mobile Development', 'AI & Education', 'Artificial Intelligence', 'Privacy & Infrastructure'];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Exploring Finance, AI, Blockchain, and Data Science through code
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-hover bg-gray-800 rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white text-sm font-semibold transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-semibold transition"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">More Projects</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile to see more projects and contributions
          </p>
          <a
            href="https://github.com/ShayNeeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold transition"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

