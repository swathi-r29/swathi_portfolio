import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/javascript.png';
import mongodbImg from '../assets/mongodb.png';
import sqlInterImg from '../assets/sqlintermediate.png';
import sqlAdvImg from '../assets/sqladvanced.png';
import './Achievements.css';

const achievements = [
  {
    title: 'AI Show Ideathon',
    organization: 'AI Club',
    description: 'Won 1st prize for an innovative AI solution at the annual ideathon.',
    date: '2025'
  },
  {
    title: 'Web Design Contest',
    organization: 'National Engineering College',
    description: 'Won Best UI/UX award for a responsive and intuitive website design.',
    date: '2025'
  }
];

const certifications = [
  { name: 'SQL Advanced', issuer: 'HackerRank', image: sqlAdvImg, date: '2025' },
  { name: 'SQL Intermediate', issuer: 'HackerRank', image: sqlInterImg, date: '2025' },
  { name: 'MongoDB Basics', issuer: 'HackerRank', image: mongodbImg, date: '2025' },
  { name: 'HTML', issuer: 'Infosys', image: htmlImg, date: '2025' },
  { name: 'CSS', issuer: 'Infosys', image: cssImg, date: '2025' },
  { name: 'JavaScript', issuer: 'Infosys', image: jsImg, date: '2025' }
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Milestones</span>
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="section-line" />
        </div>

        <div className="achievements-section">
          <h3 className="sub-title">Major Awards</h3>
          <div className="awards-list">
            {achievements.map((a, i) => (
              <div className="award-card" key={i}>
                <div className="award-icon">🏆</div>
                <div className="award-info">
                  <h4>{a.title}</h4>
                  <p className="award-org">{a.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="sub-title">Certifications</h3>
          <div className="certs-grid">
            {certifications.map((c, i) => (
              <div className="cert-card-full" key={i}>
                <div className="cert-img-wrapper">
                  {c.image ? (
                    <img src={c.image} alt={c.name} />
                  ) : (
                    <div className="cert-placeholder-large">📄 No Image</div>
                  )}
                </div>
                <div className="cert-content">
                  <h4>{c.name}</h4>
                  <p>{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
