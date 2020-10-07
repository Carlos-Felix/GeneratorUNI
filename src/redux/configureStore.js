/*
import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}
*/
import {/*applyMiddleware, */createStore, combineReducers } from 'redux';
//import logger from 'redux-logger';
import {Cursos} from './cursos'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            cursos: Cursos
        })/*,
        applyMiddleware(logger)*/
    );
    /*
    export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );
    */
    return store;
}

