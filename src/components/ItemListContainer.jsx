import { useEffect, useState } from "react"
import { getProducts } from "../mock/AyncMock"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"


import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage"

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()
  const { gender } = useParams()

  const fetchProducts = () => {
    setIsLoading(true)
    setError(null)

    getProducts()
      .then((respuesta) => {
        if(categoryId){
          setData(respuesta.filter((prod)=> prod.category === categoryId))
        } else if(gender){
          setData(respuesta.filter((prod)=> prod.gender === gender))
        } else {
          setData(respuesta)
        }
      })
      .catch(() => {
        setError("Hubo un problema al cargar los productos.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [categoryId, gender])

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