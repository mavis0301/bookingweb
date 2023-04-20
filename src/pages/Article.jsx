import React, { useState } from 'react'


const Article = () => {
    const [title, setTitle] = useState("none");
    const [text, setText] = useState("none");
    const initialList = [];
    const [list, setList] = React.useState(initialList);
    const handleSend = () => {
        const newList = list.concat({ title:title,text:text });

        setList(newList);
        
    }
  return (
    <div className='blog'>
        <h1 className='blogname'>blog</h1>
        <h2>標題</h2>
        <input id='title' placeholder='請輸入標題' onChange={(e)=>{setTitle(e.target.value)}}/>
        <h2>內容</h2>
        <textarea id='inputtext' rows="8" onChange={(e)=>{setText(e.target.value)}}/>
        <button id='send' type='submit' onClick={handleSend}>提交</button>
        <p>-----------</p>
        {
            list.map((item,i) =>{
                return(
                    <div className='art' key={i}>
                        <h3 className='artTitle' >{item.title}</h3>
                        <p className='artBody' >{item.text}</p>
                    </div>
                )
            
            }
            )
        }
    </div>
    

  )
}

export default Article