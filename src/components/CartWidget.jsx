const CartWidget = () => {
  return (
    <button id="shoppingCartBtn" className="btn btn-outline-light position-relative" type="button" aria-label="Carrito de compras" >
      <i className="bi bi-cart2"></i>
      <span id="cart-badge" className="cart-badge text-dark bg-warning rounded-circle p-0 m-0 fw-bold align-content-center text-center"
        // style={{ display: "none" }}
      >
        3
      </span>
    </button>
  );
};
export default CartWidget;
