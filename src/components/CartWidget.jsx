//Componente Carrito
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const {cartQuantity} = useCart()
  return (
    <>
      <ShoppingCartIcon fontSize='large'/>
        <span >{cartQuantity() || ''}</span>
    </>
  )
}

export default CartWidget
