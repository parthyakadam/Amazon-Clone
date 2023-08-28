import React from 'react'
import { Link } from 'react-router-dom'

// imports for using Swiper Js library
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function CarouselProducts() {
  return (
    <div className='bg-white m-3'>
        <div className="text-2xl font-semibold p-3">Best Sellers</div>
        <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        >
            {
                Array.from({ length: 9 }, (_, i) =>
                    <SwiperSlide key={i}>
                        <Link to={`/product/${i}`}>
                            <img src={`../images/product_${i}_small.jpg`} alt="Carousel product" />
                        </Link>
                    </SwiperSlide>
                )
            }
        </Swiper>
    </div>
  )
}

export default CarouselProducts