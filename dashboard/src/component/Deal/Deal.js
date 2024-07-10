import React, { Component } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import atomic from '../asset/atomichabit.jpg'
import './Deal.css'

export default class Deal extends Component {
  render() {
    return (
      <>
        <div className='Deal'>
            <div className='Card_container'>
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
                        <div className='card_flex'>
                        <div className='Card_Text'>
                                    <div className='card_header'>
                                        <h1>All books are 20% off now! Don't miss such a deal!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                                    </div>

                                    <div className='date_setting'>
                                        <div>
                                            <h1>946</h1>
                                            <p>DAYS</p>
                                        </div>
                                        <div>
                                            <h1>01</h1>
                                            <p>HOUR</p>
                                        </div>
                                        <div>
                                            <h1>27</h1>
                                            <p>MINT</p>
                                        </div>
                                        <div>
                                            <h1>55</h1>
                                            <p>SEC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Card_img'>
                                    <img src={atomic} />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='card_flex'>
                        <div className='Card_Text'>
                                    <div className='card_header'>
                                        <h1>All books are 20% off now! Don't miss such a deal!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                                    </div>

                                    <div className='date_setting'>
                                        <div>
                                            <h1>946</h1>
                                            <p>DAYS</p>
                                        </div>
                                        <div>
                                            <h1>01</h1>
                                            <p>HOUR</p>
                                        </div>
                                        <div>
                                            <h1>27</h1>
                                            <p>MINT</p>
                                        </div>
                                        <div>
                                            <h1>55</h1>
                                            <p>SEC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Card_img'>
                                    <img src={atomic} />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='card_flex'>
                        <div className='Card_Text'>
                                    <div className='card_header'>
                                        <h1>All books are 20% off now! Don't miss such a deal!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                                    </div>

                                    <div className='date_setting'>
                                        <div>
                                            <h1>946</h1>
                                            <p>DAYS</p>
                                        </div>
                                        <div>
                                            <h1>01</h1>
                                            <p>HOUR</p>
                                        </div>
                                        <div>
                                            <h1>27</h1>
                                            <p>MINT</p>
                                        </div>
                                        <div>
                                            <h1>55</h1>
                                            <p>SEC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Card_img'>
                                    <img src={atomic} />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='card_flex'>
                        <div className='Card_Text'>
                                    <div className='card_header'>
                                        <h1>All books are 20% off now! Don't miss such a deal!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                                    </div>

                                    <div className='date_setting'>
                                        <div>
                                            <h1>946</h1>
                                            <p>DAYS</p>
                                        </div>
                                        <div>
                                            <h1>01</h1>
                                            <p>HOUR</p>
                                        </div>
                                        <div>
                                            <h1>27</h1>
                                            <p>MINT</p>
                                        </div>
                                        <div>
                                            <h1>55</h1>
                                            <p>SEC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Card_img'>
                                    <img src={atomic} />
                                </div>
                        </div>
                </SwiperSlide>
                
                
                </Swiper>
            </div>
        </div>
      </>
    )
  }
}
