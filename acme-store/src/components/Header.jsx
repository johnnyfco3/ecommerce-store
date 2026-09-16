import React from 'react'
import { Link } from 'react-router'
import '../css/Header.css'
import logo from '../assets/logo-screenshot.png'
import card_img from '../assets/cart-2.png'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="left-content">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo Image"></img>
                </Link>
            </div>
            
            <h3>ACME Store</h3>

            <div className="links">
                <Link to="/all-products"><p>All</p></Link>
                <Link to="/shirts"><p>Shirts</p></Link>
                <Link to="/stickers"><p>Stickers</p></Link>
            </div>
        </div>

        <div className="middle-content">
            <div className="search-bar">
                <input type="text" placeholder='Search for products...' />
            </div>
        </div>

        <div className="right-content">
            <div className="cart">
                <img src={card_img} alt="cart-checkout" />
            </div>
        </div>

    </div>
  )
}

export default Header