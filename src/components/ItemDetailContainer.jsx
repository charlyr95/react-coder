import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../service/firebase'
import Loading from './Loading'
import ItemDetail from './ItemDetail'
import ErrorMessage from './ErrorMessage'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  const fetchProduct = () => {
    setIsLoading(true)
    setError(null)

    getOneProduct(id)
      .then((res) => setProduct(res))
      .catch(() => setError("No se pudo cargar el producto."))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

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
