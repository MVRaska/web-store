import './styleNavbar.css';
import logo from '../../assets/logo2.png';
import cart from '../../assets/cart.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import { ProductsContext } from '../../productsContext/ProductsContext';
import { CartContext } from '../../cartContext/CartContext';

const Navbar = () => {
    const {numOfItems} = useContext(CartContext);
    // const {products} = state;

    // const navigate = useNavigate();

    return <div className='navbar'>
        <Link to='/'><img src={logo} alt='logo' style={{cursor: 'pointer'}} /></Link>
        <div>
            <Link to='/products' style={{textDecoration: 'none'}}>PRODUCTS</Link>
            <Link to='/cart'><img src={cart} alt='cart' /></Link>
            <Link to='/cart'><span className='numberOfItems'>{numOfItems}</span></Link>
        </div>
    </div>
}

export default Navbar;