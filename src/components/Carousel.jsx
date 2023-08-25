import React from 'react'

// imports for using Swiper Js library
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function Carousel() {
  return (
    <div className='h-[600px] bg-white'>
        <Swiper
            loop={true} // used for infinite loop
            spaceBetween={0}    // no space between images    
            navigation={true}   // navigational arrows
            modules={[Navigation, Autoplay]}    // navigational arrows and autoslide
            autoplay={{
                delay: 2500 // autoslide after 2.5s
            }}
            className='h-[50%]'
        >
            {/* images below for swiper */}
            <SwiperSlide>   
                <img src={'../images/carousel_1.jpg'} alt='bg-text'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_2.jpg'} alt='bg-text'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_4.jpg'} alt='bg-text'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_5.jpg'} alt='bg-text'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Carousel