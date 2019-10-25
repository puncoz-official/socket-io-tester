export const SET_LOADING = "system/set_loading"

export interface SystemState {
    isLoading: boolean
}

interface SetLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean
}

export type SystemActionTypes = SetLoadingAction
