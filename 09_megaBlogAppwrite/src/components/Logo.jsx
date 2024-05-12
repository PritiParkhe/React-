import React from 'react'
import LogoImage from '../assets/LogoImage.jpg'

function Logo({width = '100px'}) {
  return (
    <div>
        <img src={LogoImage} className='w-12 h-12 rounded-full'/>
    </div>
  )
}

export default Logo