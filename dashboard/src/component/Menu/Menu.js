import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { AppContext } from '../../Context/SignInProvider';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
  }

  handleDropDown = () => {
    this.setState(prevState => ({
      dropDown: !prevState.dropDown
    }));
  }
  render() {
    const { isOpen, toggleMenu } = this.props;
    const { dropDown } = this.state 
    return (
      <AppContext.Consumer>
        {({ showSignIn,toggleSignIn, toggleCreateAccount, showCreateAccount}) => (
          <>
        <div className={`link_section ${isOpen ? 'open' : ''} ${showSignIn ? 'close' : ''} ${showCreateAccount ? 'close' : ''}`}>
          <div className='cancel1' onClick={toggleMenu} >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul>
            <li className='Account_label love'>
              <Link >
                <div className='account_dropMenu' onClick={this.handleDropDown}>
                  <div>
                    <div className='accountName'>
                      <i className="fa-solid fa-user"></i>
                      <span>Account</span>
                    </div>
                    <div><i className={`fa-solid ${dropDown ? 'fa-minus' : 'fa-plus'}`}></i></div>
                  </div>
                  
                </div>
              </Link>
              {dropDown && (
                <div className='dropdown'>
                      <div className='Account_signin1'>
                        <div className='signInButton1 move' id='tick'><a href='#' onClick={toggleSignIn}>Sign In</a></div>
                        <div className='Create_account1 move' id='tick'><a href='#' onClick={toggleCreateAccount}>Create an account</a></div>
                      </div>
                      <div className='accountManage1'>
                        <ul>
                          <li><a href='#'>Manage Account</a></li>
                          <li><a href='#'>Order Status</a></li>
                          <li><a href='#'>My digital Library</a></li>
                          <li><a href='#'>Payment Method</a></li>
                        </ul>
                      </div>
                  </div>
              )}
            </li>
            <li>
              <Link to='/'>
                <span>Home</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/books'>
                <span>Books</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/ebooks'>
                <span>Ebooks</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/categories'>
                <span>Categories</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/new-releases'>
                <span>New Release</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/about-us'>
                <span>About Us</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/contact-us'>
                <span>Contact Us</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
                <span>Blog</span>
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </>
        )}
      </AppContext.Consumer>

    );
  }
}


