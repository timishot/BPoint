import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'
import HeroImageSlider from '../component/HeroImageSlider/HeroImageSlider'
import ExploreListing from '../component/ExploreListing/ExploreListing'
import EbookLogin from '../component/EbookLogin/EbookLogin'
import FeaturedBook from '../component/FeaturedBook/FeaturedBook'

import NewRelease from '../component/NewRelease/NewRelease'
import Deal from '../component/Deal/Deal'
import NewsLetter from '../component/NewsLetter/NewsLetter'
import BlogSection from '../component/BlogSection/BlogSection'
import Footer from '../component/Footer/Footer'
import Menu from '../component/Menu/Menu'
import CreateAccount from '../component/CreateAccount/CreateAccount'



export default class Home extends Component {
  constructor(props){
    super(props)
    this.state ={
      isOpen: false,
    }
  }

  toggleMenu = () => {
    console.log("able")
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }
  render() {
    return (
      <>
        <NavBar toggleMenu={this.toggleMenu}/>
        <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu}/>
        <HeroImageSlider />
        
        <ExploreListing />
        <EbookLogin />
        <NewRelease />
        <FeaturedBook />
        <Deal/>
        <NewsLetter />
        <BlogSection />
        <Footer/>
        <CreateAccount />
      </>
    )
  }
}
