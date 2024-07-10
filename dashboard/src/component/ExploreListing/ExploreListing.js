import React, { Component } from 'react'
import self_dev from  '../asset/SelfDevelopment.jpg'
import Management from '../asset/Management.jpg'
import Engineering from '../asset/Engineering.jpg'
import './ExploreListing.css'

export default class ExploreListing extends Component {
  render() {
    return (
      <>
        <div className='Explore'>
            <div className='Explore_header'>
                <div className='categ'>
                    <div></div>
                    <h3>Categories</h3>
                </div>
                <div className='Expl'>
                    <h2>Explore  Our Top Categories</h2>
                </div>
            </div>

            <div className='Explore_card'>
                <div className='card'>
                    <div className='ExploreImageCard'>
                        <img src={self_dev} alt=''/>
                    </div>
                    <h4>Self Development Books</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed </p>
                </div>

                <div className='card'>
                    <div className='ExploreImageCard'>
                        <img src={Management} alt='Management books'/>
                    </div>
                    <h4>Management Books</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed </p>
                </div>

                <div className='card'>
                    <div className='ExploreImageCard'>
                        <img src={Engineering} alt='management'/>
                    </div>
                    <h4>Engineering Books</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed </p>
                </div>
            </div>

            <div className='LearnMore'>
                <div className='LearnMoreButton'>
                    <h5>Learn More</h5>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>  
      </>
    )
  }
}
