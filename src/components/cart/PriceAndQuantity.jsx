import trash from '../../assets/trash.png';

const PriceAndQuantity = ({ item, removeFromCart, increaseQuantity, decreaseQuantity, onSaleId, sale }) => {

    return (
        <div>
            {item.id === onSaleId ? (
                <section className='cartPriceQuantity'>
                    <div className='cartPrice'>
                        <span style={{ textDecoration: 'line-through' }}>
                            <span className='dollar'>$</span>
                            {item.price.toFixed(2)}
                        </span>
                        <p style={{ color: 'red', display: 'inline-block', marginLeft: '10px' }}>
                            <span className='dollar'>$</span>
                            {(item.price * (1 - sale)).toFixed(2)}
                        </p>
                    </div>

                    <div className='cartQuantity'> 
                        <div className='cartQuantitySpan'>
                            <span className='plus' onClick={() => decreaseQuantity(item.id)}>-</span>
                        </div>
                        <div className='cartQuantitySpan'>
                            <span>{item.quantity}</span>
                        </div>
                        <div className='cartQuantitySpan'>
                            <span className='minus' onClick={() => increaseQuantity(item.id)}>+</span>
                        </div>
                    </div>

                    <div className='cartPriceXQuantity'>
                        <span style={{ textDecoration: 'line-through' }}>
                            <span className='dollar'>$</span>
                            {(item.price * item.quantity).toFixed(2)}
                        </span>
                        <p style={{ color: 'red', display: 'inline-block', marginLeft: '10px' }}>
                            <span className='dollar'>$</span>
                            {(item.price * item.quantity * (1 - sale)).toFixed(2)}
                        </p>
                    </div>
                    <p className='cartDeleteItem'><img src={trash} onClick={() => removeFromCart(item.id)} /></p> 
                </section>
            ) : (
                <section className='cartPriceQuantity'>
                    <div className='cartPrice'><span className='dollar'>$</span>{item.price.toFixed(2)}</div>
                    <div className='cartQuantity'> 
                        <div className='cartQuantitySpan'>
                            <span className='plus' onClick={() => decreaseQuantity(item.id)}>-</span>
                        </div>
                        <div className='cartQuantitySpan'>
                            <span>{item.quantity}</span>
                        </div>
                        <div className='cartQuantitySpan'>
                            <span className='minus' onClick={() => increaseQuantity(item.id)}>+</span>
                        </div>
                    </div>
                    <div className='cartPriceXQuantity'><span className='dollar'>$</span>{(item.price * item.quantity).toFixed(2)}</div>
                    <p className='cartDeleteItem'><img src={trash} onClick={() => removeFromCart(item.id)} /></p>
                </section>
            )}
        </div>
    )
}

export default PriceAndQuantity;