import { createActionWithPayload } from "../../types"
import { SET_LOADING, SetLoadingAction } from "./type"

export const setLoading = createActionWithPayload<SetLoadingAction>(SET_LOADING)
