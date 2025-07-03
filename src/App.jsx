import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import QuienesSomos from './Pages/QuienesSomos'
import Contacto from './Pages/Contacto'
import GaleriaDeProductos from './Pages/GaleriaDeProductos'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Productos from './Components/Productos'


function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/Data/Data.json')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos),
            setCargando(false)
        },
          2000)
      })
      .catch(error => {
        setCargando(false)
        setError(true)

        console.log('Error', error)

      })
  }, [])

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(cart.map((item) => item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item));
    }
    else {
      setCart([...cart,  product])
    }

  }


  const borrarProducto = (product) => {
    setCart((preVCart) => {
      return preVCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };


  console.log(productos)

  return (


    < Router >
      <Routes>
        <Route path='/' element={<Home
          quitarProducto={borrarProducto}
          agregarCarrito={handleAddToCart}
          cart={cart}
          productos={productos}
          cargando={cargando} />} />

        <Route path='/QuienesSomos' element={<QuienesSomos quitarProducto={borrarProducto} cart={cart} />} />

        <Route path='/GaleriaDeProductos' element={<GaleriaDeProductos quitarProducto={borrarProducto} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/Contacto' element={<Contacto quitarProducto={borrarProducto} cart={cart} />} />

        <Route path='/*' element={<NotFound />} />

      </Routes>

    </Router >




  )
}

export default App
