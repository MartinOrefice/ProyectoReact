import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
    const {nombre, descripcion, precio, stock, img}= productDetail

    const onAdd = () => {
        console.log('compraste')
    }
    
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2>{nombre}</h2>
        <img src={img} alt={nombre} style={{width:'20rem'}}/>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail