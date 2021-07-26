import React, { useState } from 'react'

import s from '../../style/containers/resume.module.sass'
import Header from '../../components/Header/Header.js'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import WorkItem from '../../components/WorkItem/WorkItem'

import preview_3da_front from '../../images/work_preview/3da-front-v1.png'
import location_icon from '../../images/icons/room.svg'
import copy_icon from '../../images/icons/assignment.svg'


const Resume = (props) => {

    const [stackCategory, setStackCategory] = useState('technologies')
    const [workCategory, setWorkCategory] = useState('one')

    return (
        <>
            {props.children}
            <Header />
            <div className={s.contacts_conatiner} >
                <div className={s.line_block} >
                    <h4 className={s.name_item}>
                        Дата рожедния
                    </h4>
                    <h4 className={s.des_item}>
                        27/августа/1998
                    </h4>
                </div>
                <div className={s.line_block} >
                    <h4 className={s.name_item}>
                        Почта
                    </h4>
                    <div>
                        <h4 className={s.des_item}>
                            nomadsantey21@mail.ru
                        </h4>
                        <button
                            className={s.contacts_icon}
                            onClick={console.log('copied')}
                        >
                            <img src={copy_icon} alt="" />
                        </button>
                    </div>
                </div>
                <div className={s.line_block} >
                    <h4 className={s.name_item}>
                        Телефон
                    </h4>
                    <a
                        href={`tel:89295436694`}
                        className={s.des_item}
                    >
                        8 (929) 543-66-94
                    </a>
                </div>
                <div className={s.line_block} >
                    <h4 className={s.name_item}>
                        Адрес
                    </h4>
                    <div>
                        <h4 className={s.des_item}>
                            Россия/ Московская обл./ Солнечногорск
                        </h4>
                        <a
                            href="https://www.google.ru/maps/place/Солнечногорск,+Московская+обл./@56.1847212,36.9160591,12z/data=!3m1!4b1!4m5!3m4!1s0x46b508d1109ed25b:0x9e066ba6e4764947!8m2!3d56.190913!4d36.9721914"
                            target="_blank"
                        >
                            <button
                                className={s.contacts_icon}
                                onClick={console.log('copied')}
                            >
                                <img src={location_icon} className={s.location_icon} alt="" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.bottom_container}  >
                <InfoBlock title={'about'} >
                    <p>Что касается меня как личности, я общительный, целеустремлённый, трудности воспринимаю как то, что нужно преодолеть. Нравится работать в команде, так как я считаю, что в команде ты быстрее обучаешься.</p>
                </InfoBlock>
                <InfoBlock title={'stack'} >
                    <div className={s.stack_nav_container} >
                        <button
                            className={stackCategory === 'technologies' ? s.active_section : null}
                            onClick={() => setStackCategory('technologies')}
                        >
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={s.stack_nav_icon} d="M2.23125 3.29375C2.44375 4.675 2.65625 4.99375 2.65625 6.375C2.65625 7.225 1.0625 7.96875 1.0625 7.96875V9.03125C1.0625 9.03125 2.65625 9.775 2.65625 10.625C2.65625 12.0063 2.44375 12.325 2.23125 13.7062C1.9125 15.9375 3.08125 17 4.14375 17C5.20625 17 6.375 17 6.375 17V14.875C6.375 14.875 4.4625 15.0875 4.4625 13.8125C4.4625 12.8562 4.675 12.8563 4.8875 10.7313C4.99375 9.775 4.35625 9.03125 3.71875 8.5C4.35625 7.96875 4.99375 7.33125 4.8875 6.375C4.56875 4.25 4.4625 4.25 4.4625 3.29375C4.4625 2.01875 6.375 2.125 6.375 2.125V0C6.375 0 5.3125 0 4.14375 0C2.975 0 1.9125 1.0625 2.23125 3.29375Z" fill="#ffffff" />
                                <path className={s.stack_nav_icon} d="M14.7687 3.29375C14.5562 4.675 14.3438 4.99375 14.3438 6.375C14.3438 7.225 15.9375 7.96875 15.9375 7.96875V9.03125C15.9375 9.03125 14.3438 9.775 14.3438 10.625C14.3438 12.0062 14.5562 12.325 14.7687 13.7062C15.0875 15.9375 13.9188 17 12.8563 17C11.7938 17 10.625 17 10.625 17V14.875C10.625 14.875 12.5375 15.0875 12.5375 13.8125C12.5375 12.8562 12.325 12.8562 12.1125 10.7312C12.0062 9.775 12.6437 9.03125 13.2812 8.5C12.6437 7.96875 12.0062 7.33125 12.1125 6.375C12.325 4.25 12.5375 4.25 12.5375 3.29375C12.5375 2.01875 10.625 2.125 10.625 2.125V0C10.625 0 11.6875 0 12.8563 0C14.025 0 15.0875 1.0625 14.7687 3.29375Z" fill="#ffffff" />
                            </svg>
                            Технологии
                        </button>
                        <button
                            className={stackCategory === 'theory' ? s.active_section : null}
                            onClick={() => setStackCategory('theory')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="subject_24px">
                                    <path className={s.stack_nav_icon} id="icon/action/subject_24px" fill-rule="evenodd" clip-rule="evenodd" d="M4 7V5H20V7H4ZM4 9H20V11H4V9ZM4 17H14V19H4V17ZM4 15H20V13H4V15Z" fill="white" />
                                </g>
                            </svg>
                            Теория
                        </button>
                        <button
                            className={stackCategory === 'programs' ? s.active_section : null}
                            onClick={() => setStackCategory('programs')}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="laptop_mac_24px">
                                    <path className={s.stack_nav_icon} id="icon/hardware/laptop_mac_24px" fill-rule="evenodd" clip-rule="evenodd" d="M20 18.5C21.1 18.5 21.99 17.6 21.99 16.5L22 5.5C22 4.4 21.1 3.5 20 3.5H4C2.9 3.5 2 4.4 2 5.5V16.5C2 17.6 2.9 18.5 4 18.5H0C0 19.6 0.9 20.5 2 20.5H22C23.1 20.5 24 19.6 24 18.5H20ZM4 5.5H20V16.5H4V5.5ZM11 18.5C11 19.05 11.45 19.5 12 19.5C12.55 19.5 13 19.05 13 18.5C13 17.95 12.55 17.5 12 17.5C11.45 17.5 11 17.95 11 18.5Z" fill="white" />
                                </g>
                            </svg>
                            Программы
                        </button>
                    </div>
                    <div className={s.list} >
                        {stackCategory === 'technologies'
                            ? (<ul>
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
                            </ul>)
                            : (stackCategory === 'theory'
                                ? (<ul>
                                    <li>БЭМ Документация</li>
                                    <li>SOLID/DRY/KISS</li>
                                    <li>методология БЭМ</li>
                                </ul>)
                                : (stackCategory === 'programs'
                                    ? (<ul>
                                        <li>VS Code</li>
                                        <li>Figma</li>
                                        <li>Photoshop</li>
                                    </ul>)
                                    : null
                                )
                            )
                        }
                    </div>
                </InfoBlock>
                <InfoBlock title={'Experience'} >
                    <div className={s.work_navigation} >
                        <button
                            className={(workCategory === 'one' ? s.active_work_cat : null)}
                            onClick={() => setWorkCategory('one')}
                        >
                            <div className={s.date_block}>
                                <p className={s.date_year}>2019</p>
                                <p className={s.date_month}>октябрь</p>
                            </div>
                            <div className={s.interval_line} ></div>
                            <div className={s.date_block}>
                                <p className={s.date_year}>2020</p>
                                <p className={s.date_month}>февраль</p>
                            </div>
                        </button>
                        <button
                            className={(workCategory === 'two' ? s.active_work_cat : null)}
                            onClick={() => setWorkCategory('two')}
                        >
                            <div className={s.date_block}>
                                <p className={s.date_year}>2020</p>
                                <p className={s.date_month}>август</p>
                            </div>
                            <div className={s.interval_line} ></div>
                            <div className={s.date_block}>
                                <p className={s.date_year}>2020</p>
                                <p className={s.date_month}>декабрь</p>
                            </div>
                        </button>
                    </div>
                    {(workCategory === 'one'
                        ? (<div>
                            <h4 className={s.compamy}>
                                Stalogistic
                            </h4>
                            <h4 className={s.post} >
                                Fullstack web developer
                            </h4>
                            <p className={s.description}>
                                Данная компания была моим первым опытом работы. В компании я работал над созданием СРМ системы, на C# - backend, Jquery - frontend.
                                В обязанности входило, общение с будущими пользователями о необходимом функционале, создание прототипа будущего интерфейса и бэкенд части, для полноценной работы прототипа.
                                Написание документции по пользованию системой.
                            </p>
                        </div>)
                        : (<div>
                            <h4 className={s.compamy}>
                                Fulogy
                            </h4>
                            <h4 className={s.post} >
                                Frontend web developer
                            </h4>
                            <p className={s.description}>
                                В компании состоял в команде Frontend разработчиков из 5 чел.,
                                мы занимались написанием интерфейса для торговой площадки и СРМ системы, которая создавалась для администрирования тп.
                                Стек технологий на двух проектах был React, TypeScript, GraphQl, Material UI
                            </p>
                        </div>)
                    )}
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
                            description={
                                `Сайт для предоставления услуг в сфере 3D моделирования и витриной существующих моделей. 
                                Данный проект написан с помощью библиотеки Next JS, не используя возможности SSR, только static render. 
                                Так на сайте использовалась бибилиотека Three JS для загрузки готовых 3D моделей.
                                Для базы данных используется Hasura Cloud, промежуточный сервис на Express JS`
                            }
                            stack={[
                                'React',
                                'GraphQl',
                                'TypeScript',
                                'ExpressJS',
                            ]}
                        />
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
                            description={
                                `Сайт для предоставления услуг в сфере 3D моделирования и витриной существующих моделей. 
                                Данный проект написан с помощью библиотеки Next JS, не используя возможности SSR, только static render. 
                                Так на сайте использовалась бибилиотека Three JS для загрузки готовых 3D моделей.
                                Для базы данных используется Hasura Cloud, промежуточный сервис на Express JS`
                            }
                            stack={[
                                'React',
                                'GraphQl',
                                'TypeScript',
                                'ExpressJS',
                            ]}
                        />
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
                            description={
                                `Сайт для предоставления услуг в сфере 3D моделирования и витриной существующих моделей. 
                                Данный проект написан с помощью библиотеки Next JS, не используя возможности SSR, только static render. 
                                Так на сайте использовалась бибилиотека Three JS для загрузки готовых 3D моделей.
                                Для базы данных используется Hasura Cloud, промежуточный сервис на Express JS`
                            }
                            stack={[
                                'React',
                                'GraphQl',
                                'TypeScript',
                                'ExpressJS',
                            ]}
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