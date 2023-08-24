
import './Cart.css'

const Cart = ({ cartItems }) => {
    return (
      <div className="cart-container">
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Cart;
  