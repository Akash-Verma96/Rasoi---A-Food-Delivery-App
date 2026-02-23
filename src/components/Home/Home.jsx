import React from 'react'
import Header from '../Header/Header'
import PopularMeals from '../PopularMeals/PopularMeals'
import Category from '../Category/Category'
import Meals from '../Meals/Meals'

function Home() {
  return (
    <div>
      <Header/>
      <PopularMeals/>
      <Category/>
      <Meals/>
    </div>
  )
}

export default Home
