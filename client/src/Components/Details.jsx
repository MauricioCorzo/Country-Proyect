import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../redux/actions'
import Spiner from './Spiner'
import "../Estilos/Detalle.css"


 const Details = (props) => {
   
  let {nombre} = props.match.params

  const [cargador, setCargador] = useState(false)

  const dispatch = useDispatch()

  const pais =  useSelector(state => state.pais) 

   React.useEffect(() => {
      dispatch(getCountry(nombre))
      setCargador(true)
      setTimeout(() => {
        setCargador(false)
      }, 1700)
    },[])
    
    console.log(pais)

  return (
  <div>
     { cargador? <Spiner/> : (
     <div className='detalle'>
      <img src={pais[0]?.bandera}/>
        <h1>{pais[0]?.nombre} ({pais[0]?.id})</h1>
        <h2>{pais[0]?.continente} / {pais[0]?.subregion}</h2>
        <h3>Capital: {pais[0]?.capital}</h3>
        <p>Area: {pais[0]?.area / 1000}km2</p>
        <p>Poblacion: {pais[0]?.poblacion}</p>
  </div>
  )}
  </div>
  )
}


export default Details
