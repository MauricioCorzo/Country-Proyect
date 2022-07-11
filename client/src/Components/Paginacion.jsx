import React from 'react'
import '../Estilos/Paginacion.css'

const Paginacion = ({paisesXPagina, paisesTotales, paginar}) => {

  let numeroDePaginas = [];

  for(let i = 1; i <= Math.ceil(paisesTotales / paisesXPagina); i++){
    numeroDePaginas.push(i)
  }


  
  return (
    <div className='paginado'>
      
      <div className="pagination">
        
            {numeroDePaginas.map(num => (
            <a key={num} onClick={()=> paginar(num)}>{num}</a>
            ))}
            
      </div>
       
    </div>
      
  )
}

export default Paginacion