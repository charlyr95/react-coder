import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { notifySuccess } from '../utils/toastDialog'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const [isBouncing, setIsBouncing] = useState(false)
    const [added, setAdded] = useState(false)

    const incrementar = () => { if (count < stock) setCount(count + 1) }

    const decrementar = () => { if (count > 0) setCount(count - 1) }

    const addToCart = () => {
        setIsBouncing(true)
        onAdd(count)
        notifySuccess(`Agregaste ${count} producto${count > 1 ? 's' : ''} al carrito`, "bottom-right", 1000, true )
        setAdded(true)
    }

    return (
        <div className="d-flex flex-column gap-3 p-3 border rounded">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                <h5 className="text-center m-0 p-0 fs-6">Cantidad</h5>
                <div className="btn-group d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-outline-secondary py-1"
                    onClick={decrementar}
                >
                    <i className="bi bi-dash"></i>
                </button>

                <div className="px-4 py-1 border border-secondary border-end-0 border-start-0 bg-white text-center" style={{ minWidth: '60px' }}>
                    {count}
                </div>

                <button
                    className="btn btn-outline-secondary py-1"
                    onClick={incrementar}
                >
                    <i className="bi bi-plus"></i>
                </button>
                </div>

                <small className="m-0 p-0 text-muted text-center">{stock === 0 ? "Sin stock" : `${stock} disponibles`}</small>
            </div>
            {!added ? (
                <button
                    className={`btn btn-warning py-2${isBouncing ? ' animate__animated animate__bounce' : ''}`}
                    disabled={stock === 0 || count < 1}
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
            ) : (
                <div className="d-flex gap-2">
                    <Link className="flex-fill btn btn-warning" to="/tienda">
                        Seguir comprando
                    </Link>
                    <Link className="flex-fill btn btn-outline-warning text-dark" to="/cart">
                        Ir al carrito
                    </Link>
                </div>
            )}
        </div>

    )
}

export default ItemCount