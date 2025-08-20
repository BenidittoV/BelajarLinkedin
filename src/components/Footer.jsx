import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Tentang Kelas', href: '#about' },
    { label: 'Manfaat', href: '#benefits' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const supportLinks = [
    { label: 'Hubungi Kami', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Bantuan Teknis', href: '#' },
  ];

  // Fungsi untuk scroll halus ke section tertentu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Info Perusahaan */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Linkedin className="w-8 h-8 text-blue-500 mr-3" />
              <span className="text-xl font-bold text-white">Belajar LinkedIn</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform pembelajaran terdepan untuk menguasai LinkedIn dan mengembangkan 
              karir profesional Anda di era digital.
            </p>
            
            {/* Informasi Kontak */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-blue-500" />
                <span>belajarlinkedin@email.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-blue-500" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Menu Cepat */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Menu Utama</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Dukungan */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Dukungan</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Dapatkan tips LinkedIn terbaru dan info promo eksklusif langsung ke email Anda.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        {/* Bagian bawah footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Belajar LinkedIn. All rights reserved.
            </p>
            
            {/* Ikon sosial */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Dibuat dengan ❤️ untuk profesional Indonesia yang ingin maju
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
