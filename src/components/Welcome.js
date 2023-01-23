import React from 'react';
import '../Sass/Welcome.scss';
import neptune from '../img/neptune.png'
import { Link } from 'react-router-dom';
import Cursor from './Cursor';

const Welcome = () => {

  return (
    <>
      <Cursor />
      <div className="noise">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>        
        <div id="welcomeContainer">     
          <img src={neptune} alt="neptune" />
          <p>Je m'appelle</p>
          <h1>Andélys Pluquin</h1>
          <Link to="/about">
            <button>Bienvenue sur mon portfolio</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Welcome