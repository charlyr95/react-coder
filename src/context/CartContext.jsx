import { createContext, useContext, useState } from "react";
import { notifySuccess } from "../utils/toastDialog";

// Contexto para el carrito de compras
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito si no existe, o aumentar la cantidad si ya existe
    const addToCart = (item, quantity = 1) => {
        setCart((prevCart) => {
            if (isInCart(item.product_id)) {
                return prevCart.map((prod) =>
                    prod.product_id === item.product_id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                );
            }
            return [...prevCart, { ...item, quantity }];
        });
    };

    // Remover un producto del carrito
    const removeFromCart = (product_id) => {
        setCart((prevCart) => prevCart.filter((prod) => prod.product_id !== product_id));
        notifySuccess("Producto eliminado del carrito", "bottom-right", 1000, true);
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
        notifySuccess("Carrito vaciado correctamente", "bottom-right", 1000, true);
    };

    // Cantidad total de productos
    const cartCount = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    // Precio total
    const cartTotal = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    // Verificar si existe un producto en el carrito
    const isInCart = (product_id) => cart.some((prod) => prod.product_id === product_id);

    // Proveer el contexto
    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);
