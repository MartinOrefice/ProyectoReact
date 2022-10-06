import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Button } from '@mui/material'

const Cart = () => {
  
  const {cart, cartTotal, clear}=useCart()
  const navegar = useNavigate()

  return (
    <div>
      {
        !cart.length 
        ? <div style={{display:'flex', justifyContent:'center' ,flexDirection:'column', alignItems:'center'}}>
            <h2>Tu carrito esta vacio!</h2>
            <h3>Volve cuando tengas tus productos seleccionados</h3>
            <Button variant="contained" onClick={()=> navegar('/')}>Ir a comprar</Button>
          </div> 
        : <div style={{display:'flex', justifyContent:'center' ,flexDirection:'column', alignItems:'center'}}> 
            <h2>Tu carrito</h2>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <div style={{display:'flex', justifyContent:'center' ,flexDirection:'column', alignItems:'center'}}>
            <span style={{fontSize:'20px'}}>Total a pagar: ${cartTotal()}</span>
            <Button style={{margin:'10px'}} variant="contained" className='cartButton' onClick={clear}>Vaciar carrito</Button>
            <Button variant="contained" color="success" onClick={()=>navegar('/checkout')}>Terminar la compra</Button>
            </div>
          </div>
      }
    </div>
  )
}

export default Cart