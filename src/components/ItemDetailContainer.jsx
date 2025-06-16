import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { product_id } = useParams()

  const fetchProduct = () => {
    setIsLoading(true)
    setError(null)

    getOneProduct(product_id)
      .then((res) => setProduct(res))
      .catch(() => setError("No se pudo cargar el producto."))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchProduct()
  }, [product_id])

  return (
    <>
      <div className="mt-5">&nbsp;</div>
      <h1 className="text-center mb-5">Detalle del Producto</h1>

      <div className="container">
        {isLoading ? (
          <Loading mensaje="Cargando producto..." />
        ) : error ? (
          <ErrorMessage mensaje={error} onRetry={fetchProduct} />
        ) : (
          <ItemDetail className="mt-5" product={product} />
        )}
      </div>
    </>
  )
}

export default ItemDetailContainer
