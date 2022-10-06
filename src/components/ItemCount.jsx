import React from 'react'
import { Button } from '@mui/material'

const ItemCount = ({stock, initial, onAdd, counter, setCounter}) => {

    

    const sumar= ()=>{
      if(counter < stock){
      setCounter(counter+1)
      }
    }

    const restar= ()=>{
      if(counter > initial){ 
      setCounter(counter-1)
      }
    }

   
  return (
    <div className='counter'>
        <Button variant="contained" style={{marginLeft: 10, fontSize: 20}} onClick={sumar}>+</Button>
        <span style={{marginLeft: 10, fontSize: 20}}> {counter} </span>
        <Button variant="contained" style={{marginLeft: 10, fontSize: 20}} onClick={restar}>-</Button>
        <Button variant="contained" color="success" style={{marginLeft: 10, fontSize: 15}} onClick={onAdd}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount