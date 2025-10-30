import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Brain, Database, TrendingUp, Code, Award, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Pham Quoc Thanh</span></h1>
            <h2 className="subtitle">Finance Student & Tech Enthusiast</h2>
            <p className="hero-description">
              Passionate about bridging Finance and Technology. Currently studying Finance & Banking at International University - VNU HCMC, 
              while exploring AI, Blockchain, and Data Science. Building innovative solutions at the intersection of finance and modern technology.
            </p>
            <div className="hero-buttons">
              <Link href="#projects" className="btn btn-primary">View My Work</Link>
              <Link href="/about" className="btn btn-secondary">About Me</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image 
              src="/blogger.jpg" 
              alt="Neo's Photo" 
              width={280} 
              height={280}
              className="profile-photo"
              priority
            />
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Areas of Interest</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-gray-700 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Artificial Intelligence</h3>
              <p className="text-gray-300 text-center">
                Exploring AI applications in finance, building chatbot systems, and working with various AI models
              </p>
            </div>
            <div className="card-hover bg-gray-700 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Blockchain</h3>
              <p className="text-gray-300 text-center">
                Learning decentralized technologies and their applications in financial systems
              </p>
            </div>
            <div className="card-hover bg-gray-700 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Data Science</h3>
              <p className="text-gray-300 text-center">
                Analyzing financial data, building predictive models, and deriving insights from complex datasets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card stagger-item">
              <div className="project-image h-[220px] overflow-hidden">
                <Image 
                  src="/scene.jpg" 
                  alt="Personal Website" 
                  width={400} 
                  height={220}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-content">
                <h3>Personal Website & Blog</h3>
                <p>A modern full-stack website featuring AI chatbot, QR generator, URL shortener, and private search engine. Built with Next.js and TypeScript.</p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Tailwind CSS</span>
                </div>
                <div className="project-links">
                  <a href="https://shayneeo.id.vn" target="_blank" rel="noopener noreferrer" className="project-link btn-hover-lift">Visit Site</a>
                </div>
              </div>
            </div>
            
            <div className="project-card stagger-item">
              <div className="project-image h-[220px] overflow-hidden">
                <Image 
                  src="/logo.jpg" 
                  alt="ping0 Link Sharer" 
                  width={400} 
                  height={220}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-content">
                <h3>ping0 - Link & File Sharer</h3>
                <p>A minimal, fast link and file sharing web application built entirely in Rust. Features instant sharing, QR codes, and admin panel.</p>
                <div className="project-tech">
                  <span className="tech-tag">Rust</span>
                  <span className="tech-tag">Axum</span>
                  <span className="tech-tag">SQLite</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/ShayNeeo/ping0" target="_blank" rel="noopener noreferrer" className="project-link btn-hover-lift">View on GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card stagger-item">
              <div className="project-image h-[220px] overflow-hidden">
                <Image 
                  src="/scene.jpg" 
                  alt="Restaurant Demo" 
                  width={400} 
                  height={220}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-content">
                <h3>Restaurant Demo Platform</h3>
                <p>Full-stack restaurant management system with payment integration, built with Rust backend and TypeScript frontend.</p>
                <div className="project-tech">
                  <span className="tech-tag">Rust</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/ShayNeeo/restaurent-demo" target="_blank" rel="noopener noreferrer" className="project-link btn-hover-lift">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card stagger-item">
              <div className="project-image h-[220px] overflow-hidden">
                <Image 
                  src="/logo.jpg" 
                  alt="Vocabulary App" 
                  width={400} 
                  height={220}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-content">
                <h3>Vocabulary Learning App</h3>
                <p>AI-powered vocabulary learning application with spaced repetition, flashcard generation, and multilingual support.</p>
                <div className="project-tech">
                  <span className="tech-tag">SvelteKit</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">AI APIs</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/ShayNeeo/vocab-app" target="_blank" rel="noopener noreferrer" className="project-link btn-hover-lift">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="skills-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <Code className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3>Programming Languages</h3>
              <div className="skills-list">
                <span className="skill">Python</span>
                <span className="skill">Rust</span>
                <span className="skill">JavaScript</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Java</span>
                <span className="skill">PHP</span>
                <span className="skill">SQL</span>
                <span className="skill">R</span>
              </div>
            </div>
            <div className="skill-category">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3>Finance & Analytics</h3>
              <div className="skills-list">
                <span className="skill">Financial Analysis</span>
                <span className="skill">Risk Management</span>
                <span className="skill">Investment Strategies</span>
                <span className="skill">Market Research</span>
                <span className="skill">Data Analysis</span>
                <span className="skill">Statistical Modeling</span>
              </div>
            </div>
            <div className="skill-category">
              <Database className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3>Technologies & Tools</h3>
              <div className="skills-list">
                <span className="skill">Next.js</span>
                <span className="skill">React</span>
                <span className="skill">Node.js</span>
                <span className="skill">Docker</span>
                <span className="skill">Git</span>
                <span className="skill">MySQL</span>
                <span className="skill">PostgreSQL</span>
                <span className="skill">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Recent Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-hover bg-gray-700 p-6 rounded-xl text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Scholarship Winner</h3>
              <p className="text-gray-300">Semester 1 (2023-2024)</p>
            </div>
            <div className="card-hover bg-gray-700 p-6 rounded-xl text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Best Innovative Idea</h3>
              <p className="text-gray-300">Green Innovation Camp 2024</p>
            </div>
            <div className="card-hover bg-gray-700 p-6 rounded-xl text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Current GPA</h3>
              <p className="text-gray-300">3.39/4.0</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

