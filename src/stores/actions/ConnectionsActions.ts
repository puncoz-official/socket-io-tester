import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { addConnection, removeConnection, setActive } from "../reducers/connections/action"

export const addTab = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const id: number = new Date().getTime()

    dispatch(addConnection(id))
    dispatch(setActive(id))
}

export const closeTab = (id: number) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(removeConnection(id))

    // if (id === getState().connections.active) {
    //
    // }
}
