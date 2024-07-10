import React, { Component } from 'react'
import './NewsLetter.css'

export default class NewsLetter extends Component {
  render() {
    return (
      <>
        <div className='NewsLetter'>
            <div className='NewsLetter_flex'>
                <div className='NewLetter_heading'>
                    <h1>Subscribe To Our Newsletter</h1>
                </div>
                <div className='NewLetter_email'>
                    <div className='NewLetter_title'>
                        <h1>Get over a 100 free ebooks</h1>
                        <p>
                        Get access by subcribing to our newsletter. Jump start your book reading by quickly check through the popular book categories...
                        </p>
                    </div>

                    <div className='NewLetter_form'>
                        <form method='POST'>
                            <input type='email' placeholder='Enter Your Email Here' name='email' id='email'/>
                            <button type='submit'>
                                <span>Send</span>
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
