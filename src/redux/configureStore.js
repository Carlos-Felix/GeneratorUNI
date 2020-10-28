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
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage';                  

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

