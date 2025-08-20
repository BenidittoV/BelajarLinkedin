import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Apakah kelas ini cocok untuk pemula yang baru menggunakan LinkedIn?",
      answer: "Tentu saja! Kelas ini dirancang untuk semua level, mulai dari pemula hingga yang sudah berpengalaman. Kami akan mulai dari dasar-dasar LinkedIn, cara setup profil yang optimal, hingga strategi advanced untuk networking dan personal branding."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan kelas ini?",
      answer: "Total durasi kelas adalah 12 jam yang dibagi menjadi 12 modul pembelajaran. Anda bisa belajar sesuai waktu dan kecepatan Anda sendiri. Rata-rata peserta menyelesaikan dalam 4-6 minggu dengan belajar 2-3 jam per minggu."
    },
    {
      question: "Apakah mendapatkan sertifikat setelah menyelesaikan kelas?",
      answer: "Ya, setiap peserta yang menyelesaikan semua modul dan tugas praktik akan mendapatkan sertifikat resmi dari Belajar LinkedIn yang bisa Anda tampilkan di profil LinkedIn Anda sebagai kredensial tambahan."
    },
    {
      question: "Bagaimana jika saya tidak puas dengan kelasnya?",
      answer: "Kami sangat percaya diri dengan kualitas kelas kami. Jika dalam 30 hari pertama Anda merasa tidak puas, kami akan mengembalikan 100% uang Anda tanpa pertanyaan macam-macam. Kepuasan Anda adalah prioritas utama kami."
    },
    {
      question: "Apakah ada support atau mentoring selama mengikuti kelas?",
      answer: "Tentu! Anda akan mendapatkan akses ke grup komunitas eksklusif alumni, bisa bertanya langsung ke mentor melalui grup diskusi, dan mendapat feedback untuk optimasi profil LinkedIn Anda. Support tersedia 24/7."
    },
    {
      question: "Apakah materinya akan selalu update mengikuti perubahan LinkedIn?",
      answer: "Ya, materi kelas akan selalu kami update sesuai dengan algoritma dan fitur terbaru LinkedIn. Sebagai pemilik akses selamanya, Anda otomatis mendapat akses ke semua update materi tanpa biaya tambahan."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian judul FAQ */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan? Kami sudah siapkan jawaban untuk pertanyaan yang paling sering ditanyakan.
          </p>
        </div>

        {/* Daftar pertanyaan & jawaban */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Tombol untuk buka/tutup jawaban */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {/* Isi jawaban */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA di bawah FAQ */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan lain? Hubungi tim support kami
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors">
            Hubungi Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
