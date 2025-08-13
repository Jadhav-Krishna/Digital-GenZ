import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Play, Eye, Calendar, Clock, Heart, Share2, MessageCircle, Search, ArrowRight, Sparkles, Star, Youtube } from 'lucide-react';

const DigitalGenZVlog = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('vlog');
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const vlogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      description: "Exploring AI-powered marketing strategies and emerging trends that will shape the digital landscape.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
      duration: "12:34",
      views: "25.8K",
      date: "2 days ago",
      likes: 1234,
      author: "Digital GenZ Team"
    },
    {
      id: 2,
      title: "Building Modern Web Apps",
      description: "A deep dive into modern web development techniques and best practices for 2025.",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
      duration: "18:45",
      views: "42.1K",
      date: "5 days ago",
      likes: 2156,
      author: "Digital GenZ Team"
    },
    {
      id: 3,
      title: "UI/UX Design Trends That Matter",
      description: "Practical design trends that improve user experience and conversion rates.",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
      duration: "15:22",
      views: "38.7K",
      date: "1 week ago",
      likes: 1876,
      author: "Digital GenZ Team"
    },
    {
      id: 4,
      title: "Social Media Strategy for Startups",
      description: "How to build a strong social media presence and engage effectively.",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
      duration: "10:18",
      views: "19.3K",
      date: "1 week ago",
      likes: 987,
      author: "Digital GenZ Team"
    },
    {
      id: 5,
      title: "GenZ Digital Innovation",
      description: "How the next generation is reshaping technology and business.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
      duration: "14:56",
      views: "31.2K",
      date: "2 weeks ago",
      likes: 1543,
      author: "Digital GenZ Team"
    },
    {
      id: 6,
      title: "Creating Viral Content",
      description: "The secrets behind successful digital campaigns and viral content.",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
      duration: "20:12",
      views: "67.4K",
      date: "3 weeks ago",
      likes: 3421,
      author: "Digital GenZ Team"
    }
  ];

  const filteredPosts = vlogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
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
      ? 'bg-black/80 backdrop-blur-2xl border-b border-purple-500/20'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
     <div
  className="cursor-pointer"
  onClick={() => navigate("/")}
>
  <img
    src="https://res.cloudinary.com/dlk5kntmy/image/upload/v1755083075/logo-removebg-preview_xljgwo.png" // replace with your image path
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
          window.open(item.href, "_blank"); // open in new tab
        } else {
          navigate(item.href); // use React Router navigation
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

    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-600/20 to-cyan-600/20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {[...Array(30)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.1} 
              size={Math.random() * 4 + 2}
              color={['bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-white'][Math.floor(Math.random() * 4)]}
            />
          ))}
          
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="text-center z-20 px-6 relative">
          <div className="absolute -top-10 -left-10">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Digital GenZ
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Vlog</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Insights, Tutorials & Digital Innovation
          </p>
          <p className="text-lg text-purple-300 mb-12">
            Join us on our journey to reshape the digital landscape
          </p>
          
          <div className="flex justify-center items-center space-x-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-purple-300">Subscribers</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10M+</div>
              <div className="text-purple-300">Views</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-purple-300">Videos</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-infinite">
          <ChevronDown className="text-white w-10 h-10" />
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Featured Video
            </h2>
          </div>
          
          {filteredPosts.length > 0 && (
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500">
                <div className="relative">
                  <img 
                    src={filteredPosts[0].thumbnail} 
                    alt={filteredPosts[0].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {filteredPosts[0].duration}
                  </div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{filteredPosts[0].title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">{filteredPosts[0].description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>{filteredPosts[0].views}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span>{filteredPosts[0].likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-2xl hover:scale-105 transition-transform duration-300 flex items-center justify-center text-lg">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Now
                    </button>
                    <button className="p-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Latest Videos
            </h2>
            <p className="text-xl text-gray-300">
              More insights and tutorials from Digital GenZ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div key={post.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-bold flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.duration}
                    </div>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes.toLocaleString()}</span>
                        </div>
                      </div>
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.4} 
              size={Math.random() * 3 + 2}
              color={['bg-purple-400', 'bg-pink-400', 'bg-cyan-400'][Math.floor(Math.random() * 3)]}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
              Join Our Community
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Subscribe for weekly insights and digital innovation updates
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="flex items-center">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-purple-300">Subscribers</div>
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white flex items-center justify-center">
                  <Star className="w-5 h-5 mr-1" />
                  4.9
                </div>
                <div className="text-purple-300">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              © 2025 Digital GenZ. All rights reserved.
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
        
        @keyframes bounce-infinite {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-infinite { animation: bounce-infinite 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default DigitalGenZVlog;