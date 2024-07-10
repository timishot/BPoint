import React, { Component } from 'react'
import './MonthPick.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import PschologyOfMoney from '../asset/Psychology.jpg'
import innovation from '../asset/innovation.jpg'
import atomic from '../asset/atomichabit.jpg'
import 'swiper/css'
import "swiper/css/navigation";
import 'swiper/css/pagination';

export default class NewRelease extends Component {
  render() {
    return (
      <>
        <div className='Container1'>
            <div className='NewRelease_header'>
                <h6>SOME QUALITY ITEMS</h6>
                <h2>Our Monthly Pick </h2>
            </div>

            <div className='NewRelease_swiper'>
            <Swiper
          spaceBetween={50}
          slidesPerView={3}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{ clickable: true, }}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 1,
                },
                953: {
                  slidesPerView: 2,
                },
                // when window width is >= 1024px
                1300: {
                  slidesPerView: 3,
                },

              }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className='herosplit'>
             <div className='Card_img1'>
              <img src={PschologyOfMoney} />
             </div>
             <div className='Intro'>
              <h1>The Psychology Of Money</h1>
              <p>Morgan Housel</p>
              <span>₦2500</span>
             </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='herosplit'>
             <div className='Card_img1'>
              <img src={innovation} />
             </div>
             <div className='Intro'>
              <h1>How Innovation Works</h1>
              <p>Matt Ridley</p>
              <span>₦3500</span>
             </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='herosplit'>
             <div className='Card_img1'>
              <img src={atomic} />
             </div>
             <div className='Intro'>
              <h1>Atomic Habit</h1>
              <p>James Clear</p>
              <span>₦6500</span>
             </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='herosplit'>
             <div className='Card_img1'>
              <img src={PschologyOfMoney} />
             </div>
             <div className='Intro'>
              <h1>The Psychology Of Money</h1>
              <p>Morgan Housel</p>
              <span>₦2500</span>
             </div>
            </div>
          </SwiperSlide>
          
          <div className='button-prev-slide'>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className='button-next-slide'>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </Swiper>
            </div>

            <div className='view'>
              <div className='ViewAll'>
                <h3>View All Products</h3>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
        </div>
      </>
    )
  }
}
