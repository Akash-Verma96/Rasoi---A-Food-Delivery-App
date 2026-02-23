import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Cart from './components/Cart/Cart.jsx'
import Profile from './components/Profile/Profile.jsx'
import Category from './components/Category/Category.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='profile' element={<Profile />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
