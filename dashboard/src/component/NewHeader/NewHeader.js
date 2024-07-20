import React, { Component } from 'react'
import './NewHeader.css'
import New from '../../component/asset/New.jpg'

export default class NewHeader extends Component {
  render() {
    return (
      <>
        <section class="New-us">
            <div class="overlay">
                <h1>What's New?</h1>
            </div>
            <img src={New} alt="What New" />
        </section>
      </>
    )
  }
}
