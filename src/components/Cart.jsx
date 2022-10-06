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
        ? <div>
            <h2>Tu carrito esta vacio!</h2>
            <h4>Volve cuando tengas tus productos seleccionados</h4>
            <Button variant="contained" onClick={()=> navegar('/')}>Ir a comprar</Button>
          </div> 
        : <div> 
            <h2>Tu carrito</h2>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a pagar: ${cartTotal()}</span>
            <Button variant="contained" className='cartButton' onClick={clear}>Vaciar carrito</Button>
            <Button variant="contained" color="success" onClick={()=>navegar('/checkout')}>Terminar la compra</Button>
          </div>
      }
    </div>
  )
}

export default Cart