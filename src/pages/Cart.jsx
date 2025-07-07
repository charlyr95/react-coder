import React, { useState, useContext } from "react";
import CartItemContainer from "../components/Cart/CartItemContainer";
import CartSummary from "../components/Cart/CartSummary";
import EmptyCart from "../components/Cart/EmptyCart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="mt-5">&nbsp;</div>
      <div className="container mb-5">
        {cart.length > 0 ? (
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
