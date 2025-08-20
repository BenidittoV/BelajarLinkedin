import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, Clock, Users, Award } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ====== COUNTDOWN CONFIG ======
  // WIB/Jakarta (+07:00). Ubah jamnya kalau perlu.
  const DEADLINE = new Date('2025-09-11T23:59:59+07:00').getTime();

  const getRemaining = () => {
    const now = Date.now();
    const diff = Math.max(DEADLINE - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { diff, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getRemaining());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad2 = (n) => String(n).padStart(2, '0');
  const isExpired = timeLeft.diff === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    '12 Modul Pembelajaran Komprehensif',
    'Template & Tools Siap Pakai',
    'Studi Kasus Profil LinkedIn Sukses',
    'Akses Komunitas Alumni Eksklusif',
    'Support 24/7 dari Mentor Berpengalaman',
    'Sertifikat Resmi & Update Materi Selamanya',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Efek background dekorasi */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bagian konten promosi */}
          <div className="text-white space-y-8">
            <div>
              {/* Label promo */}
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-300 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                Promo Terbatas - Hemat 50%
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Investasi Terbaik untuk
                <span className="block text-yellow-300">Karir Masa Depan Anda</span>
              </h2>

              <p className="text-lg text-blue-100 leading-relaxed mt-6">
                Jangan biarkan kesempatan berlalu. Bergabunglah dengan ribuan profesional
                yang telah mengubah karier mereka melalui LinkedIn mastery.
              </p>
            </div>

            {/* Statistik singkat */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3 mx-auto">
                  <Users className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">1,500+</div>
                <div className="text-blue-200 text-sm">Alumni Sukses</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3 mx-auto">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-blue-200 text-sm">Rating Kelas</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">12 Jam</div>
                <div className="text-blue-200 text-sm">Konten Premium</div>
              </div>
            </div>

            {/* Daftar fitur utama */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form CTA (Daftar Sekarang) */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Daftar Sekarang & Dapatkan Bonus!
              </h3>
              <p className="text-gray-600">Mulai transformasi karier Anda hari ini juga</p>
            </div>

            {/* Info harga & bonus */}
            <div className="text-center mb-8 p-6 bg-gray-50 rounded-2xl">
              <div className="text-sm text-gray-500 line-through">Harga Normal: Rp 1,000,000</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Rp 500,000</div>
              <div className="text-green-600 font-medium">
                {isExpired ? 'Promo Berakhir' : 'Hemat 50% - Terbatas!'}
              </div>

              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <div className="text-sm font-medium text-gray-900">Bonus Eksklusif:</div>
                <div className="text-sm text-gray-600">
                  • Template LinkedIn Content (Senilai Rp 200k)
                  <br />
                  • 1-on-1 Profile Review (Senilai Rp 300k)
                </div>
              </div>
            </div>

            {/* Form input email */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted || isExpired}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                  isSubmitted
                    ? 'bg-green-500 text-white cursor-not-allowed'
                    : isExpired
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 w-5 h-5" />
                    Terima kasih! Kami akan menghubungi Anda
                  </>
                ) : isExpired ? (
                  <>Promo Berakhir</>
                ) : (
                  <>
                    Daftar Sekarang - Hemat 50%
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Jaminan keamanan & garansi */}
            <div className="mt-6 text-center">
              <div className="text-sm text-gray-500 mb-2">🔒 Pembayaran Aman & Terpercaya</div>
              <div className="text-sm text-gray-500">💯 Garansi 30 Hari Uang Kembali</div>
            </div>
          </div>
        </div>

        {/* Countdown Promo */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-white mb-4">
              <div className="text-lg font-semibold">
                {isExpired ? 'Promo telah berakhir' : 'Promo Berakhir Dalam:'}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: 'Hari', value: pad2(timeLeft.days) },
                { label: 'Jam', value: pad2(timeLeft.hours) },
                { label: 'Menit', value: pad2(timeLeft.minutes) },
                { label: 'Detik', value: pad2(timeLeft.seconds) },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3">
                  <div className="text-2xl font-bold text-gray-900 tabular-nums">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>

            {!isExpired && (
              <div className="text-xs text-blue-100 mt-3">
                Batas waktu: 11 September 2025, 23:59 WIB
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
