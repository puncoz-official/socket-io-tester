import React, { FunctionComponent } from "react"
import { IconType } from "./type"

interface IconProps extends IconType {
    viewBox: string
}

const Icon: FunctionComponent<IconProps> = ({ size, color, customStyle, viewBox, children }) => {
    return (
        <svg
            style={{
                height: size,
                fill: color,
                ...customStyle,
            }}
            version="1.1"
            x="0px"
            y="0px"
            viewBox={viewBox}
        >
            {children}
        </svg>
    )
}

export default Icon
