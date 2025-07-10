import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../service/firebase"
import ItemList from "./ItemList"
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage"

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { category } = useParams()
  const { gender } = useParams()

  const fetchProducts = async (filters) => {
    setIsLoading(true)
    setError(null)

    await getProducts(filters)
      .then((respuesta) => {
        setData(respuesta)
      })
      .catch(() => {
        setError("Hubo un problema al cargar los productos.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const filters = []
    if (category) { filters.push({ field: "category", value: category }) }
    if (gender) { filters.push({ field: "gender", value: gender }) }
    fetchProducts( filters)
  }, [category, gender])

  return (
    <div>
      <div className="mt-5">&nbsp;</div>
      <h1 className="text-center">{props.titulo}</h1>

      <div className="container">
        {isLoading ? (
          <Loading mensaje="Cargando productos..." />
        ) : error ? (
          <ErrorMessage mensaje={error} onRetry={fetchProducts} />
        ) : (
          <div className="row">
            <ItemList className="col-12 col-lg-10 mb-5" data={data} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemListContainer