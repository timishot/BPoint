import React, { Component } from 'react'
import './FeaturedBook.css'

import miles from '../asset/Miles.jpg'

export default class FeaturedBook extends Component {
  render() {
    return (
      <>
        <div className='FeaturedBook'>
            <div className='FeaturedFlex'>
                <div className='FeaturedImg'>
                    <img src={miles} />
                </div>
                <div className='FeaturedText'>
                    <div className='line'></div>
                    <h1>Featured book</h1>
                    <p>By  Dr. Myles Munroe </p>
                    <div className='FeaturedHeader'>
                        <h3>Become a Leader</h3>
                        <p>Best-selling author Dr. Myles Munroe dispels the myth that only some people are destined to be leaders, while everyone else is destined to be a follower. You can become the leader God intended you to be</p>
                    </div>

                    <div className='Price'>
                        <span>₦3500</span>
                    </div>

                    <div className='LearnMore1'>
                        <div className='LearnMoreButton1'>
                            <h5>Learn More</h5>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
