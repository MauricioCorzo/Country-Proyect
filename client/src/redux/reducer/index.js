
import { GET_ALL_COUNTRYS , GET_COUNTRY, POST_ACTIVIDAD} from "../actions";

let initialState = {
    paises: [],
    pais: [],
    actividades: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_COUNTRYS:
            return {
                ...state,
                paises: action.payload,
                pais: []
            }
            case GET_COUNTRY:
                return {
                    ...state,
                    pais: action.payload
                }
                case POST_ACTIVIDAD:
                    return {
                        ...state,
                        actividades: action.payload
                    }   
            default:
                return {...state}
    }
}


export default rootReducer