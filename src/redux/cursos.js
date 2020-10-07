import * as ActionTypes from './ActionTypes';
import {CURSOS} from '../shared/cursos';

export const Cursos = (state = { 
	cursos: CURSOS.sort(function(a,b){
            if(a.Nombre > b.Nombre){
                return 1;
            }else if(a.Nombre < b.Nombre){
                return -1;
            }
            return 0;
            
        }),
    cursosSeleccionados: [],
    opcionesHorarios: []
    },
    action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_FACULTY:
            return {...state, cursos: action.payload}

        case ActionTypes.ADD_CURSO:
            return {...state,cursosSeleccionados: state.cursosSeleccionados.concat(action.payload)}
        case ActionTypes.DELETE_CURSO:
            //let temp;
            //temp = state.cursosSeleccionados;
            //temp.splice(action.payload,1)
            //const result = words.filter(word => word.length > 6);
            let temp = state.cursosSeleccionados.filter ((item, index) => index !== action.payload)

            return {...state,cursosSeleccionados: temp}    

        case ActionTypes.ADD_OPCIONES:
            return {...state,opcionesHorarios: action.payload}

        case ActionTypes.RESET_OPCIONES:
            return {...state,opcionesHorarios: []}

        default:
            return state;
    }
};