import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-column brand">
            <div className="footer-logo">
              Swathi<span>.</span>
            </div>
            <p className="footer-bio">
              Aspiring Software Developer passionate about building innovative 
              web applications and solving complex problems with clean code.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-column contact">
            <h4>Get In Touch</h4>
            <p>📧 swathi29rd@gmail.com</p>
            <p>📞 +91 9345039570</p>
            <div className="footer-socials">
              <a href="https://github.com/swathi-r29" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/swathi-r-75216a28a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line" />
          <p>© {currentYear} Swathi R. Designed with Passion.</p>
        </div>
      </div>
    </footer>
  );
}
