import React from 'react'

import s from '../../style/components/infoBlock.module.sass'

const InfoBlock = (props) => {

    const { title } = props

    return (
        <div className={s.container} >
            <h4 className={s.title} >{title}</h4>
            <div className={s.content} >
                {props.children}
            </div>
        </div>
    )
}

export default InfoBlock