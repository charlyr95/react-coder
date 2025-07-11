import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { confirmDialog } from "../../utils/confirmDialog";

const CartItemContainer = () => {

  const { cart = [], cartCount = 0, removeFromCart = () => { }, clearCart = () => { } } = useContext(CartContext);

  const confirmClearCart = () => {
    confirmDialog("¿Quieres vaciar el carrito?", "Eliminarás todos los productos del carrito", "Vaciar")
      .then((result) => {
        if (result) {
          clearCart();
        }
      });
  }

  const confirmDeleteItem = (id) => {
    confirmDialog("¿Quieres quitar este producto?", "Puedes guardarlo para después si lo prefieres", "Eliminar")
      .then((result) => {
        if (result) {
          removeFromCart(id);
        }
      });
  }

  return (
    <div className="col-12 col-lg-8">
      <div className="card border-0 shadow">
        <div className="card-header bg-body d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-body">Productos ({cartCount})</h5>
          <button id="clearCartBtn" className="btn btn-sm btn-outline-danger" onClick={confirmClearCart}>
            Vaciar carrito
          </button>
        </div>

        <div className="card-body p-0">
          <div id="product-detail" className="list-group list-group-flush">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} removeFromCart={confirmDeleteItem} />
            ))}
          </div>
        </div>

        <div className="card-footer bg-transparent">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/tienda" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-left me-2"></i>Seguir comprando
            </Link>
            <div className="d-flex align-items-center gap-3">
              <span
                id="productCounterEnd"
                className="text-muted d-none d-md-block"
              >
                {cartCount} productos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemContainer;
