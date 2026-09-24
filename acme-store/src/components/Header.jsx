import React from 'react'
import { Link } from 'react-router'
import '../css/Header.css'
import logo from '../assets/logo-screenshot.png'
import card_img from '../assets/cart-2.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/" ><img src={logo} alt="Logo Image"></img></Link>
        <p className='text-white mt-3 me-4'>Acme Store</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/all-products">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shirts">Shirts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stickers">Stickers</Link>
            </li>
          </ul>

        <div className="d-flex justify-content-center mx-lg-auto w-75">
            <input 
              type="text" 
              className="form-control " 
              placeholder="Search for products..."
            />
          </div>

        <div className="cart d-flex justify-content-end">
            <img src={card_img} alt="cart-checkout" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header