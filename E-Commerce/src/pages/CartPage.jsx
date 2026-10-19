import CartItem from "../components/CartItem";

function CartPage ( {removeFromCart, totalPrice, cart} ) {
    return(
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
    );
}

export default CartPage;