import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry, deleteActivity} from '../redux/actions'
import { Link } from 'react-router-dom'
import Spiner3 from './Spiner3'
import "../Estilos/Detalle.css"


 const Details = (props) => {
   
  let {nombre} = props.match.params

  const [cargador, setCargador] = useState(false)
  
  const dispatch = useDispatch()

  const pais =  useSelector(state => state.pais)
  const actividades = useSelector(state => state.actividades) 

   React.useEffect(() => {
      dispatch(getCountry(nombre))

      setCargador(true)
      setTimeout(() => {
        setCargador(false)
      }, 1700)
    },[])
  console.log(pais)
  console.log(actividades)
   
    const click =  (id) => {
      
      dispatch(deleteActivity(id))
      
    }

  return (
  <div className='fondoDetalle'>
     { cargador? <Spiner3 /> : (
       <>
       <Link exact to="/paises"> <button className='backbutton'>Back</button></Link>  
     <div className='detalle'>
      <div className='imagenDetalle'> 
      <img src={pais[0]?.bandera} className="banderaDetalle"/>
      </div>
      <div className='information'>
      <h1>{pais[0]?.nombre} ({pais[0]?.id})</h1>
        <h2>{pais[0]?.continente} / {pais[0]?.subregion}</h2>
        <h3>Capital: {pais[0]?.capital}</h3>
        <p>Area: {pais[0]?.area / 1000}km2</p>
        <p>Poblacion: {pais[0]?.poblacion}</p>
      </div>    
  </div>
  
    {actividades?.length > 0 && actividades?.map(act => (
    <div className='listaActividades'>
        <div className='informationActivities'>
        <button className='borrarDetalle' onClick={() => click(act.id)}>X</button>
        <h1>Actividad:</h1>
        <h2>{act.nombre}</h2>
        <h3>Temporada: {act.temporada}</h3>
        <h4>Duracion: {act.duracion}</h4>
        <p>Dificultad: {act.dificultad}</p>
        </div>
    </div>
      ))}
      </>
      )}
  </div>
  )
}


export default Details
