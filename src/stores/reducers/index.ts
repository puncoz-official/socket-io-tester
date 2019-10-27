import { combineReducers } from "redux"
import { AppStates } from "../types"
import { connectionReducer } from "./connections"
import { systemReducer } from "./system"

export default combineReducers<AppStates>({
    system: systemReducer,
    connections: connectionReducer,
})
