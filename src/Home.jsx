import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import SocialLink from './Components/SocialLink'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar />
        <Body />
        <SocialLink />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
    </React.Fragment>
  )
}

export default Home