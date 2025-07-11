import React from 'react'
import Item from './Item'


const ItemList = ({data}) => {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 m-0">
        {data.map((product)=> <Item key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemList