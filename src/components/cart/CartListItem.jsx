import { Link } from 'react-router-dom';
import PriceAndQuantity from './PriceAndQuantity';
import './styleCartListitem.css';

const CartListItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity, onSaleId, sale }) => {

    return (
        <section className='cartProductInfo'>
            <div  class='cartProductImg'>
                <Link to={`/products/${item.id}`}>
                    <img src={item.image}/>
                </Link>
            </div>
            <div className='cartTitlePriceQuantity'>
                <div className='cartTitle'>
                    <Link to={`/products/${item.id}`}>
                        <p>{item.title}</p>
                    </Link>
                </div>
                
                <PriceAndQuantity
                    item={item}
                    removeFromCart={removeFromCart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    onSaleId={onSaleId}
                    sale={sale}
                />
            </div>

        </section>
    );
};

export default CartListItem;