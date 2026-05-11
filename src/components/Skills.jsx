import './Skills.css';

const skillCategories = [
  { icon: '💻', title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { icon: '⚙️', title: 'Backend', skills: ['Node.js', 'Express.js'] },
  { icon: '🗃️', title: 'Databases', skills: ['MySQL', 'MongoDB'] },
  { icon: '🧠', title: 'Languages', skills: ['C++', 'JavaScript', 'Python'] },
  { icon: '🚀', title: 'Deployment', skills: ['GitHub', 'Docker'] },
  { icon: '🤖', title: 'AI / ML', skills: ['LangChain', 'Streamlit', 'ChromaDB', 'Transformers'] },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I work with</span>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map(s => <span className="skill-tag" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
