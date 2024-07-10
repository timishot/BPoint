import React, { Component } from 'react'
import google from '../asset/google1.png';
import logo from '../asset/B-Point.png';
import './CreateAccount.css'
import { AppContext } from '../../Context/SignInProvider';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCancel: true,
      showPassword: false,
      showConfirmPassword: false
    };
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }))
  }
  toggleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({
      showConfirmPassword: !prevState.showConfirmPassword
    }))
  }
  render() {
    const { showConfirmPassword, showPassword } = this.state
    return (
      <AppContext.Consumer>
        {({showCreateAccount, toggleCreateAccount}) =>(
          <>
         <div className={`createAccount1 ${this.state.isCancel ? 'cancel2' : ''} ${showCreateAccount ? 'pop1': ''}`}>
            <div className='signUpCategories'>
                <div className="form-box1">
                  <div className="logo2">
                    <img src={logo}/>
                  </div>
                  <h2>Hi, welcome To Bpoint</h2>
                  <p>Create an account</p>
                  <i className="fa-solid fa-xmark move3" onClick={toggleCreateAccount}></i>
                  <form className='creategroupform'>
                    <div className="input-group1" >
                      <label  htmlFor="email">First Name</label>
                      <input type="text" id="first_name" name="first_name" placeholder="First name" required />
                    </div>
                    <div className="input-group1">
                      <label htmlFor="email">Last Name</label>
                      <input type="text" id="last_name" name="last_name" placeholder="Last name" required />
                    </div>
                    <div className="input-group1">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="input-group1 password-container">
                      <label htmlFor="password">Password</label>
                      <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" required />
                      <i class={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={this.togglePasswordVisibility}></i>
                    </div>
                    <div className="input-group1 password-container">
                      <label htmlFor="confirm_password">Confirm Password</label>
                      <input type={showConfirmPassword ? "text" : "password"} id="confirm_password" name="confirm_password" placeholder="Confirm Password" required />
                      <i class={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={this.toggleConfirmPasswordVisibility}></i>
                    </div>
                    <div className="terms">
                      <input type="checkbox" name="terms" required />
                      <p>I agree to the terms and conditions</p>
                    </div>
                    <button type="submit" className="btn-primary1">Get Started</button>
                    <div className="separator">or get started with</div>
                    <button type="button" className="btn-google1">
                      <img src={google} alt="Google Logo" />
                      <span>Start with Google</span>
                    </button>
                  </form>
                </div>
            </div>
          </div>
      </>
        )}
      </AppContext.Consumer>
    )
  }
}
