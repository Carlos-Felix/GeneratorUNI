import * as ActionTypes from './ActionTypes';
 
export const Cursos = 
    (state = {
      cursos: []
    },action) => {
      switch(action.type) {
        case ActionTypes.SET_CURSOS:

          return {state} 
      } 

}
