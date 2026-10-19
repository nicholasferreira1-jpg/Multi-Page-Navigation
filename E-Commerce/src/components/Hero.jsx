import './Hero.css';

function Hero({ title, subtitle, image = 'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics', cta }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">{title}</h1>
          <p className="product-subtitle">{subtitle}</p>
          <button className="product-cta">{cta}</button>
        </div>
    </div>
  );
}

export default Hero;