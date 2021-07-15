import React, { useEffect, useRef, useState } from 'react'

import s from '../../style/components/circleChart.module.sass'


const CircleChart = (props) => {

    const { name, number, color } = props

    const [view, setView] = useState(false)
    const chart = useRef(null)


    let circle_two = {
        //transform: `rotate(${360*number/100}deg)`,
        stroke: color,
        strokeDashoffset: 276 - (276 * number / 100)
    }

    let observCallback = (entires) => {
        if (entires[0].intersectionRatio <= 0) return setView(false)
        return setView(true)
    }

    useEffect(() => {
        let intersectionObserver = new IntersectionObserver(observCallback)

        if (chart && chart.current) intersectionObserver.observe(chart.current)

        return function cleanup() {
            intersectionObserver.unobserve(chart.current)
        }
    }, [chart])

    return (
        <div className={s.container} >
            <div ref={chart} className={s.circle_svg}>
                <svg width="100" height="100" >
                    <circle r="44" cy="44" cx="44" style={{stroke: color, opacity: 0.6}} ></circle>
                    <circle r="44" cy="44" cx="44" style={view ? circle_two : null} ></circle>
                </svg>
            </div>
            <p className={s.number} >
                {number}%
                    </p>
            <p className={s.name} >
                {name}
            </p>
        </div>
    )
}

export default CircleChart