import React from 'react'
import '../Sass/Footer.scss'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-container">
                    &copy; Copyright Andélys Pluquin - 2022
                    <div class="social-bar">
                        <a href="https://github.com/AndelysP" title=""><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/and%C3%A9lys-pluquin/" title=""><AiFillLinkedin /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer