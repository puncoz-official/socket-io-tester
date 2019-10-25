import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import reducers from "./reducers"

export default () => {
    const middleware = [thunk]
    const middlewareEnhancer = applyMiddleware(...middleware)

    return createStore(
        reducers,
        composeWithDevTools(middlewareEnhancer)
    )
}
