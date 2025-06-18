import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="card border-0 shadow-sm">
        <div className="card-body cart-empty d-flex flex-column justify-content-center align-items-center text-center p-5">
        <i className="bi bi-cart-x cart-empty-icon mb-4"></i>
        <h3>Tu carrito está vacío</h3>
        <p className="text-muted mb-4">¡Agrega productos para comenzar tu compra!</p>
        <Link to="/tienda" className="btn btn-warning px-4 py-2">
            Ir a la tienda
        </Link>
        </div>
    </div>
  );
}

export default EmptyCart;