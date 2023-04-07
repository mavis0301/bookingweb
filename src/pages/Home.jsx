import React from 'react'
import NavBar from '../components/Navbar'
import Header from '../components/Header'
import './home.scss'


const home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Header/>
    </div>
  )
}

export default home