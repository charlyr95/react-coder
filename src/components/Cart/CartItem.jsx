import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ product, removeFromCart }) => {
  // destructuring product properties and providing default values
  // to avoid errors if any property is missing
  const {
    title = "",
    vendor = "",
    price = 0,
    main_image = "",
    product_id = "",
    quantity = 0,
  } = product;

  const subtotal = price * quantity;

  return (
    <div className="list-group-item cart-item bg-transparent py-3">
      <div className="row align-items-center flex-nowrap">
        <div className="col-auto">
          <img
            src={`../images/products/${main_image}`}
            className="cart-item-img rounded border"
            alt={title}
          />
        </div>
        <div className="col">
          <div className="d-flex flex-column">
            <span className="text-muted small">{vendor}</span>
              <h6>
            <Link to={`/product/${product_id}`} className="link-warning text-body link-underline-opacity-0 link-underline-opacity-100-hover">
                {title}
            </Link>
              </h6>
          </div>
        </div>
        <div className="col text-end">
          <div className="d-flex flex-column">
            <span className="text-muted small">
              {quantity} x ${price.toLocaleString("es-AR")} c/u
            </span>
            <span className="fw-bold">${subtotal.toLocaleString("es-AR")}</span>
            <small className="text-warning text-wrap">
              ${(Math.round(subtotal * 0.0085) * 100).toLocaleString("es-AR")} con
              Transferencia
            </small>
          </div>
        </div>
        <div className="col-auto">
          <button
            className="remove-item__button bg-body border-0"
            data-id="${index}"
            onClick={() => removeFromCart(product_id)}
            aria-label="Eliminar producto del carrito"
            title="Eliminar producto del carrito"
          >
            <i
              className="bi bi-x-lg remove-item p-1"
              title="Eliminar producto"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
