import { Link } from "react-router-dom";
import { onSaleId, sale } from "../views/Home";

const ProductsListItem = ({product}) => {

    return <section className="productsListItem">
        <div>
            <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                <div className="productsListItemTitleImg">
                    <p>{product.title}</p>
                    <img src={product.image} />
                    
                </div>
            </Link>
            {product.id === onSaleId ? (
                <div className="productsListitemsPrice">
                    <span style={{textDecoration: 'line-through'}}><span className='dollar'>$</span>{product.price}</span>
                    <p style={{color: 'red', display: 'inline-block', marginLeft: '10px'}}><span className='dollar'>$</span>{(product.price * (1 - sale)).toFixed(2) }</p>
                </div>
                ) : <div className="productsListitemsPrice"><span className='dollar'>$</span>{product.price.toFixed(2)}</div>
            }
        </div>
        <Link to={`/products/${product.id}`}><p className="details">details...</p></Link>
    </section>
}

export default ProductsListItem;