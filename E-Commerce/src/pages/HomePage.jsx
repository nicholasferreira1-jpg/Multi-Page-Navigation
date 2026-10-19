import React, { useState } from 'react';
import Hero from '../components/Hero';

function HomePage() {

return (
    <div className="ap">
      <Hero
        title="Welcome to First E-commerce Store"
        subtitle="Find any eletronic product here with us. First E-commerce Store makes sure our clients have the best products and the best deals in the market"
        cta="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics "
      />
    </div>
);
}

export default HomePage;