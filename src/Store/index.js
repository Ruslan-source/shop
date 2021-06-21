import {createStore} from "redux";
import {reducers} from "./reducers";
import {middlewares, sagaMiddleware} from "./middlewares";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../Saga";




export const store = createStore(reducers,middlewares)

sagaMiddleware.run(rootWatcher)





