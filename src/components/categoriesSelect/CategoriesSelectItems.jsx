
const CategoriesSelectItems = ({products, categories, selectedCategory, setSelectedCategory, setFilteredProducts}) => {

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        
        if (selectedCategory === 'all products') {
            setSelectedCategory('');
        } else {
            setSelectedCategory(selectedCategory);
        }

        const filteredProducts = selectedCategory === 'all products' ? products : products.filter(product => product.category === selectedCategory);
        setFilteredProducts(filteredProducts);
    }

    return <div className='productsFilter'>
        <p>Filter by category:</p>
        <select  value={selectedCategory} onChange={handleCategoryChange} className="filterCategory">
            <option value='all products'>ALL PRODUCTS</option>
            {categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)}
        </select>
    </div>
}

export default CategoriesSelectItems;