import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({compra}) => {
    const {removeItem}=useCart()
  return (
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'90%'}}>
    <img src={compra.img} alt={compra.nombre} styte={{width:'10rem'}}/>
    <span>{compra.nombre}</span>
    <span>{compra.quantity}</span>
    <span>${compra.precio}</span>
    <button style={{backgroundColor: 'red'}} onClick={()=>removeItem(compra.id)}>X</button>
</div>
  )
}

export default CartItem