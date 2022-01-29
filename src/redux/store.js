import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {applicationReducer} from "../features/applications/modules/reducer";


let reducers = combineReducers({
    applicationReducer: applicationReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const  store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
