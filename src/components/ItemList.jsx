import React from 'react'
import Item from './Item'

const ItemList = ({listaProductos}) => {

    return (
  
      <div>
  
          <h2>Lista de productos</h2>
  
          <div className='productsContainer'>{listaProductos.map((producto)=> <Item  producto={producto} key={producto.id}/>)}</div>
  
      </div>
  
    )
  
  }

export default ItemList