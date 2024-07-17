import React, { Component } from 'react'
import './CategoriesListing.css'
import management from '../asset/management1.jpg'
import innovation from '../asset/innovation.jpg'
import PschologyOfMoney from '../asset/Psychology.jpg'
import self from '../asset/SelfDevelopment.jpg'
import book2 from "../asset/thought.jpg"
import library from "../asset/library.jpg"

export default class CategoriesListing extends Component {
    render() {
      return (
        <>
          <div className='CategoriesSection'>
            <section class="book-categories">
              <div class="background-container">
                  <img src={library} alt="Book Categories" />
              </div>
              <div class="overlay">
                  <h1>Welcome to Our Book Categories</h1>
                  <p>Let go On a <span>journey</span> to Acquire Knowledge</p>
              </div>
            </section>
          <div className='CategoriesContainerFlex'>
            <div className='CategoriesBox box1' style={{ backgroundImage: `url(${management})` }}>
              <div className='lo'><h1>Management Books</h1></div>
            </div>
            <div className='CategoriesBox box1' style={{ backgroundImage: `url(${management})` }}>
              <div className='lo'><h1>Management Books</h1></div>
            </div>
            
            <div className='CategoriesBox' style={{ backgroundImage: `url(${innovation})` }}>
              <div className='lo'><h1>Finance Books</h1></div>
            </div>
            <div className='CategoriesBox' style={{ backgroundImage: `url(${PschologyOfMoney})` }}>
              <div className='lo'><h1>Self Devlopment Books</h1></div>
            </div>
            <div className='CategoriesBox' style={{ backgroundImage: `url(${self})` }}>
              <div className='lo'><h1>Money Books</h1></div>
            </div>
            <div className='CategoriesBox' style={{ backgroundImage: `url(${book2})` }}>
              <div className='lo'><h1>History Books</h1></div>
            </div>
          </div>
        </div>
        </>
      )
    }
  }
  