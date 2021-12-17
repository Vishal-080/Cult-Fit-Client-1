import {createStore, applyMiddleware, compose,combineReducers} from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./AuthStore/reducer";
import { generalReducer } from "./GeneralStore/reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    general:generalReducer
})


export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
