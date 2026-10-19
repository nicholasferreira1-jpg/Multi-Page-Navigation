import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
    return (
            <main className="main-content">
                <h2 style={{ textAlign: 'center' }}>Featured Product</h2>
                {products.map(products => (
                <ProductCard
                    key={products.id}
                    name={products.name}
                    price={products.price}
                    image={products.image}
                    description={products.description}
                    onAddToCart={() => addToCart(products)}
        />
      ))}
            </main>
    )
    }
     export default ProductsPage;
