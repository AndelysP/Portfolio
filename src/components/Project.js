import React, { useEffect, useState } from 'react'
import '../assets/sass/Project.scss'
import '../assets/sass/App.scss'
import '../assets/sass/Modal.scss'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AiOutlineZoomIn, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Avatar, Card, Modal, Skeleton, Button } from 'antd';
import projects from '../Projects';
import Cursor from './Cursor';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Project = () => {

    // Animation au chargement d'une page, le useEffect permet de simuler le chargement
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    // Variable d'état qui permet de récupérer le bon projet et l'afficher lorsque la modale est activée 
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const { Meta } = Card;
    const listProjects = projects.map((project, index) =>
        <div className='displayList' key={index}>
            <Card
                key={index}
                style={{
                    width: 365,
                }}

                cover={
                    <img
                        alt={project.title}
                        src={project.img_header}
                    />
                }
                actions={[
                    <>
                        <p className="more" onClick={() => setOpenModalIndex(project)}>En savoir plus<AiOutlineZoomIn /></p>

                        {/* Si le projet correspond à l'index du projet sur lequel on clique, la modale sera affichée */}
                        {openModalIndex === project && (
                            <Modal
                                width={1000}
                                open={openModalIndex}
                                onCancel={() => setOpenModalIndex(null)}
                                footer={[
                                    <Button key="cancel" onClick={() => setOpenModalIndex(null)}>
                                        Fermer
                                    </Button>
                                ]}
                            >
                                <div className='TikSidebar'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="project-wrapper">
                                    <div className="project-left-wrapper">
                                        {project.img_project.map((img, index) => (
                                            <Zoom key={index}>
                                                <img
                                                    alt={project.title}
                                                    src={img}
                                                />
                                            </Zoom>

                                        ))}
                                    </div>
                                    <div className="project-right-wrapper">
                                        <h1>{project.title}</h1>
                                        <a href={project.link} target='_blank' rel="noreferrer">{project.link}</a>
                                        <p>{project.desc}</p>
                                        {project.git && <p><AiFillGithub /><a href="https://github.com/AndelysP?tab=repositories" target="_blank" rel="noreferrer">Lien vers mon projet Github</a></p>}

                                        <p>Langages utilisés :
                                            {project.technos.map((techno, index) => <span key={index}>{techno}</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </Modal>
                        )}
                    </>
                ]}
            >
                {
                    isLoading ? (
                        <Skeleton active />
                    ) : (
                        <Meta
                            avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/547/547440.png" alt="Icon projet" />}
                            title={project.title}
                            description={project.desc.length > 68 ? project.desc.substring(0, 68) + "..." : project.desc}
                        />)}
            </Card >


        </div>
    );


    return (

        <>
            <Cursor />
            <div className="noise">
                <Navbar />
                <div className="page-control">
                    <Link to="/contact" className="next" aria-label="Lien vers la page de contact">
                        <span><FaChevronRight /></span>
                    </Link>

                    <Link to="/about" className="prev" aria-label="Lien vers la page à propos">
                        <span><FaChevronLeft /></span>
                    </Link>
                </div>

                <div id="work">
                    <h2>Voici les divers projets que j'ai pu réaliser</h2>
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