
import React from 'react'
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Layout from './component/shared/Layout'
import Dashboard from './component/Dashboard'
import Product from './component/Product'


function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path='product' element={<Product />} />

    </Route>
    <Route path='login' element={<div>This is login</div>} />
  </Routes>
  </Router>
  )
}
export default App
