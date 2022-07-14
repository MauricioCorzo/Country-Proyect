import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { createActivity } from '../redux/actions'
import Alerta from './Alerta'
import Spiner2 from './Spiner2'
import "../Estilos/Actividad.css"
import { Link } from 'react-router-dom'


const CrearActivity = () => {

 const dispatch = useDispatch()
 
  
 const [nombre, setNombre] = useState("")
 const [dificultad, setDificultad] = useState("")
 const [duracion, setDuracion] = useState("")
 const [temporada, setTemporada] = useState("")
 const [paises , setPaises] = useState ("")
 const [alerta, setAlerta] = useState({})
 const [cargador, setCargador] = useState(false)

 React.useEffect(() => {
  setCargador(true)
  setTimeout(() => {
    setCargador(false)
  },1800)
 },[])

 let handleSubmit = (e) => {
    e.preventDefault()

    if([nombre,dificultad,duracion,paises].includes("")){
      setAlerta({msg: "Hay Campos Vacios", error : true})
      return
    }
    if(dificultad < 0 || dificultad > 5){
      setAlerta({msg:"La difultad tinen que ser entre 1 y 5", error: true})
      return
    }
    
    if(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/.test(nombre)){
      setAlerta({msg: "Actividad invalida. No se aceptan caracteres especiales", error: true})
      return
    }

  
    
    setAlerta({})


    let obj = {
      nombre: nombre,
      dificultad: dificultad,
      duracion: duracion,
      temporada: temporada,
      paises: paises.split(",").map(p => p.trim())
    }

  try {
  dispatch(createActivity(obj))
  setAlerta({msg: "Creado Correctamente", error: false})
} catch (error) {
  console.log(error)
}
 }

 const {msg} = alerta
    
  return (
    
    <div className='fondoFormulario'>
    <div className='fondoFormulario'>  
    <div className='titulo'>
    <h1>Crea una Actividad Nueva</h1>
    </div>
      <Link to ="/paises">   
        <button className='botonHome2'>Home</button>
      </Link>
   <div className='formularioCompleto'>
    {msg && <Alerta alerta={alerta}/>}
    {cargador? <Spiner2/> : ( 
    <form onSubmit={handleSubmit}>
        <input type="submit"
        value="Crear Actividad"
        className='botonCrear'
        />
      <div className='etiquetaAfuera'>
        <label className='etiquetaAdentro'>Nombre*</label>
        <input type="text"
        placeholder="Nombre de actividad..."
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        className="etiquetaInput"
         />
      </div>
      <div className='etiquetaAfuera'>
        <label className='etiquetaAdentro'>Dificultad*</label>
        <input type="number"
        placeholder="Dificultad..."
        value={dificultad}
        onChange={e => setDificultad(e.target.value)}
        className="etiquetaInput"
         />
      </div>
      <div className='etiquetaAfuera'>
        <label className='etiquetaAdentro'>Duracion*</label>
        <input type="number"
        placeholder="Duracion..."
        value={duracion}
        onChange={e => setDuracion(e.target.value)}
        className="etiquetaInput"
         />
      </div>
      <div className='etiquetaAfuera'>
      <label className='etiquetaAdentro'>Temporada</label>
        <input type="text"
        placeholder="Estacion del año..."
        value={temporada}
        onChange={e => setTemporada(e.target.value)}
        className="etiquetaInput"
         />
      </div>
      <div className='etiquetaAfuera'>
        <label className='etiquetaAdentro'>Pais/Paises*</label>
        <input type="text"
        placeholder="Argentina, Costa Rica.."
        value={paises}
        onChange={e => setPaises(e.target.value)}
        className="etiquetaInput"
         />
      </div>
    </form>
   )}
   </div>
    </div>
    </div>
  )
}

export default CrearActivity