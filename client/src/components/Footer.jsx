import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='subscribe'>
            <h2>省時又搶錢!</h2>
            <p>現在訂閱，我們將寄送最佳訂房優惠給您。</p>
            <div className='inputline'>
                <input className='email' type='text' placeholder='輸入email'></input>
                <button type='submit'>訂閱!</button>
            </div>
            <div className='check'>
                <input className='check' type='checkbox'/>
                請發送 Booking.com 免費 App 下載連結給我！
            </div>
        </div>
        <div className='bottom'>
            <div className='up'>
                <button>將你的住宿註冊</button>
            </div>
            <div className='down'>
                <ul>
                    <li>手機板</li>
                    <li>您的帳戶</li>
                    <li>線上修改訂單</li>
                    <li>客服支援</li>
                    <li>加入聯盟行銷</li>
                    <li>Booking.com企業差旅服務</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer