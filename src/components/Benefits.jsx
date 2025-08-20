import React from 'react';
import { Users2, TrendingUp, Award, Briefcase } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Users2,
      title: "Network Profesional yang Luas",
      description: "Pelajari strategi networking yang efektif untuk terhubung dengan profesional terbaik di industri Anda dan membangun relasi yang bernilai.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Personal Branding yang Kuat",
      description: "Bangun reputasi online yang profesional dan menarik. Tampil sebagai thought leader di bidang Anda dengan konten yang engaging.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Peluang Karir Terbuka Lebar",
      description: "Dapatkan akses ke job opportunities tersembunyi dan jadilah kandidat pertama yang dilihat oleh recruiter dan hiring manager.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Kredibilitas Profesional",
      description: "Tingkatkan kredibilitas dan kepercayaan klien, rekan kerja, dan atasan dengan profil LinkedIn yang optimal dan aktivitas yang konsisten.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian judul / header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Manfaat yang Akan Anda Dapatkan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investasi terbaik untuk karir Anda. Lihat bagaimana kelas ini akan mentransformasi 
            kehadiran profesional Anda di LinkedIn dan membuka peluang tak terbatas.
          </p>
        </div>

        {/* Grid daftar manfaat */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon benefit */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Konten utama benefit */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Efek hover latar belakang */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Badge angka urutan */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bagian CTA (Call To Action) */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Siap Mengembangkan Karir Anda?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan 1,500+ profesional yang telah merasakan dampak positif 
              dari pembelajaran LinkedIn yang terstruktur dan praktis.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Mulai Belajar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
