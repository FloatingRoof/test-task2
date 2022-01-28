import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const  store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
