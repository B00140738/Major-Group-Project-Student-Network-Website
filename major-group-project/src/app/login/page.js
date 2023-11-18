"use client"
import React, { useState, useEffect } from 'react';
import '../css/loginform.css'; // Make sure this path is correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupStyle, setPopupStyle] = useState("hide");
  const [isClient, setIsClient] = useState(false)
  const showPopup = () => {
    // Check if either the username or password is empty
    if (!username || !password) {
      // Specify what popup to show
      setPopupStyle("login-popup-show");

      // Popup duration
      setTimeout(() => {
        setPopupStyle("hide");
      }, 3000);
    } else {
      // Here you would put your login logic
      console.log('Attempt login with:', username, password);
    }
  };
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return ( 
    
    <div className="loginContainer">
      <div className="loginBox">
        <h1> Sign in</h1>
        <button className="appleLogin">Sign in with Apple</button>
        <button className="googleLogin">Sign in with Google</button>
        <div className="divider">or</div>
        <input
          type="text"
          placeholder="Phone, email, or username"
          className="inputField"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" className="nextButton" onClick={showPopup}>Next</button>

        <a href="#" className="forgotPassword">Forgot password?</a>
        <div className="signUp">
          Don't have an account? <a href="#" className="signUpLink">Sign up</a>
        </div>
        <div className={popupStyle}>
          <h3>Login Failed!</h3>
          <p>Username or Password incorrect</p>
        </div>
      </div>
    </div>
  );

};

export default Login;
