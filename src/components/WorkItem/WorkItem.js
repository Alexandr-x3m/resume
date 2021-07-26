import React from 'react'

import s from '../../style/components/workItem.module.sass'
import github from '../../images/icons/github.svg'
import CircleChart from '../CircleChart/CircleChart'

const WorkItem = (props) => {

    const { name, gitLinks, preview, charts, description, stack, } = props

    let chartsEl = charts.map((el) => (
        <CircleChart
            key={`chart_${el.name}_${el.number}`}
            name={el.name}
            number={el.number}
            color={el.color}
        />
    ))

    let linksEl = gitLinks.map((el, index) => (
        <div className={s.git_block}>
            <a key={`link_${index}`} href={el.link} target="_blank" >
                <div className={s.link}>
                    <img src={github} alt="" />
                    <div className={s.git_block}>
                        <span>{el.name}</span>
                    </div>
                </div>
            </a>
        </div>

    ))

    return (
        <div className={s.container} >
            <div className={s.main_block} >
                <img src={preview} alt="" />
                <a
                    href="google.com"
                    target="_blank"
                >
                    <button
                        className={s.demo_btn}
                    >
                        Демо
                    </button>
                </a>
                <div className={s.hor_line} ></div>
                <div className={s.link_block} >
                    {linksEl}
                </div>
            </div>
            <div className={s.addit_block} >
                {/* <span>Языки</span>
                {chartsEl} */}
                <p className={s.addit_description}>
                    {description}
                </p>
                <h5 className={s.addit_subtitle}>
                    Технологии
                </h5>
                <div className={s.stack_container} >
                    {stack.map((el, index) => (
                        <div key={`key_stack_${index}`} className={s.stack_item} >
                            {el}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default WorkItem;