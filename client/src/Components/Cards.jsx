import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import Pais from './Pais'
import Paginacion from './Paginacion'
import { getAllCountrys } from '../redux/actions'
import '../Estilos/Cards.css'
import Spiner from './Spiner'

export const Cards = () => {

    const [buscador , setBuscador] = useState("")
    const [paginaActual, setPaginaActual] = useState(1)
    const [paisesXPagina] = useState(10)
    const [cargador, setCargador] =useState(false)
    const [datosBusqueda, setDatosBusqueda] = useState({
        ordenamiento: "",
        continente: "",
        actividad: ""
    })
    
    const dispatch = useDispatch()
    const paises = useSelector(state => state.paises)
    const actividades = useSelector(state => state.actividadesGenerales)

    React.useEffect(()=>{
        dispatch(getAllCountrys())
        setCargador(true)
        setTimeout(()=>{
            setCargador(false)
        },1800)
        filtroDePaises()
        paginar(1)
        // const corregirPaginado = () => {
        //     let tagsA = document.getElementsByTagName("a") 
        //     let current = document.querySelector(".active")
        //     if(current?.id !== "1"){
        //         current?.classList.remove("active")
        //         tagsA[1]?.classList.add("active")
        //     }
        // }
        // corregirPaginado()
    },[datosBusqueda, buscador])
    

    const ordenar = (e) => {
        e.preventDefault()
        setDatosBusqueda({...datosBusqueda,[e.target.name]: e.target.value})
    }

     // Traer cierta cantidad de Paises    
    const ultimoPais = paginaActual * paisesXPagina
    const primerPais = ultimoPais - paisesXPagina

    // const paisesnormales = paises.slice(primerPais,ultimoPais)

     const filtroDePaises = () => {
        const resultado = filtrarOrdenamiento(paises).filter( filtrarContinente ).filter( filtrarActividades ).filter ( filtrarBuscador )
        return resultado.slice(primerPais,ultimoPais)
//         if(buscador){
//             const resultado = paises.filter(p =>  p.nombre.slice(0, buscador.length).toLowerCase() === buscador.toLowerCase().trim())
//             return resultado.slice(primerPais,ultimoPais)
//         } 
//         if(filtro.filtro.length === 1) {          
//             if (filtro.filtro === "B"){
//                 const a_z = paises.sort((a,b) => a.nombre.localeCompare(b.nombre, 'en') )
//                 return a_z.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "C"){
//                 const z_a = paises.sort((a,b) => b.nombre.localeCompare(a.nombre, 'en'))
//                 return z_a.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "D"){
//                 const menorAmayor = paises.sort((a,b) => a.poblacion - b.poblacion)
//                 return menorAmayor.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "E"){
//                 const mayorAmenor = paises.sort((a,b) => b.poblacion - a.poblacion)
//                 return mayorAmenor.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "F"){
//                 const america = paises.filter(p => p.continente === "Americas")
//                 return america.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "G"){
//                 const europa = paises.filter(p => p.continente === "Europe")
//                 return europa.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "H"){
//                 const africa = paises.filter(p => p.continente === "Africa")
//                 return africa.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "I"){
//                 const asia = paises.filter(p => p.continente === "Asia")
//                 return asia.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "J"){
//                 const oceania = paises.filter(p => p.continente === "Oceania")
//                 return oceania.slice(primerPais,ultimoPais)
//             }
//             if(filtro.filtro === "K"){
//                 const antartida = paises.filter(p => p.continente === "Antarctic")
//                 return antartida.slice(primerPais,ultimoPais)
//             }           
           
//                  const paisesnormales = paises.slice(primerPais,ultimoPais)
//                  return paisesnormales  
//      } 
//              if(filtro.filtro.length > 1){
//                 const porActividades = paises.filter(p => filtro.filtro.includes(p.id))
//                 return porActividades
//      }
//      const paisesnormales = paises.slice(primerPais,ultimoPais)
//      return paisesnormales  
  }


  const filtrarOrdenamiento = ( paises ) => {
    if(datosBusqueda.ordenamiento){
        if(datosBusqueda.ordenamiento === "A_Z") {
            const a_z = paises.sort((a,b) => a.nombre.localeCompare(b.nombre, 'en') ) 
            return a_z//.slice(primerPais,ultimoPais)
        }
        if(datosBusqueda.ordenamiento === "Z_A"){
            const z_a = paises.sort((a,b) => b.nombre.localeCompare(a.nombre, 'en'))
            return z_a//.slice(primerPais,ultimoPais)
        }
        if(datosBusqueda.ordenamiento === "menorAmayor"){
            const menorAmayor = paises.sort((a,b) => a.poblacion - b.poblacion)
            return menorAmayor//.slice(primerPais,ultimoPais)
        }
        if(datosBusqueda.ordenamiento === "mayorAmenor"){
            const menorAmayor = paises.sort((a,b) => b.poblacion - a.poblacion)
            return menorAmayor//.slice(primerPais,ultimoPais)
        }
    } 
    return paises
  }

  const filtrarContinente = (pais) => {
    if (datosBusqueda.continente){
        return pais.continente === datosBusqueda.continente
    }
    return pais
  }

  const filtrarActividades = (pais) => {
    if(datosBusqueda.actividad){
        return datosBusqueda.actividad.includes(pais.id) 
    }
    return pais
  }

  const filtrarBuscador = (pais) => {
    if(buscador){
        const resultado = pais.nombre.slice(0, buscador.length).toLowerCase() === buscador.toLowerCase().trim()
        return resultado//.slice(primerPais,ultimoPais)
    }
    return pais
  }
    
    
    // Cambiar de pagina
    const paginar = (num) => setPaginaActual(num)
    
  return (
    <div className='fondo'>
        <div>  
            <div className='estiloformulario'> 
                <div className='estilodiv'> 
                    <label className='estilolabel'>Filtrar por Nombre</label>
                        <input
                        className='estiloinput' 
                        placeholder='Busca un Pais...'
                        type="text"
                        name='buscador'
                        value={buscador}
                        onChange={e => setBuscador(e.target.value)}
                        />
                </div>
                <div className='estilodiv'>  
                    <label className='estilolabel'>Filtros</label>
                        <select id='ordenamiento' name="ordenamiento" onChange={e => ordenar(e)} className="estiloinput">
                        <option value="">Selecciona un Filtro</option>
                        <option value="A_Z" >A-Z</option>
                        <option value="Z_A" >Z-A</option>
                        <option value="menorAmayor">Menor Poblacion</option>
                        <option value="mayorAmenor">Mayor Poblacion</option>
                    </select>
                </div>
                <div className='estilodiv'> 
                    <label className='estilolabel'>Continente</label>
                        <select id='continente' name="continente" onChange={e => ordenar(e)} className="estiloinput">
                        <option value="">Selecciona un Continente</option>    
                        <option value="Americas">America</option>
                        <option value="Europe">Europa</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctic">Antartida</option>
                        </select> 
                </div>
                <div className='estilodiv'> 
                    <label className='estilolabel'>Actividades</label>
                        <select id='actividad' name="actividad" onChange={e => ordenar(e)} className="estiloinput">
                            <option value="">Selecciona una Actividad</option>
                           {actividades.length == 0? <option value="">No hay actividades</option> : actividades?.map(a => (
                            <option value={a.fusion}>{a.actividad.nombre}</option>
                           ))} 
                        </select> 
                </div>
            </div>
            <div className='title'>     
                <h1>Paises del Mundo</h1>
            </div>
            <div>
                <Link exact to ="/crearActividad"> 
                    <button className='botonCrearActividad'>Crear Actividad</button>
                </Link>
            </div>
            <div >  
            <Paginacion paisesXPagina={paisesXPagina} paisesTotales={paises.length} paginar={paginar} paginaActual={paginaActual}/>
            </div>
            <div className= "paises"> 
                {cargador? <Spiner/> : filtroDePaises()?.length == 0? <h1 className='no-existe'>No Existe ese Pais</h1> : filtroDePaises()?.map(pais => (
                <div key={pais.id} className="individual">
                    <Pais 
                    id ={pais.id}
                    nombre={pais.nombre}
                    bandera={pais.bandera}
                    continente={pais.continente}
                />
             </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cards