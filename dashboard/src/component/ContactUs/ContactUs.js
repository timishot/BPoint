import React, { Component } from 'react'
import './ContactUs.css'
import contact from "../asset/contact.svg"

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <section className='contact'>
            <div className='container contact_container'>
                <aside className='contact_aside'>
                    <div className='aside_image'>
                        <img src={contact} />
                    </div>
                    <h2>Contact Us</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus hendrerit vestibulum mauris condimentum aliquet.
                    </p>
                    <ul className='contact_details'>
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <h5>+234 803 558 8623</h5>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            <h5>timidotcom58@gmail.com</h5>
                        </li>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <h5>Ogbmosho, Nigeria</h5>
                        </li>
                    </ul>
                    <ul className='contact_socials'>
                        <li><a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </aside>


                <form action='https://formspree.io/f/mnnanybe' method='POST' className='contact_form'>
                    <div className='form_name'>
                        <input className='fix' type='text' name='First Name' placeholder='First Name' required />
                        <input className='fix' type='text' name='Last Name' placeholder='Last Name' required />   
                    </div>
                    <input type='email' name='Email Address' placeholder='Your Email Address' required className='fix' />
                    <textarea className='fix' name='message' rows={7} placeholder='Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
      </>
    )
  }
}
