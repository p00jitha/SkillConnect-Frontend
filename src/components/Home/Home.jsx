import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Slide from './Slide'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Slide/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
