import React from 'react'
import '../Sass/Contact.scss'
import contact from '../img-me/contact.png'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="noise">
      <Navbar />
      <div className="page-control">
        <Link to="/work" className="prev">
          <span><FaChevronLeft /></span>
        </Link>
      </div>

      <div id="contact" className='container'>
        <div className="title">
          <h2>Restons en contact !</h2>
        </div>
        <div className="contact-me">
          <div className="img">
            <img src={contact} alt="" />
          </div>
          <button><a href="https://www.linkedin.com/in/and%C3%A9lys-pluquin/">Faîtes biper mon antenne !</a></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact