import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider =({children}) => {
   
    const [cart, setCart] = useState([]);
    const [numOfItems, setNumOfItems] = useState(0);
    const [orderComplete, setOrderComplete] = useState(false);

    const updateNumOfItems = () => {
        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity;
        });
        setNumOfItems(totalItems);
    };

    useEffect(() => {
        updateNumOfItems();
    }, [cart]);


    const addToCart = (product, idProduct) => {
        const existingProductIndex = cart.findIndex(item => item.id === idProduct);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity ++;
            setCart(updatedCart);
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
        }
    }

    const removeFromCart = idProduct => {
        const newCart = cart.filter(item => item.id !== idProduct);
        setCart(newCart);
      };

    const clearCart = () => {
    setCart([]);
    };

    const increaseQuantity = idProduct => {
    const updatedCart = [...cart];
    const cartItem = updatedCart.find(item => item.id === idProduct);
    cartItem.quantity++;
    setCart(updatedCart);
    };

    const decreaseQuantity = idProduct => {
    const updatedCart = [...cart];
    const cartItem = updatedCart.find(item => item.id === idProduct);
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
        setCart(updatedCart);
    } else {
        removeFromCart(idProduct);
    }
    }

    return <>
        <CartContext.Provider 
            value={{
                cart, 
                numOfItems, 
                addToCart, 
                removeFromCart, 
                clearCart, 
                increaseQuantity, 
                decreaseQuantity,
                orderComplete, 
                setOrderComplete
            }}>
            {children}
        </CartContext.Provider>
    </>
}

export default CartContextProvider;
