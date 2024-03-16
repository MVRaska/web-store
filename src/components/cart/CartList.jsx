import CartListItem from "./CartListItem";

const CartList = ({cart, removeFromCart, increaseQuantity, decreaseQuantity, onSaleId, sale}) => {

    return <>
        {cart.map((item, index) => (
            <CartListItem
                key={index}
                item={item}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                onSaleId={onSaleId}
                sale={sale}
            />
        ))}
    </>
}

export default CartList;