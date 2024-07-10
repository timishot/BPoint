import React, { Component } from 'react'
import EbookImg from '../asset/Ebook3.png'
import './EbookLogin.css'

export default class EbookLogin extends Component {
  render() {
    return (
      <>
        <div className='Ebook'>
        <div className='EbookLogin'>
            <div className='EbookFlex'>
                <div className='Etext'>
                    <div className='eHead'>
                        <div className='line'></div>
                        <h3>ebooks</h3>
                    </div>

                    <div className='Eheader_2'>
                        <h2>Access, Read, Practice & Engage with Digital Content (eBook) </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='Ebook_form'>
                      <form method='POST'>
                        <input className='registerE' type='text' placeholder='Register Email'/>
                        <button type='submit'>Register</button>
                      </form>
                    </div>
                </div>
                <div className='Eimg'>
                  <img src={EbookImg} />
                </div>
            </div>
        </div>
        </div>
      </>
    )
  }
}
