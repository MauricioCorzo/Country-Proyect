
export const GET_ALL_COUNTRYS = "GET_ALL_COUNTRYS"
export const GET_COUNTRY = "GET_COUNTRY"
export const POST_ACTIVIDAD = "POST_ACTIVIDAD"
export const DELETE_ACTIVDAD = "DELETE_ACTIVIDAD"



export const getAllCountrys = (name) => (dispatch) => {
    if(name){
        return fetch(`http://localhost:3001/countries?name=${name}`)
        .then(response => response.json())
        .then( paises => dispatch({type: GET_ALL_COUNTRYS, payload: paises}))
         .catch(error => console.log(error))
    }
    if(!name){
        return fetch(`http://localhost:3001/countries`)
        .then(response => response.json())
        .then( paises => dispatch({type: GET_ALL_COUNTRYS, payload: paises}))
         .catch(error => console.log(error))
    }
  

}

export const getCountry = (nombre) => dispatch => {
    return fetch(`http://localhost:3001/countries/${nombre}`)
    .then(response => response.json())
    .then(pais => dispatch({type: GET_COUNTRY, payload: pais}))
    .catch(error => console.log(error))
}

export const createActivity = (value) => dispatch => {
    return fetch(`http://localhost:3001/actividad` , {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(activity => dispatch({type: POST_ACTIVIDAD, payload: activity}))
    .catch(error => console.log(error))
}

export const deleteActivity = (id) => dispatch => {
    return fetch(`http://localhost:3001/actividad/${id}` , {
        method:'DELETE',
        // body: JSON.stringify(id),
        // headers: {
        //     'Content-Type':'application/json',
        // },
})
    .then(response => response.json())
    .then(data => dispatch({type: DELETE_ACTIVDAD, payload: id}))
    .catch(error => console.log(error))
}
