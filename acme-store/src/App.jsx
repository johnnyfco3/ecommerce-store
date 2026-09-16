import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ShirtsPage from './pages/ShirtsPage'
import StickersPage from './pages/StickersPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/all-products" element={<ProductsPage />}/>
      <Route path="/shirts" element={<ShirtsPage />}/>
      <Route path="/stickers" element={<StickersPage />}/>
    </Routes>
  )
}

export default App
