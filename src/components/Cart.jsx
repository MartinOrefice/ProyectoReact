import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

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
            <button onClick={()=> navegar('/')}>Ir a comprar</button>
          </div> 
        : <div> 
            <h2>Tu carrito</h2>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a pagar: ${cartTotal()}</span>
            <button onClick={clear}>Vaciar carrito</button>
            <button>Terminar la compra</button>
          </div>
      }
    </div>
  )
}

export default Cart