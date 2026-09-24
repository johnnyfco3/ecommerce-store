import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ShirtsPage from './pages/ShirtsPage'
import StickersPage from './pages/StickersPage'

const API_BASE_URL = 'https://fakestoreapi.com/products'
const API_TOKEN = ''
// const API_OPTIONS = {
//   method: 'GET',
//   accept: 'application/json',
//   header: {
//     Authorization: `Bearer ${token}`
//   }
// }

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch(API_BASE_URL)
    if(!response.ok) {
      console.error('Server request failed')
    }

    const data = await response.json()

    if(data.length === 0) {
      console.log('Server request failed')
      setProducts([])
    }
    
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<HomePage products={products} />}/>
        <Route path="/all-products" element={<ProductsPage />}/>
        <Route path="/shirts" element={<ShirtsPage />}/>
        <Route path="/stickers" element={<StickersPage />}/>
      </Routes>
    </div>
  )
}

export default App
