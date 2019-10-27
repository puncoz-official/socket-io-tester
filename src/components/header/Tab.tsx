import React, { FunctionComponent, useCallback, useMemo } from "react"
import { RemoveIcon } from "../../assets/icons"
import { Connection } from "../../stores/reducers/connections/type"

interface TabProps {
    connection: Connection
    order: number
    active: boolean
    isDragging: boolean
    setActive: (id: number) => void
    closeTab: (id: number) => void
}

const Tab: FunctionComponent<TabProps> = ({connection, order, active, isDragging, setActive, closeTab}) => {
    const connId = useMemo(() => connection.id, [connection.id])

    const handleOnTabClick = useCallback(() => {
        setActive(connId)
    }, [setActive, connId])

    const handleOnTabCloseClick = useCallback(
        event => {
            event.stopPropagation()

            closeTab(connId)
        },
        [closeTab, connId]
    )

    const shrinkUrl = useCallback((url: string): string => {
        if (url.length <= 18) {
            return url
        }

        return `${url.slice(0, 16)}...`
    }, [])

    return (
        <div
            id={`${connection.id}`}
            style={{order}}
            draggable={true}
            onDragStart={e => {
            }}
            className={`header-tab ${active ? "header-tab-active" : ""} ${isDragging ? "header-tab-fade" : ""}`}
            onClick={handleOnTabClick}
        >
            <span className="header-tab-title">{shrinkUrl(connection.url) || "New Tab"}</span>
            <span className="header-tab-close" onClick={handleOnTabCloseClick}>
                <RemoveIcon size={12} color={active ? "#e6e6e6" : "#7a54a8"}/>
            </span>
        </div>
    )
}

export default Tab
