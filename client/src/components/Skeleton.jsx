import React from 'react'
import './skeleton.scss'

const Skeleton = ({type,length}) => {
    const number = length
    //length為傳入資料數目，讓這個遮罩要計算要生成多少個遮障
    const PopularHotelSkeleton = ({i}) => (
            //多一個{i}是因為解決list需要index的部分，不然會有warning
        <div className="popularHotelSK" key={i} >
            <div className='imgSK' />
            <div className="InfoSK">
                <div className="titleSK" />
                <div className="subTitleSK" />
                <div className="priceSK" />
                <div className="rateAndCommentSK" />
            </div>
        </div>
    );
    const AmountSkeleton = () => (
        <div className="amountSK" />
    );
    if (type === "popularHotel") return Array(number).fill().map((item,i)=><PopularHotelSkeleton key={i}/>);
//用Array來排列這麼多的遮罩，假設說我們傳入為7，那他就會生成7個遮罩，取代原本的資料列 .map() 來把array列陣同時又加index不然又會有error發生
    if (type === "Amount") return (<AmountSkeleton />);
    //amount 不用是因為他有上面得data.js的UI內資料不像PopularHotels是整個傳過來的資料總數都不確定
    //而Amount是因為是我們的測試做的type與city就都知道有這麼多就不用在傳入length告訴他要生成多少個遮罩
}


export default Skeleton