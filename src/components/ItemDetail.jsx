import React ,{useState}from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Button } from '@mui/material'

const ItemDetail = ({productDetail}) => {
    const {nombre, descripcion, precio, stock, img, id}= productDetail

    const [counter, setCounter] = useState(1)

    const [compra, setCompra] = useState(false)

    const navegar = useNavigate()

    const {addItem} = useCart()

    const onAdd = () => {
        let purchase = {
          id,
          nombre,
          precio,
          stock,
          img,
          quantity: counter

        }
        setCompra(true)
        addItem(purchase)
    }
    
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2>{nombre}</h2>
        <img src={img} alt={nombre} style={{width:'20rem'}}/>
        <p>{descripcion}</p>
        <p>Disponibles: {stock}</p>
        <p>${precio}</p>
        { compra ? <Button variant="contained" onClick={()=>navegar('/cart')}>Ir al carrito</Button>:
        <ItemCount stock={stock}  initial={1} counter={counter} setCounter={setCounter} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail