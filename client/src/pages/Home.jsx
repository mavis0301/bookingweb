import React from 'react'
import NavBar from '../components/Navbar'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import './home.scss'


const home = () => {
  
  return (
    <div className='home'>
      <NavBar/>
      <Header/>
      <Announcement/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default home