const ProductsContainer = ({ title }) => {
  return (
    <div className="products-container">
      <h2>{title}</h2>
      <ul>
        <li>Producto 1</li>
        <li>Producto 2</li>
        <li>Producto 3</li>
        <li>Producto 4</li>
        <li>Producto 5</li>
      </ul>
      {/* Product cards here */}
    </div>
  );
};

export default ProductsContainer;
