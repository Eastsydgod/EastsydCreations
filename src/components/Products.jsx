import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

export default function Products() {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');

                if (!response.ok) {
                    throw new Error(`Failed to fetch products. Status: ${response.status}`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Invalid response format: Expected JSON.');
                }

                const products = await response.json();
                setLoadedProducts(products);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (isLoading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (loadedProducts.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <ul id="meals">
            {loadedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ul>
    );
}