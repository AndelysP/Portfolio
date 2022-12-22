import React from 'react'
import '../Sass/Footer.scss'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <ul className="socials">
                    <li><a href="https://github.com/AndelysP" title=""><AiFillGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/and%C3%A9lys-pluquin/" title=""><AiFillLinkedin /></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>Made with ☕ - &copy;2022 - designed by <span>Andélys Pluquin</span> - Image by Freepik</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer