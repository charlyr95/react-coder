import React from 'react';
import CartItem from './CartItem';

const CartItemContainer = ({ cartItems, onRemoveItem }) => {

    // sample cart items
    const sampleCartItems = [
        {
            product_id: 'a0fb097ccc',
            vendor: 'Nike',
            title: 'Nike Run Swift 3',
            price: 159999,
            transfer_price: '',
            is_on_sale: false,
            discount_percent: 25,
            installments_quantity: 9,
            category: 'calzado',
            product_type: 'calzado',
            gender: 'male',
            sell_count: 100,
            quantity_in_stock: 17,
            quantity: 1,
            sizes: [38, 39, 40, 41, 42, 43],
            main_image: '1138317-400-400',
            hover_image: '1138318-400-400'
          },
          {
            product_id: '746a2d5fb2',
            vendor: 'Puma',
            title: 'Puma Skyrocket Lite Adp',
            price: 89999,
            transfer_price: '',
            is_on_sale: false,
            discount_percent: 22,
            installments_quantity: 12,
            category: 'calzado',
            product_type: 'calzado',
            gender: 'male',
            sell_count: 100,
            quantity_in_stock: 8,
            quantity: 2,
            sizes: [39, 40, 41, 42],
            main_image: '1230557-400-400',
            hover_image: '1230558-400-400'
          },
          {
            product_id: 'd17afb0474',
            vendor: 'Puma',
            title: 'Puma Skyrocket Lite Adp Mujer',
            price: 84999,
            transfer_price: '',
            is_on_sale: true,
            discount_percent: 25,
            installments_quantity: 9,
            category: 'calzado',
            product_type: 'calzado',
            gender: 'female',
            sell_count: 100,
            quantity_in_stock: 12,
            quantity: 3,
            sizes: [36, 37, 38, 39, 40, 41],
            main_image: '1266083-400-400',
            hover_image: '1266084-400-400'
          }
    ];

    return (
        <div className="container mt-5">
            <h1 className="my-4 text-center">Tu carrito de compras</h1>
            <div className="list-group">
                {/* <console className="log">{console.log()}</console> */}
                <CartItem product={sampleCartItems[0]} />
            </div>
        </div>
    );

}

export default CartItemContainer;

