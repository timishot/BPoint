import React, { Component } from 'react'
import './ReaderBlog.css'
import children from "../asset/Children.jpg"

export default class ReaderBlog extends Component {
  render() {
    return (
      <>
        <div class="Readercontainer">
        <div class="header">
            <h2>From Our  Readers</h2>
            <a href="#" class="see-more">See more</a>
        </div>
        <div class="posts">
            <div class="post">
                <img src={children} alt="Post 1" />
                <p class="date">25th April 2024</p>
                <h3>Welcome to the world of design</h3>
                <p class="excerpt">Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus hendrerit.</p>
                <a href="#" class="read-more">Read more ...</a>
            </div>
            <div class="post">
                <img src={children} alt="Post 2" />
                <p class="date">25th April 2024</p>
                <h3>Welcome to the world of design</h3>
                <p class="excerpt">Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus hendrerit.</p>
                <a href="#" class="read-more">Read more ...</a>
            </div>
            <div class="post">
                <img src={children} alt="Post 3" />
                <p class="date">25th April 2024</p>
                <h3>Welcome to the world of design</h3>
                <p class="excerpt">Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus hendrerit.</p>
                <a href="#" class="read-more">Read more ...</a>
            </div>
        </div>
        <div className='FindMore'>
            <h1>Find more Blog Post</h1>
        </div>
    </div>
      </>
    )
  }
}
