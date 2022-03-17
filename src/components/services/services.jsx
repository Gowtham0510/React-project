import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
        <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className='service'>
        <div className="service__head">
          <h3>Content creation</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, consectetur adipisicing elit.!</p>
            </li>
            </ul>
        </article>
        {/*END OF Content creation*/}


      </div>
    </section>
  )
}

export default services