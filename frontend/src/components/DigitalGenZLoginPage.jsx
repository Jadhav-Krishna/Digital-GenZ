import React, { useState } from 'react';
import { User, Mail, Lock, Star, Sparkles, ArrowRight, Eye, EyeOff, Code, Palette, BarChart3, Megaphone, Camera, Edit } from 'lucide-react';
import axios from 'axios';


const DigitalGenZLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: [],
    experience: '',
    portfolio: ''
  });

  const availableSkills = [
    { name: 'Digital Marketing', icon: Megaphone, color: 'purple' },
    { name: 'Web Development', icon: Code, color: 'pink' },
    { name: 'Graphic Design', icon: Palette, color: 'cyan' },
    { name: 'Data Analytics', icon: BarChart3, color: 'purple' },
    { name: 'Content Creation', icon: Edit, color: 'pink' },
    { name: 'Photography', icon: Camera, color: 'cyan' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillToggle = (skillName) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillName)
        ? prev.skills.filter(s => s !== skillName)
        : [...prev.skills, skillName]
    }));
  };

 const handleSubmit = async () => {
  try {
    if (isLogin) {
      // Login
      if (!formData.email || !formData.password) {
        alert('Please fill all required fields');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/auth/login', 
        { email: formData.email, password: formData.password },
        { withCredentials: true } // needed for cookies
      );

      console.log('Login Success:', response.data);
      alert('Login successful! Welcome to Digital GenZ');

    } else {
      // Signup
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        alert('Please fill all required fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        formData,
        { withCredentials: true }
      );

      console.log('Signup Success:', response.data);
      alert('Account created successfully! Welcome to Digital GenZ');

      // Optionally switch to login mode
      setIsLogin(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '', skills: [], experience: '', portfolio: '' });
    }
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    alert(error.response?.data?.message || 'Something went wrong!');
  }
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
      {/* Background matching your original theme */}
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

      <div className="relative z-20 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-6 w-full">
          {/* Header Section - Matching your original hero style */}
          <div className="text-center mb-16 relative">
            {/* Sparkle effects */}
            <div className="absolute -top-10 -left-10">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            </div>
            <div className="absolute -top-5 -right-5">
              <Star className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-none">
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
            
            <p className="text-2xl text-gray-300 mb-2 animate-fade-in-up">
              {isLogin ? 'Welcome Back!' : 'Join Our Digital Revolution'}
            </p>
            <p className="text-lg text-purple-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {isLogin ? 'Sign in to continue your digital journey' : 'Create your account to get started'}
            </p>
          </div>

          {/* Login/Signup Toggle */}
          <div className="flex justify-center mb-12">
            <div className="relative bg-black/40 backdrop-blur-xl rounded-full p-2 border border-white/20">
              <div className={`absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`} style={{ width: 'calc(50% - 4px)' }} />
              <div className="relative flex">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 ${isLogin ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 ${!isLogin ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 hover:border-white/30 transition-all duration-500">
              
              <div className="space-y-8">
                {/* Name Field (Only for Signup) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <User className="inline w-6 h-6 mr-3 text-purple-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                {/* Email Field */}
                <div className="group">
                  <label className="block text-white font-bold mb-4 text-xl">
                    <Mail className="inline w-6 h-6 mr-3 text-pink-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Password Field */}
                <div className="group">
                  <label className="block text-white font-bold mb-4 text-xl">
                    <Lock className="inline w-6 h-6 mr-3 text-cyan-400" />
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full p-5 pr-14 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (Only for Signup) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <Lock className="inline w-6 h-6 mr-3 text-purple-400" />
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                {/* Skills Selection (Only for Signup) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <Star className="inline w-6 h-6 mr-3 text-yellow-400" />
                      Your Skills (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {availableSkills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        const isSelected = formData.skills.includes(skill.name);
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleSkillToggle(skill.name)}
                            className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                              isSelected 
                                ? `border-${skill.color}-500 bg-${skill.color}-500/20` 
                                : 'border-white/20 hover:border-white/40 bg-black/20'
                            }`}
                          >
                            <div className="text-center">
                              <IconComponent className={`w-8 h-8 mx-auto mb-2 ${
                                isSelected 
                                  ? `text-${skill.color}-400` 
                                  : 'text-gray-400 group-hover:text-white'
                              }`} />
                              <p className={`text-sm font-semibold ${
                                isSelected ? 'text-white' : 'text-gray-400 group-hover:text-white'
                              }`}>
                                {skill.name}
                              </p>
                            </div>
                            {isSelected && (
                              <div className={`absolute top-2 right-2 w-4 h-4 bg-${skill.color}-500 rounded-full`} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Experience Level (Only for Signup) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <BarChart3 className="inline w-6 h-6 mr-3 text-cyan-400" />
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                    >
                      <option value="">Select your experience level</option>
                      <option value="Beginner">Beginner (0-1 years)</option>
                      <option value="Intermediate">Intermediate (1-3 years)</option>
                      <option value="Advanced">Advanced (3-5 years)</option>
                      <option value="Expert">Expert (5+ years)</option>
                    </select>
                  </div>
                )}

                {/* Portfolio/Website (Only for Signup) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <Edit className="inline w-6 h-6 mr-3 text-pink-400" />
                      Portfolio/Website (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                )}

                {/* Forgot Password Link (Only for Login) */}
                {isLogin && (
                  <div className="text-right">
                    <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg">
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    onClick={handleSubmit}
                    className="group relative px-16 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isLogin ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Switch Mode */}
                <div className="text-center pt-6">
                  <p className="text-gray-300 text-lg">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-2 text-purple-400 hover:text-purple-300 font-bold transition-colors duration-300"
                    >
                      {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-2">Need help? Contact us:</p>
            <p className="text-purple-400 font-bold text-lg">digitalgenzminds@gmail.com</p>
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
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default DigitalGenZLoginPage;