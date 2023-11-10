import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootreducers} from './components/redux/reducers/main'

const middleWare = [thunk]

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;