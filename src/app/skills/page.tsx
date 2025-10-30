import { Metadata } from "next";
import { Code, Database, TrendingUp, Brain, Globe, Terminal, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills | Pham Quoc Thanh (Neo)",
  description: "Skills and expertise in Finance, AI, Blockchain, Data Science, and Programming",
};

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Rust', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'R', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Advanced' },
    ]
  },
  {
    title: 'Finance & Analytics',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Financial Analysis', level: 'Advanced' },
      { name: 'Risk Management', level: 'Intermediate' },
      { name: 'Investment Strategies', level: 'Intermediate' },
      { name: 'Market Research', level: 'Intermediate' },
      { name: 'Data Analysis', level: 'Advanced' },
      { name: 'Statistical Modeling', level: 'Intermediate' },
      { name: 'Portfolio Management', level: 'Intermediate' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'AI Model Integration', level: 'Intermediate' },
      { name: 'Chatbot Development', level: 'Intermediate' },
      { name: 'Data Processing', level: 'Advanced' },
      { name: 'Natural Language Processing', level: 'Beginner' },
      { name: 'Machine Learning Basics', level: 'Beginner' },
    ]
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'SvelteKit', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
    ]
  },
  {
    title: 'Database & Backend',
    icon: Database,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'SQLite', level: 'Advanced' },
      { name: 'MongoDB', level: 'Beginner' },
      { name: 'Redis', level: 'Beginner' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'Firestore', level: 'Intermediate' },
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'Linux', level: 'Intermediate' },
      { name: 'Nginx', level: 'Intermediate' },
      { name: 'Apache', level: 'Intermediate' },
      { name: 'DNS Management', level: 'Intermediate' },
      { name: 'Cloudflare', level: 'Intermediate' },
      { name: 'Vercel', level: 'Intermediate' },
    ]
  },
];

const languages = [
  { name: 'Vietnamese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Mandarin (普通话)', level: 'Learning' }
];

const softSkills = [
  'Leadership',
  'Team Management',
  'Problem Solving',
  'Communication',
  'Project Management',
  'Critical Thinking',
  'Time Management',
  'Adaptability'
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              Skills & Expertise
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Combining Finance Knowledge with Modern Technology
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-hover bg-gray-800 p-6 rounded-xl">
                <div className={`flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r ${category.color} rounded-full mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400' :
                        skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Soft Skills */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Languages */}
            <div className="card-hover bg-gray-700 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-600 rounded-lg">
                    <span className="text-gray-200 font-medium">{lang.name}</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card-hover bg-gray-700 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto card-hover bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Current Focus</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">🎓 Education</h4>
                <p className="text-gray-300">Finance & Banking</p>
                <p className="text-sm text-gray-400">IU - VNU HCMC</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">💻 Learning</h4>
                <p className="text-gray-300">Computer Science</p>
                <p className="text-sm text-gray-400">Self-Study</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">🌐 Language</h4>
                <p className="text-gray-300">Mandarin</p>
                <p className="text-sm text-gray-400">Learning (普通话)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

