export const initialState = {
    products: [],
    error: null
}

const productsReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {...state, products: action.payload};
        case 'FETCH_PRODUCTS-FAILURE':
            return {...state, error: action.payload};
        default: 
        return state;
    }
}

export default productsReducer;