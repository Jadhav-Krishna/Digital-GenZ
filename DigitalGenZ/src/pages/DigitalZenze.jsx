import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Target, Heart, Users, Star, Sparkles, ArrowRight, DollarSign, BarChart3} from 'lucide-react';
import Faqsection from '../components/HomePageFAQ'
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

const DigitalZenze = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const FloatingParticle = ({ delay = 0, size = 4, color = 'bg-white' }) => (
    <div 
      className={`absolute ${color} rounded-full opacity-60 animate-float`}
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
    <div className="min-h-screen bg-black overflow-x-hidden">
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
        // { label: "vlog", href: "/vlog" },
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


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-{30vh}">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-600/20 to-cyan-600/20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.1} 
              size={Math.random() * 6 + 2}
              color={['bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-white'][Math.floor(Math.random() * 4)]}
            />
          ))}
          
          {/* Large animated orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="text-center z-20 px-6 relative">
          {/* Sparkle effects */}
          <div className="absolute -top-10 -left-10">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
          </div>
          <div className="absolute -top-5 -right-5">
            <Star className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none">
            <span className="inline-block animate-bounce-slow">D</span>
            <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.1s' }}>i</span>
            <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.2s' }}>g</span>
            <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.3s' }}>i</span>
            <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.4s' }}>t</span>
            <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.5s' }}>a</span>
            <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.6s' }}>l</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x inline-block animate-bounce-slow" style={{ animationDelay: '0.7s' }}>
              GenZ
            </span>
          </h1>
          
          <div className="relative mb-12">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in-up">
              Innovating Tomorrow's Digital Solutions Today
            </p>
            <p className="text-lg text-purple-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Where digital marketing contributes to business growth 
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              onClick={() => scrollToSection('about')}
              className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center">
                Explore More 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-10 py-4 border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-infinite">
          <ChevronDown className="text-white w-10 h-10" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 animate-gradient-x">
              About Digital GenZ
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are your all-in-one digital growth partner, whether you are a start-up looking to grow, a business owner ready to go digital, or someone wanting to kick-start your career,
             we’re here to make it happen!  
             <br></br>
             At<span className="text-purple-400 font-semibold"> Digital GenZ </span> we are here to help your brand stand out the most where it matters- online. Solutions that are effective and tailored to you where you turn clicks into real results.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.2} 
              size={Math.random() * 4 + 1}
              color="bg-white"
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-12">
              <div className="group">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-5xl font-black">Our Vision </h2>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur" />
                  <p className="relative text-xl leading-relaxed p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10">
                    Whether it’s building a brand, launching a career or finding new income streams we are here to empower the next
                     generation of innovators, entrepreneurs and professionals with the digital skills they need to build their way online.
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-5xl font-black">Our Mission</h2>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur" />
                  <p className="relative text-xl leading-relaxed p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10">
                  Our mission is to bridge the gap between creativity and technology, helping people and businesses grow together 
                  through impactful digital marketing solutions, hands-on learning and collaborative opportunities that unlocks 
                  sustainable success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full animate-pulse" />
                    <span className="text-white font-semibold">Innovation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-white font-semibold">Creativity</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-white font-semibold">Excellence</span>
                  </div>
                  <div className="text-center text-white text-2xl font-bold mt-8">
                     Innovation • Creativity •  Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 animate-gradient-x">
              Our Core Values
            </h2>
            <p className="text-2xl text-gray-300">
              The principles that guide everything we do 
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Passion", 
                desc: "We love what we do and it shows in every project we deliver.", 
                gradient: "from-red-500 to-pink-500",
              },
              { 
                icon: Users, 
                title: "Commitment",
                desc: "Teamwork and partnership drive our success and innovation.", 
                gradient: "from-blue-500 to-purple-500",
              },
              { 
                icon: Zap, 
                title: "Innovation", 
                desc: "We constantly push boundaries and embrace new technologies.", 
                gradient: "from-yellow-500 to-orange-500",
              },
              { 
                icon: Target, 
                title: "Excellence", 
                desc: "We strive for perfection in every detail of our work.", 
                gradient: "from-green-500 to-teal-500",
              }
            ].map((value, index) => (
              <div key={index} className="group text-center hover:scale-110 transition-all duration-500">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                    <value.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${value.gradient} rounded transition-all duration-500 mx-auto`} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*why GenZ */}
        <section className="py-20 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          {[...Array(25)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.4} 
              size={Math.random() * 3 + 2}
              color={['bg-purple-400', 'bg-pink-400', 'bg-cyan-400'][Math.floor(Math.random() * 3)]}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 animate-gradient-x">
              Why Digital GenZ?
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Discover what sets us apart in the digital landscape 
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
  {
    icon: DollarSign, 
    title: "● Affordable",
    description: "Quality marketing shouldn’t cost a fortune, and with us, it doesn’t.",
    gradient: "from-purple-500 to-violet-500",
    stats: "99.9% Uptime"
  },
  {
    icon: Users, 
    title: "● Community",
    description:"You’re not just hiring a service, you’re joining a network of people who want to see you succeed.",
    gradient: "from-pink-500 to-rose-500",
    stats: "100% Responsive"
  },
  {
    icon: BarChart3, 
    title: "● Decisions backed by data",
    description: "We don’t do guesswork - we use real insights to create strategies that work.",
    gradient: "from-cyan-500 to-blue-500",
    stats: "50+ Countries"
  }
].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl mb-2">{feature.emoji}</div>
                    <div className={`text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.stats}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{feature.description}</p>
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded transition-all duration-500 mx-auto`} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Key Differentiators */}
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-white mb-4">What Makes Us Different?</h3>
              <p className="text-xl text-gray-300">We don't just build digital solutions, we craft digital experiences</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {  title: "Lightning Fast", desc: "Optimized for speed and performance" },
                {  title: "Creative Design", desc: "Unique, eye-catching visual experiences" },
                {  title: "Secure & Reliable", desc: "Enterprise-grade security standards" },
                {  title: "Data-Driven", desc: "Analytics-powered decision making" }
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  {/* <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div> */}
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-8 py-4 text-white font-bold text-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Star className="w-6 h-6" />
                <span>Ready to Transform Your Digital Presence?</span>
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Faqsection/>


      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/20 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.3} 
              size={2}
              color="bg-purple-400"
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
            Digital GenZ
          </div>
          <p className="text-gray-400 text-xl mb-8">
             Innovating Tomorrow's Digital Solutions Today 
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © 2025 Digital Zenze. All rights reserved. Made with 
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-infinite {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-bounce-infinite { animation: bounce-infinite 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default DigitalZenze;