import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/AVATAR1.png'
import AVATAR2 from '../../assets/AVATAR2.png'
import AVATAR3 from '../../assets/AVATAR3.png'
import AVATAR4 from '../../assets/AVATAR4.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar: AVATAR1, 
  name: 'Tina Snow' , 
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea totam magnam impedit laboriosam consequatur voluptate vitae. Tempora consequuntur laboriosam adipisci impedit deserunt! Praesentium suscipit tenetur excepturi corrupti repellat provident dolorem!'
  } ,
  {
  avatar: AVATAR2, 
  name: 'Shatta Wale', 
  review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
  avatar: AVATAR3, 
  name: 'Kwame Despite', 
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, maiores earum blanditiis dolores saepe exercitationem soluta. Quisquam saepe dolor id distinctio vel ex reiciendis eos, deleniti quibusdam pariatur doloribus itaque.'
  },
  {
  avatar: AVATAR4, 
  name: 'Nana Ama McBrown', 
  review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  ]




const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review for clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials