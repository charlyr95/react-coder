import React, { useEffect, useContext } from "react";

const CartCheckout = () => {
    
    // checkout form
    return (
        <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-body">
                    <h5 className="mb-0 text-body">Checkout</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Finalizar compra</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CartCheckout;