import React from 'react'
import RandomCard from '../randomCard/RandomCard'

function Header() {
  return (
    <div className='header_cont'>
        <h1 className='title'>Rick and Morty Characters</h1>
        <RandomCard/>
    </div>
  )
}

export default Header