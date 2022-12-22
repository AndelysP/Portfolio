import React from 'react'
import '../Sass/Project.scss'
import disneyplus from '../img-work/project1/disneyplus.png'
import mywebsite from '../img-work/project4/my-website.png'
import cakes3000 from '../img-work/project3/cakes3000.png'
import drinks3000 from '../img-work/project2/drinks3000.png'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Col, Row } from 'antd';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className="noise">
            <Navbar />

            <div className="page-control">
                <Link to="/about" className="prev">
                    <span><FaChevronLeft /></span>
                </Link>
                <Link to="/contact" className="next">
                    <span><FaChevronRight /></span>
                </Link>
            </div>

            <div id="work" className='container'>
                <div className="title">
                    <h2>Mes projets</h2>
                </div>

                <div className="img-work">
                    <Row>
                        <Col md={12} className="portfolio-wrap">
                            <div className="portfolio-item">
                                <img src={drinks3000} alt="" />
                                <figcaption>
                                    <h3>Drinks3000</h3>
                                    <p>Création d'un site de boissons énergisantes personnalisées, réalisé avec HTML, CSS, Javascript.</p>
                                </figcaption>
                                <div className="portfolio-overlay">
                                    <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <img src={disneyplus} alt="" />
                                <figcaption>
                                    <h3>Disney+</h3>
                                    <p>Reproduction d'un site de streaming avec HTML, CSS, Javascript (React)</p>
                                </figcaption>
                                <div className="portfolio-overlay">
                                    <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} className="portfolio-wrap">
                            <div className="portfolio-item">
                                <img src={cakes3000} alt="" />
                                <figcaption>
                                    <h3>Cakes3000</h3>
                                    <p>Site internet pour une chaîne de pâtisserie, réalisé avec HTML et CSS (Bootstrap).</p>
                                </figcaption>
                                <div className="portfolio-overlay">
                                    <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <img src={mywebsite} alt="" />
                                <figcaption>
                                    <h3>Mon portfolio</h3>
                                    <p>Création de mon portfolio, réalisé avec HTML, CSS, Javascript (React)</p>
                                </figcaption>
                                <div className="portfolio-overlay">
                                    <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project