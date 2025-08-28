import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Globe, Palette, Server, GitBranch, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { 
          name: "React", 
          level: 90, 
          description: "Building dynamic UIs with hooks and modern patterns",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.4-.465-.784-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.990-1.36-1.56z"/>
            </svg>
          ),
          color: "text-blue-400"
        },
        { 
          name: "JavaScript", 
          level: 85, 
          description: "ES6+, async programming, and modern JS patterns",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
            </svg>
          ),
          color: "text-yellow-400"
        },
        { 
          name: "HTML5", 
          level: 95, 
          description: "Semantic markup and modern web standards",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
            </svg>
          ),
          color: "text-orange-500"
        },
        { 
          name: "CSS3", 
          level: 88, 
          description: "Advanced styling, animations, and responsive design",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm4.133 4.518l4.899 5.091-4.9 5.091-.898-.898 4.001-4.193-4.001-4.193.899-.898zm6.834 10.482h8.5v1.5h-8.5v-1.5z"/>
            </svg>
          ),
          color: "text-blue-500"
        },
        { 
          name: "Tailwind CSS", 
          level: 92, 
          description: "Utility-first styling and rapid development",
          icon: <Palette className="w-8 h-8" />,
          color: "text-teal-400"
        }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { 
          name: "Node.js", 
          level: 82, 
          description: "Server-side JavaScript and API development",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.080-0.383 c0.585-0.203,0.703-0.250,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.324,6.825,2.324,6.921v10.15c0,0.097,0.053,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
            </svg>
          ),
          color: "text-green-500"
        },
        { 
          name: "Express.js", 
          level: 80, 
          description: "Fast web framework for Node.js applications",
          icon: <Zap className="w-8 h-8" />,
          color: "text-gray-400"
        },
        { 
          name: "RESTful APIs", 
          level: 85, 
          description: "Designing and implementing REST architecture",
          icon: <Layers className="w-8 h-8" />,
          color: "text-purple-400"
        }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { 
          name: "MongoDB", 
          level: 78, 
          description: "NoSQL database design and operations",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.51-9.020.417-.296 2.681-2.045 4.652-5.025-.15.045-.297.09-.44.135a17.02 17.02 0 01-.94.24z"/>
            </svg>
          ),
          color: "text-green-400"
        },
        { 
          name: "Git & GitHub", 
          level: 88, 
          description: "Version control and collaborative development",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-orange-400"
        },
        { 
          name: "Database Design", 
          level: 75, 
          description: "Schema design and query optimization",
          icon: <Database className="w-8 h-8" />,
          color: "text-blue-300"
        }
      ]
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSkills(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    skillsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden max-w-full"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 overflow-hidden max-w-full">
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl max-w-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
            <Code2 size={20} className="text-purple-400" />
            <span className="text-purple-400 font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Skills & 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Technologies</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive toolkit for building modern web applications, 
            from responsive frontends to scalable backend systems.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16 max-w-full overflow-x-hidden">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8 max-w-full overflow-x-hidden">
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} flex-shrink-0`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white break-words">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full overflow-x-hidden">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 10 + skillIndex;
                  const isVisible = visibleSkills.has(globalIndex);
                  
                  return (
                    <div
                      key={skillIndex}
                      ref={el => skillsRef.current[globalIndex] = el}
                      data-index={globalIndex}
                      className={`group relative transform transition-all duration-700 max-w-full overflow-x-hidden ${
                        isVisible 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-12 opacity-0'
                      }`}
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      onMouseEnter={() => setHoveredSkill(globalIndex)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="relative h-full p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 max-w-full overflow-hidden">
                        
                        {/* Skill Icon and Name */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`${skill.color} transform transition-transform duration-200 group-hover:scale-110 flex-shrink-0`}>
                            {skill.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors break-words">
                              {skill.name}
                            </h4>
                          </div>
                        </div>

                        {/* Skill Description */}
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed break-words">
                          {skill.description}
                        </p>

                        {/* Skill Level Bar */}
                        <div className="space-y-2 max-w-full">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider truncate">
                              Proficiency
                            </span>
                            <span className="text-sm font-semibold text-blue-400 flex-shrink-0">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden max-w-full">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                                isVisible ? 'translate-x-0' : '-translate-x-full'
                              }`}
                              style={{ 
                                width: `${skill.level}%`,
                                transitionDelay: `${skillIndex * 100 + 300}ms`
                              }}
                            />
                          </div>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700/50 px-4">
          <p className="text-gray-400 mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center items-center gap-8 text-gray-500 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-sm">Currently Learning: TypeScript, Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;