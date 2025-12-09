import './page.css';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur lengkap untuk penjualan online',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      color: '#f093fb'
    },
    {
      id: 2,
      title: 'Mobile App Dashboard',
      description: 'Dashboard analytics untuk aplikasi mobile dengan real-time data',
      tech: ['React Native', 'Firebase', 'Chart.js'],
      image: '📱',
      color: '#4facfe'
    },
    {
      id: 3,
      title: 'AI Chatbot System',
      description: 'Sistem chatbot cerdas dengan machine learning untuk customer service',
      tech: ['Python', 'TensorFlow', 'Flask'],
      image: '🤖',
      color: '#43e97b'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure',
      description: 'Infrastruktur cloud yang scalable dan secure untuk enterprise',
      tech: ['AWS', 'Docker', 'Kubernetes'],
      image: '☁️',
      color: '#fa709a'
    },
    {
      id: 5,
      title: 'Blockchain Wallet',
      description: 'Aplikasi wallet cryptocurrency dengan keamanan tingkat tinggi',
      tech: ['Solidity', 'Web3.js', 'React'],
      image: '₿',
      color: '#fee140'
    },
    {
      id: 6,
      title: 'IoT Monitoring System',
      description: 'Sistem monitoring IoT untuk smart home dan industrial automation',
      tech: ['Arduino', 'MQTT', 'React'],
      image: '🏠',
      color: '#30cfd0'
    }
  ];

  return (
    <main className="portfolio-container">
      <div className="portfolio-wrapper">
        <nav className="portfolio-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/portfolio" className="nav-link active">Portfolio</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="portfolio-content">
          <div className="portfolio-header">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <p className="portfolio-subtitle">Koleksi proyek terbaik yang telah kami kerjakan</p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card" style={{ '--card-color': project.color }}>
                <div className="portfolio-card-header">
                  <div className="portfolio-icon">{project.image}</div>
                  <h3 className="portfolio-card-title">{project.title}</h3>
                </div>
                <p className="portfolio-card-description">{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <button className="portfolio-button">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
