import React, { Component } from 'react'
import "./BlogTopRead.css"
import children from "../asset/Children.jpg"

export default class BlogTopRead extends Component {
  render() {
    return (
      <>
        <div class="Blog_container">
        <div className='Blog_h'>
            <h1>Bpoint Reads</h1>
        </div>
        <main className='top_blog'>
            <div class="main-story">
                <img src={children} alt="Bookshelf" />
                <div class="story-content">
                    <p class="date">25th April 2024</p>
                    <h2>Welcome to the world of design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus hendrerit vestibulum mauris condimentum aliquet.</p>
                    <a href="#">Read more ...</a>
                </div>
            </div>
            <aside>
                <h2>Trending stories</h2>
                <div class="trending-story">
                    <p class="number">1.</p>
                    <img src={children} alt="Story Image" />
                    <div class="story-details">
                        <h3>Welcome to the world of design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus ...</p>
                        <p class="date">25th April 2024</p>
                    </div>
                </div>
                <div class="trending-story">
                    <p class="number">2.</p>
                    <img src={children} alt="Story Image" />
                    <div class="story-details">
                        <h3>Welcome to the world of design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus ...</p>
                        <p class="date">25th April 2024</p>
                    </div>
                </div>
                <div class="trending-story">
                    <p class="number">3.</p>
                    <img src={children} alt="Story Image" />
                    <div class="story-details">
                        <h3>Welcome to the world of design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus ...</p>
                        <p class="date">25th April 2024</p>
                    </div>
                </div>
            </aside>
        </main>
    </div>
      </>
    )
  }
}
