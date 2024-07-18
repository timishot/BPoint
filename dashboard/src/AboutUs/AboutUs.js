import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'
import Menu from '../component/Menu/Menu'
import Footer from '../component/Footer/Footer'
import AboutHeader from '../component/AboutHeader/AboutHeader'
import AboutText from '../component/AboutText/AboutText'
import WhyUs from '../component/WhyUs/WhyUs'
import NewsLetter from '../component/NewsLetter/NewsLetter'


export default class AboutUs extends Component {
    constructor(props){
        super(props)
        this.state ={
          isOpen: false,
          isOpen: false
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
        <AboutHeader />
        <AboutText />
        <WhyUs />
        <NewsLetter />
        <Footer />
      </>
    )
  }
}
