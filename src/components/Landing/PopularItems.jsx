import { useEffect, useState } from "react"
import { getTopProducts } from "../../service/firebase"
import ItemList from "../ItemList"
import Loading from "../Loading"
import ErrorMessage from "../ErrorMessage"

const PopularItems = (props) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProducts = async () => {
        setIsLoading(true)
        setError(null)

        await getTopProducts(4)
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
        fetchProducts()
    }, [])

    return (
        <div className="bg-body-tertiary pt-5 border-top">
            <h1 className="text-center text-uppercase fs-2">{props.titulo}</h1>

            <div className="container">
                {isLoading ? (
                    <Loading mensaje="Cargando productos..." />
                ) : error ? (
                    <ErrorMessage mensaje={error} onRetry={fetchProducts} />
                ) : (
                    <div className="row">
                        <ItemList className="col-12 col-lg-10 mb-5" data={data} />
                        <div className="mb-5">&nbsp;</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PopularItems