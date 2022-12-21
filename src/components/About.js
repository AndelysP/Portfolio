import React from 'react'
import '../Sass/About.scss'
import '../Sass/App.scss'
import me from '../img-me/me.png'
import astronaut from '../img-me/me-astronaut.png'
import { useState } from 'react'
import bootstrap from '../logos/bootstrap.png'
import css from '../logos/css.png'
import html from '../logos/html.png'
import javascript from '../logos/jaavscript2.png'
import react from '../logos/react.png'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaChevronRight } from "react-icons/fa";
import Image from './Image'

const About = () => {

    return (
        <div className="noise">
        <body>
            <Navbar />
            <main>

                <div class="page-control">
                    <a href="/work" class="next">
                        <span><FaChevronRight/></span>
                    </a>
                </div>

                <div id="about" className='container'>
                    
                    <div className="title">
                        <h2>A propos de moi</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus similique dolorem veritatis, culpa numquam adipisci consequatur. Pariatur praesentium architecto exercitationem aut minus. Quae deleniti totam ad! In expedita voluptas quis.
                            Tenetur et quam laudantium, ducimus dolor nobis minus unde quae maxime aut asperiores adipisci ex distinctio officiis sequi alias eius temporibus. Eius eos deleniti veritatis rem eveniet ipsum commodi enim?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus reiciendis inventore doloremque totam ullam quibusdam, aut fugiat. Impedit, ea veniam quis laboriosam officia perferendis ipsa molestias aliquam cum harum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis fugit cupiditate quasi ex unde aut sapiente et iste ut omnis, laudantium ullam aspernatur molestias debitis ipsam, at error quisquam?</p>

                        <div className="skills">
                            <img src={css} alt="css" />
                            <img src={html} alt="html" />
                            <img src={bootstrap} alt="bootstrap" />
                            <img src={javascript} alt="javascript" />
                            <img src={react} alt="react" />
                        </div>
                        <button>Mon CV</button>
                    </div>
                    <div className="img-container">
                        <Image/>
                        <span>Cliquez sur moi !</span>
                    </div>
                </div>


            </main>
            <footer>
                <Footer />
            </footer>
        </body>
        </div>

    )
}

export default About