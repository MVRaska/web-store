import { useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../../cartContext/CartContext";
import back from '../../assets/back.png';
import CartList from "../cart/CartList";
import OrderForm from '../orderForm/OrderForm';
import { onSaleId, sale } from './Home';

const Cart = () => {
    const {
        cart, 
        removeFromCart, 
        clearCart, 
        increaseQuantity, 
        decreaseQuantity,
        orderComplete,
        setOrderComplete
    } = useContext(CartContext);

    const fullTotalPrice = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const discountTotalPrice = cart.reduce((acc, item) => {
        return acc + (item.id === onSaleId ? item.price * item.quantity * (1 - sale) : item.price * item.quantity);
    }, 0);

    return <>
        {cart.length > 0 ? (
            <div>
                <h2>Shopping Cart</h2>
                
                <CartList 
                    cart={cart}
                    removeFromCart={removeFromCart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    onSaleId={onSaleId}
                    sale={sale}
                />
                <p>Total price: 
                    {discountTotalPrice !== fullTotalPrice && (
                        <div>
                            <span style={{ textDecoration: 'line-through' }}>
                                <span className='dollar'>$</span>
                                {fullTotalPrice.toFixed(2)}
                            </span>
                            <p style={{ color: 'red', display: 'inline-block', marginLeft: '10px' }}>
                                <span className='dollar'>$</span>
                                {discountTotalPrice.toFixed(2)}
                            </p>
                        </div>
                    )}
                    
                    {discountTotalPrice === fullTotalPrice && (
                        <span style={{marginLeft: '20px'}}><span className='dollar'>$</span>{fullTotalPrice.toFixed(2)}</span>
                    )}
                
                </p>
                <button onClick={clearCart}>clear cart</button>
                <OrderForm clearCart={clearCart} setOrderComplete={setOrderComplete} />
            </div>
        ) : (
            <div>
                <h4>Shopping Cart is empty</h4>
                <Link to='/products'><p><img src={back} style={{opacity: '0.4', marginRight: '10px'}} />back to shop</p></Link>
                {orderComplete && <div>Order successfully completed!</div>}
            </div>
        )}      
    </>
}

export default Cart;
