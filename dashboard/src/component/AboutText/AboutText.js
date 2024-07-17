import React, { Component } from 'react'
import about1 from '../../component/asset/About1.jpg'
import './AboutText.css'

export default class AboutText extends Component {
  render() {
    return (
      <>
        <section className='AboutTextContainer'>
            <div className='AboutFlex'>
                <div className='AboutImg'>
                    <img src={about1} alt='tim' />
                </div>
                <div className='AboutText1'>
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                     lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     u feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                      Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
      </>
    )
  }
}
