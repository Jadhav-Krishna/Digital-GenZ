import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import { 
  Code, Smartphone, MessageCircle, Facebook, Instagram, MousePointer, 
  Search, PenTool, Globe, Star, BookOpen, Play, Clock, Users, 
  ChevronRight, Zap, Target, Award, TrendingUp, Layers, Database,
  Mail, ShoppingCart, BarChart3, Megaphone, Camera, Edit3
} from 'lucide-react';

const ServicesCoursesPage = () => {
  const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 'web-dev',
      icon: Code,
      title: 'Web Development',
      shortDesc: 'Modern, responsive websites',
      fullDesc: 'Create stunning, high-performance websites using cutting-edge technologies like React, Next.js, and modern design principles.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Custom CMS'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'iOS & Android applications',
      fullDesc: 'Build native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['Native Development', 'Cross-Platform', 'App Store Ready', 'Push Notifications'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 'whatsapp-marketing',
      icon: MessageCircle,
      title: 'WhatsApp Marketing',
      shortDesc: 'Business messaging solutions',
      fullDesc: 'Leverage WhatsApp Business API for customer engagement, automated messaging, and business communication.',
      features: ['Business API', 'Automated Responses', 'Broadcast Lists', 'Analytics'],
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      id: 'facebook-marketing',
      icon: Facebook,
      title: 'Facebook Marketing',
      shortDesc: 'Social media advertising',
      fullDesc: 'Comprehensive Facebook marketing strategies including ads, content creation, and community management.',
      features: ['Ad Campaigns', 'Content Strategy', 'Page Management', 'Analytics'],
      gradient: 'from-blue-600 to-indigo-700',

    },
    {
      id: 'instagram-marketing',
      icon: Instagram,
      title: 'Instagram Marketing',
      shortDesc: 'Visual storytelling & engagement',
      fullDesc: 'Create compelling Instagram presence with strategic content, stories, reels, and influencer collaborations.',
      features: ['Content Creation', 'Story Management', 'Reels Production', 'Influencer Outreach'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 'ppc',
      icon: MousePointer,
      title: 'Pay Per Click (PPC)',
      shortDesc: 'Google Ads & paid campaigns',
      fullDesc: 'Maximize your ROI with targeted Google Ads, Bing Ads, and social media advertising campaigns.',
      features: ['Google Ads', 'Keyword Research', 'A/B Testing', 'ROI Optimization'],
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Optimization',
      shortDesc: 'Rank higher on search engines',
      fullDesc: 'Comprehensive SEO strategies to improve your website visibility and organic traffic on search engines.',
      features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO'],
      gradient: 'from-purple-500 to-indigo-600',
      emoji: '🔍',
      price: 'Starting from ₹22,000'
    },
    {
      id: 'content',
      icon: PenTool,
      title: 'Content Creation',
      shortDesc: 'Engaging content for all platforms',
      fullDesc: 'Professional content creation including copywriting, blog posts, social media content, and video scripts.',
      features: ['Blog Writing', 'Social Media Posts', 'Video Scripts', 'Email Content'],
      gradient: 'from-red-500 to-pink-600',
    }
  ];

  const courses = [
    {
      id: 'fullstack-web',
      icon: Code,
      title: 'Full Stack Web Development',
      shortDesc: 'Complete web development mastery',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      students: 1200,
      rating: 4.9,
      modules: ['HTML/CSS/JS', 'React/Next.js', 'Node.js/Express', 'Database Design', 'Deployment'],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing Mastery',
      shortDesc: 'Complete digital marketing course',
      duration: '4 Months',
      level: 'Beginner to Professional',
      students: 850,
      rating: 4.8,
      modules: ['SEO/SEM', 'Social Media Marketing', 'PPC Advertising', 'Content Strategy', 'Analytics'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 'mobile-dev',
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'iOS & Android app creation',
      duration: '5 Months',
      level: 'Intermediate',
      students: 650,
      rating: 4.7,
      modules: ['React Native', 'Flutter', 'UI/UX Design', 'API Integration', 'App Store Deployment'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 'social-media',
      icon: Instagram,
      title: 'Social Media Marketing',
      shortDesc: 'Master all social platforms',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      students: 920,
      rating: 4.6,
      modules: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Strategy', 'Content Creation', 'Analytics'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 'seo-course',
      icon: Search,
      title: 'Advanced SEO Course',
      shortDesc: 'Search engine optimization expert',
      duration: '2 Months',
      level: 'Intermediate to Advanced',
      students: 450,
      rating: 4.8,
      modules: ['Technical SEO', 'Link Building', 'Local SEO', 'SEO Tools', 'Content Optimization'],
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'graphic-design',
      icon: Camera,
      title: 'Graphic Design Pro',
      shortDesc: 'Visual design and creativity',
      duration: '4 Months',
      level: 'Beginner to Professional',
      students: 580,
      rating: 4.7,
      modules: ['Photoshop', 'Illustrator', 'Brand Design', 'UI Design', 'Portfolio Building'],
      gradient: 'from-orange-500 to-red-600',
    }
  ];

  const FloatingParticle = ({ delay = 0, size = 4, color = 'bg-white' }) => (
    <div 
      className={`absolute ${color} rounded-full opacity-60 animate-float`}
      style={{
        width: `${size}px`,
        height: `size}px`,
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


    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrollY > 50
          ? "bg-black/80 backdrop-blur-2xl border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer -ml-[13vw] md:-ml-[5vw]" onClick={() => navigate("/")}>
          <img
            src="https://res.cloudinary.com/dlk5kntmy/image/upload/v1755105693/logo-03_yyespg.png"
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          {[...Array(50)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.1} 
              size={Math.random() * 6 + 2}
              color={['bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-white'][Math.floor(Math.random() * 4)]}
            />
          ))}
          
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="text-center z-20 px-6 relative">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Services & Courses
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12">
             Transform Your Skills & Business with Our Expert Solutions
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-black/30 backdrop-blur-xl rounded-full p-2 border border-white/20">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === 'services'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === 'courses'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                 Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {activeTab === 'services' && (
  <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Our Services 
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Professional digital solutions to grow your business and establish strong online presence
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group relative cursor-pointer"
            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
            
            {/* Card Content */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl mb-2">{service.emoji}</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 text-center">{service.title}</h3>
              <p className="text-gray-300 text-sm text-center mb-4">{service.shortDesc}</p>

              {selectedService === service.id && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  <p className="text-gray-300 text-sm">{service.fullDesc}</p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Features:</h4>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-2 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold text-sm hover:scale-105 transition-transform duration-300`}>
                    Get Started
                  </button>
                </div>
              )}
            </div>

            {/* Overlay "Coming Soon" */}
            <div className="absolute inset-0 bg-black/70 rounded-2xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">Coming Soon</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}


      {/* Courses Section */}
      {activeTab === 'courses' && (
  <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Our Courses 
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Master in-demand skills with our comprehensive training programs designed for career success
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="group relative cursor-pointer"
            onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
              {/* Course Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  {/* <div className="text-2xl">{course.emoji}</div> */}
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-bold">{course.rating}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{course.shortDesc}</p>
              
              {/* Course Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">{course.duration}</span>
                </div>
                {/* <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-300">{course.students.toLocaleString()} students</span>
                </div> */}
                <div className="flex items-center space-x-2 text-sm">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{course.level}</span>
                </div>
              </div>
              
              {/* Pricing */}
              {/* <div className="flex items-center space-x-2 mb-4">
                <span className={`text-2xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                  {course.price}
                </span>
                <span className="text-gray-500 line-through text-sm">{course.originalPrice}</span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                </span>
              </div> */}
              
              {selectedCourse === course.id && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2">Course Modules:</h4>
                    <div className="space-y-2">
                      {course.modules.map((module, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.gradient}`} />
                          <span className="text-gray-300">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className={`flex-1 py-2 bg-gradient-to-r ${course.gradient} text-white rounded-lg font-semibold text-sm hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                      <Play className="w-4 h-4 mr-1" />
                      Enroll Now
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm hover:bg-white/10 transition-all duration-300">
                      Preview
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Overlay "Coming Soon" */}
            <div className="absolute inset-0 bg-black/70 rounded-2xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">Coming Soon</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-black relative overflow-hidden">
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
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 animate-gradient-x">
            Ready to Get Started? 
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Join thousands of satisfied clients and students who transformed their digital presence with us
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10 flex items-center">
                View All Services
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-10 py-4 border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black overflow-hidden">
              <span className="relative z-10 flex items-center">
                 Browse Courses
                <BookOpen className="ml-2 w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </div>
      </section>

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
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default ServicesCoursesPage;