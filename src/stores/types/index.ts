import { ConnectionsState } from "../reducers/connections/type"
import { SystemState } from "../reducers/system/type"

export type AppStates = {
    system: SystemState
    connections: ConnectionsState
}

export interface ActionWithPayload<TType, TPayload> {
    type: TType,
    payload: TPayload
}

export interface Action<TType> {
    type: TType
}

export const createActionWithPayload = <TAction extends ActionWithPayload<TAction["type"], TAction["payload"]>>(
    type: TAction["type"]
): (
    payload: TAction["payload"]
) => ActionWithPayload<TAction["type"], TAction["payload"]> => {
    return (payload: TAction["payload"]) => ({
        type,
        payload
    })
}

export const createAction = <TAction extends Action<TAction["type"]>>(
    type: TAction["type"]
): () => Action<TAction["type"]> => {
    return () => ({
        type
    })
}

export const assertNever = (never: never) => {
    console.error("Never touched")
}
