import React from 'react'
import Header from '../Components/estaticos/Header'
import Footer from '../Components/estaticos/Footer'

const Contacto = ({cart, quitarProducto}) =>{
  return (
    <>

      <Header quitarProducto={quitarProducto} cartItems={cart}/>
      <h1 className='titulo'>Contacto</h1>
      <Footer />
    </>
    
  )
}

export default Contacto