import './page.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="contact-container">
      <div className="contact-wrapper">
        <nav className="contact-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/portfolio" className="nav-link">Portfolio</Link>
          <Link href="/contact" className="nav-link active">Contact</Link>
        </nav>

        <div className="contact-content">
          <div className="contact-header">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">Kami siap membantu mewujudkan ide Anda menjadi kenyataan</p>
          </div>

          <div className="contact-main">
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-text">info@example.com</p>
                <p className="contact-info-text">support@example.com</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📱</div>
                <h3 className="contact-info-title">Phone</h3>
                <p className="contact-info-text">+62 812-3456-7890</p>
                <p className="contact-info-text">+62 821-9876-5432</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <h3 className="contact-info-title">Address</h3>
                <p className="contact-info-text">Jl. Teknologi No. 123</p>
                <p className="contact-info-text">Jakarta, Indonesia 12345</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">🕒</div>
                <h3 className="contact-info-title">Working Hours</h3>
                <p className="contact-info-text">Senin - Jumat: 09:00 - 18:00</p>
                <p className="contact-info-text">Sabtu: 10:00 - 15:00</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nama</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="nama@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subjek</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-input" 
                    placeholder="Subjek pesan Anda"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    rows="6"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  <span>Kirim Pesan</span>
                  <span className="submit-icon">→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="contact-social">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">💼 LinkedIn</a>
              <a href="#" className="social-link">📺 YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
