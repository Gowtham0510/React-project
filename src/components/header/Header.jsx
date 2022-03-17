import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME11 from '../../assets/ME11.jpeg'
import HeaderSocial from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gowtham B</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocial />
      
      <div className="me11">
        <img src={ME11} alt="me11" />
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>

    </div>
    </header >
  )
}

export default header