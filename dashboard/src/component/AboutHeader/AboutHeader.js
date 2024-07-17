import React, { Component } from 'react'
import './AboutHeader.css'
import abouthero from '../../component/asset/About.jpg'

export default class AboutHeader extends Component {
  render() {
    return (
      <>
        <section class="about-us">
            <div class="overlay">
                <h1>About Us</h1>
            </div>
            <img src={abouthero} alt="About Us" />
        </section>
      </>
    )
  }
}
