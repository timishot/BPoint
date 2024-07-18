import React, { Component } from 'react'
import './WhyUs.css'

export default class WhyUs extends Component {
  render() {
    return (
      <>
        <section className='whyContainer'>
            <div className='why_text'>
                <h1>Why us</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='WhyGrid'>
                <div className='why'>
                    <div className='why_icon'>
                        <i class="fa-solid fa-car"></i>
                    </div>
                    <h1>Fast delivery</h1>
                </div>
                <div className='why'>
                    <div className='why_icon'>
                        <i class="fa-solid fa-computer"></i>
                    </div>
                    <h1>Online order</h1>
                </div>
                <div className='why'>
                    <div className='why_icon'>
                        <i class="fa-solid fa-book"></i>
                    </div>
                    <h1>Quality books</h1>
                </div>
            </div>
        </section>
      </>
    )
  }
}
