import React from 'react'
import { Link } from 'react-router-dom'
import "../Estilos/Home.css"


const Home = () => {
 return (
    <div className='home'>
      <div className='tituloHome'>  
      <h1>WELCOME TO MY COUNTRY APP.
        MADE BY: MAURICIO CORZO. <a className='soyHenry' href='https://www.soyhenry.com
'>SOY HENRY</a> ACADEMY.
      </h1>
      </div>
      <Link exact to ="/paises"> 
        <button className='botonHome'>HOME</button>
      </Link>
    </div>
  )
}

export default Home