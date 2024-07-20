import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'

import Footer from '../component/Footer/Footer'
import Menu from '../component/Menu/Menu'
import CreateAccount from '../component/CreateAccount/CreateAccount'
import Modal from '../component/Modal/Modal'
import EbookTab from '../component/EbookTab/EbookTab'



export default class Ebook extends Component {
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
        <Modal />
        <NavBar toggleMenu={this.toggleMenu}/>
        <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu}/>
        <EbookTab />
        <Footer/>
        <CreateAccount />
      </>
    )
  }
}
