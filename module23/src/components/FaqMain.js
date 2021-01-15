import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import arrowUp from "../images/arrowUp.png"
import arrowDown from "../images/arrowDown.png"
import faqMain from "../images/faq_main.png"
import "../../dist/style.css"

function FaqMain() {
    return (
        <>
        <Header />
        <main>
            <img src={faqMain} alt="Картинка со знаком вопроса" className="image" />
            <h1>Частые вопросы</h1>
            <p className="textL">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            <div className="faqWrapper">
                <button className="collapse">
                    Могу ли я отменить бронь?<img src={arrowDown}
                    alt="Стрелка вниз" className="arrowDown" /><img src={arrowUp} alt="Стрелка вверх"
                    className="arrowUp" />
                </button>
                <div className="content">Здесь был бы очень интересный текст, но по ТЗ его нет</div>
                <button className="collapse">
                    Могу ли я вернуть деньги, если не подошёл автомобиль?<img src={arrowDown}
                        alt="Стрелка вниз" className="arrowDown" /><img src={arrowUp} alt="Стрелка вверх"
                        className="arrowUp" />
                </button>
                <div className="content">Здесь был бы очень интересный текст, но по ТЗ его нет</div>
                <button className="collapse">
                    Что делать, если случилось ДТП?<img src={arrowDown} alt="Стрелка вниз"
                        className="arrowDown" /><img src={arrowUp} alt="Стрелка вверх" className="arrowUp" />
                </button>
                <div className="content">Здесь был бы очень интересный текст, но по ТЗ его нет</div>
                <button className="collapse">
                    Могу ли я оставить автомобиль в удобном для меня месте?<img src={arrowDown}
                        alt="Стрелка вниз" className="arrowDown" /><img src={arrowUp} alt="Стрелка вверх"
                        className="arrowUp" />
                </button>
                <div className="content">Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть
                    туда, где вы его получили.</div>
                <button className="collapse">
                    Что делать, если собственник просит заплатить ему напрямую?<img src={arrowDown}
                        alt="Стрелка вниз" className="arrowDown" /><img src={arrowUp} alt="Стрелка вверх"
                        className="arrowUp" />
                </button>
                <div className="content">Здесь был бы очень интересный текст, но по ТЗ его нет</div>
                <button className="collapse">
                    Должен ли я заправлять автомобиль?<img src={arrowDown} alt="Стрелка вниз"
                        className="arrowDown" /><img src={arrowUp} alt="Стрелка вверх" className="arrowUp" />
                </button>
                <div className="content">Здесь был бы очень интересный текст, но по ТЗ его нет</div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default FaqMain