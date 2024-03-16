import { useEffect, useState } from "react";
import api from "../../utils/api";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import './styleHome.css';

export const onSaleId = 1;
export const sale = 0.3;

const Home = () => {
    const [saleProduct, setSaleProduct] = useState({});

    useEffect(() => {
        api.get(`/products/${onSaleId}`)
        .then(res => {
            setSaleProduct(res.data);
        })
        .catch(error => console.log(error))
    }, []);

    return <section className='home'>
        <h1>Welcome to our online store</h1>
        <p>Here you can purchase a wide range of products.</p>
        <h3 id="h3HomeMargin">This spring!</h3> 
        <h3>We have hiking backpacks on sale {sale * 100}%</h3>
        <div className="saleProductInfo">
            <Link to={`products/${onSaleId}`}><p>{saleProduct.title}</p></Link>
            <Link to={`products/${onSaleId}`}><img src={saleProduct.image} alt={saleProduct.title} /></Link>
            <div>
                <span style={{textDecoration: 'line-through'}}><span className='dollar'>$</span>{saleProduct.price}</span>
                <p style={{color: 'red', display: 'inline-block', marginLeft: '10px'}}><span className='dollar'>$</span>{(saleProduct.price * (1 - sale)).toFixed(2) }</p>
            </div>
        </div>
        <Footer />
    </section>
}

export default Home;