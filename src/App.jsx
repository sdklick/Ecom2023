import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Singleproduct from './Singleproduct'
import Contact from './Contact'
import Cart from './Cart'
import Errorpage from './Errorpage'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App