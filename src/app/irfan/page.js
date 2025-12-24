import { FaGithub } from 'react-icons/fa'

export default function Irfan() {
  return (
    <div className="container">

      {/* HEADER */}
      <h1 className="hero-title">Muhammad Irfan Rifa’i</h1>
      <p className="hero-text">Web Developer | RPL SMK N 1 Bantul</p>

      {/* FOTO + ABOUT */}
      <div className="flex card">
        <img src="/irfan.jpg" width="300" />

        <div>
          <h2>Tentang Saya</h2>
            <div style={{ marginTop: 20, opacity: 0.95, lineHeight: 1.7 }}>
             <p>
                Perkenalkan, saya <strong>Muhammad Irfan Rifa’i</strong>, seorang pelajar SMK jurusan <strong>Rekayasa Perangkat Lunak</strong> yang antusias dengan dunia pemrograman dan pengembangan aplikasi.
             </p>

             <p>
               Saya memiliki pengalaman dalam membuat aplikasi mobile dengan <strong>Flutter</strong>, backend menggunakan <strong>Laravel</strong>, serta membuat web menggunakan <strong>Laravel</strong> dan membangun sistem <strong>CRUD yang terhubung ke database</strong>.
             </p>

             <p>
               Saya senang mengembangkan proyek yang bermanfaat, dengan fokus pada <strong>kualitas kode</strong>, <strong>tampilan modern</strong>, dan <strong>pengalaman pengguna yang nyaman</strong>. Selain itu, saya terbiasa <strong>belajar cepat</strong>, bekerja mandiri, maupun berkolaborasi dalam tim.
             </p>

             <p>
               Visi saya adalah terus meningkatkan kemampuan teknis, menciptakan aplikasi yang berguna, dan berkontribusi di dunia teknologi digital.
             </p>
         </div>

        </div>
      </div>

      {/* SERTIFIKAT */}
      <div className="card">
        <h2>Sertifikat</h2>

        <div className="grid">
          {[
            { img: '/sertifikat1.jpg', pdf: '/dasar web.pdf', title: 'Belajar dasar pemrograman web' },
            { img: '/sertifikat2.jpg', pdf: '/Dart.pdf', title: 'Memulai pemrograman dengan dart' },
            { img: '/sertifikat3.jpg', pdf: '/Dasar AI.pdf', title: 'Belajar dasar AI' },
            { img: '/sertifikat4.jpg', pdf: '/Data science.pdf', title: 'Belajar data science' },
            { img: '/sertifikat5.jpg', pdf: '/Flutter.pdf', title: 'Belajar membuat aplikasi flutter' },
            { img: '/sertifikat6.jpg', pdf: '/sertifikat .pdf', title: 'Sertifikat Industri' },
          ].map((cert, i) => (
            <div key={i} className="card" style={{ '--i': i }}>
              <img src={cert.img} />
              <p style={{ marginTop: 10 }}>{cert.title}</p>
              <a href={cert.pdf} target="_blank" className="btn" style={{ marginTop: 10 }}>
                Lihat PDF
              </a>
            </div>
          ))}
        </div>
      </div> {/* <-- Tutup card Sertifikat */}

      {/* GITHUB */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>GitHub</h2>
          <a
            href="https://github.com/Rifai-hub24"
            target="_blank"
            className="btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            <FaGithub size={24} /> Kunjungi GitHub
          </a>
        </div>

    </div>
  )
}
