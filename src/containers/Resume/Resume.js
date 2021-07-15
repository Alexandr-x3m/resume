import React from 'react'

import s from '../../style/containers/resume.module.sass'
import Header from '../../components/Header/Header.js'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import WorkItem from '../../components/WorkItem/WorkItem'

import preview_3da_front from '../../images/work_preview/3da-front-v1.png'

const Resume = (props) => {

    return (
        <>
            {props.children}
            <Header />
            <div className={s.top_container} ></div>
            <div className={s.bottom_container}  >
                <InfoBlock title={'about'} >
                    <p>Что касается меня как личности, я общительный, целеустремлённый, трудности воспринимаю как то, что нужно преодолеть. Нравится работать в команде, так как я считаю, что в команде ты быстрее обучаешься.</p>
                </InfoBlock>
                <InfoBlock title={'stack'} >
                    <div className={s.list} >
                        <div>
                            <span>Основные</span>
                            <ul>
                                <li>ES6</li>
                                <li>React JS</li>
                                <li>TypeScript</li>
                                <li>Redux</li>
                                <li>jQuery</li>
                                <li>HTML5</li>
                                <li>CSS3 (sass)</li>
                                <li>Rest / Websocket</li>
                                <li>Graph Ql</li>
                                <li>Webpack</li>
                                <li>Next JS</li>
                            </ul>
                        </div>
                        <div>
                        <span>Основные</span>
                        <ul>
                            <li>SOLID/DRY/KISS</li>
                            <li>методология БЭМ</li>
                            <li>Figma</li>
                        </ul>
                        </div>
                    </div>
                </InfoBlock>
                <InfoBlock title={'Experience'} >
                    <div className={s.row} >
                        <span>
                            Fulogy
                        </span>
                        <div>
                            <p className={s.time} >August 2020 - December 2020</p>
                            <p className={s.description} >
                                В компании занимался созданием разработкой интерфейса для CRM и торговой площадки. 
                            </p>
                        </div>
                    </div>
                    <div className={s.row} >
                        <span>
                            Stalogistic
                        </span>
                        <div>
                            <p className={s.time} >October 2019 - February 2020</p>
                            <p className={s.description} >
                                В компании занимался созданием разработкой интерфейса для CRM и торговой площадки. 
                            </p>
                        </div>
                    </div>
                </InfoBlock>
                <InfoBlock title={'Works'} >
                    <div className={s.works_list} >
                        <WorkItem 
                            gitLinks={[
                                {
                                    link: 'https://github.com/Alexandr-x3m/3da_front_v1',
                                    name: 'Alexandr-x3m/3da_front_v1'
                                },
                            ]}
                            charts={[
                                {
                                    name: 'TypeScript',
                                    number: 68,
                                    color: '#2B7489',
                                },
                                {
                                    name: 'Sass',
                                    number: 31.4,
                                    color: '#A53B70',
                                },
                                {
                                    name: 'Other',
                                    number: 0.6,
                                    color: '#EDEDED',
                                },
                            ]}
                            preview={preview_3da_front}
                        />
                    </div>
                </InfoBlock>
                <InfoBlock title={'education'} >
                    <div className={s.row} >
                        <span>Университет</span>
                        <p>НОЧУ ВО «МИИУЭП»</p>
                    </div>
                    <div className={s.row} >
                        <span>Факультет</span>
                        <p>Менеджмент / бакалавриат</p>
                    </div>
                    <div className={s.row} >
                        <span>Конец обучения</span>
                        <p>2021 г.</p>
                    </div>
                </InfoBlock>
            </div>
        </>
    )
}

export default Resume