import React from 'react'
import Header from '../Components/estaticos/Header'
import Footer from '../Components/estaticos/Footer'
import ListaDeProductos from '../Components/ListaDeProductos'
import Loading from '../assets/Loading.gif'
import '../Components/styleProductos.css'
import Cart from '../Components/Cart'

const Home = ({agregarCarrito, cart, productos, cargando, quitarProducto }) => {
    return (
        <>
            <Header quitarProducto={quitarProducto} cartItems={cart} />
            <main>
                <h1 className='titulo'>Tienda De Mascotas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellat eveniet? Pariatur sed perferendis provident voluptates repellendus eaque veniam, asperiores iure, ea assumenda hic unde cum debitis suscipit ab. Eos?</p>
            </main>
            <h2 className='titulo'>Nuestros Productos</h2>

            {
                cargando? <div className='loading'><img  src={Loading} alt='loading'/></div>:
                <ListaDeProductos agregarCarrito={agregarCarrito} productos={productos}/>
            }
            
            <Footer />
        </>



    )
}

export default Home