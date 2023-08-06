import React from 'react'
import './Login_Page.css' 
import { useState } from 'react'


function Login_Page() {
  // using useState hook to set the state of login
  const [login, setLogin] = useState(true)

  return (
    <div className='wrapper'>
      {/* using conditional rendering to change the height of the input-wrapper */}
      <div className="input-wrapper" style={{height: login ? "20rem" : "30rem"}}>
      <h1 id='heading'>Instagram</h1>
      {/* using conditional rendering to change the text of the header */}
      <p id='header-text'>{login? "" : "Sign up to see photos and videos from your friends."}</p>
      {/* using conditional rendering to show or hide the button */}
      <button id='log-with-fb' style={{display: login ? "none":"inline"}}>Log in with Facebook</button>
      {/* using conditional rendering to show or hide the or */}
      <p id='or' style={{display: login ? "none":"inline"}}>or</p>
      {/* using conditional rendering to show or hide the input fields */}
      <input type="text" placeholder={login ? "Phone number, username, email" : "Mobile Number or Email"}/>
      <input type="text" placeholder='Full Name' style={{display:login?"none":"inline"}} />
      <input type="text" placeholder='Username' style={{display:login?"none":"inline"}}  />
      <input type="password" placeholder='Password' />
      <button type="submit" className='btn' >{login ? "Sign in" : "Sign up"}</button>
      
    </div>
    <div className="signup-login">
      {/* using conditional rendering to change the text of the bottom line */}
    <span id='bottom-line'> {login ? "Don't have account?" : "Have an account"} 
    {/* using useState to set the state of login to know whether to show login page of signup page */}
    <span className='login-signup' onClick={() => setLogin(!login)}>
      {login ? "Sign up" : "Login"}</span></span>
      </div>
    </div>
  )
}

export default Login_Page