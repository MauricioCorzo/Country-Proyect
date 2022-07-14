const axios = require ('axios');
const {Country, Activity, Op} = require('../db')



const countries = async (req,res) => {
    let {name} = req.query 
    if(name){
        let validacion = await Country.findAll({
            where: {
                nombre: {
                    [Op.iLike]: `${name}%`
                }
            }
        })
        if(validacion.length == 0){
            const r = await axios.get("https://restcountries.com/v3/all")
            const resp = r.data
            let paises = resp.map(p => {
                return {
                 id : p.cioc? p.cioc : p.cca3,
                nombre: p.name.common,
                bandera: p.flags[1],
                continente: p.region,
                capital: p.capital? p.capital[0] : "No Existe",
                subregion: p.subregion,
                area: p.area,
                poblacion: p.population
            }
        })
        await Country.bulkCreate(paises)
        let matches = await Country.findAll({
            where: {
                nombre: {
                    [Op.iLike]: `${name}%`
                }
            }     
        })
          return res.json(matches)
        }
        return res.json(validacion)     
    } else {
        let validacion = await Country.findAll()
        if(validacion.length == 0){
        const r = await axios.get("https://restcountries.com/v3/all")
            const resp = r.data
            let paises = resp.map(p => {
                return {
                 id : p.cioc? p.cioc : p.cca3,
                nombre: p.name.common,
                bandera: p.flags[1],
                continente: p.region,
                capital: p.capital? p.capital[0] : "No Existe",
                subregion: p.subregion,
                area: p.area,
                poblacion: p.population
            }
        })
        await Country.bulkCreate(paises)
        return res.json(paises)
    }
     res.json(validacion)
    }

}       
        
 


const  pais = async (req,res) => {
    let {idpais} = req.params
    try {
        const pais = await Country.findAll({
            where:{
                nombre: {
                    [Op.iLike]: `${idpais}%`  // id: idpais.toUpperCase
                }
            },
            include: Activity
        })
        res.json(pais)
    } catch (error) {
        return res.json({msg: error.message})
    }
}
 

const actividad = async (req,res) => {
    let {nombre , dificultad, duracion, temporada, paises} = req.body
    //  let countryIds = paises.map(p => p.slice(0,3).toUpperCase())
    try {
        const newactivity = await Activity.create({
            nombre, dificultad ,duracion , temporada
        })
       const countrys = await Country.findAll({
        where: {
            nombre: {
                [Op.iLike]: {[Op.any]: paises } // como cualquiera de los strings del array que le paso (paises)
            }
        } 
       })
        await newactivity.addCountries(countrys)
        res.json(newactivity)
       
    } catch (error) {
        return res.send({msg: error.message})
    }
}


const borrarActividad = async (req,res) => {
    let {id} = req.params
    try{
        const actividadBorrada = await Activity.destroy({
            where:{
                id:id
            }
        })
        res.json(actividadBorrada)
    } catch(error){
        return res.send({msg: error.message})
}
}







module.exports = {
    pais,
    countries,
    actividad,
    borrarActividad
}