import React from 'react'
import Item from './Item'


const ItemList = ({data}) => {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList