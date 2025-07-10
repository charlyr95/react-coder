import { useContext } from "react";
import CartItemContainer from "./CartItemContainer";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../../context/CartContext";

const CartPage = () => {

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

export default CartPage;
