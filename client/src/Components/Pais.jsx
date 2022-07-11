import React from 'react'
import '../Estilos/Pais.css'
import { Link } from 'react-router-dom'


export const Pais = ({ bandera,  nombre, continente}) => {

  return ( 
    <div className='card'>
      <div className='face front'>
        <img src={bandera} className='bandera'/>
        <h3 className='H3'>{nombre}</h3>
      </div>
      <div className='face back'>
        <h3 className='H3'>{nombre}</h3>
        <p className='P'>{continente}</p>
        <div className='link'> 
        <Link exact to ={`/detallePais/${nombre}`}>    
          <a className='A'>Detalle</a>
        </Link>
        </div> 
      </div>
    </div>
  )
}


export default Pais
