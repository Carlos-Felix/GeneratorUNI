import * as ActionTypes from './ActionTypes';
//import {CURSOS} from '../shared/javas';
import Dictionary from '../resources/Diccionario';
import {CURSOS} from '../shared/repar'
const allc = new Dictionary();
console.log(CURSOS.values())
allc.set("CQ132",{
        "Codigo": "CQ132",
        "Nombre": "Química Ciencia y tecnología",
        "Secciones": [
            {
                "Seccion": "A",
                "Horas": [
                    {
                        "Dia": 3,
                        "Hora": 18,
                        "Prioridad": 1
                    },
                    {
                        "Dia": 3,
                        "Hora": 19,
                        "Prioridad": 1
                    }
                ]
            }
        ]
    })
allc.set("221",{"Codigo":"221","Nombre":"Holas"})
export const Cursos = (state = { 
	  cursos: CURSOS,
    cursosSeleccionados: [],
    opcionesHorarios: [],
    cursosCreados: allc /*[
                    {                                                                                                                   
                     "Codigo" : "BIC01",                                                                                             
                     "Nombre" : "INTRODUCCIÓN A LA COMPUTACIÓN",                                                                     
                     "Secciones":                                                                                                    
                       [                                                                                                           
                         {                                                                                                       
                             "Seccion": "A",                                                                                     
                             "Horas":                                                                                            
                                 [                                                                                               
                                     "SA 8-9 T",                                                                                 
                                     "SA 9-11 P"                                                                                 
                                ]                                                                                               
                         },                                                                                                      
                         {                                                                                                       
                           "Seccion": "B",                                                                                     
                           "Horas":                                                                                            
                               [                                                                                               
                                   "SA 11-12 T",                                                                               
                                   "SA 12-14 P"                                                                                
                               ]                                                                                               
                       },                                                                                                      
                       {                                                                                                       
                           "Seccion": "C",                                                                                     
                           "Horas":                                                                                            
                               [                                                                                               
                                   "SA 15-16 T",                                                                               
                                   "SA 16-18 P"                                                                                
                               ]                                                                                               
                       }                                                                                                       
                                                                                                                               
                                                                                                                               
                   ]                                                                                                           
           }
    ]*/
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

        case ActionTypes.UPDATE_CREATED:
            return {...state,cursosCreados: action.payload}

        case ActionTypes.CHANGE_TO_CRATED:
            return {...state, cursos: state.cursosCreados}

        case ActionTypes.CHANGE_TO_PREDEF:
            return {...state, cursos: CURSOS}                                                                                                            
        default:
            return state;
    }
};
