import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
 
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setProduct(res))
        .catch((error)=> console.error(error))
    },[])

  return (
    <>
    <div className="mt-5">&nbsp;</div> {/* Espacio para el encabezado o título de la página */}
    <h1 className="text-center mb-5">Detalle del Producto</h1>
    <ItemDetail className="mt-5 container" product={product}/>
    </>
  )
}

export default ItemDetailContainer