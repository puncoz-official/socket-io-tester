import { ActionWithPayload } from "../../types"

export const ADD_CONNECTION = "connections/add_connection"
export const REMOVE_CONNECTION = "connections/remove_connection"
export const SET_ACTIVE = "connections/set_active"

export interface Connection {
    url: string
    id: number
    disabled: boolean
    connected: boolean
    events: []
    order: number
}

export interface ConnectionsState {
    list: Connection[]
    active: number
}

export interface AddConnectionAction extends ActionWithPayload<typeof ADD_CONNECTION, number> {}

export interface RemoveConnectionAction extends ActionWithPayload<typeof REMOVE_CONNECTION, number> {}

export interface SetActiveAction extends ActionWithPayload<typeof SET_ACTIVE, number> {}

export type ConnectionsActions = AddConnectionAction | RemoveConnectionAction | SetActiveAction
