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
    const [filtro, setFiltro] = useState({filtro:""})
    const [cargador, setCargador] =useState(false)
    
    const dispatch = useDispatch()
    const paises = useSelector(state => state.paises)

    React.useEffect(()=>{
        dispatch(getAllCountrys())
        setCargador(true)
        setTimeout(()=>{
            setCargador(false)
        },1800)          
    },[])

   
    const ordenar = (e) => {
        e.preventDefault()
        setFiltro({...filtro, [e.target.name]: e.target.value})
    }


     // Traer cierta cantidad de Paises    
    const ultimoPais = paginaActual * paisesXPagina
    const primerPais = ultimoPais - paisesXPagina

    const mapeoDePaises = () => {
        if(buscador){
            const resultado = paises.filter(p =>  p.nombre.slice(0, buscador.length).toLowerCase() === buscador.toLowerCase().trim())
            return resultado.slice(primerPais,ultimoPais)
        } else{      
        if (filtro.filtro === "B"){
            const a_z = paises.sort((a,b) => a.nombre.localeCompare(b.nombre, 'en') )
            return a_z.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "C"){
            const z_a = paises.sort((a,b) => b.nombre.localeCompare(a.nombre, 'en'))
            return z_a.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "D"){
            const menorAmayor = paises.sort((a,b) => a.poblacion - b.poblacion)
            return menorAmayor.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "E"){
            const mayorAmenor = paises.sort((a,b) => b.poblacion - a.poblacion)
            return mayorAmenor.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "F"){
            const america = paises.filter(p => p.continente === "Americas")
            return america.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "G"){
            const europa = paises.filter(p => p.continente === "Europe")
            return europa.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "H"){
            const africa = paises.filter(p => p.continente === "Africa")
            return africa.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "I"){
            const asia = paises.filter(p => p.continente === "Asia")
            return asia.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "J"){
            const oceania = paises.filter(p => p.continente === "Oceania")
            return oceania.slice(primerPais,ultimoPais)
        }
        if(filtro.filtro === "K"){
            const antartida = paises.filter(p => p.continente === "Antarctic")
            return antartida.slice(primerPais,ultimoPais)
        }
        const paisesnormales = paises.slice(primerPais,ultimoPais)
        return paisesnormales  
    }
}
    
    // Cambiar de pagina
    const paginar = (num) => setPaginaActual(num);
    
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
                        value={buscador}
                        onChange={e => setBuscador(e.target.value)}
                        />
                </div>
                <div className='estilodiv'>  
                    <label className='estilolabel'>Filtros</label>
                        <select name="filtro" onChange={e => ordenar(e)} className="estiloinput">
                        <option value="A">Selecciona un Filtro</option>
                        <option value="B" >A-Z</option>
                        <option value="C" >Z-A</option>
                        <option value="D">Menor Poblacion</option>
                        <option value="E">Mayor Poblacion</option>
                    </select>
                </div>
                <div className='estilodiv'> 
                    <label className='estilolabel'>Continente</label>
                        <select name="filtro" onChange={e => ordenar(e)} className="estiloinput" >
                        <option value="F">America</option>
                        <option value="G">Europa</option>
                        <option value="H">Africa</option>
                        <option value="I">Asia</option>
                        <option value="J">Oceania</option>
                        <option value="K">Antartida</option>
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
            <Paginacion paisesXPagina={paisesXPagina} paisesTotales={paises.length} paginar={paginar}/>
        </div>
            <div className= "paises"> 
                {cargador? <Spiner/> : mapeoDePaises()?.map(pais => (
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