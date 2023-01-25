import React, { useEffect, useState } from 'react'
import '../Sass/Project.scss'
import '../Sass/App.scss'
import '../Sass/Modal.scss'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Avatar, Card, Modal, Skeleton, Button } from 'antd';
import projects from '../Projects';
import Cursor from './Cursor';

const Project = () => {

    // Animation au chargement d'une page, le useEffect permet de simuler le chargement
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    // Variable d'état qui permet de récupérer le bon projet et l'afficher lorsque la modale est activée 
    const [openModalIndex, setOpenModalIndex] = useState(null);

    //

    const { Meta } = Card;
    const listProjects = projects.map(project =>
        <>
            <Card
                key={project.id}
                style={{
                    width: 380,
                    margin: 20
                }}

                cover={
                    <img
                        alt={project.title}
                        src={project.img}
                    />
                }
                actions={[
                    <>
                        <p onClick={() => setOpenModalIndex(project)}>En savoir plus</p><AiOutlineZoomIn />

                        {/* Si le projet correspond à l'index du projet sur lequel on clique, la modale sera affichée */}
                        {openModalIndex === project && (
                            <Modal
                                title={project.title}
                                open={openModalIndex}
                                onCancel={() => setOpenModalIndex(null)}
                                footer={[
                                    <Button key="cancel" onClick={() => setOpenModalIndex(null)}>
                                        Fermer
                                    </Button>
                                ]}
                            >
                                <h1>{project.title}</h1>
                                <p>{project.desc}</p>
                            </Modal>
                        )}
                    </>
                ]}
            >
                {isLoading ? (
                    <Skeleton active />
                ) : (
                    <Meta
                        avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/547/547440.png" />}
                        title={project.title}
                        description={project.desc}
                    />)}
            </Card>


        </>
    );


    return (

        <>
            <Cursor />
            <div className="noise">
                <Navbar />
                <div className="page-control">
                    <Link to="/contact" className="next">
                        <span><FaChevronRight /></span>
                    </Link>

                    <Link to="/about" className="prev">
                        <span><FaChevronLeft /></span>
                    </Link>
                </div>

                <div id="work">
                    <h2>La fonction "En savoir plus" est en cours de développement !</h2>
                    <div className='listProjects'>
                        {listProjects}
                    </div>
                </div>

                <Footer />
            </div>
        </>

    )
}

export default Project