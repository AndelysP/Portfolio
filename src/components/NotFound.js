import React from 'react'
import '../Sass/NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="noise">
      <div className="container">
        <div className="text">
          <h1>Erreur 404</h1>
          <p>Oups, erreur d'atterrissage, le contact a été perdu...</p>
          <Link to='/'><button>Revenir sur Terre</button></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound