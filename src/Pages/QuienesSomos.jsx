import React from 'react'
import Header from '../Components/estaticos/Header'
import Footer from '../Components/estaticos/Footer'


const QuienesSomos = ({cart, agregarCarrito, quitarProducto}) => {
  return (
    <>
      <Header cartItems={cart} agregarCarrito={agregarCarrito} quitarProducto={quitarProducto}/>
      <h1 className='titulo'>Quienes Somos</h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis perspiciatis velit nostrum laudantium. Eligendi perspiciatis vel et. Corrupti, deserunt modi. Similique enim consequatur assumenda vitae eligendi voluptate neque dolorem non.
      <Footer />
    </>


  )
}

export default QuienesSomos