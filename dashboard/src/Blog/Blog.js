import React, { Component } from 'react'
import NavBar from '../component/NavBar/NavBar'
import Menu from '../component/Menu/Menu'
import BlogTopRead from '../component/BlogTopRead/BlogTopRead'
import Footer from '../component/Footer/Footer'
import RecentBlog from '../component/RecentBlog/RecentBlog'
import FavouriteAuthorBlog from '../component/FavoriteAuthorBlog/FavouriteAuthorBlog'
import ReaderBlog from '../component/ReaderBlog/ReaderBlog'


export default class Blog extends Component {
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
        <BlogTopRead />
        <RecentBlog />
        <FavouriteAuthorBlog />
        <ReaderBlog />
        <Footer />
      </>
    )
  }
}