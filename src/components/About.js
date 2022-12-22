import React from 'react'
import '../Sass/About.scss'
import '../Sass/App.scss'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaChevronRight, FaBootstrap, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import Image from './Image'
import cv from '../andelys_pluquin_cv.pdf'
import { Link } from 'react-router-dom'

const About = () => {

    return (
        <div className="noise">
            <Navbar />
            <div className="page-control">
                <Link to="/work" className="next">
                    <span><FaChevronRight /></span>
                </Link>
            </div>

            <div id="about" className='container'>

                <div className="title">
                    <h2>A propos de moi</h2>
                    <p>Hello ! Je m'appelle <span>Andélys</span>, originaire du nord de la France, j'entreprends actuellement une reconversion professionnelle pour devenir <span>Développeuse Fullstack</span>. Auparavant, j'ai commencé à apprendre en autodidacte avec OpenClassrooms et d'autres ressources publiques, maintenant je suis la formation Développeur Web/Web Mobile au sein de <span>M2i</span> à Villeneuve d'Ascq. Mon intérêt pour l'informatique a commencé dès mon plus jeune âge, et c'est après une longue réflexion que je me suis lancée ce défi de reconversion. 🚀 Je suis passionnée par <span>l'astronomie</span> et les nouvelles technologies. Je suis à la recherche d'un <span>stage</span> pour mettre en pratique toutes les compétences que j'aurai eu l'occasion de voir durant ma formation mais également de me perfectionner auprès de personnes compétentes ! Peut-être que mon voyage se poursuivra avec vous ! En attendant, je continue de travailler chaque jour avec <span>passion</span> et des idées pleins la tête. ✨</p>
                    <p> <span>Soft skills:</span>  Empathie, persévérance, esprit d'équipe, gestion du temps</p>
                    <p> <span>Hard skills :</span>  HTML, CSS, Javascript, React, Redux, Bootstrap...</p>
                    <div className="skills">
                        <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> <SiRedux /> <FaBootstrap />
                    </div>
                    <button><a href={cv} download="CV Andélys_Pluquin">Mon CV  </a><IoDocumentTextOutline /></button>
                </div>

                <div className="img-container">
                    <Image />
                    <span>Cliquez sur moi !</span>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default About