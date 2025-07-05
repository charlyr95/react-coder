import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart, cartCount } = useContext(CartContext);

  return (
    <button id="shoppingCartBtn" className="btn btn-outline-light position-relative" type="button" aria-label="Carrito de compras">
      <i className="bi bi-cart2"></i>
      {cartCount > 0 ? (
        <span id="cart-badge" className="cart-badge text-dark bg-warning rounded-circle p-0 m-0 fw-bold align-content-center text-center">
          {cartCount}
        </span>
      ) : null}
    </button>
  );
};
export default CartWidget;
