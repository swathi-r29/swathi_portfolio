import './Projects.css';

const projects = [
  {
    title: 'GestureIQ — Indian Classical Dance Recognition',
    date: '2026',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'TensorFlow', 'MediaPipe'],
    desc: 'An AI-powered platform for recognizing and learning Bharatanatyam mudras (hand gestures) and Navarasa (facial expressions) using real-time computer vision with MediaPipe hand landmarks and trained ML models.',
  },
  {
    title: 'Cognitive Mood — AI Mental Health Companion',
    date: '2026',
    tech: ['React', 'FastAPI', 'Firebase', 'WebSocket', 'NLP', 'Python'],
    desc: 'A real-time AI-powered mental health chatbot with emotional analysis, sentiment detection using NLP inference pipeline, safety guardrails, and personalized analytics dashboard.',
  },
  {
    title: 'Service Booking Platform',
    date: '2026',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    desc: 'A full-stack service marketplace connecting customers with service professionals, featuring a multi-service cart system, real-time booking, and dedicated worker dashboards.',
  },
  {
    title: 'RideGo — Ride Booking Platform (MERN)',
    date: '2025',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    desc: 'A full-stack ride-booking platform with dedicated user and driver dashboards, featuring secure JWT-based authentication, role-based access, and Razorpay payment integration.',
  },
];

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've built</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
