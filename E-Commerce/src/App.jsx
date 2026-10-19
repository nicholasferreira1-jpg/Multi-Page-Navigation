// App.jsx
import Header from './components/Header';  // Import your component 
import ProductCard from './components/ProductCard';  // Import your component
import Hero from './components/Hero';  // Import your component

import CartItem from './components/CartItem';
import Footer from './components/Footer';  // Import your component
import {useState} from 'react';

function App() {
  const product = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  
  const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((item, index) => index !== indexToRemove));
};


  return (
    <div className="ap">
      <Header cartCount = {cart.length}/>
      <Hero
        title="Welcome to First E-commerce Store"
        subtitle="Your one-stop shop for all your needs"
        cta="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics "
      />
      <h2 style={{ textAlign: 'center' }}>Featured Product</h2>
      {product.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          onAddToCart={() => addToCart(product)}
        />
      ))}
      <section className="cart-section">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item,index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              onRemove={() => removeFromCart(index)}
            />
          ))
        ) : (
          <div className="cart-empty">
            <p className="cart-empty">Your cart is empty.</p>
          </div>
        )}
        <div className="cart-total">
          <h3>Total: ${totalPrice}</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;