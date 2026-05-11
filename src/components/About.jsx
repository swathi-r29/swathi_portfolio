import './About.css';

const education = [
  { degree: 'B.E. in Computer Science', school: 'National Engineering College, Kovilpatti', year: '2023 – 2027', detail: 'CGPA: 8.88 (upto 5th Semester)' },
  { degree: 'HSC – 89.83%', school: 'Ravilla KRA Vidhyashram Matric Hr Sec School', year: '2022 – 2023', detail: '' },
  { degree: 'SSLC – Completed', school: 'Ravilla KRA Vidhyashram Matric Hr Sec School', year: '2020 – 2021', detail: '' },
];

const details = [
  { label: 'Name', value: 'Swathi R' },
  { label: 'Location', value: 'Kovilpatti, TN' },
  { label: 'Languages', value: 'English, Tamil' },
  { label: 'Club', value: 'CSI Member' },
];

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div>
            <p className="about-text">
              I'm a passionate Computer Science student at National Engineering College,
              driven by a love for crafting efficient, scalable software solutions.
              With strong foundations in C++ and modern web technologies, I enjoy tackling
              complex challenges — from building full-stack ride-booking platforms to
              creating AI-powered document classifiers.
            </p>
            <p className="about-text" style={{ marginTop: '16px' }}>
              I believe in writing clean, purposeful code and continuously pushing my
              boundaries through competitive programming, hackathons, and real-world projects.
            </p>
            <div className="about-details">
              {details.map(d => (
                <div className="about-detail-item" key={d.label}>
                  <div className="about-detail-label">{d.label}</div>
                  <div className="about-detail-value">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-education">
            <h3 className="edu-heading">🎓 Education</h3>
            {education.map((e, i) => (
              <div className="edu-item" key={i}>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                {e.detail && <div className="edu-detail">{e.detail}</div>}
                <div className="edu-year">{e.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
