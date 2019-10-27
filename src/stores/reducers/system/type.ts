import { ActionWithPayload } from "../../types"

export const SET_LOADING = "system/set_loading"

export interface SystemState {
    isLoading: boolean
}

export interface SetLoadingAction extends ActionWithPayload<typeof SET_LOADING, boolean> {
}

export type SystemActions = SetLoadingAction
