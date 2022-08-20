//Componente Carrito
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({counter}) => {
  return (
    <>
      <ShoppingCartIcon fontSize='large'/>
        <span >{counter}</span>
    </>
  )
}

export default CartWidget
