import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'
import Menu from '../component/Menu/Menu'
import Footer from '../component/Footer/Footer'
import ContactUs from '../component/ContactUs/ContactUs'


export default class Contact extends Component {
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
        <ContactUs />
        <Footer />
      </>
    )
  }
}
