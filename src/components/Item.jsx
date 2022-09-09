import * as React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Item({producto}) {

  const navegar = useNavigate()
  
    return (
      <div className="card" style={{width:'20rem', margin:'.5rem', border:' 2px solid black', padding:'.5rem', borderRadius:'.4rem'}}>
    <img src={producto.img} className="card-img-top" alt={producto.nombre}/>
    <div className="card-body">
        <p className="card-text">{producto.nombre}</p>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">${producto.precio}</p>
    </div>
        <button className='btn btn-primary' onClick={()=>navegar(`/detalle/${producto.id}`)}>Detalle</button>
      </div>
    );
  }