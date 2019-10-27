import { SET_LOADING, SystemActions, SystemState } from "./type"

const initialState: SystemState = {
    isLoading: false,
}

const systemReducer = (state: SystemState = initialState, action: SystemActions): SystemState => {
    if (action.type === SET_LOADING) {
        return { ...state, isLoading: action.payload }
    }

    return state
}

export default systemReducer
