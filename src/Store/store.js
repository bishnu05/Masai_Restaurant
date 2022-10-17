import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./Auth/reducer";
import { datareducer } from "./Data/reducer";
const rootReducer=combineReducers({
    auth:authReducer,
    data: datareducer,
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));