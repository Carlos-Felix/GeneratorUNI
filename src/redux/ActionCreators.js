import * as ActionTypes from './ActionTypes';

export const changeFaculty = (cursos) => ({
  type: ActionTypes.CHANGE_FACULTY,
  payload: cursos

})

export const addCurso = (curso) => (
    {
      type: ActionTypes.ADD_CURSO,
      payload: curso

    }
 )

export const addOpcionesHorario = (opciones) => ({
  type: ActionTypes.ADD_OPCIONES,
  payload: opciones
})

export const resetOpcionesHorario = () => ({
    type: ActionTypes.RESET_OPCIONES,
})

export const deleteCurso = (index) => ({
	type: ActionTypes.DELETE_CURSO,
	payload: index
})

export const updateCreated = (updated) => ({
  type: ActionTypes.UPDATE_CREATED,
  payload: updated
})

export const chageToCreated = () => ({
  type: ActionTypes.CHANGE_TO_CRATED
})

export const changeToPredef = () => ({
  type: ActionTypes.CHANGE_TO_PREDEF
})



