import React from "react"

import "../../dist/style.css"
import Header from "./Header"
import Footer from "./Footer"

import logo from "../images/logo.png"
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import team4 from "../images/team4.png"
import team5 from "../images/team5.png"
import team6 from "../images/team6.png"


function AboutMain() {
    return (
        <>
        <Header />
        <main>
            <section className="aboutUsPreview">
                <img src={logo} alt="Приветственная картинка" className="image" />
                <h1>О нас</h1>
                <div className="aboutUsText">
                    Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого
                    веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать
                    автомобили, но и сдавать их в аренду.
                </div>
            </section>
            <section className="contacts">
                <h2>Контакты</h2>
                <div className="email">
                    <span className="key">Электронная почта</span>
                    <span className="value">drive@skillfactory.com</span>
                </div>
                <div className="email">
                    <span className="key">Телефон</span>
                    <span className="value">+7 912 123-45-67</span>
                </div>
            </section>
            <section className="team">
                <h2>Команда</h2>
                <div className="first">
                    <div className="firstRow">
                        <div className="person">
                            <img src={team1} alt="фото Иван Иванов" className="photo" />
                            <p className="name">Иван Иванов</p>
                            <p className="position">CEO</p>
                        </div>
                        <div className="person">
                            <img src={team2} alt="фото Алексей Смирнов" className="photo" />
                            <p className="name">Алексей Смирнов</p>
                            <p className="position">Frontend-разработчик</p>
                        </div>
                    </div>
                    <div className="firstRow">
                        <div className="person">
                            <img src={team3} alt="фото Денис Ярцев" className="photo" />
                            <p className="name">Денис Ярцев</p>
                            <p className="position">Backend-разработчик</p>
                        </div>
                        <div className="person">
                            <img src={team4} alt="фото Николай Морозов" className="photo" />
                            <p className="name">Николай Морозов</p>
                            <p className="position">Дизайнер</p>
                        </div>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="person">
                        <img src={team5} alt="фото Ирина Деева" className="photo" />
                        <p className="name">Ирина Деева</p>
                        <p className="position">Копирайтер</p>
                    </div>
                    <div className="person">
                        <img src={team6} alt="фото Мария Стрелкова" className="photo" />
                        <p className="name">Мария Стрелкова</p>
                        <p className="position">SMM</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default AboutMain