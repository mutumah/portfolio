import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mutumah", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/clifford-mutuma-186605217/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:clifftush12@gmail.com", label: "Email" }
  ];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" }, 
    { href: "#about", label: "About" },   
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-400 max-w-md">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <nav className="flex flex-wrap gap-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="hover:text-white transition-colors duration-300">
            &copy; {new Date().getFullYear()} Cliff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
