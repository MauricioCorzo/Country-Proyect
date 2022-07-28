import axios from "axios"
export const GET_ALL_COUNTRYS = "GET_ALL_COUNTRYS"
export const GET_COUNTRY = "GET_COUNTRY"
export const POST_ACTIVIDAD = "POST_ACTIVIDAD"
export const DELETE_ACTIVDAD = "DELETE_ACTIVIDAD"



export const getAllCountrys = (name) => async (dispatch) => {
    if(name){
        try {
            const paises = await axios (`/countries?name=${name}`)
            if(paises?.data){
                return dispatch({type: GET_ALL_COUNTRYS, payload: paises.data})
            }
        } catch (error) {
            console.log(error)
        }
    }
    if(!name){
        try {
            const paises = await axios (`/countries`)
            if(paises?.data){
                return dispatch({type: GET_ALL_COUNTRYS, payload: paises.data})
            }
        } catch (error) {
            console.log(error)
        }
}
}

export const getCountry = (nombre) => async (dispatch) => {
    try {
        const country = await axios (`/countries/${nombre}`)
        if(country?.data){
           return dispatch({type: GET_COUNTRY, payload: country.data})
        }
    } catch (error) {
        console.log(error)
    }
}

export const createActivity = (value) => async (dispatch) => {
  try {
        const actividad = await axios.post(`/actividad`, value)
        if(actividad?.data){
            return dispatch({type: POST_ACTIVIDAD, payload: actividad.data})
        }
  } catch (error) {
    console.log(error)
  }
}

export const deleteActivity = (id) => async (dispatch) => {
    try {
        const actBorrada = await axios.delete(`/actividad/${id}`)
        return dispatch({type:DELETE_ACTIVDAD, payload: id})
    } catch (error) {
        console.log(error)
    }
  
}
