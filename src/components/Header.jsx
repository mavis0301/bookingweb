import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './header.scss'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import * as locales from 'react-date-range/dist/locale';
// //用它來叫出不同版本的語言翻譯，把日曆換成中文
// import { DateRange } from 'react-date-range';

const header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <h1 className='headerTitle'>
          尋找下趟住宿
        </h1>
        <p className='headerDes'>
          訂房、找房、trivago<br/>搜尋飯店、民宿及各項優惠
        </p>
        <div className='headerSearchBar'>
          <div className='searchBarItem'>
            <FontAwesomeIcon icon={faBed} />
            <input type="search" placeholder='你要去哪裡?' className='searchInput'/>
          </div>
          <div className='searchBarItem'>
            <FontAwesomeIcon icon={faCalendar}/>
            <span className='searchText'>04/04/2023-04/04/2023</span>
          </div>
          <div className='searchBarItem'>
            <FontAwesomeIcon icon={faPeopleGroup}/>
            <span className='searchText'>3位成人，2位小孩，1間房</span>
          </div>
          <button className='searchBarBtn'>搜尋</button>
        </div>
      </div>
    </div>
  )
}

export default header