export const Eyes = () => {

    let eyeOffSetX = 30
    let eyeOffSetY = 30
    let eyeRadius = (10 + Math.random() * 15)

    return (
        <>
            <circle
                cx={-eyeOffSetX}
                cy={-eyeOffSetY}
                r={eyeRadius}
            />
            <circle
                cx={+eyeOffSetX}
                cy={-eyeOffSetY}
                r={eyeRadius}
            />
        </>
    )
}