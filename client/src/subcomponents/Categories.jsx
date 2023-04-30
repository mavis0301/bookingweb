import React from 'react'
import useFetch from '../hooks/useFetch'
import "./categories.scss"
import Skeleton from '../components/Skeleton'


const Categories = ({dataArray,url}) => {
  const {data,loading,error} = useFetch(url);
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
          {loading ? <Skeleton type="Amount"/>:<>{`${data[index]}間住宿`}</>}
          
        </div>
      </div>
    </div>)
    }
    </div>
  )
}

export default Categories