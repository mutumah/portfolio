import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.hamburger-btn')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when menu is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Enhanced scroll tracking logic with debugging
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const navOffset = 100; // Navbar offset
      
      let closestSection = 'home';
      let closestDistance = Infinity;
      
      // Debug: uncomment to see scroll data in console
      // console.log('Scroll position:', scrollPosition);
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollPosition + rect.top;
          const elementHeight = element.offsetHeight;
          const elementCenter = elementTop + (elementHeight / 2);
          
          // Calculate distance from viewport center to element center
          const viewportCenter = scrollPosition + (viewportHeight / 2);
          const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
          
          // Debug: uncomment to see section data
          // console.log(`${sectionId}: top=${elementTop}, height=${elementHeight}, center=${elementCenter}, distance=${distanceFromCenter}`);
          
          // Method 1: Traditional approach - check if section is in viewport
          const isInViewport = (scrollPosition + navOffset) >= elementTop && 
                               (scrollPosition + navOffset) < (elementTop + elementHeight);
          
          // Method 2: Find the section closest to viewport center
          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter;
            closestSection = sectionId;
          }
          
          // Method 3: Alternative - check if more than 50% of section is visible
          const visibleTop = Math.max(scrollPosition, elementTop);
          const visibleBottom = Math.min(scrollPosition + viewportHeight, elementTop + elementHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / elementHeight;
          
          // Use the method that works best - prioritize sections that are significantly visible
          if (visibilityRatio > 0.3) { // If more than 30% of section is visible
            closestSection = sectionId;
          }
        }
      });
      
      // Fallback: if we're at the very top, ensure home is selected
      if (scrollPosition < 100) {
        closestSection = 'home';
      }
      
      // Fallback: if we're at the very bottom, ensure contact is selected
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        closestSection = 'contact';
      }
      
      setActiveSection(closestSection);
    };

    // Debounce scroll events for better performance
    let scrollTimeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section with offset for fixed navbar
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between md:justify-center">
          
          {/* Desktop Links (centered) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-12">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative group px-2 py-1 text-base lg:text-lg font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-300'
                  }`}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                  <span 
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300 ${
                      isActive 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger (right side) */}
          <button 
            className="hamburger-btn md:hidden text-white ml-auto p-2 hover:bg-white/10 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          role="dialog" 
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar - Fixed width to prevent overflow */}
          <div className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
              <h2 id="mobile-menu-title" className="text-lg sm:text-xl font-semibold text-white">
                Navigation
              </h2>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-4 sm:p-6 space-y-1 overflow-y-auto">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-left px-4 py-3 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-blue-400 bg-blue-400/10' 
                        : 'text-white hover:text-blue-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;