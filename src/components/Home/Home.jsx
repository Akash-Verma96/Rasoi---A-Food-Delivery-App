import React from 'react'
import Header from '../Header/Header'
import PopularMeals from '../PopularMeals/PopularMeals'
import Category from '../Category/Category'
import Meals from '../Meals/Meals'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <PopularMeals/>
      <Category/>
      <Meals/>
      <Footer/>
    </div>
  )
}

export default Home
