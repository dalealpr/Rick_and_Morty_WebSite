import React, { useState, useEffect } from 'react'
import {getImg} from  '../helper/ApiRAM.jsx'
import {refreshPage} from  '../helper/ApiRAM.jsx'



function RandomCard() {

    //Hooks
    const [dataApi, setDataApi] = useState(null)
    const [nameApi, setNameApi] = useState(null)
    const [imgApi, setImgApi] = useState(null)
    const [locationApi, setLocationApi] = useState(null)

    //Trayendo API con Async Await
    useEffect(() => {
        getImg(setDataApi,setNameApi,setImgApi,setLocationApi)

    }, [])


  return (
    <div className='card_cont'>
        <h2 className='card_title'>Random Character</h2>
        <img className='img_character' src={imgApi} />
        <p className='card_name'>Name: {nameApi}</p>
        <p className='card_location'>Location: {locationApi}</p>
        <button className='btn_changue' onClick={refreshPage}>Changue</button>
    </div>
  )
}

export default RandomCard