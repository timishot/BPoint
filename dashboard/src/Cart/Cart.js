import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'
import Menu from '../component/Menu/Menu'
import CartTable from '../component/CartTable/CartTable'

export default class Cart extends Component {
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
        <CartTable />
      </>
    )
  }
}
