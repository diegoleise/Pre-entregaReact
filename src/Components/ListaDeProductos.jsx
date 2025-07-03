import React from 'react'
import Productos from './Productos'

const ListaDeProductos = ({productos, agregarCarrito}) => {
    
    return (
        <>
            <h2>Galeria De Productos</h2>
            {
                productos.map(productos =>(
                    <Productos agregarCarrito={agregarCarrito} key={productos.id} productos={productos}/>
                ))
            }
        </>

    )
}

export default ListaDeProductos
