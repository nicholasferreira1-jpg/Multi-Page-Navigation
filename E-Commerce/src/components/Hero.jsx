import './Hero.css';
import { Link } from 'react-router-dom';

function Hero({ title, subtitle, image = 'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics', cta }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <Link to="/products" className="hero-cta">{cta}</Link>
        </div>
    </div>
  );
}

export default Hero;