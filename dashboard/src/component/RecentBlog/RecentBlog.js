import React, { Component } from 'react'
import './RecentBlog.css'
import children from "../asset/Children.jpg"

export default class RecentBlog extends Component {
  render() {
    return (
      <>
        <div class="Recentcontainer">
        <div class="header">
            <h2>Recent posts</h2>
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
    </div>
      </>
    )
  }
}
