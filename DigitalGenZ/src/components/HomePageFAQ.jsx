import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, ChevronUp, HelpCircle, Users, Briefcase, 
  MessageCircle, Mail, Star, CheckCircle, ArrowRight, 
  Zap, Target, Award, Clock, Globe, Phone
} from 'lucide-react';

const HomePageFAQ = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const servicesFAQs = [
    {
      id: 1,
      question: "How do I start working with Digital GenZ?",
      answer: "We begin with a free consultation to understand your business goals and create a tailored marketing strategy. Simply contact us through our website or call to schedule your consultation session.",
      icon: Zap,
      popular: true
    },
    {
      id: 2,
      question: "Which marketing service is right for my business?",
      answer: "As your one-stop digital marketing partner, we analyze your business model, target audience, and goals to recommend the perfect combination of services - from SEO and PPC to social media marketing.",
      icon: Target,
      popular: true
    },
    {
      id: 3,
      question: "Do you work with startups and established businesses?",
      answer: "Yes! We support businesses at every growth stage. For startups, we build strong foundations. For established companies, we help scale operations and expand digital reach with customized strategies.",
      icon: Award,
      popular: true
    },
    {
      id: 4,
      question: "How long does it take to see results?",
      answer: "PPC and social ads show immediate results within days, SEO shows significant impact in 3-6 months, and comprehensive strategies deliver substantial results within 6-12 months.",
      icon: Clock,
      popular: false
    }
  ];

  const collaborationFAQs = [
    {
      id: 1,
      question: "Can I join without work experience?",
      answer: "Absolutely! You don't need prior experience. With basic digital skills and eagerness to learn, we provide training, mentorship, and real projects to help you develop expertise while earning.",
      icon: Users,
      popular: true
    },
    {
      id: 2,
      question: "How can I get started with collaboration?",
      answer: "Simply fill out our collaboration form or email us with your skills, interests, and availability. Our team will review your profile and contact you within 48 hours with opportunities.",
      icon: MessageCircle,
      popular: true
    },
    {
      id: 3,
      question: "What is Digital GenZ and how can it help me?",
      answer: "We're a platform connecting creativity, technology, and marketing to help students and job-seekers succeed online. Gain hands-on experience, earn income, and build your career portfolio.",
      icon: Globe,
      popular: true
    },
    {
      id: 4,
      question: "How much can I earn through collaboration?",
      answer: "Entry-level collaborators earn ₹15,000-₹30,000 monthly for part-time work, while experienced members can earn ₹40,000-₹80,000+ with performance bonuses and profit-sharing opportunities.",
      icon: Award,
      popular: false
    }
  ];

  const FloatingParticle = ({ delay = 0, size = 4 }) => (
    <div 
      className="absolute bg-white rounded-full opacity-30 animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  const currentFAQs = activeTab === 'services' ? servicesFAQs : collaborationFAQs;
  const popularFAQs = currentFAQs.filter(faq => faq.popular);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1.2)'
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} size={Math.random() * 4 + 2} />
        ))}
        
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 mb-8">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
            Got Questions?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Find quick answers to common questions about our services and collaboration opportunities
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-black/30 backdrop-blur-xl rounded-full p-2 border border-white/20">
              <button
                onClick={() => setActiveTab('services')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'services'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>For Businesses</span>
              </button>
              <button
                onClick={() => setActiveTab('collaboration')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'collaboration'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>For Collaborators</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {popularFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
                
                {/* Question Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* Answer */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {faq.answer}
                </p>

                {/* Learn More Button */}
                <button 
                  onClick={() => toggleFAQ(faq.id)}
                  className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Questions - Expandable */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">More Questions</h3>
          </div>
          
          <div className="space-y-4">
            {currentFAQs.filter(faq => !faq.popular).map((faq) => (
              <div
                key={faq.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-black/20 backdrop-blur-xl rounded-xl border border-white/5 group-hover:border-white/20 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                        <faq.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {faq.question}
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-purple-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4 animate-fade-in">
                      <div className="pl-11 border-l-2 border-purple-500/30">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur" />
            <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is ready to provide personalized answers and help you get started
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="flex items-center space-x-2 px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                  <span>Schedule Call</span>
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Response within <span className="text-purple-400 font-medium">24 hours</span> • Free consultation available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default HomePageFAQ;