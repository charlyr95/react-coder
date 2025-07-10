import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../service/firebase";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";

const CartCheckout = () => {
    const [orderId, setOrderId] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { cart = [], cartTotal = 0, clearCart = () => { } } = useContext(CartContext);

    const submitCheckout = async (data) => {
        // Validate cart has items
        if (!cart || cart.length === 0) {
            console.error("Cannot proceed with checkout: Cart is empty");
            return;
        }

        const order = {
            buyer: {
                name: data.name,
                lastname: data.lastname,
                phone: data.phone,
                address: data.address,
                email: data.email,
            },
            items: cart,
            total: cartTotal
        }
        try {
            const orderId = await createOrder(order);
            setOrderId(orderId);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    }


    // checkout form
    return (
        <>
            <div className="mt-5">&nbsp;</div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow">
                            <div className="card-header bg-body text-center">
                                <h2 className="card-title mb-0">Completa tus datos</h2>
                            </div>
                            <div className="card-body">
                                {orderId ? (
                                    <div className="alert alert-success text-center">
                                        <h4 className="alert-heading">¡Orden Confirmada!</h4>
                                        <p className="mb-0">Tu ID de orden es: <strong>{orderId}</strong></p>
                                    </div>
                                ) : cart.length === 0 ? (
                                    <div className="alert alert-warning text-center">
                                        <h4 className="alert-heading">Carrito vacío</h4>
                                        <p className="mb-3">No hay productos en tu carrito. Agrega algunos productos antes de proceder con el checkout.</p>
                                        <Link
                                            className="btn btn-warning px-4 py-2 rounded-pill shadow-sm fw-bold"
                                            to="/tienda"
                                        >
                                            Visitar tienda
                                        </Link>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(submitCheckout)}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="name" className="form-label">Nombre</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                    placeholder="Ingresa tu nombre"
                                                    {...register("name", {
                                                        required: "Nombre es requerido",
                                                        validate: value => value.trim() !== '' || "Nombre no puede estar vacío o ser solo espacios",
                                                        maxLength: {
                                                            value: 40,
                                                            message: "Nombre no puede exceder 40 caracteres"
                                                        }
                                                    })}
                                                />
                                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="lastname" className="form-label">Apellido</label>
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                                                    placeholder="Ingresa tu apellido"
                                                    {...register("lastname", {
                                                        required: "Apellido es requerido",
                                                        validate: value => value.trim() !== '' || "Apellido no puede estar vacío o ser solo espacios",
                                                        maxLength: {
                                                            value: 40,
                                                            message: "Apellido no puede exceder 40 caracteres"
                                                        }
                                                    })}
                                                />
                                                {errors.lastname && <div className="invalid-feedback">{errors.lastname.message}</div>}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Teléfono</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                placeholder="Ingresa tu número de teléfono"
                                                {...register("phone", {
                                                    required: "Teléfono es requerido",
                                                    validate: value => value.trim() !== '' || "Teléfono no puede estar vacío o ser solo espacios",
                                                    pattern: {
                                                        value: /^[0-9\s\-+]+$/,
                                                        message: "Teléfono no puede contener letras ni caracteres especiales"
                                                    },
                                                    maxLength: {
                                                        value: 40,
                                                        message: "Teléfono no puede exceder 40 caracteres"
                                                    }
                                                })}
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Dirección</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                                placeholder="Ingresa tu dirección"
                                                {...register("address", {
                                                    required: "Dirección es requerida",
                                                    validate: value => value.trim() !== '' || "Dirección no puede estar vacío o ser solo espacios",
                                                    maxLength: {
                                                        value: 240,
                                                        message: "Dirección no puede exceder 240 caracteres"
                                                    }
                                                })}
                                            />
                                            {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Ingresa tu correo electrónico"
                                                {...register("email", {
                                                    required: "Email es requerido",
                                                    pattern: {
                                                        value: /^\S+@\S+$/i,
                                                        message: "Formato de email inválido"
                                                    },
                                                    maxLength: {
                                                        value: 240,
                                                        message: "Email no puede exceder 240 caracteres"
                                                    }
                                                })}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </div>

                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-warning btn-lg">
                                                <i className="fas fa-credit-card me-2"></i>
                                                Finalizar compra
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartCheckout;