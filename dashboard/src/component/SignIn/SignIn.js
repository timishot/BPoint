import React, { Component } from 'react';
import './SignIn.css';
import google from '../asset/google1.png';
import { AppContext } from '../../Context/SignInProvider';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCancel: true,
    };
  }

  toggleMenu = () => {
    console.log("able")
    this.setState((prevState) => ({
      isCancel: !prevState.isCancel,
    }));
  };

  render() {
    return (
      <AppContext.Consumer>
        {({ showSignIn, toggleSignIn }) => (
            <>
            <div className={`signup ${this.state.isCancel ? 'cancel' : ''} ${showSignIn ? 'pop': ''}`}>
              <div className='signInCategories'>
                <div className='signIn'>
                  <div className="form-box">
                    <h2>Sign in</h2>
                    <i className="fa-solid fa-xmark" onClick={toggleSignIn}></i>
                    <form>
                      <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                      </div>
                      <div className="remember">
                        <div>
                          <label htmlFor="remember-me">Remember me</label>
                          <input type="checkbox" id="remember-me" name="remember-me" />
                        </div>
                        <div className="p">
                          <a href="#" className="forgot-password">Forgot your password?</a>
                        </div>
                      </div>
                      <button type="submit" className="btn-primary">Sign In & Continue</button>
                      <div className="separator">or continue with</div>
                      <button type="button" className="btn-google">
                        <img src={google} alt="Google Logo" />
                        <h1>Sign in from Google</h1>
                      </button>
                    </form>
                    <div className='createAccount'>
                      <a href='/'>Don't have an account? <span>Create account</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
        )}
      </AppContext.Consumer>
    );
  }
}
