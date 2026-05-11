import { useEffect, useState } from 'react';
import profileImg from '../assets/N-3519 copy.jpg';
import './Hero.css';

const roles = ['Software Developer', 'Full-Stack Builder', 'Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timer;
    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="wave">👋</span> Hello, I'm
          </p>
          <h1 className="hero-name">Swathi R</h1>
          <p className="hero-title">
            {text}<span className="cursor">|</span>
          </p>
          <p className="hero-desc">
            Aspiring Software Developer with strong problem-solving skills in C++ 
            and experience building scalable web applications. Passionate about solving 
            real-world problems using efficient algorithms and clean code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work ↓</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">8.88</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Skills</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-wrapper">
            <img src={profileImg} alt="Swathi R" />
          </div>
        </div>
      </div>
    </section>
  );
}
