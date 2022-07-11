// import './App.css'
import React from 'react'
import {Route} from "react-router-dom"
import Home from './Components/Home'
import crearActivity from './Components/CreateActivity'
import Cards from './Components/Cards'
import Details from "./Components/Details"



function App() {
  return (
  <>
  <Route exact path="/" component={Home}/>
  <Route exact path ="/paises" component={Cards} />
  <Route exact path="/detallePais/:nombre" component={Details} />
  <Route exact path="/crearActividad" component={crearActivity}/>
  </>
  )
}

export default App;
