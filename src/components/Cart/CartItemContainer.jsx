import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartItemContainer = () => {

  // TODO: Quitar datos de ejemplo
  const prod1 = {
    product_id: "a0fb097ccc",
    vendor: "Nike",
    title: "Nike Run Swift 3",
    price: 159999,
    transfer_price: "",
    is_on_sale: false,
    discount_percent: 25,
    installments_quantity: 9,
    category: "calzado",
    product_type: "calzado",
    gender: "male",
    sell_count: 100,
    quantity_in_stock: 17,
    quantity: 1,
    sizes: [38, 39, 40, 41, 42, 43],
    main_image: "1138317-400-400",
    hover_image: "1138318-400-400",
  };

  const prod2 = {
    product_id: "746a2d5fb2",
    vendor: "Puma",
    title: "Puma Skyrocket Lite Adp",
    price: 89999,
    transfer_price: "",
    is_on_sale: false,
    discount_percent: 22,
    installments_quantity: 12,
    category: "calzado",
    product_type: "calzado",
    gender: "male",
    sell_count: 100,
    quantity_in_stock: 8,
    quantity: 2,
    sizes: [39, 40, 41, 42],
    main_image: "1230557-400-400",
    hover_image: "1230558-400-400",
  };

  const prod3 = {
    product_id: "d17afb0474",
    vendor: "Puma",
    title: "Puma Skyrocket Lite Adp Mujer",
    price: 84999,
    transfer_price: "",
    is_on_sale: true,
    discount_percent: 25,
    installments_quantity: 9,
    category: "calzado",
    product_type: "calzado",
    gender: "female",
    sell_count: 100,
    quantity_in_stock: 12,
    quantity: 3,
    sizes: [36, 37, 38, 39, 40, 41],
    main_image: "1266083-400-400",
    hover_image: "1266084-400-400",
  };

  return (
    <div className="col-12 col-lg-8">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-body d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-body">Productos (2)</h5>
          <button id="clearCartBtn" className="btn btn-sm btn-outline-danger">
            Vaciar carrito
          </button>
        </div>

        <div className="card-body p-0">
          <div id="product-detail" className="list-group list-group-flush">
            <CartItem product={prod1} />
            <CartItem product={prod2} />
            <CartItem product={prod3} />
          </div>
        </div>

        <div className="card-footer bg-transparent">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/tienda" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-left me-2"></i>Seguir comprando
            </Link>
            <div className="d-flex align-items-center gap-3">
              <span
                id="productCounterEnd"
                className="text-muted d-none d-md-block"
              >
                2 productos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemContainer;
