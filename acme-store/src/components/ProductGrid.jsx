import React from 'react'
import '../css/ProductCard.css'

const ProductGrid = () => {
  return (
    <>
    <div className="card">
        <div className="card-content">
            <img src="" alt="" />
            <div className="card-details">
              <p className="product-title">Acme Circles T-Shirts</p>
              <p className="price">$20.00 USD</p>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-content">
            <img src="" alt="" />
            <div className="card-details">
              <p className="product-title">Acme Circles T-Shirts</p>
              <p className="price">$20.00 USD</p>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-content">
            <img src="" alt="" />
            <div className="card-details">
              <p className="product-title">Acme Circles T-Shirts</p>
              <p className="price">$20.00 USD</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductGrid