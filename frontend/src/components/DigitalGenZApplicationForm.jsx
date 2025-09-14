import React, { useState } from 'react';
import { Upload, User, Phone, Mail, GraduationCap, Camera, FileText, Star, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

const DigitalGenZApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    contactNo: '',
    whatsappNo: '',
    email: '',
    qualification: '',
    passportPhoto: null,
    resume: null
  });

  const [dragStates, setDragStates] = useState({
    passportPhoto: false,
    resume: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
    } else {
      alert('File size should be less than 10MB');
    }
  };

  const handleDragOver = (e, fieldName) => {
    e.preventDefault();
    setDragStates(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const handleDragLeave = (e, fieldName) => {
    e.preventDefault();
    setDragStates(prev => ({
      ...prev,
      [fieldName]: false
    }));
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    setDragStates(prev => ({
      ...prev,
      [fieldName]: false
    }));
    
    const file = e.dataTransfer.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
    } else {
      alert('File size should be less than 10MB');
    }
  };

  const handleSubmit = async () => {
  if (!formData.studentName || !formData.contactNo || !formData.whatsappNo || 
      !formData.email || !formData.qualification || !formData.passportPhoto || !formData.resume) {
    alert('Please fill all required fields');
    return;
  }

  const data = new FormData();
  data.append("studentName", formData.studentName);
  data.append("contactNo", formData.contactNo);
  data.append("whatsappNo", formData.whatsappNo);
  data.append("email", formData.email);
  data.append("qualification", formData.qualification);
  data.append("passportPhoto", formData.passportPhoto);
  data.append("resume", formData.resume);

  try {
    const res = await fetch("http://localhost:5000/api/applications/submit", {
      method: "POST",
      body: data
    });

    const result = await res.json();
    if (res.ok) {
      alert(result.message);
    } else {
      alert(result.message || "Something went wrong");
    }
  } catch (err) {
    alert("Server error");
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

      <div className="relative z-20 pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section - Matching your original hero style */}
          <div className="text-center mb-20 relative">
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
                Your One-Stop Digital Partner for Business Marketing 🚀
              </p>
              <p className="text-lg text-purple-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                Where digital marketing contributes to your business growth 
              </p>
            </div>

            {/* Who Can Join Section */}
            <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 mb-12">
              <h3 className="text-3xl font-black text-white mb-6">Who Can Join? 👥</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-lg">
                <div className="space-y-2">
                  <p>• <span className="text-purple-400 font-semibold">Students</span> (Age 15–27, basic digital knowledge required)</p>
                  <p>• <span className="text-pink-400 font-semibold">Interns</span> or job aspirants</p>
                </div>
                <div className="space-y-2">
                  <p>• <span className="text-cyan-400 font-semibold">Entrepreneurs</span> & business owners</p>
                  <p>• Anyone seeking a <span className="text-yellow-400 font-semibold">parallel income stream</span></p>
                </div>
              </div>
            </div>

            {/* Services We Provide */}
            <div className="mb-16">
              <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 animate-gradient-x">
                Services We Provide
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  '• Digital Marketing Strategy',
                  '• SEO & Social Media Management', 
                  '• Pay-Per-Click Campaigns',
                  '• Google Ads',
                  '• Flyer & Creative Designing',
                  '• LinkedIn Content & Post Creation',
                  '• And more... anything your online growth needs!'
                ].map((service, index) => (
                  <div key={index} className="group text-center hover:scale-110 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      <p className="relative text-white p-4 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300">
                        {service}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
                  Join Our Digital Revolution
                </h2>
                <p className="text-2xl text-gray-300">Fill out the form below to start your journey with us</p>
              </div>

              <div className="space-y-10">
                {/* Student Name */}
                <div className="group">
                  <label className="block text-white font-bold mb-4 text-xl">
                    <User className="inline w-6 h-6 mr-3 text-purple-400" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Contact Numbers */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <Phone className="inline w-6 h-6 mr-3 text-pink-400" />
                      Contact No *
                    </label>
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <Phone className="inline w-6 h-6 mr-3 text-cyan-400" />
                      WhatsApp No *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNo"
                      value={formData.whatsappNo}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-white font-bold mb-4 text-xl">
                    <Mail className="inline w-6 h-6 mr-3 text-purple-400" />
                    Email *
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

                {/* Qualification */}
                <div className="group">
                  <label className="block text-white font-bold mb-4 text-xl">
                    <GraduationCap className="inline w-6 h-6 mr-3 text-pink-400" />
                    Qualification *
                  </label>
                  <div className="relative">
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full p-5 bg-black/40 border-2 border-white/20 rounded-2xl text-white text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-white/40 focus:outline-none hover:scale-105 appearance-none"
                    >
                      <option value="">Select your qualification</option>
                      <option value="High School">High School (10th)</option>
                      <option value="Intermediate">Intermediate (12th)</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor's">Bachelor's Degree</option>
                      <option value="Master's">Master's Degree</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* File Uploads */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Passport Photo */}
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <Camera className="inline w-6 h-6 mr-3 text-cyan-400" />
                      Passport Size Photo *
                    </label>
                    <div
                      className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                        dragStates.passportPhoto 
                          ? 'border-purple-500 bg-purple-500/20' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      onDragOver={(e) => handleDragOver(e, 'passportPhoto')}
                      onDragLeave={(e) => handleDragLeave(e, 'passportPhoto')}
                      onDrop={(e) => handleDrop(e, 'passportPhoto')}
                    >
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, 'passportPhoto')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="space-y-4">
                        <Camera className="w-12 h-12 text-purple-400 mx-auto" />
                        <p className="text-white text-lg font-semibold">
                          {formData.passportPhoto ? formData.passportPhoto.name : 'Drop photo here or click to upload'}
                        </p>
                        <p className="text-gray-400">Max 10MB • PDF, JPG, PNG</p>
                      </div>
                    </div>
                  </div>

                  {/* Resume */}
                  <div className="group">
                    <label className="block text-white font-bold mb-4 text-xl">
                      <FileText className="inline w-6 h-6 mr-3 text-pink-400" />
                      Resume *
                    </label>
                    <div
                      className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                        dragStates.resume 
                          ? 'border-pink-500 bg-pink-500/20' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      onDragOver={(e) => handleDragOver(e, 'resume')}
                      onDragLeave={(e) => handleDragLeave(e, 'resume')}
                      onDrop={(e) => handleDrop(e, 'resume')}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, 'resume')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="space-y-4">
                        <FileText className="w-12 h-12 text-pink-400 mx-auto" />
                        <p className="text-white text-lg font-semibold">
                          {formData.resume ? formData.resume.name : 'Drop resume here or click to upload'}
                        </p>
                        <p className="text-gray-400">Max 10MB • PDF, DOC, DOCX</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements Section */}
                <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
                  <div className="text-center mb-8">
                    <h4 className="text-3xl font-black text-white mb-4">💻 Requirements & Work Mode</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                      <h5 className="text-xl font-bold text-purple-400">💻 Tech Requirements</h5>
                      <div className="text-gray-300">
                        <p>• Laptop/PC</p>
                        <p>• Stable Internet Connection</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-xl font-bold text-pink-400">🕒 Work Mode</h5>
                      <div className="text-gray-300">
                        <p>• Remote</p>
                        <p>• Full-time / Part-time</p>
                        <p>• Flexible options available</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-xl font-bold text-cyan-400">🎯 Focus Areas</h5>
                      <div className="text-gray-300">
                        <p>• Digital Marketing</p>
                        <p>• Creative Designing</p>
                        <p>• Business Growth</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    onClick={handleSubmit}
                    className="group relative px-16 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-2xl rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Submit Application 
                      <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-16 pt-8 border-t border-white/20 text-center">
                <p className="text-gray-300 text-xl mb-3">📩 Contact us:</p>
                <p className="text-purple-400 font-black text-2xl">digitalgenzminds@gmail.com</p>
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

export default DigitalGenZApplicationForm;