import React from 'react'
import '../Sass/Project.scss'
import work from '../img/work.png'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Col, Row } from 'antd';
import { AiOutlinePlusCircle } from "react-icons/ai";

const Project = () => {
    return (
        <div className="noise">
            <div>
                <Navbar />

                <div class="page-control">
                    <a href="/about" class="prev">
                        <span><FaChevronLeft /></span>
                    </a>
                    <a href="/contact" class="next">
                        <span><FaChevronRight /></span>
                    </a>
                </div>

                <div id="work" className='container'>
                    <div className="title">
                        <h2>Mes projets</h2>
                    </div>

                    <div className="img-work">
                        <Row>
                            <Col md={12} className="portfolio-wrap">
                                <div className="portfolio-item">
                                    <img src={work} alt="" />
                                    <figcaption>test test test</figcaption>
                                    <div className="portfolio-overlay">
                                        <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <img src={work} alt="" />
                                    <figcaption>test test test</figcaption>
                                    <div className="portfolio-overlay">
                                        <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} className="portfolio-wrap">
                                <div className="portfolio-item">
                                    <img src={work} alt="" />
                                    <figcaption>test test test</figcaption>
                                    <div className="portfolio-overlay">
                                        <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <img src={work} alt="" />
                                    <figcaption>test test test</figcaption>
                                    <div className="portfolio-overlay">
                                        <a href="#"><span><AiOutlinePlusCircle /></span></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Project