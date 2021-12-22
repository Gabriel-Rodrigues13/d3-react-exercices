export const BackGroundCircle = ({ centerY }) => {
    let strokeWidth = 10
    let radius = centerY - strokeWidth / 2

    return (
        <circle
            r={radius}
            strokeWidth={strokeWidth}
            fill="yellow"
            stroke="black"
        />
    )
}
