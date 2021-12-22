import * as d3 from 'd3';

export const Mouth = () => {
    let mouthWidth = (5 + Math.random() * 10)
    let mouthRadius = 50
    const mouthArc = d3.arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);
    return <path d={mouthArc()} />

}

