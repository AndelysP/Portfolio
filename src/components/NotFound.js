import React from 'react'
import '../Sass/NotFound.scss'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Cursor from './Cursor'

const NotFound = () => {
  return (
    <>
      <Cursor />
      <div className="noise">
        <div className="container">
          <div className="text">
            <h1>Erreur 404</h1>
            <p>Oups, erreur d'atterrissage, le signal a été perdu...</p>
            <Link to='/'><button>Revenir sur Terre</button></Link>
          </div>
        </div>
        <Footer />
      </div>
    </>

  )
}

export default NotFound