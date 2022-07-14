import React from 'react'
import '../Estilos/Paginacion.css'

const Paginacion = ({paisesXPagina, paisesTotales, paginar}) => {

  let numeroDePaginas = [];

  for(let i = 1; i <= Math.ceil(paisesTotales / paisesXPagina); i++){
    numeroDePaginas.push(i)
  }
 
    const activo = document.getElementsByTagName("a")
    console.log(activo)
    for(let a of activo){
    a.addEventListener("click", () => {
      let current = document.getElementsByClassName("active")
      if(current.length > 0){
        current[0].className = ""
      }
      a.classList.add("active")
    })
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