import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../Saga";




const logger = (store) => (next) => (action) => {
    const state = store.getState()
    console.log(action, state)
    return next(action)
}

const thunk = (store) => (next) => (action) => {
    const{dispatch, getState} = store
    if (typeof action === 'function'){
       return  action(dispatch, getState)
    }
    return next(action)
}

export const sagaMiddleware = createSagaMiddleware()
export const middlewares = composeWithDevTools(applyMiddleware(logger,thunk,sagaMiddleware))

