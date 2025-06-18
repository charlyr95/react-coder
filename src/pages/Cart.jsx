import React, { useState } from "react";
import CartItemContainer from "../components/Cart/CartItemContainer";
import CartSummary from "../components/Cart/CartSummary";
import EmptyCart from "../components/Cart/EmptyCart";

const Cart = () => {
  // sample state to simulate cart length
  const cartLength = 0;

  return (
    <>
      <div className="mt-5">&nbsp;</div>
      <div className="container">
        {cartLength > 0 ? (
          <>
            <div className="row g-4">
              <h1 className="my-4 text-center">Tu carrito de compras</h1>
              <CartItemContainer />
              <CartSummary />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
