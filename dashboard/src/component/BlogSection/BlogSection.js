import React, { Component } from 'react'
import './BlogSection.css'
import appleTouchIcon from '../asset/Literal_fiction.jpg';
import image2 from '../asset/library.jpg';
import image3 from '../asset/Communication1.jpg';
import image4 from '../asset/Management.jpg';

export default class BlogSection extends Component {
  render() {
    return (
      <>
        <div className='BlogSection'>
        <h1>Read our many blogs</h1>
        <div className='BlogContainerFlex'>
          <div className='BlogBox' style={{ backgroundImage: `url(${appleTouchIcon})` }}>
            <h1>Learn about this week's top author</h1>
            <p>Jump start your book reading by quickly check through the popular book categories...</p>
            <div className='learn-more'>Learn more</div>
          </div>
          <div className='BlogBox' style={{ backgroundImage: `url(${image2})` }}>
            <h1>Why we celebrate readers</h1>
            <p>Jump start your book reading by quickly check through the popular book categories...</p>
            <div className='learn-more'>Learn more</div>
          </div>
          <div className='BlogBox' style={{ backgroundImage: `url(${image3})` }}>
            <h1>Learn about this week's top author</h1>
            <p>Jump start your book reading by quickly check through the popular book categories...</p>
            <div className='learn-more'>Learn more</div>
          </div>
          <div className='BlogBox' style={{ backgroundImage: `url(${image4})` }}>
            <h1>Toddlers can also Read</h1>
            <p>Jump start your book reading by quickly check through the popular book categories...</p>
            <div className='learn-more'>Learn more</div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
