import React, { FunctionComponent, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTab, closeTab } from "../../stores/actions/ConnectionsActions"
import { setActive } from "../../stores/reducers/connections/action"
import { AppStates } from "../../stores/types"
import AddTab from "./AddTab"
import Tab from "./Tab"

const Header: FunctionComponent = () => {
    const connections = useSelector((state: AppStates) => state.connections.list)
    const activeConnection = useSelector((state: AppStates) => state.connections.active)

    const dispatch = useDispatch()

    const addTabHandler = useCallback(() => {
        dispatch(addTab())
    }, [dispatch])

    const closeTabHandler = useCallback(
        (connId: number) => {
            dispatch(closeTab(connId))
        },
        [dispatch]
    )

    return (
        <div className="header">
            {connections
                .filter(c => !c.disabled)
                .map((connection, index) => (
                    <Tab
                        key={index}
                        connection={connection}
                        order={connection.order}
                        active={activeConnection === connection.id}
                        isDragging={false}
                        setActive={id => dispatch(setActive(id))}
                        closeTab={closeTabHandler}
                    />
                ))}

            <AddTab order={connections.length + 1} addTab={addTabHandler}/>
        </div>
    )
}

export default Header
