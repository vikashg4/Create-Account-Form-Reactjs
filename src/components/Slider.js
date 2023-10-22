
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../form.css'
function Slider() {

  return (
    <div className='container pt-5'>
    <Swiper
      spaceBetween={50}
      slidesPerView={1.4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='card SwiperSlide'>
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           

            <div class="circle-with-text">
            <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" class="user" />
         <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> Casey Bachmeyer </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
 </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide ' >
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="circle-with-text">

            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" class="user" />
        
            <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> John Watson </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
         </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide'>
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="circle-with-text">

            <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" class="user" />
            <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> Tom Riddle </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
          </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide'>
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           

            <div class="circle-with-text">
            <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" class="user" />
         <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> Casey Bachmeyer </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
 </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide ' >
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="circle-with-text">

            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" class="user" />
        
            <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> John Watson </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
         </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide'>
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="circle-with-text">

            <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" class="user" />
            <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> Tom Riddle </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
          </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide'>
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           

            <div class="circle-with-text">
            <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" class="user" />
         <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> Casey Bachmeyer </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
 </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide ' >
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="circle-with-text">

            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" class="user" />
        
            <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> John Watson </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
         </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='card SwiperSlide'>
        <div class="slidercard" >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="circle-with-text">

            <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" class="user" />
            <div style={{lineHeight:'15px ' ,marginTop:5}}>
         <p> Tom Riddle </p> 
         <p> Founder, Sisyphus Ventures </p>
         </div>
          </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>

  )
}

export default Slider


