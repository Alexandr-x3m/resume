import React, { useEffect, useState, useRef } from 'react'

import s from '../../style/components/header.module.sass'

import avatar from '../../images/3d-printing.jpg'
import telegram from '../../images/icons/telegram.svg'
import github from '../../images/icons/github.svg'
import inst from '../../images/icons/inst.svg'
import linkedin from '../../images/icons/linkedin.svg'

const Header = (props) => {

    const [view, setView] = useState(false)
    const header = useRef(null)


    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.document.body.clientWidth < 660) return
        let topX = header.current.getBoundingClientRect().top
        if (topX <= 0) return setView(true)
        return setView(false)
    }

    console.log(view)
    return (
        <>
            {window.document.body.clientWidth <= 660
                ? (<header className={s.mobile_header} >
                    <div>
                        <p className={s.name} >
                            Александр
                        </p>
                    </div>
                </header>)
                : (<div className={s.container}>
                    <div className={s.main_info + ' ' + (view ? s.small_top : null)} ref={header}  >
                        <img className={s.avatar} src={avatar} alt="" />
                        <div className={s.text_grid}>
                            <div>
                                <p className={s.name} >
                                    Александр Виноградов
                                </p>
                                <p className={s.profession} >
                                    web developer / frontend
                                </p>
                            </div>
                            <div className={s.findMe_container} >
                                <p>найди меня</p>
                                <div>
                                    <a href="google.com">
                                        <img className={s.icon} src={linkedin} alt="" />
                                    </a>
                                    <a href="google.com">
                                        <img className={s.icon} src={github} alt="" />
                                    </a>
                                    <a href="google.com">
                                        <img className={s.icon} src={inst} alt="" />
                                    </a>
                                    <a href="google.com">
                                        <img className={s.icon} src={telegram} alt="" />
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div
                        className={s.header}
                        style={view ? { borderBottom: "1px solid rgba(255, 255, 255, 0.4)" } : null}
                    ></div>
                </div>)
            }
        </>
    )
}

export default Header;