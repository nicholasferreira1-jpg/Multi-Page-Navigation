import './Header.css';

function Header( {cartCount}) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">First E-commerce Store</a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cart-wrapper">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;