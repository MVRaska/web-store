import './App.css';

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/views/Home';
import Products from './components/views/Products';
import Product from './components/views/Product';
import Cart from './components/views/Cart';
import PrivacyPolicy from './components/views/PrivacyPolicy';
import TermsOfService from './components/views/TermsOfService';
import Contact from './components/views/Contact';
import PageNotFound from './components/views/PageNotFound';
import ProductsContextProvider from './productsContext/ProductsContext';
import CartContextProvider from './cartContext/CartContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductsContextProvider>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path='/products' element={<Products />} />
              <Route path='/products/:productId' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/privacy' element={<PrivacyPolicy />} />
              <Route path='/terms' element={<TermsOfService />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/' element={<Home />} />

              <Route path='*' element={<PageNotFound />} />

            </Routes>
          </CartContextProvider>
        </ProductsContextProvider>
      </Router>
     
    </div>
  );
}

export default App;
