import React, { useState } from "react";
import CartItemContainer from "../components/Cart/CartItemContainer";
import CartSummary from "../components/Cart/CartSummary";
// TODO: Armar sección de carrito completa

const Cart = () => {
  return (
    <>
      <div className="mt-5">&nbsp;</div>
      <div className="container">
        <h1 className="my-4 text-center">Tu carrito de compras</h1>
        <div className="row g-4">
          <CartItemContainer />
          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default Cart;
