import React, { Component } from 'react'
import logo from '../asset/B-Point.png'
import books from "../asset/Apologetics.jpg"
import book2 from "../asset/thought.jpg"
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
            <div className='FooterFlex'>
                <div className='F1'>
                    <div className='logo1'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='BPoint_info'>
                        <p>B-Point the Home Of Knowledge We bring you to the point where Knowledge and Wisdom Intertine</p>
                    </div>
                    <div className='BPoint_link'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

                <div className='F2'>
                    <div className='company'>
                        <h1>Company</h1>
                    </div>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Books</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Ebooks</a>
                        </li>
                        <li>
                            <a>New Release</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                    </ul>
                </div>

                <div className='F3'>
                        <div className='Latest'>
                            <h1>Latest News</h1>
                        </div>
                        <div className='newFlex'>
                            <div>
                                <img src={books}/>
                                <div className='News_title'>
                                    <h2>Normalize Reading</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed </p>
                                </div>
                            </div>
                            <div>
                                <img src={book2}/>
                                <div className='News_title'>
                                    <h2>Why Change</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Orci nisi auctor morbi elementum sed </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='Copyright'>
                <div className='CopyrightFLex'>
                    <h5>© 2024 Timishot. All Rights Reserved.</h5>
                    <h5><span>Privacy </span> | Terms of Service</h5>
                </div>
            </div>
        </footer>
      </>
    )
  }
}
