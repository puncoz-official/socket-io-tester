import { SET_LOADING, SystemActionTypes, SystemState } from "./types"

const initialState: SystemState = {
    isLoading: false
}

const systemReducer = (state: SystemState = initialState, action: SystemActionTypes): SystemState => {
    if (action.type === SET_LOADING) {
        return {...state, isLoading: action.payload}
    }

    return state
}

export default systemReducer
