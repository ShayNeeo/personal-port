import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award, Heart, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me | Pham Quoc Thanh (Neo)",
  description: "Learn more about Neo - Finance student passionate about AI, Blockchain, and Data Science",
};

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+84 878350279' },
  { icon: Mail, label: 'Email', value: 'FAFBIU23210@student.hcmiu.edu.vn', link: 'mailto:FAFBIU23210@student.hcmiu.edu.vn' },
  { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
];

const education = [
  {
    degree: 'Bachelor of Finance & Banking',
    institution: 'International University - Vietnam National University Ho Chi Minh City',
    period: '2023 - Present',
    gpa: '3.39/4.0',
    details: 'Major: Finance & Banking | Currently pursuing degree with focus on financial analysis and technology applications in finance'
  }
];

const experience = [
  {
    title: 'Online Math Tutor (Grade 12)',
    organization: 'Freelance',
    period: 'Mar 2024 - Oct 2024',
    description: 'Developed digital teaching skills and helped students succeed in mathematics. Created engaging learning materials and provided personalized tutoring sessions.'
  },
  {
    title: 'Coffee Bartender',
    organization: 'Cafe 567',
    period: 'Aug 2023 - Oct 2023',
    description: 'Enhanced customer service and time management skills. Worked in a fast-paced environment managing orders and maintaining customer satisfaction.'
  },
  {
    title: '1.5°C Hội | Entrance Staff',
    organization: 'Nguyen Khuyen High School',
    period: '2022 - 2023',
    description: 'Experienced event management tasks before, during, and after events. Coordinated with team members to ensure smooth execution of school activities.'
  },
  {
    title: 'Inter-school Lecture | Concept/Tech Leader',
    organization: 'Nguyen Khuyen High School',
    period: '2022 - 2023',
    description: 'Led team organization with large numbers and applied abilities in a real setting. Managed technology aspects of inter-school events and coordinated with multiple stakeholders.'
  }
];

const achievements = [
  {
    title: 'Scholarship Winner',
    period: 'Semester 1 (2023-2024)',
    description: 'Recipient of academic scholarship for outstanding performance'
  },
  {
    title: 'Best Innovative Idea',
    period: 'Green Innovation Camp 2024',
    description: 'Winner of the Best Innovative Idea award for creative solution in sustainability'
  }
];

const languages = [
  { name: 'Vietnamese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Mandarin (普通话)', level: 'Learning' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              About Me
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Finance Student & Self-Taught Developer from Vietnam
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Profile Card */}
              <div className="card-hover bg-gray-800 p-6 rounded-xl">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/blogger.jpg"
                      alt="Neo - Profile Picture"
                      width={192}
                      height={192}
                      className="object-cover rounded-full border-4 border-purple-500 p-1 bg-white"
                    />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-white mb-2">Pham Quoc Thanh (Neo)</h2>
                  <p className="text-lg text-gray-300">Finance Student & Developer</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="card-hover bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <contact.icon className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-medium text-gray-300">{contact.label}</p>
                        {contact.link ? (
                          <Link href={contact.link} className="text-sm text-purple-400 hover:underline">
                            {contact.value}
                          </Link>
                        ) : (
                          <p className="text-sm text-gray-400">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="card-hover bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-white">Languages</h3>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About Me */}
              <div className="card-hover bg-gray-800 p-8 rounded-xl">
                <h2 className="text-3xl font-playfair flex items-center gap-2 mb-6 text-white">
                  <Heart className="w-8 h-8 text-red-500" />
                  My Story
                </h2>
                <div className="prose prose-lg max-w-none text-gray-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Hi! I'm Neo, a passionate Finance student at International University - Vietnam National University, 
                    with a deep love for technology and continuous learning. Currently in my academic journey, I'm also 
                    self-studying Computer Science and actively learning Mandarin (普通话).
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    My interests span across finance, technology, and cultural exploration. I believe in the power of 
                    combining traditional finance knowledge with modern technology to create innovative solutions. 
                    I'm particularly fascinated by AI applications in finance, blockchain technology, and data science 
                    - areas where I see tremendous potential for disruption and innovation.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    When I'm not studying or coding, you can find me exploring new technologies, working on personal 
                    projects, or diving deep into financial markets and investment strategies. I'm always excited to 
                    connect with like-minded individuals and learn from diverse perspectives.
                  </p>

                  <p className="text-lg leading-relaxed">
                    My journey is about bridging two worlds: understanding the complexities of finance and leveraging 
                    technology to solve real-world problems. Whether it's building web applications, analyzing financial 
                    data, or exploring AI models, I'm constantly learning and growing.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="card-hover bg-gray-800 p-8 rounded-xl">
                <h2 className="text-2xl font-playfair flex items-center gap-2 mb-6 text-white">
                  <GraduationCap className="w-6 h-6" />
                  Education
                </h2>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6 pb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 mb-2">
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </p>
                      <p className="text-sm text-purple-400 font-semibold">GPA: {edu.gpa}</p>
                    </div>
                    <p className="text-gray-300">{edu.details}</p>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="card-hover bg-gray-800 p-8 rounded-xl">
                <h2 className="text-2xl font-playfair flex items-center gap-2 mb-6 text-white">
                  <Briefcase className="w-6 h-6" />
                  Experience & Activities
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium mb-2">{exp.organization}</p>
                      <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="card-hover bg-gray-800 p-8 rounded-xl">
                <h2 className="text-2xl font-playfair flex items-center gap-2 mb-6 text-white">
                  <Award className="w-6 h-6" />
                  Achievements & Awards
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-purple-400 text-sm mb-2">{achievement.period}</p>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="card-hover gradient-bg p-12 rounded-xl text-center">
                <h2 className="text-3xl font-bold font-playfair mb-4 text-white">Let's Connect!</h2>
                <p className="text-xl mb-8 opacity-90 text-white">
                  I'm always interested in meaningful conversations and collaboration opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="mailto:FAFBIU23210@student.hcmiu.edu.vn" className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get In Touch
                  </Link>
                  <Link href="/" className="px-6 py-3 bg-white/10 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

