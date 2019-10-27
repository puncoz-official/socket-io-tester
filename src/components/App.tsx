import React, { FunctionComponent } from "react"
import { Provider } from "react-redux"
import configureStores from "../stores"
import { Header } from "./header"

const store = configureStores()

const App: FunctionComponent = () => (
    <Provider store={store}>
        <div className="container">
            <Header />
        </div>
    </Provider>
)

export default App
