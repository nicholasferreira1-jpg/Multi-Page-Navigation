import './Footer.css';
import { Link } from 'react-router-dom';

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
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        
      </div>
    </footer>
  );
}

export default Footer;