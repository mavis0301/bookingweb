import React from 'react'
import './navbar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCar, faPlane, faTaxi, faToriiGate } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = ({type}) => {
  return (
    <div className={`navbar ${type}`}>
      <div className='navbarContainer'>
        <div className='lineOne'>
          <div className='left'>
            <Link to='/' style={{color:"inherit", textDecoration:'none'}}>
              <span className='logo'>booking.com</span>
            </Link>
            
          </div>
          <div className='right'>
            <button className='navButtonFlag'/>
            <button className='navButtonNotif'>使用webpack測試</button>
            {type == "auth" ? <></>:<>
            <Link to='/register'>
              <button className='navButton'>註冊</button>
            </Link>
            <Link to='/login'>
              <button className='navButton'>登入</button>
            </Link>
            </>}

          </div>
        </div>
        {type == "auth" ? <></>:<>
        <div className='lineTwo'>
          <div className='item active'>
            <FontAwesomeIcon icon={faBed}/>
            <span>住宿</span>
          </div>
          <div className='item'>
            <FontAwesomeIcon icon={faCar}/>
            <span>航班</span>
          </div>
          <div className='item'>
            <FontAwesomeIcon icon={faPlane}/>
            <span>租車</span>
          </div>
          <div className='item'>
            <FontAwesomeIcon icon={faTaxi}/>
            <span>景點/活動</span>
          </div>
          <div className='item'>
            <FontAwesomeIcon icon={faToriiGate}/>
            <span>機場計程車</span>
          </div>          
        </div>
        </>}
      </div>
    </div>
  )
}

export default NavBar