import { useState } from 'react'
import { Link } from 'react-router-dom'
import { notifySuccess } from '../utils/toastDialog'

const ItemCount = ({ stock, onAdd }) => {

    const [isAdded, setIsAdded] = useState(false)
    const [count, setCount] = useState(1)
    const incrementar = () => { if (count < stock) setCount(count + 1) }
    const decrementar = () => { if (count > 0) setCount(count - 1) }

    const addToCart = () => {
        onAdd(count)
        setIsAdded(true)
        notifySuccess(`Agregaste ${count} producto${count > 1 ? 's' : ''} al carrito`, "bottom-right", 1000, true)
    }

    return (
        <div className="d-flex flex-column gap-3 p-3 border rounded">



            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <h5 className="text-center m-0 p-0">Cantidad</h5>
                <div className="btn-group d-flex justify-content-center align-items-center">
                    <button
                        className="btn btn-outline-secondary px-3 py-2 fs-5"
                        onClick={decrementar}
                    >
                        <i className="bi bi-dash"></i>
                    </button>

                    <div className="px-4 py-2 border border-secondary border-end-0 border-start-0 bg-white fs-5 text-center" style={{ minWidth: '60px' }}>
                        {count}
                    </div>

                    <button
                        className="btn btn-outline-secondary px-3 py-2 fs-5"
                        onClick={incrementar}
                    >
                        <i className="bi bi-plus"></i>
                    </button>
                </div>

                <small className="m-0 p-0 text-muted text-center">{stock === 0 ? "Sin stock" : `${stock} disponibles`}</small>
            </div>
            {!isAdded ? (
                <button
                    className="btn btn-warning py-2"
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