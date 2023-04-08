import React from 'react'
import './feature.scss'
import Categories from '../subcomponents/Categories'

const Feature = () => {
  return (
    <div className='feature'>
        <div className="container">
            <div className="listTitle">
                <h2>依住宿類型瀏覽</h2>
            </div>
            <div className="listItems">
                <Categories /> 
            </div>
        </div>
    </div>
    )
}

export default Feature