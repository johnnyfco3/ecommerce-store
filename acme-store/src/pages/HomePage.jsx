import React from 'react'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import '../css/Home.css'

const HomePage = () => {
  return (
    <>
        <Header />
        <div className="cards-section">
            <ProductGrid />
        </div>
        <Footer />
    </>
  )
}

export default HomePage