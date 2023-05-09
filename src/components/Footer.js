import React from 'react'
import '../assets/sass/Footer.scss'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {

    let today = new Date();
    let year = today.getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <ul className="socials">
                    <li><a href="https://github.com/AndelysP" target="_blank" rel="noreferrer" aria-label="Lien vers mon profil Github"><AiFillGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/and%C3%A9lys-pluquin/" target="_blank" rel="noreferrer" aria-label="Lien vers mon profil LinkedIn"><AiFillLinkedin /></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>Made with ☕ - &copy;{year} - designed by <span>Andélys Pluquin</span> - Image by Freepik</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer