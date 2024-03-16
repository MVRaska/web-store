import './styleOrderForm.css';

const OrderForm = ({clearCart, setOrderComplete}) => {

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        clearCart();
        setOrderComplete(true);
    };

    return <section className='orderForm'>
        <h2>OrderForm</h2>
        <p>Thank you for choosing our services!</p>
        <p>To complete your purchase, please fill out the order form with your information for the items you'd like to buy from our store.</p>
        <form onSubmit={handleOrderSubmit}>
            <div className='inputDescription'>
                <div className='infoType'><label>Name: </label></div>
                <div className='inputHalf'>
                    <div><input type="text" name="" id="" placeholder='First' /></div>
                    <div><input type="text" name="" id="" placeholder='Last' /></div>
                </div>
            </div>

            <div className='inputDescription'>
                    <div className='infoType'><label>Email: </label> </div>
                    <div className=''>
                        <input type="email" name="" id="" placeholder='Email' />
                    </div>
            </div>
            
            <div className='inputDescription'>
                <div className='infoType'><label>Delivery Address: </label></div>
                <div className=''>
                    <input type="text" name="" id="" placeholder='Street Address' />  
                    <div className="inputHalf">
                        <div><input type="text" name="" id="" placeholder='City' /></div>
                        <div><input type="text" name="" id="" placeholder='Postal Code' /></div>
                    </div>
                </div>
            </div>

            <button type='submit'>submit</button>
        </form>
    </section>
}

export default OrderForm;