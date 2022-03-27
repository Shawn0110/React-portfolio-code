import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

import{Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Shannon M',
    review: 'This blog has really helped our business. It is exactly what our business has been lacking.',
   },
   {
    avatar: AVTR2,
    name: 'Tildi V',
    review: 'Thanks guys, keep up the good work! Blog did exactly what you said it does',
   }, 
   {
    avatar: AVTR3,
    name: 'Anastasia B',
    review: 'Wow what great service!  It is truly outstanding. I will recommend you to my colleagues."',
   }, 
   {
    avatar: AVTR4,
    name: 'Karina R',
    review: 'Keep up the excellent work. Blog is the most valuable business resource we have EVER used',
   }
  ]

const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}>
       {
         data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          </SwiperSlide>
          )
         })
       } 
      </Swiper>
      </section>
  )
}


export default Testimonials