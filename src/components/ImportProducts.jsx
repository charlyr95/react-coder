import React, {useEffect, useState} from 'react';
import { createProduct } from '../service/firebase'; // Adjust the import path as necessar
import { getProducts } from '../mock/AyncMock';

const ImportProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const mockToFirebase = async () => {
        // get mock products and create them in Firebase
        try {
            const mockProducts = await getProducts();
            processProducts(mockProducts);
            console.log("Mock products to be created:", mockProducts);
        } catch (error) {
            console.error("Error creating products:", error);
        }
    };

    const processProducts = (products) => {
        //delete id and create to firebase
        for (const product of products) {
            const { product_id, ...productData } = product; // Destructure to remove id
            createProduct(productData)
                .then((docId) => {
                    console.log(`Product created with ID: ${docId}`);
                })
                .catch((error) => {
                    console.error("Error creating product:", error);
                });
        }
    
    };

    return (
        <div className='mt-5 py-5 d-flex flex-column align-items-center'>
            <button className="btn btn-primary mb-3" onClick={mockToFirebase}>
                <h1>Create Products</h1>
            </button>
            {/* {loading ? <p>Loading...</p> : <ItemList products={products} />} */}
        </div>
    );
}

export default ImportProducts;