import React from 'react'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  
  // Desestructuración del objeto product
  const {
    id = "",
    title = "",
    vendor = "",
    description = "",
    price = 0,
    installments_quantity = 0,
    main_image = "",
    hover_image = "",
    quantity_in_stock = 0,
  } = product;

  const { cart, addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addToCart(product, cantidad);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-image-container position-relative overflow-hidden">
            <img
              src={`../images/products/${main_image}`}
              className="card-img-top main-image"
              alt={title}
            />
            <img
              src={`../images/products/${hover_image}`}
              className="card-img-top hover-image position-absolute top-0 start-0 w-100 h-100"
              alt={title}
            />
          </div>
        </div>

        <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column gap-2">
          <h5>{vendor}</h5>
          <h3>{title}</h3>
          <div className="text-muted">
            <ul className="list-unstyled">
              <li>
                <span className="text-dark-emphasis fw-bold">
                  ${price.toLocaleString("es-AR")}
                </span>
              </li>
              <li>
                {installments_quantity} cuotas de:{" "}
                <span className="text-dark-emphasis">
                  $
                  {Math.round(price / installments_quantity).toLocaleString("es-AR")}
                </span>
              </li>
              <li>
                <span className="text-dark-emphasis fw-bold">
                  $
                  {(Math.round(price * 0.0085) * 100).toLocaleString("es-AR")}
                </span>{" "}
                <small className="text-muted">con Transferencia</small>
              </li>
            </ul>
          </div>
          <p className="d-none">{description || ""}</p>

          <ItemCount stock={quantity_in_stock} onAdd={onAdd} />

          <div className="card" style={{ fontSize: "0.8em" }}>
            <ul className="list-unstyled p-3">
              <li>Precio Exclusivo Online</li>
              <li>El precio puede variar en nuestras tiendas físicas:</li>
              <li>- Tendrás atención personalizada por profesionales especializado</li>
              <li>- Ganas la oportunidad de ver, tocar y probar en físico multitud de productos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail