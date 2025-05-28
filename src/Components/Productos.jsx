import React, { useState } from 'react'
import ListaDeProductos from './ListaDeProductos'
import './styleProductos.css'



const Productos = ({productos, agregarCarrito}) => {
  const [cantidad, setCantidad] = useState(1)
  const increase = () => setCantidad (prev => (prev < productos.stock ? prev+1 : prev))
  const decrease = () => setCantidad (prev => (prev > 1 ? prev-1 : 1));

  return (
    <div className='card'>
        <div className='imagenContainer'>
            <img src={productos.imagen} alt="" className='imagen' />
        </div>
        <h3 className='nombre'>{productos.nombre}</h3>
        <p className='precio'>{productos.precio}</p>
        <p className='stock'>{productos.stock}</p>
        <div className='cantidadContainer'>
            <button onClick={decrease}>-</button>
            <div>{cantidad}</div>
            <button  onClick={increase}>+</button>
        </div>
        <button onClick = {() => agregarCarrito({...productos})}>Agregar al Carrito</button>
    </div>
  )
}

export default Productos