import React from "react"
import "../../dist/style.css"


function Header() {
    return (
        <header>
        <a href="https://skillfactory.ru/" className="logo">SkillDrive</a>
        <div className="navbar-menu">
            <nav className="navbar">
                <ul className="navbar-end">
                    <li className="navbar-item"><a href="about.html">О нас</a></li>
                    <li className="navbar-item"><a href="">Условия</a></li>
                    <li className="navbar-item"><a href="faq.html">Частые Вопросы</a></li>
                </ul>
            </nav>
            <button className="loginButton btn_login">Войти </button>
        </div>
        <div className="burger">
            <input type="checkbox" id="check-menu" />
            <label htmlFor="check-menu" className="menuLabel"></label>
            <div className="burger-line first"></div>
            <div className="burger-line second"></div>
            <div className="burger-line third"></div>
            <div className="burger-line fourth"></div>
            <nav className="main-menu">
                <a href="about.html" className="burgerLink">О нас</a>
                <a href="" className="burgerLink">Условия</a>
                <a href="faq.html" className="burgerLink">Частые Вопросы</a>
                <a href="" className="burgerLink">Войти</a>
            </nav>
        </div>
    </header>
    )
}

export default Header