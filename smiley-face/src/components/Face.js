import { BackGroundCircle } from "./BackGroundCircle"
import { Eyes } from "./Eyes"
import { Mouth } from "./Mouth"

export const Face = ({
    height,
    width
}) => {
    let centerX = width / 2
    let centerY = height / 2

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                <BackGroundCircle
                    centerY={centerY}
                />
                <Eyes />
                <Mouth />
            </g>
        </svg>
    )

}



