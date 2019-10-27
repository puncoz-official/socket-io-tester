import React, { FunctionComponent } from "react"

interface AddTabProps {
    order: number
    addTab: () => void
}

const AddTab: FunctionComponent<AddTabProps> = ({ order, addTab }) => {
    return (
        <div id="add-button" className="header-button-plus" onClick={addTab} style={{ order }}>
            <span>+</span>
        </div>
    )
}

export default AddTab
