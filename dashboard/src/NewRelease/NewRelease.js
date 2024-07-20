import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'
import Menu from '../component/Menu/Menu'
import CreateAccount from '../component/CreateAccount/CreateAccount'
import Modal from '../component/Modal/Modal'
import Footer from '../component/Footer/Footer'
import NewHeader from '../component/NewHeader/NewHeader'
import NewAuthor from '../component/NewAuthor/NewAuthor'
import Latest from '../component/Latest/Latest'




export default class NewRelease extends Component {
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
        <NewHeader/>
        <NewAuthor />
        <Latest />
        <Footer/>
        <CreateAccount />
      </>
    )
  }
}
