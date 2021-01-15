import React from "react"
import "../../dist/style.css"

import vkLogo from "../images/vk_logo.png"
import instagramLogo from "../images/instagram_logo.png"
import facebookLogo from "../images/facebook_logo.png"

function Footer() {
    return (
        <footer>
            <div className="copyright">© SkillDrive Inc. 2020</div>
            <div className="social">
                <ul>
                    <li className="footerSocial">
                        <img src={vkLogo} alt="логотип Vkontakte" className="socialLogo" /></li>
                    <li className="footerSocial">
                        <img src={instagramLogo} alt="логотип Instagram" className="socialLogo" /></li>
                    <li className="footerSocial">
                        <img src={facebookLogo} alt="логотип Facebook" className="socialLogo" /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer