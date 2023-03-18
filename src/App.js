import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Food from './components/Food'
import HeadlineCards from './components/HeadlineCards'
import Category from './components/Category'

const App = () => {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App