import React from "react";

const CartItem = ({ product }) => {
  // destructuring product properties and providing default values
  // to avoid errors if any property is missing
  const {
    title = "",
    vendor = "",
    description = "",
    price = 0,
    installments_quantity = 0,
    main_image = "",
    hover_image = "",
    product_id = "",
    quantity_in_stock = 0,
    quantity = 0,
  } = product;

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
            <h6>{title}</h6>
          </div>
        </div>
        <div className="col text-end">
          <div className="d-flex flex-column">
            <span className="fw-bold">${price.toLocaleString("es-AR")}</span>
            <small className="text-warning text-wrap">
              ${(Math.round(price * 0.0085) * 100).toLocaleString("es-AR")} con
              Transferencia
            </small>
          </div>
        </div>
        <div className="col-auto">
          <button
            className="remove-item__button bg-body border-0"
            data-id="${index}"
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
