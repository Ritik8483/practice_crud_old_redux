import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';

const middlewares=[reduxThunk];
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}
export const store=createStore(rootReducer,applyMiddleware(...middlewares));
