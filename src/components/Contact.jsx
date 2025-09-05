import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_ukwla8a";
    const templateID = "template_67pjt65"; 
    const autoReplyTemplateID = "template_q444hhd"; 
    const publicKey = "jtGciQzTPH-e2GZof";

    // Send message to you
    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        // Send auto-reply
        emailjs.sendForm(serviceID, autoReplyTemplateID, form.current, publicKey);

        toast.success("Message sent! I will get back to you within the next 24 hours.", {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error("Something went wrong. Please try again or contact me directly.", {
          duration: 5000,
          style: {
            background: '#EF4444',
            color: '#fff',
          },
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cliffmutuma12@gmail.com",
      href: "mailto:cliffmutuma12@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, KE",
      href: null,
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-x-hidden max-w-full"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 overflow-hidden max-w-full">
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl max-w-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
            <MessageCircle size={20} className="text-green-400" />
            <span className="text-green-400 font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get In 
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Touch</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-full overflow-x-hidden">
          
          {/* Left side - Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 max-w-full overflow-x-hidden ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-full overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Send className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Send Message</h3>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4 max-w-full">
                  <div className="space-y-2 min-w-0">
                    <label className="text-sm font-medium text-gray-300">Name *</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your full name"
                      required
                      className="w-full p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-0"
                    />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <label className="text-sm font-medium text-gray-300">Email *</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-0"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message *</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    required
                    className="w-full p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                      <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-500 max-w-full overflow-x-hidden ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 max-w-full overflow-hidden">
                  <div className={`p-3 ${info.bgColor} rounded-lg flex-shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-300 mb-1">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className={`${info.color} hover:underline font-medium break-words`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium break-words">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>


            {/* Why Contact Me */}
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 max-w-full overflow-hidden">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                Why Work With Me?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  Quick response times (within 24 hours)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  Clear communication throughout projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  Dedicated to delivering quality solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  Passionate about making your ideas reality
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className={`text-center mt-16 pt-8 border-t border-gray-700/50 transform transition-all duration-1000 delay-700 px-4 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-gray-400 break-words">
            Prefer a different way to connect? Feel free to reach out through any of the channels below. 
            I'm always excited to discuss new opportunities and interesting projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;