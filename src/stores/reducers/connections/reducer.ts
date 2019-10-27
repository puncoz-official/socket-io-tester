import { ADD_CONNECTION, ConnectionsActions, ConnectionsState, REMOVE_CONNECTION, SET_ACTIVE } from "./type"

const initialState: ConnectionsState = {
    list: [],
    active: 0,
}

const connectionReducer = (state: ConnectionsState = initialState, action: ConnectionsActions): ConnectionsState => {
    if (action.type === ADD_CONNECTION) {
        const list = [...state.list]

        list.push({
            url: "",
            id: action.payload,
            disabled: false,
            connected: false,
            events: [],
            order: list.length + 1,
        })

        return { ...state, list }
    }

    if (action.type === REMOVE_CONNECTION) {
        const list = [...state.list]

        return {
            ...state,
            list: list.map(connection => {
                if (connection.id === action.payload) {
                    connection.disabled = true
                }

                return connection
            }),
        }
    }

    if (action.type === SET_ACTIVE) {
        return { ...state, active: action.payload }
    }

    return state
}

export default connectionReducer
