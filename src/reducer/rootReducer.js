import { combineReducers } from "redux";
import { apiReducer } from "./reducer";

export const rootReducer=combineReducers({
    candidateRed:apiReducer,
})