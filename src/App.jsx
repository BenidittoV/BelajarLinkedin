import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const sectionIds = ['hero', 'about', 'benefits', 'testimonials', 'faq'];
  const activeSection = useScrollSpy(sectionIds);

  // Tambahkan efek scroll halus & kelas animasi ke dokumen
  useEffect(() => {
    // Sisipkan CSS custom untuk animasi dan scrollbar
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }

      html {
        scroll-behavior: smooth;
      }

      /* Scrollbar kustom */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #3b82f6;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #2563eb;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar dengan highlight section aktif */}
      <Navigation activeSection={activeSection} />

      {/* Section hero (headline & CTA utama) */}
      <Hero />

      {/* Tentang kelas */}
      <About />

      {/* Manfaat/benefits */}
      <Benefits />

      {/* Testimoni alumni */}
      <Testimonials />

      {/* Pertanyaan umum (FAQ) */}
      <FAQ />

      {/* CTA penutup */}
      <CTA />

      {/* Footer situs */}
      <Footer />
    </div>
  );
}

export default App;
