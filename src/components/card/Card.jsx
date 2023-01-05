import React, { useState, useEffect } from 'react'
import {getImg} from  '../helper/ApiRAM.jsx'
import {refreshPage} from  '../helper/ApiRAM.jsx'



function Card() {

    //Hooks
    const [nameApi, setNameApi] = useState(null)
    const [imgApi, setImgApi] = useState(null)

    //Trayendo API con Async Await
    useEffect(() => {
        getImg(setNameApi,setImgApi)

    }, [])


  return (
    <div className='card_cont'>
        <img className='img_character' src={imgApi} />
        <h2 className='card_Title'>Name: {nameApi}</h2>
        <button className='btn_changue' onClick={refreshPage}>Changue</button>
    </div>
  )
}

export default Card