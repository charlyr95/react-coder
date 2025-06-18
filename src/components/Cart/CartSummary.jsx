import React from "react";

const CartSummary = () => {

  return (
    // Resumen de compra
    <div className="col-12 col-lg-4">
      <div className="card border-0 shadow-sm cart-summary">
        <div className="card-header bg-body">
          <h5 className="mb-0 text-body">Resumen de compra</h5>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <span>
              Subtotal (<span id="cartProductsCount">0</span> productos)
            </span>
            <span id="cartSubtotal">$0,00</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Envío</span>
            <span id="cartSendPrice">$0,00</span>
          </div>
          <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
            <span>Descuento</span>
            <span className="text-success">-$0,00</span>
          </div>
          <div className="d-flex justify-content-between mb-3 fw-bold">
            <span>Total</span>
            <span>$0,00</span>
          </div>
          <div className="d-flex justify-content-between mb-3 text-success fw-bold">
            <span>Total con transferencia</span>
            <span>$0,00</span>
          </div>

          {/* <!-- Cupón de descuento --> */}
          <div className="mb-4">
            <div className="d-flex gap-2">
              <input type="text" className="form-control coupon-input" placeholder="Código de descuento" />
              <button className="btn btn-outline-secondary">Aplicar</button>
            </div>
          </div>

          {/* <!-- Métodos de pago --> */}
          {/* TODO: Corregir método active */}
          <h6 className="mb-3">Métodos de pago</h6>
          <div className="row row-cols-2 g-2 mb-4">
            <div className="col">
              <div className="card payment-method-card h-100">
                <div className="card-body p-2 text-center">
                  <i className="bi bi-bank fs-3"></i>
                  <p className="mb-0 small">Transferencia</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card payment-method-card h-100">
                <div className="card-body p-2 text-center">
                  <i className="bi bi-credit-card fs-3"></i>
                  <p className="mb-0 small">Tarjeta</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card payment-method-card h-100">
                <div className="card-body p-2 text-center">
                  <i className="bi bi-cash-stack fs-3"></i>
                  <p className="mb-0 small">Efectivo</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card payment-method-card h-100">
                <div className="card-body p-2 text-center">
                  <i className="bi bi-wallet2 fs-3"></i>
                  <p className="mb-0 small">Billetera</p>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-warning w-100 py-2 mb-2">
            Finalizar compra
          </button>
          <div className="text-center">
            <small className="text-muted">
              Al finalizar aceptas nuestros{" "}
              <a href="#" className="text-decoration-none">
                términos y condiciones
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
