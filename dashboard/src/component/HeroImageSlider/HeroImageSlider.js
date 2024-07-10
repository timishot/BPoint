import React, { Component } from 'react'
import './HeroImageSlider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css'
import "swiper/css/navigation";
import 'swiper/css/pagination';
import heroImage from '../asset/HeroImage.png'

export default class HeroImageSlider extends Component {
  render() {
    return (
      <>
        <div className='Hero'>
          <Swiper
          spaceBetween={50}
          slidesPerView={1}
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
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className='heroSplit'>
              <div className='hero_text'>
                <h1>Time to Get Your Reading on Point</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed arcu pharetra vulputate. Aliquam vitae sagittis fringilla consequat porttitor. Aliquam ut quam ornare accumsan. Ut ut porta tristique tristique faucibus venenatis.</p>
                <button className='px-[10rem]'>READ MORE</button>
              </div>
              <div className='Hero_image'>
                <img src={heroImage} alt='image of a woman'/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='heroSplit'>
              <div className='hero_text'>
                <h1>Time to Get Your Reading on Point</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed arcu pharetra vulputate. Aliquam vitae sagittis fringilla consequat porttitor. Aliquam ut quam ornare accumsan. Ut ut porta tristique tristique faucibus venenatis.</p>
                <button className='px-[10rem]'>READ MORE</button>
              </div>
              <div className='Hero_image'>
                <img src={heroImage} alt='image of a woman'/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='heroSplit'>
              <div className='hero_text'>
                <h1>Time to Get Your Reading on Point</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed arcu pharetra vulputate. Aliquam vitae sagittis fringilla consequat porttitor. Aliquam ut quam ornare accumsan. Ut ut porta tristique tristique faucibus venenatis.</p>
                <button className='px-[10rem]'>READ MORE</button>
              </div>
              <div className='Hero_image'>
                <img src={heroImage} alt='image of a woman'/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='heroSplit'>
              <div className='hero_text'>
                <h1>Time to Get Your Reading on Point</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed arcu pharetra vulputate. Aliquam vitae sagittis fringilla consequat porttitor. Aliquam ut quam ornare accumsan. Ut ut porta tristique tristique faucibus venenatis.</p>
                <button className='px-[10rem]'>READ MORE</button>
              </div>
              <div className='Hero_image'>
                <img src={heroImage} alt='image of a woman'/>
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
      </>
    )
  }
}
