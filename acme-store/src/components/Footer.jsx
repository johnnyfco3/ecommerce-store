import React from 'react'
import logo from '../assets/logo-screenshot.png'
import { Link } from 'react-router'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='top-section'>
            <hr />
            <div className="left-content">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo Image"></img>
                    </Link>
                </div>
                
                <h3>ACME Store</h3>

                <div className="links">
                    <Link to="/all-products"><p>Home</p></Link>
                    <Link to="/shirts"><p>About</p></Link>
                    <Link to="/stickers"><p>Shipping & Return Policy</p></Link>
                    <Link to="/stickers"><p>Privacy Policy</p></Link>
                    <Link to="/stickers"><p>FAQ</p></Link>
                </div>
            </div>

        </div>

        <div className="lower-section">
            <hr />
            <p>Created by Johnny Tejada</p>
        </div>
    </div>
  )
}

export default Footer