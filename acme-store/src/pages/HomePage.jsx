import React from 'react'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import '../css/Home.css'

const HomePage = ( {products} ) => {
  let first_four_products = Object.entries(products).slice(0,4)

  return (
    <div>
        <Header />
        <ProductGrid products={first_four_products}/>
        <Footer />
    </div>
  )
}

export default HomePage