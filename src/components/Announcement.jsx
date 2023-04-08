import React from 'react'
import './announcement.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Announcement = () => {
  return (
    <div className='announcement'>
        <div className='announcementContainer'>
            <div className='checktext'>
                <input type="checkbox" />
                此為差旅行程
            </div>            
            <div className='infoDes'>
                <FontAwesomeIcon icon={faInfoCircle}/>
                <span>獲得所需建議,在出發之前,查看最新的新冠肺炎(COVID-19)相關限制。了解更多</span>
            </div>
            <div className='discountInfo'>
                <div className='discountImg'>
                    <img src='../images/house1.jfif' alt='no img'/>
                </div>
                <div className='discountDes'>
                    <h2>省15%或更多</h2>
                    <span>2023年5月30日前預訂即可享免費早餐與iphone抽獎機會!</span>
                    <button>逛逛優惠</button>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Announcement