import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Pham Quoc Thanh (Neo). All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Finance Student & Tech Enthusiast | AI, Blockchain, Data Science
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a 
              href="https://github.com/ShayNeeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              <Image 
                src="/assets/images/github.jpg" 
                alt="GitHub" 
                width={24}
                height={24}
                className="rounded-full hover:opacity-80 transition-opacity"
              />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/shayneeo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <Image 
                src="/assets/images/linkedin.jpg" 
                alt="LinkedIn" 
                width={24}
                height={24}
                className="rounded-full hover:opacity-80 transition-opacity"
              />
            </a>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/pqt05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <Image 
                src="/assets/images/facebook.jpg" 
                alt="Facebook" 
                width={24}
                height={24}
                className="rounded-full hover:opacity-80 transition-opacity"
              />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/shay._.neeo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <Image 
                src="/assets/images/instagram.jpg" 
                alt="Instagram" 
                width={24}
                height={24}
                className="rounded-full hover:opacity-80 transition-opacity"
              />
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://x.com/Shay_Neeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter/X"
            >
              <Image 
                src="/assets/images/x.jpg" 
                alt="Twitter/X" 
                width={24}
                height={24}
                className="rounded-full hover:opacity-80 transition-opacity"
              />
            </a>
            
            {/* Email */}
            <a 
              href="mailto:FAFBIU23210@student.hcmiu.edu.vn" 
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Email"
            >
              <svg 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

