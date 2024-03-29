

import { GET_ALL_COUNTRYS , GET_COUNTRY, POST_ACTIVIDAD, DELETE_ACTIVDAD} from "../actions";

let initialState = {
    paises: [],
    pais: [],
    actividades: [],
    actividadesGenerales: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_COUNTRYS:
            return {
                ...state,
                paises: action.payload,
                pais:[],
            }
            case GET_COUNTRY:
                let paisSinActividad = [...action.payload]  
                let listaActividades = paisSinActividad[0].activities
                 paisSinActividad[0].activities = []          
                return {
                    ...state,
                    pais: paisSinActividad,
                    actividades: listaActividades
                }
                case POST_ACTIVIDAD:
                    return {
                        ...state,
                        actividades: [...state.actividades , {...action.payload}],
                        actividadesGenerales: [...state.actividadesGenerales, {...action.payload}]
                    }
                    case DELETE_ACTIVDAD:
                        return {
                            ...state,           
                            actividades: state.actividades.filter(a => a.id !== action.payload),
                            actividadesGenerales: state.actividadesGenerales.filter(a => a.actividad.id !== action.payload)
                        }
            default:
                return {...state}
    }
}


export default rootReducer