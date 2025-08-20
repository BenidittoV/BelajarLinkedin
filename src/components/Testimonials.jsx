import { ArrowLeft, ArrowRight, Briefcase, Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Dita Sekar",
    position: "Marketing Manager",
    company: "Jakarta",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text:
      "Sebelum ikut kelas, profil saya jarang ada yang lihat. Saya ikuti langkah-langkah optimasi profil + cara posting mingguan yang diajarkan. Dalam 30 hari, view profil naik cukup signifikan dan saya dapat 2 undangan interview dari agensi. Materinya mudah diikutin, nggak muter-muter.",
    result: "+180% Profile Views (30 hari)"
  },
  {
    id: 2,
    name: "Ahmad Salim",
    position: "Senior Software Engineer",
    company: "Surabaya",
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text:
      "Saya pikir LinkedIn cuma buat update CV. Ternyata strategi DM sopan + konten teknis pendek itu ngaruh. Tiga minggu setelah kelas, ada 4 rekruter yang reach out dan 1 project freelance kecil (±Rp 8 juta) jalan. Poin paling membantu: contoh pesan yang tinggal pakai.",
    result: "4 Recruiter Reach-outs (3 minggu)"
  },
  {
    id: 3,
    name: "Putri Olivia",
    position: "HR",
    company: "Bandung",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text:
      "Saya pakai template headline & about yang dibahas di kelas, plus perbaiki portfolio proyek HR. Feed saya jadi lebih rapi dan relevan. Dua bulan kemudian, saya dapat internal transfer ke scope yang lebih strategis. Bukan instan, tapi kelasnya ngasih arah yang jelas.",
    result: "Internal Transfer (±2 bulan)"
  },
  {
    id: 4,
    name: "Kevin Kurniawan",
    position: "Digital Marketing Consultant",
    company: "Yogyakarta",
    image:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4,
    text:
      "Saya konsisten ikut format konten mingguan yang dibagikan. Dari situ masuk 12 leads organik, 3 jadi klien retainer bulanan. Yang saya suka: breakdown langkah posting dan cara follow-up yang sopan tapi to the point.",
    result: "3 Klien Retainer (±6 minggu)"
  }
];


  // Untuk auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Apa Kata Alumni Kami?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ribuan profesional telah merasakan dampak positif dari kelas ini. 
            Lihat bagaimana LinkedIn dapat mengubah karir mereka.
          </p>
        </div>

        {/* Carousel testimoni */}
        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
              {/* Icon kutipan */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-200" />
              
              {/* Testimoni aktif */}
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Profil */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                    />
                    <div className="mt-4">
                      <h4 className="font-bold text-xl text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                      
                      {/* Badge hasil */}
                      <div className="inline-flex items-center mt-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {testimonials[currentIndex].result}
                      </div>
                    </div>
                  </div>

                  {/* Konten testimoni */}
                  <div className="flex-1">
                    {/* Rating bintang */}
                    <div className="flex justify-center lg:justify-start mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Teks testimoni */}
                    <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigasi carousel */}
              <div className="flex justify-center lg:justify-end items-center mt-8 gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Sebelumnya"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Pilih testimoni ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Berikutnya"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistik ringkas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,500+</div>
            <div className="text-gray-600">Alumni Sukses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Tersedia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
