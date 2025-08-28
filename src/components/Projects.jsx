import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Code, Database, Palette } from 'lucide-react';
import ecommerceImg from "../assets/projects/ecommerce.png";
import bbqBlogImg from "../assets/projects/bbqblog.png";
import coloringBookImg from "../assets/projects/coloringbook.png";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "E-commerce Store",
      description: "A comprehensive full-stack e-commerce platform featuring user authentication, product catalog, shopping cart, and secure checkout process.",
      longDescription: "Built with modern technologies, this mini e-commerce app includes user registration/login, product browsing with search and filters, cart management, and order processing with MongoDB for data persistence.",
      link: "https://mini-ecommerce-frontend-tawny.vercel.app/", 
      github: "#", // Add your GitHub link
      image: ecommerceImg,
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: "Full Stack",
      icon: Code,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "BBQ Recipe Blog",
      description: "A modern recipe blog platform focused on steak and barbecue recipes with intuitive content management and responsive design.",
      longDescription: "Features a clean, modern interface for browsing recipes, detailed cooking instructions, ingredient lists, and cooking tips. Built with React for a smooth user experience.",
      link: "https://sensational-halva-49f8f2.netlify.app/", 
      github: "#", // Add your GitHub link
      image: bbqBlogImg,
      tags: ["React", "MongoDB", "CSS3", "Responsive Design"],
      category: "Frontend",
      icon: Database,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "3D Coloring Book",
      description: "An interactive 3D landing page showcasing creative animations and engaging visual effects for a coloring book product.",
      longDescription: "A showcase of creative web development featuring 3D animations, interactive elements, and engaging visual storytelling to create an immersive product experience.",
      link: "https://3d-coloringbook.netlify.app",
      github: "#", // Add your GitHub link
      image: coloringBookImg,
      tags: ["React", "Three.js", "3D Animation", "Creative Design"],
      category: "Creative",
      icon: Palette,
      color: "from-purple-500 to-pink-600"
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Code size={20} className="text-blue-400" />
            <span className="text-blue-400 font-medium">My Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications, creative designs, and innovative solutions. 
            Each project demonstrates different aspects of modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.has(index);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                ref={el => projectRefs.current[index] = el}
                data-index={index}
                className={`transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:direction-reverse'
                }`}>
                  
                  {/* Project Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur transition-all duration-300 group-hover:opacity-30 group-hover:blur-lg" 
                           style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}>
                      </div>
                      
                      <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 w-full">
                            <div className="flex gap-4">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-sm font-medium"
                              >
                                <Eye size={16} />
                                Live Demo
                              </a>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm font-medium"
                              >
                                <Github size={16} />
                                Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Category Badge */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${project.color}`}>
                        <project.icon size={20} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-400/50 hover:text-blue-400 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                      >
                        <ExternalLink size={18} />
                        <span>View Live</span>
                        <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
                      </a>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5 transform hover:scale-105 transition-all duration-200"
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Let's Connect
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}