import React from 'react'
import "./categories.scss"



const Categories = ({dataArray}) => {
  return (
    <div className='catogories'>
    {dataArray.map((item, index) =>
    <div className='item' key={index}>
      <img src={item.img} alt="noImg"/>
      <div className='itemInfo'>
        <div className='title'>
          {item.name}
        </div>
        <div className='desc'>
          {item.amount}
        </div>
      </div>
    </div>)
    }
    </div>
  )
}

export default Categories