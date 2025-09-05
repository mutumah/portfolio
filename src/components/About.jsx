import { useState, useEffect, useRef } from 'react';
import { User, Download, Mail, MapPin, Calendar, Heart, Code, Coffee, Lightbulb, Target } from 'lucide-react';
import profileImage from '../assets/profile.jpeg'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const personalStats = [
    { label: "Years Coding", value: "2+", icon: Code },
    { label: "Projects Built", value: "15+", icon: Lightbulb },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
    { label: "Problems Solved", value: "100+", icon: Target }
  ];

  const interests = [
    { name: "Full-Stack Development", description: "Building end-to-end solutions" },
    { name: "UI/UX Design", description: "Creating beautiful user experiences" },
    { name: "Problem Solving", description: "Finding elegant solutions to complex challenges" },
    { name: "Community Impact", description: "Using tech to make a positive difference" },
    { name: "Continuous Learning", description: "Always exploring new technologies" },
    { name: "Collaboration", description: "Working with teams to build amazing things" }
  ];

  const tabContent = {
    story: {
      title: "My Journey",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I'm <span className="font-semibold text-blue-400">Cliff</span> 👋 — a passionate 
            web developer who loves turning ideas into functional and visually 
            appealing digital experiences. My journey into coding started with 
            curiosity about how websites work and has evolved into a deep love for creating 
            solutions that matter.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I've built my expertise around modern technologies like 
            <span className="font-semibold text-blue-400"> React</span> for dynamic frontends,
            <span className="font-semibold text-green-400"> Node.js</span> for robust backends, 
            and <span className="font-semibold text-emerald-400"> MongoDB</span> for efficient data management. 
            But beyond the tech stack, I'm driven by the impact — whether it's helping businesses 
            grow online, building tools that solve real problems, or contributing to projects 
            that benefit my community.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            When I'm not coding, you'll find me exploring the latest tech trends, 
            collaborating on creative ideas, and constantly pushing myself to learn new things. 
            I believe great developers never stop growing, and I'm always excited about 
            what's next on the horizon.
          </p>
        </div>
      )
    },
    values: {
      title: "What Drives Me",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <h4 className="font-semibold text-blue-400 mb-2">{interest.name}</h4>
                <p className="text-gray-300 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    fun: {
      title: "Fun Facts",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {personalStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">
              🌍 Based in <span className="text-blue-400">Nairobi, Kenya</span> — bringing global perspectives to local solutions
            </p>
            <p className="text-gray-300">
              🚀 Currently exploring <span className="text-purple-400">TypeScript</span> and <span className="text-purple-400">Next.js</span>
            </p>
            <p className="text-gray-300">
              ⚡ Fun fact: I debug with console.log more than I'd like to admit, but hey, it works! 
            </p>
            <p className="text-gray-300">
              🎯 2024 Goal: Contribute to open source projects and build something that impacts 1000+ users
            </p>
          </div>
        </div>
      )
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden max-w-full"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 overflow-hidden max-w-full">
        <div className="absolute top-32 right-32 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl max-w-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <User size={20} className="text-blue-400" />
            <span className="text-blue-400 font-medium">Get To Know Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-full overflow-x-hidden">
          
          {/* Left side - Interactive Content */}
          <div className={`transform transition-all duration-1000 delay-300 max-w-full overflow-x-hidden ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8 p-1 bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-x-auto">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 whitespace-nowrap min-w-0 ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px] max-w-full overflow-x-hidden">
              <div className="transition-all duration-300">
                {tabContent[activeTab].content}
              </div>
            </div>

          </div>

          {/* Right side - Visual Content */}
          <div className={`transform transition-all duration-1000 delay-500 max-w-full overflow-x-hidden ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Profile Image */}
            <div className="relative group max-w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Profile Image Container with margin for floating badge */}
              <div className="relative bg-gray-800 p-4 rounded-2xl shadow-2xl z-10 mt-4 mr-6">
                <div className="w-full h-80 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Cliff - Web Developer" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Floating badge with better positioning - fully visible */}
                <div className="absolute -top-2 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl z-20 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
                    Available for work
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-full">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-400 truncate">Location</span>
                </div>
                <p className="text-white font-semibold text-sm truncate">Nairobi, Kenya</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-400 truncate">Experience</span>
                </div>
                <p className="text-white font-semibold text-sm">2+ Years</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={16} className="text-red-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-400 truncate">Passion</span>
                </div>
                <p className="text-white font-semibold text-sm truncate">Problem Solving</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Code size={16} className="text-purple-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-400 truncate">Focus</span>
                </div>
                <p className="text-white font-semibold text-sm">Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;