import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from '../Home'
import Body from '../Components/Body'
import SocialLink from '../Components/SocialLink'
import About from '../Components/About'
import Portfolio from '../Components/Portfolio'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/' Component={Body} />
        <Route path='/' Component={SocialLink} />
        <Route path='/' Component={About} />
        <Route path='/' Component={Portfolio} />
        <Route path='/' Component={Experience} />
        <Route path='/' Component={Contact} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router