import { createActionWithPayload } from "../../types"
import { ADD_CONNECTION, AddConnectionAction, REMOVE_CONNECTION, RemoveConnectionAction, SET_ACTIVE, SetActiveAction } from "./type"

export const addConnection = createActionWithPayload<AddConnectionAction>(ADD_CONNECTION)
export const removeConnection = createActionWithPayload<RemoveConnectionAction>(REMOVE_CONNECTION)
export const setActive = createActionWithPayload<SetActiveAction>(SET_ACTIVE)
