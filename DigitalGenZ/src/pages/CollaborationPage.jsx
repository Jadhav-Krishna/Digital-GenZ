import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import { 
  Handshake,
  Users,
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const CollaborationPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon! ');
    setFormData({ name: '', email: '', message: '' });
  };

  const FloatingParticle = ({ delay = 0, size = 4 }) => (
    <div 
      className="absolute bg-white rounded-full opacity-60 animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1.2)'
        }}
      />

      {/* Navigation */}
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrollY > 50
          ? "bg-black/80 backdrop-blur-2xl border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://res.cloudinary.com/dlk5kntmy/image/upload/v1755083075/logo-removebg-preview_xljgwo.png"
            alt="Digital GenZ"
            className="h-30 w-auto"
          />
        </div>
    
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { label: "home", href: "/" },
            { label: "about", href: "#about-us" },
            { label: "services", href: "/services" },
            { label: "vlog", href: "/vlog" },
            { label: "collaboration", href: "/collaboration" },
            { label: "join", href: "https://forms.gle/1DzWKv6dPRy6Dhzf7", external: true },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.external) {
                  window.open(item.href, "_blank");
                } else {
                  navigate(item.href);
                }
              }}
              className={`capitalize relative px-4 py-2 transition-all duration-300 hover:scale-110 ${
                activeSection === item.label
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.label && !item.external && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
              )}
            </button>
          ))}
        </div>
    
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-2xl px-6 py-4 flex flex-col space-y-4">
          {[
            { label: "home", href: "/" },
            { label: "about", href: "#about-us" },
            { label: "services", href: "/services" },
            { label: "vlog", href: "/vlog" },
            { label: "collaboration", href: "/collaboration" },
            { label: "join", href: "https://forms.gle/1DzWKv6dPRy6Dhzf7", external: true },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setMenuOpen(false);
                if (item.external) window.open(item.href, "_blank");
                else navigate(item.href);
              }}
              className="text-white text-lg capitalize text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>


      {/* Main Content */}
      <div className="pt-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          {[...Array(30)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.2} 
              size={Math.random() * 4 + 2}
            />
          ))}
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <Handshake className="w-16 h-16 text-purple-400 animate-bounce-slow" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
              Let's
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Collaborate
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              Partner with us to create something extraordinary
            </p>
            <p className="text-lg text-purple-300">
              Where great ideas meet exceptional execution 
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h2 className="text-4xl font-bold text-white mb-6 flex items-center">
                  <Users className="mr-4 w-10 h-10 text-purple-400" />
                  Why Work With Us?
                </h2>
                <div className="space-y-4">
                  {[
                    "Creative & innovative digital solutions",
                    "Fast delivery and reliable support",
                    "Premium quality at competitive prices",
                    "Collaborative approach to every project",
                    "Proven results for growing businesses"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="mr-3 w-6 h-6 text-yellow-400" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "hello@digitalzenz.com" },
                    { icon: Phone, label: "Phone", value: "+91 12345 67890" },
                    { icon: MapPin, label: "Location", value: "Bhopal, Madhya Pradesh, IN" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10">
                        <contact.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{contact.label}</div>
                        <div className="text-white font-semibold">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                  <Sparkles className="mr-3 w-8 h-8 text-pink-400" />
                  Start Your Project
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project, goals, budget, and timeline..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-black text-white mb-6">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create something amazing together!
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-6xl animate-bounce-slow"></div>
                <div className="text-6xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="text-6xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-gradient-x">
            Digital GenZ
          </div>
          <p className="text-gray-400 mb-6">
             Innovating Tomorrow's Digital Solutions Today 
          </p>
          <p className="text-gray-500">
            © 2025 Digital GenZ. All rights reserved. Made with 
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </div>
  );
};

export default CollaborationPage;