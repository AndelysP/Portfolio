import React from 'react'
import '../Sass/Project.scss'
import work from '../img-planets/work.png'
import { Col, Row } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';

const Project = () => {
    return (
        <div>
            <Navbar />
            
            <div id="work" className='container'>
                <div className="title">
                    <h2>Mes projets</h2>
                </div>
                <div className="img-work">
                    <Row>
                        <Col span={12}>
                            <img src={work} alt="" />
                            <img src={work} alt="" />
                        </Col>

                        <Col span={12}>
                            <img src={work} alt="" />
                            <img src={work} alt="" />
                        </Col>

                    </Row>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Project