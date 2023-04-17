import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import './header.scss'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';
// //用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [OpenCalendar, SetOpenCalendar] = useState(false);
  const [OpenConditions, SetOpenConditions] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates,setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);
  const [conditions,setConditions] = useState(
    {
      adult: 1,
      children: 0,
      room: 1, 
    }
  );
  const handleCounter = (name,sign) => {
    setConditions(prev =>{
      return{
        ...prev,
      [name]: sign === "increase" ? conditions[name]+1 : conditions[name]-1
      }
      
    })
  }

  const handleSearchBarSubmit = () => {
    navigate("/hotelList",{state:{destination,dates,conditions}})
  }
  


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
            <input type="search" placeholder='你要去哪裡?' className='searchInput' onChange={(e) => setDestination(e.target.value)}/>
          </div>
          <div className='searchBarItem'>
            <FontAwesomeIcon icon={faCalendar} onClick={()=>SetOpenCalendar(!OpenCalendar)} />
            <span className='searchText' onClick={()=>SetOpenCalendar(!OpenCalendar)}>{format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}</span>
            {OpenCalendar && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])} 
              moveRangeOnFirstSelection={false}
              className="calendar"
              minDate={new Date()}
              ranges={dates}
              locale={locales['zhTW']}
            />}
          </div>
          <div className='searchBarItem'>
            <FontAwesomeIcon icon={faPeopleGroup} onClick={()=> SetOpenConditions(!OpenConditions)}/>
            <span className='searchText' onClick={()=> SetOpenConditions(!OpenConditions)}>{conditions.adult}位成人 , {conditions.children}位小孩 , {conditions.room}間房</span>
            {OpenConditions && <div className="ConditionsContainer">
              <div className="condition">
                成人
                <div className="conditionCounter">
                  <button className="conditionCounterButton" disabled={conditions.adult <=1 } onClick={() => handleCounter("adult","decrease")} >
                    -
                  </button>
                  <span className="number">{conditions.adult}</span>
                  <button className="conditionCounterButton" onClick={() => handleCounter("adult","increase")} >
                    +
                  </button>
                </div>
              </div>
              <div className="condition">
                <span>小孩
                  <p>0-17 歲</p>
                </span>

                <div className="conditionCounter">
                  <button className="conditionCounterButton" disabled={conditions.children <=0 }  onClick={() => handleCounter("children","decrease")}>
                    -
                  </button>
                  <span className="number">{conditions.children}</span>
                  <button className="conditionCounterButton" onClick={() => handleCounter("children","increase")}>
                    +
                  </button>
                </div>
              </div>

              <div className="condition">
                房間
                <div className="conditionCounter">
                  <button className="conditionCounterButton" disabled={conditions.room <=1 } onClick={() => handleCounter("room","decrease")}>
                    -
                  </button>
                  <span className="number">{conditions.room}</span>
                  <button className="conditionCounterButton" onClick={() => handleCounter("room","increase")}>
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <button className='searchBarBtn' onClick={handleSearchBarSubmit}>搜尋</button>
        </div>
      </div>
    </div>
  )
}

export default Header