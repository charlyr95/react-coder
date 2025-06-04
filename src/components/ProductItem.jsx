
import ProductCard from "./ProductCard";

const ProductItem = ({ product, onAddToCart }) => {
    return (
        <div className="product-item">
        <ProductCard product={product} />
        <button onClick={() => onAddToCart(product)}>
            Add to Cart
        </button>
        </div>
    );
}

export default ProductItem;