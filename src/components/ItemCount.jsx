import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const incrementar = () => {
        if (count < stock) {

            setCount(count + 1)
        }
    }
    const decrementar = () => {
        if (count > 0) {

            setCount(count - 1)
        }
    }

    const comprar = () => {
        onAdd(count)
    }


    return (
        <div className="d-flex flex-column gap-3 p-3 border rounded">
            <div className="text-center">
                <h5 className="mb-1">Cantidad</h5>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                    className="btn btn-outline-secondary px-3 py-2 fs-5"
                    onClick={decrementar}
                    disabled={count <= 1 || stock === 0}
                >
                    <i className="bi bi-dash"></i>
                </button>

                <div className="px-4 py-2 border rounded bg-white fs-5 text-center" style={{ minWidth: '60px' }}>
                    {count}
                </div>

                <button
                    className="btn btn-outline-secondary px-3 py-2 fs-5"
                    onClick={incrementar}
                    disabled={count >= stock}
                >
                    <i className="bi bi-plus"></i>
                </button>
            </div>

            <button
                className="btn btn-warning py-2"
                disabled={stock === 0 || count < 1}
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </button>
            <small className="text-muted text-center">{stock === 0 ? "Sin stock" : `Stock disponible: ${stock}`}</small>
        </div>

    )
}

export default ItemCount