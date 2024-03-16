
const PriceOrder = ({handlePriceOrder}) => {

    return <div className="productsOrder">
        <p>Order by price:</p>
        <select onChange={handlePriceOrder} className='orderByPrice'>
            <option value='default'>Default</option>
            <option value='ascending'>Ascending</option>
            <option value='descending'>Descending</option>
        </select>
    </div>
}
 export default PriceOrder;