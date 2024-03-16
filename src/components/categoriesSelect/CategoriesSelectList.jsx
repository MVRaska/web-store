import { useEffect, useState } from "react";
import api from "../../utils/api";
import CategoriesSelectItems from "./CategoriesSelectItems";

const CategoriesSelectList = ({products, selectedCategory, setSelectedCategory, setFilteredProducts}) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        api.get('products/categories')
        .then(res => setCategories(res.data))
        .catch(e => setError(e))
    }, []);

    return <>
        <CategoriesSelectItems 
        products={products} 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setFilteredProducts={setFilteredProducts}
        />
    </>
}

export default CategoriesSelectList;