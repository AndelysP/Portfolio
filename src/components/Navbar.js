import React from 'react'
import '../assets/sass/Navbar.scss'
import { RxCross1 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { useRef } from 'react';
import { IoPlanetOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="navbar">
                <div className="home">
                    <span><Link to="/" aria-label="Lien vers la page d'accueil"><IoPlanetOutline /></Link></span>
                </div>
                <nav ref={navRef}>
                    <a href="/about">A propos de moi</a>
                    <a href="/work">Mes projets</a>
                    <a href="/contact">Contact</a>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <RxCross1 />
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <HiBars3 />
                </button>
            </div>
        </header>
    )
}

export default Navbar