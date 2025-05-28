import React, {useState} from 'react'
import {Link}  from 'react-router-dom'
import Cart from '../Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faTrash} from '@fortawesome/free-solid-svg-icons'
import  bolsa from './bolsa_compra.png'



const Header = ({cartItems, quitarProducto}) => {
  const [isCartOpen, setCartOpen]=useState(false)
  return (
    <header>
      <nav>
        <ul>
          <li><Link to= '/' className='link'>Inicio</Link></li>
          <li><Link to='/QuienesSomos' className='link'>Quienes somos</Link></li>
          <li><Link to='/Contacto' className='link'>Contacto</Link></li>
          <li><Link to='/GaleriaDeProductos' className='link'>Productos</Link></li>
          <li>
            <button onClick={() => setCartOpen(true)}><img className='bolsa' src={bolsa} /></button>
            <Cart quitarProducto={quitarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={()=> setCartOpen(false)}/>
        
          </li>
        </ul>
      </nav> 
    </header>
  )

}
export default Header
