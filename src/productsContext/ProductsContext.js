import { createContext, useEffect, useReducer } from "react";
import productsReducer, {initialState} from '../productsReducer/productsReducer';
import api from "../utils/api";

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const [state, productsDispatch] = useReducer(productsReducer, initialState);

    useEffect(() => {
        api.get('/products')
        .then(res => productsDispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data }))
        .catch(error => productsDispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error }));
    }, [])

    return <>
        <ProductsContext.Provider value={{state, productsDispatch}}>{children}</ProductsContext.Provider>
    </>
}

export default ProductsContextProvider;