import React, { Component } from 'react'

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <section className='contact'>
            <div className='container contact_container'>
                <aside className='contact_aside'>
                    <div className='aside_image'>
                        <img src={s} />
                    </div>
                    <h2>Contact Us</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Tortor sem lectus purus hendrerit vestibulum mauris condimentum aliquet.
                    </p>
                    <ul className='conact_details'>
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


                <form action=''></form>
            </div>
        </section>
      </>
    )
  }
}
