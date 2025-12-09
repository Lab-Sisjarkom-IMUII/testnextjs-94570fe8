import './page.css';
import Link from 'next/link';

export default function About() {
  return (
    <main className="about-container">
      <div className="about-wrapper">
        <nav className="about-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link active">About</Link>
          <Link href="/portfolio" className="nav-link">Portfolio</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">Mengenal lebih dekat tentang kami</p>
          </div>

          <div className="about-section">
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h2 className="about-card-title">Visi Kami</h2>
              <p className="about-card-text">
                Menjadi platform terdepan dalam menyediakan solusi teknologi yang inovatif 
                dan dapat diandalkan untuk membantu bisnis berkembang di era digital.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">💡</div>
              <h2 className="about-card-title">Misi Kami</h2>
              <p className="about-card-text">
                Memberikan layanan terbaik dengan teknologi terkini, fokus pada kepuasan 
                pelanggan, dan terus berinovasi untuk menciptakan solusi yang lebih baik.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">🌟</div>
              <h2 className="about-card-title">Nilai Kami</h2>
              <p className="about-card-text">
                Integritas, inovasi, dan komitmen adalah nilai-nilai yang kami pegang teguh 
                dalam setiap proyek dan interaksi dengan klien kami.
              </p>
            </div>
          </div>

          <div className="about-team">
            <h2 className="about-team-title">Tim Kami</h2>
            <div className="about-team-grid">
              <div className="about-team-member">
                <div className="team-avatar">👨‍💻</div>
                <h3 className="team-name">John Doe</h3>
                <p className="team-role">Lead Developer</p>
              </div>
              <div className="about-team-member">
                <div className="team-avatar">👩‍💼</div>
                <h3 className="team-name">Jane Smith</h3>
                <p className="team-role">UI/UX Designer</p>
              </div>
              <div className="about-team-member">
                <div className="team-avatar">👨‍🔧</div>
                <h3 className="team-name">Mike Johnson</h3>
                <p className="team-role">DevOps Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
