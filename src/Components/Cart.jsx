import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './styleCart.css'


const Cart = ({cartItems, isOpen, onClose, quitarProducto}) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className='close-button'>X</button>
      </div>
      <div className='cart-content'>
        {
          cartItems.lenght === 0 ? (<p>El Carrito Esta Vacio</p>) : (<ul className='cart-item'>
            {cartItems.map((item) => (
              <>
                <li key={item.id}>
                  {item.nombre} - {item.precio}
                  <button onClick={()=> quitarProducto(item)}><FontAwesomeIcon icon={faTrash}/></button>
                </li>
              </>
            ))}
          </ul>

          )
        }
      </div>
    </div>
  )
}

export default Cart