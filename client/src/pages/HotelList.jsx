import React, { useState } from 'react'
import SearchItem from '../components/SearchItem'
import Navbar from '../components/Navbar'
import "./hotelList.scss"
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import * as locales from 'react-date-range/dist/locale';
import { useLocation } from 'react-router-dom'
const HotelList = () => {
  const locationSearchBarData = useLocation();
  console.log(locationSearchBarData);
  const [openConditions, setOpenConditions] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [destination, setDestination] = useState(locationSearchBarData.state?.destination);
  const [dates, setDates] = useState(locationSearchBarData.state?.dates);
  const [conditions, setConditions] = useState(locationSearchBarData.state?.conditions);
  const handleCounter = (name,sign) => {
    setConditions(prev =>{
      return{
        ...prev,
      [name]: sign === "increase" ? conditions[name]+1 : conditions[name]-1
      }
      
    })
  }
  // const [dates, setDates] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   }
  // ]);
  // const [conditions, setConditions] = useState(
  //   {
  //     adult: 1, //初始人數,房間數為一
  //     children: 0, //可以不一定要有小孩
  //     room: 1,
  //   }
  // );
  return (
    <>
      <div>
        <Navbar />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <div className='searchTitle'>
                搜尋
              </div>
              <div className="listItem">
                <label>目的地／住宿名稱：{destination}</label>
                <input type="text" className="searchInput" placeholder={destination==="" ? '要去哪裡?':destination}/>
              </div>
              <div className="listItem">
                <label>入住/退房日期 {format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}</label>
                <span className='dates' >
                <div className="searchInput" onClick={() => setOpenCalendar(!openCalendar)} >入住時間 - 退房時間</div>
                        {openCalendar && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date"
                            minDate={new Date()}
                            locale={locales['zhTW']}
                        />}
                </span>
              </div>

              <div className="listItem">
                <div className="listItemLimitPrice">
                  <span className="limitTitle">
                    每晚最低價格
                  </span>
                  <input type="text" className='searchInput' />
                </div>
                <div className="listItemLimitPrice">
                  <span className="limitTitle">
                    每晚最高價格
                  </span>
                  <input type="text" className='searchInput' />
                </div>
                  <div className="listItmConditions">
                    <span className="SearchText" onClick={() => setOpenConditions(!openConditions)}  >{conditions.adult}位成人 · {conditions.children} 位小孩 · {conditions.room} 間房</span>
                    {openConditions && <div className="ConditionsContainer">
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
              </div>
              <div className="listItem">
                <button className='searchbtn'>搜尋</button>
              </div>
            </div>

            <div className="listResult">
              <div className="resultTitle">
                <h2>在{destination}找到505間房間</h2>
                <div className="map">
                  <button>在地圖上顯示</button>
                </div>
              </div>
              <SearchItem active="active"/>
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelList