import React from 'react'
import '../Sass/Homepage.scss'
import '../Sass/App.scss'
import me from '../img-me/me.png'
import astronaut from '../img-me/me-astronaut.png'
import { useState } from 'react'
import bootstrap from '../logos/bootstrap.png'
import css from '../logos/css.png'
import html from '../logos/html.png'
import javascript from '../logos/jaavscript2.png'
import react from '../logos/react.png'
import greenplanet from '../img-planets/green-planet.png'
import saturne from '../img-planets/saturn.png'
import purpleplanet from '../img-planets/marshmallow-planet.png'

const Homepage = () => {


    return (
        <body>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="#about">A propos de moi</a>
                            </li>
                            <li>
                                <a href="#work">Mes réalisations</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div id="about" className='container'>
                    <div className="title">
                        <h2>A propos de moi</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus similique dolorem veritatis, culpa numquam adipisci consequatur. Pariatur praesentium architecto exercitationem aut minus. Quae deleniti totam ad! In expedita voluptas quis.
                            Tenetur et quam laudantium, ducimus dolor nobis minus unde quae maxime aut asperiores adipisci ex distinctio officiis sequi alias eius temporibus. Eius eos deleniti veritatis rem eveniet ipsum commodi enim?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus reiciendis inventore doloremque totam ullam quibusdam, aut fugiat. Impedit, ea veniam quis laboriosam officia perferendis ipsa molestias aliquam cum harum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis fugit cupiditate quasi ex unde aut sapiente et iste ut omnis, laudantium ullam aspernatur molestias debitis ipsam, at error quisquam?</p>

                        <div className="skills">
                            <img src={bootstrap} alt="bootstrap" />
                            <img src={css} alt="css" />
                            <img src={html} alt="html" />
                            <img src={javascript} alt="javascript" />
                            <img src={react} alt="react" />
                        </div>
                        <button>Mon CV</button>
                    </div>
                    <div className="img-container">
                        <img id="img1" src={me} alt="" />
                        <span>Cliquez sur moi !</span>
                    </div>
                </div>

                <div id="work" className='container'>
                    <div className="title">
                        <h2>Mes réalisations</h2>
                    </div>
                    <div className="img-work">
                        <img src={greenplanet} alt="" />
                        <img src={saturne} alt="" />
                        <img src={purpleplanet} alt="" />
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Homepage