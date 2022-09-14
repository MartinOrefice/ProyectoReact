import React ,{useState}from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {
    const {nombre, descripcion, precio, stock, img}= productDetail

    const [counter, setCounter] = useState(0)

  const [compra, setCompra] = useState(false)

  const navegar = useNavigate()

    const onAdd = () => {
        setCompra(true)
    }
    
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2>{nombre}</h2>
        <img src={img} alt={nombre} style={{width:'20rem'}}/>
        <p>{descripcion}</p>
        <p>Disponibles: {stock}</p>
        <p>${precio}</p>
        { compra ? <button onClick={()=>navegar('/cart')}>Ir al carrito</button>:
        <ItemCount stock={stock} counter={counter} setCounter={setCounter} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail