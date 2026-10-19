// App.jsx
import Header from './components/Header';  // Import your component 
import Footer from './components/Footer';  // Import your component
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import ProductsDetailPage from './pages/ProductsDetailsPage';

const defaultProducts = [
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

function App() {
  const [cart, setCart] = useState(() => {
    const savedProducts = localStorage.getItem('cart');
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    catch {
      console.warn('Could not save cart to localStorage:', error);
    }
  }, [cart])

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  
  const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((item, index) => index !== indexToRemove));
};


  return (
    <BrowserRouter>
      <div className="app">
        <Header cartCount={cart.length}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage removeFromCart={removeFromCart} cart={cart} totalPrice={totalPrice} />} />
          <Route path="/products" element={<ProductsPage products={defaultProducts} addToCart = {addToCart} />} />
          <Route path="/products/:id" element={<ProductsDetailPage  products={defaultProducts} addToCart={addToCart} />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;