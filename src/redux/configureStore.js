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
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage';                  

const config = {
  key: 'root',
  storage,
  whitelist: ['cursos']
}
const rootReducer = combineReducers({
  cursos: Cursos
})
/*
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            cursos: Cursos
        }),
        applyMiddleware(logger)
    );
    /*
    export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );
    
    return store;
}
*/
const pReducer = persistReducer(config,rootReducer)


const store  = createStore(pReducer)

const persistor = persistStore(store)

export {persistor, store };


