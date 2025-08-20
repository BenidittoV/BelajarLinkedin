import React from 'react';
import { ArrowRight, Play, Users, Clock, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

      {/* Elemen background animasi */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            <Award className="w-4 h-4 mr-2" />
            Kelas Terpopuler 2025
          </div>

          {/* Judul utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Mastering LinkedIn for
            <span className="block text-yellow-300">Career Growth</span>
          </h1>

          {/* Subjudul */}
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Pelajari strategi lengkap untuk membangun personal branding,
            networking efektif, dan mendapatkan peluang karir impian Anda di LinkedIn
          </p>

          {/* Statistik ringkas */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">1,500+ Alumni</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">12 Jam Konten</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Sertifikat Resmi</span>
            </div>
          </div>

          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="group w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 
               text-gray-900 px-6 sm:px-10 py-3 sm:py-4 
               rounded-full font-bold text-base sm:text-lg 
               transition-all duration-300 
               hover:scale-105 hover:-translate-y-0.5 
               hover:shadow-[0_8px_20px_rgba(251,191,36,0.4)] 
               flex items-center justify-center"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
