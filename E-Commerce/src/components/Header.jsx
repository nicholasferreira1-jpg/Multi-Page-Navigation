import './Header.css';
import { Link } from "react-router-dom"; 


function Header( {cartCount}) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">First E-commerce Store</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Link to="/cart" className="cart-wrapper">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;