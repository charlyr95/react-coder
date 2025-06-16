import { useEffect, useState } from "react"
import { getProducts } from "../mock/AyncMock"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()

  console.log(categoryId)
  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          // filtro
          setData(respuesta.filter((prod) => prod.category === categoryId))
        } else {
          // no filtro
          setData(respuesta)
        }
      })
      .catch((error) => console.log(error))
  }, [categoryId])

  return (
    <div>
      {/* <Input/> */}
      <h1 className="mt-5">{props.saludo}</h1>
      <div className="container">
        <div className="row">
          <ItemList className="col-12 col-lg-10 mb-5" data={data} />  
        </div>
      </div>
    </div>
  )
}


export default ItemListContainer