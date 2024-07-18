import React, { Component } from 'react';
import logo from '../asset/B-Point.png';
import { connect } from 'react-redux';
import './NavBar.css';
import { AppContext } from '../../Context/SignInProvider';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../actions/cartActions';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { toggleMenu, cartItems } = this.props;
    const { isHovered } = this.state;
    return (
      
      <AppContext.Consumer>
        {({ toggleSignIn, toggleCreateAccount}) => (
          <>
            <header>
              <nav>
                <div className='logo'>
                  <div className='menu-btn' onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                  </div>
                  <img alt="logo" src={logo} className='App-logo' />
                </div>
                <div className='Nav_categories'>
                  <form>
                    <input className="navinput" type='text' id="search" name="Search" placeholder='Search by Author, Tit....' />
                    <button type="submit" className="search-button1">
                      <i className="fa-solid fa-magnifying-glass search_button search-icon"></i>
                    </button>
                  </form>
                </div>
                <div className='nav_section'>
                  <div className='nav_authen'>
                    <div className='icon account' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                      <a href='#'>
                        <i className="fa-solid fa-user"></i>
                        <p>Account</p>
                        <i className={`fa-solid ${isHovered ? 'fa-caret-up' : 'fa-caret-down'}`} id='remove1'></i>
                      </a>
                      <div className='Account_dropmenu'>
                        <div className='Account_signin'>
                          <div className='signInButton'><a href='#' onClick={toggleSignIn}>Sign In</a></div>
                          <div className='Create_account'><a href='#' onClick={toggleCreateAccount}>Create an account</a></div>
                        </div>
                        <div className='accountManage'>
                          <ul>
                            <li><a href='#'>Manage Account</a></li>
                            <li><a href='#'>Order Status</a></li>
                            <li><a href='#'>My digital Library</a></li>
                            <li><a href='#'>Payment Method</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='icon cart'>
                      <Link to='/cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                        {cartItems.length > 0 ? (<span className='cart_number'>{cartItems.length}</span>): (null)}
                      </Link>
                    </div>
                    <div className='icon wishlist'>
                      <a href='#'>
                        <i className="fa-solid fa-heart"></i>
                        <p>Wishlist</p>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.get('cartItems').toJS(),
});

const mapDispatchToProps = {
  removeFromCart,
};

const ConnectedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

// Export the connected component
export default ConnectedNavBar;
