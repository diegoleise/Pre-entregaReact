import React from 'react'
import Header from '../Components/estaticos/Header'
import Footer from '../Components/estaticos/Footer'
import Loading from '../assets/Loading.gif'
import ListaDeProductos from '../Components/ListaDeProductos'

const GaleriaDeProductos = ({agregarCarrito, cart, productos, cargando, quitarProducto}) => {
    return (
        <>   
            <Header quitarProducto={quitarProducto} cartItems={cart} agregarCarrito={agregarCarrito} />
            <h1 className='titulo'>GaleriaDeProductos</h1>
            {
                cargando? <div className='loading'><img  src={Loading} alt='loading'/></div>:
                <ListaDeProductos agregarCarrito={agregarCarrito} productos={productos}/>
            }
            
            <Footer />
        </>
    )

}

export default GaleriaDeProductos