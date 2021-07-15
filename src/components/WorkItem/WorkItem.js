import React from 'react'

import s from '../../style/components/workItem.module.sass'
import github from '../../images/icons/github.svg'
import CircleChart from '../CircleChart/CircleChart'

const WorkItem = (props) => {

    const { name, gitLinks, preview, charts } = props

    let chartsEl = charts.map((el) => (
        <CircleChart
            key={`chart_${el.name}_${el.number}`} 
            name={el.name}
            number={el.number}
            color={el.color}
        />
    ))

    let linksEl = gitLinks.map((el, index) => (
        <a key={`link_${index}`} href={el.link} target="_blank" >
            <img src={github} alt="" />
            <div className={s.git_block}>
                <span>{el.name}</span>
            </div>
        </a>
    ))

    return (
        <div className={s.container} >
            <div className={s.main_block} >
                <img src={preview} alt="" />
                <div className={s.hor_line} ></div>
                <div className={s.link_block} >
                    {linksEl}
                </div>
            </div>
            <div className={s.addit_block} >
                <span>Языки</span>
                {chartsEl}
            </div>

        </div>
    )
}

export default WorkItem;