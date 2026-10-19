import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
            <p className="footer-name">First E-commerce Store</p>
            <p>Email: hello@componentcorner.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 React Street, Component City, RC 12345</p>
        </div>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacyPolicy">Privacy Policy</a>
          <a href="#termsofService">Terms of Service</a>
        </nav>
        
      </div>
    </footer>
  );
}

export default Footer;