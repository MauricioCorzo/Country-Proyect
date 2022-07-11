import React from 'react'
import "../Estilos/Alerta.css"

const Alerta = ({alerta}) => {
  return (
    <div className='posicion'>  
      <div className={`${alerta.error? 'conAlerta' : 'sinAlerta'} alerta`}>
        {alerta.msg}
      </div>
    </div>
  )
}

export default Alerta