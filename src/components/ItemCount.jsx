import React, {useState} from 'react'
import Item from './Item'

const ItemCount = ({valorInicial, stock, onAdd}) => {

    const [counter, setCounter] = useState(valorInicial)

    const sumar= ()=>{
      if(counter < stock){
      setCounter(counter+1)
      }
    }

    const restar= ()=>{
      if(counter > 1){ 
      setCounter(counter-1)
      }
    }

    //const addToCart=()=>{
    //  console.log(counter);
    //} 

  return (
    <div>
        <button style={{marginLeft: 10, fontSize: 20}} onClick={sumar}>+</button>
        <span style={{marginLeft: 10, fontSize: 20}}> {counter} </span>
        <button style={{marginLeft: 10, fontSize: 20}} onClick={restar}>-</button>
        <button style={{marginLeft: 10, fontSize: 20}} onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount