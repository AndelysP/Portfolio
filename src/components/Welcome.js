import React from 'react';
import '../Sass/Welcome.scss';
import neptune from '../img/neptune.png'
import { Link } from 'react-router-dom';

const Welcome = () => {

  return (
    <section className="wrapper">
      <div className="noise">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
          <p>Je m'appelle</p>
          <h1>Andélys Pluquin</h1>
          <Link to="/about">
            <button>Bienvenue sur mon portfolio</button>
          </Link>
        </div>
        <div className="planets-img">
          <div id="planets1">
            <img src={neptune} alt="neptune" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome