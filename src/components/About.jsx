import { BookOpen, CheckCircle, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bagian teks utama */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Tentang Kelas
                <span className="block text-blue-600">Mastering LinkedIn</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                LinkedIn dapat menjadi kunci karier apabila tahu menggunakannya dengan tepat.
                Melalui kelas ini, kita akan sama-sama belajar bagaimana membuat profil
                yang standout, membangun personal branding, hingga trik networking
                agar kamu mendapatkan peluang kerja lebih tinggi.
                Selama kurang lebih 12 jam, materinya disusun step-by-step,
                lengkap dengan contoh, latihan, dan template yang bisa langsung digunakan.
                Jadi anda tidak hanya paham teorinya, tetapi bisa langsung praktek dari hari pertama.
              </p>
            </div>

            {/* Fitur utama kelas */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Materi Terkini</h4>
                  <p className="text-gray-600 text-sm">Selalu update mengikuti algoritma LinkedIn terbaru</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Praktis & Bisa Langsung Dipakai</h4>
                  <p className="text-gray-600 text-sm">Strategi yang bisa langsung diterapkan hari ini juga</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mentor Berpengalaman</h4>
                  <p className="text-gray-600 text-sm">Dibimbing oleh HR Manager & LinkedIn Specialist</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Akses Selamanya</h4>
                  <p className="text-gray-600 text-sm">Belajar sesuai waktu dan ritme Anda sendiri</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian visual kotak biru pada sebelah kanan */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">12 Modul Pembelajaran</h3>
                    <p className="text-blue-100">Materi lengkap dari dasar sampai strategi lanjutan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Studi Kasus Nyata</h3>
                    <p className="text-blue-100">Menganalisis profil LinkedIn yang benar-benar sukses</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Template & Tools</h3>
                    <p className="text-blue-100">Dilengkapi bonus template posting & tips networking</p>
                  </div>
                </div>
              </div>

              {/* Dekorasi */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
