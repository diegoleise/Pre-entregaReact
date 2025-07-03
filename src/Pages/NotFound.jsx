import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <>  
            <h1 className='titulo'>NotFound</h1>
            <button><Link to='/'>Volver al Inicio</Link></button>
        
        </>

    )
}

export default NotFound