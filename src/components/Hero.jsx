import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    'Full Stack Developer',
    'React Enthusiast', 
    'Problem Solver',
    'UI/UX Focused'
  ];

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeEffect = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(currentRole.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentRole.length) {
          // Pause before deleting
          setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, pauseTime);
          return;
        }
        
        setTimeout(typeEffect, typeSpeed);
      } else {
        // Deleting
        setCurrentText(currentRole.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          setTimeout(typeEffect, 500);
          return;
        }
        
        setTimeout(typeEffect, deleteSpeed);
      }
    };

    const timer = setTimeout(() => {
      typeEffect();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center pt-16 overflow-x-hidden max-w-full"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 overflow-hidden max-w-full">
        {/* Animated gradient orbs - Fixed sizes for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse max-w-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse max-w-full" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse max-w-full" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 90}%`, // Changed from 100% to 90% to prevent edge overflow
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
        
        {/* Greeting */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-blue-400 text-lg md:text-xl font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>
        </div>

        {/* Name - Responsive text sizing */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-tight">
            <span className="relative inline-block">
              Cliff
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg -z-10 animate-pulse"></div>
            </span>
          </h1>
        </div>

        {/* Typing Animation Role - Fixed height and responsive text */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        {/* Description - Better responsive text */}
        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            I craft beautiful, performant web experiences that bridge the gap between 
            <span className="text-blue-400 font-medium"> design</span> and 
            <span className="text-purple-400 font-medium"> functionality</span>. 
            Passionate about creating digital solutions that make a difference.
          </p>
        </div>

        {/* CTA Buttons - Better mobile layout */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 px-4">
            <button
              onClick={() => handleSmoothScroll('projects')}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
              </span>
            </button>
            
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-xl font-semibold text-lg hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className={`transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex gap-6 items-center justify-center mb-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-xl transition-all duration-200 hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <button
          onClick={() => handleSmoothScroll('projects')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
          aria-label="Scroll to projects"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce group-hover:text-blue-400" />
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;