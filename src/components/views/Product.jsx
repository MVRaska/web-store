import {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import { onSaleId, sale } from './Home';
import { CartContext } from '../../cartContext/CartContext';
import './styleProduct.css';

const Product = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);

    const {addToCart} = useContext(CartContext);

    const {productId} = useParams();

    useEffect(() => {
        api.get(`/products/${productId}`)
        .then(res => setProduct(res.data))
        .catch(e => setError(true))
    }, [])

    const renderRatingStars = (rate) => {
        const fullStars = Math.floor(rate);
        const hasHalfStar = rate % 1;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star"><i className="fa-sharp fa-solid fa-star" style={{color: '#FFD43B', fontSize: '1.3rem'}}></i></span>);
        }

        if (hasHalfStar > 0.3 && hasHalfStar < 0.7) {
            stars.push(<span key="half" className="star "><i className="fa-sharp fa-regular fa-star-half-stroke" style={{color: '#FFD43B', fontSize: '1.3rem'}}></i></span>);
        }

        if (hasHalfStar > 0.7) {
        stars.push(<span key='full' className="star"><i className="fa-sharp fa-solid fa-star" style={{color: '#FFD43B', fontSize: '1.3rem'}}></i></span>);
        }

        while (stars.length < 5) {
            stars.push(<span key={stars.length} className="star"><i className="fa-sharp fa-regular fa-star" style={{color: '#FFD43B', fontSize: '1.3rem'}}></i></span>);
        }

        return stars;
    };

    return <div>
        {product ? (
            <section className='productInfoImg'>
                <div className='productImg'>
                    <img src={product.image} alt={`product${productId}`} />
                </div>
                <div className='productInfo'>
                    <p className='productTitle'>{product.title}</p>

                    {product.id === onSaleId ? (
                    <div className='productPrice'>
                        <span style={{textDecoration: 'line-through'}}><span className='dollar'>$</span>{product.price.toFixed(2)}</span>
                        <p style={{color: 'red', display: 'inline-block', marginLeft: '10px'}}><span className='dollar'>$</span>{(product.price * (1 - sale)).toFixed(2) }</p>
                    </div>
                    ) : <p><span className='dollar'>$</span>{product.price.toFixed(2)}</p>
                    }

                    <div className='productRate'>
                        <p>{(product.rating.rate).toFixed(1)} <span className="productRateStars">{renderRatingStars(product.rating.rate)}</span></p>
                        <p className='productRateCustomers'>(based on feedback from {product.rating.count} customers)</p>
                    </div>
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product, product.id)} >add to cart</button>
                </div>
            </section>
            ) : null
        }
    </div>
}

export default Product;