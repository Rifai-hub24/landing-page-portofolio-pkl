export default function Home() {
  return (
    <div className="container">
      <div className="flex">
        
        {/* FOTO BARUENG */}
        <img src="/group.jpg" width="420" />

        {/* TEKS */}
        <div>
          <h1 className="hero-title">
            Selamat Datang di Portofolio Kami
          </h1>
          <p className="hero-text">
            Kami adalah siswa RPL yang tertarik pada Web Development
            dan siap berkembang di dunia teknologi.
          </p>

          {/* BUTTON */}
          <a href="/irfan" className="btn">Rifa’i</a>
          <a href="/iqbal" className="btn" style={{marginLeft:15}}>Iqbal</a>
          <a href="/zaki" className="btn" style={{marginLeft:15}}>Zaki</a>
        </div>

      </div>
    </div>
  )
}
