import ProductsListItem from './ProductsListItem';
import './styleProductsList.css';

const ProductsList = ({products, addToCart}) => {

    return <section className='productsList'>
        {products.map(product => <ProductsListItem key={product.id} product={product} addToCart={addToCart} />)}
    </section>
}

export default ProductsList;