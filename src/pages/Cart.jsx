import React, { useState } from "react";
import CartItemContainer from "../components/Cart/CartItemContainer";
// TODO: Armar sección de carrito completa

const Cart = () => {
  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center">Tu carrito de compras</h1>
      <CartItemContainer />
    </div>
  );
};

export default Cart;
