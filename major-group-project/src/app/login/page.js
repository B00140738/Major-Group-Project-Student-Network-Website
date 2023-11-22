"use client"
import React, { useState } from 'react';
import '../css/loginform.css';


export default function Login() {
  const [popupStyle, setPopupStyle] = useState('hide');
  const [popupMessage, setPopupMessage] = useState('');

  async function runDBCallAsync(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        throw new error(`HTTP error! status: ${res.status}`);E
      }

     

      if (data.data == "true") {
        console.log("Login Successful!");
       
        // Redirect or perform further actions upon successful login
      } else {
        throw new Error('Invalid username or password');
        
      }
    } catch (error) {
      setPopupMessage(error.message);
     
      setPopupStyle('login-popup-show');
      setTimeout(() => setPopupStyle('hide'), 3000);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let email = data.get('email');
    let pass = data.get('pass');

      runDBCallAsync(`http://localhost:3000/api/login?&email=${email}&pass=${pass}`);
    
  };
  
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Sign in</h1>
        <button className="appleLogin">Sign in with Apple</button>
        <button className="googleLogin">Sign in with Google</button>
        <div className="divider">or</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone, email, or username"
            className="inputField"
          
            name="username"
            aria-label="Username"
          />
          <input
            type="password"
            placeholder="Password"
            className="inputField"
            name="pass"
           
            aria-label="Password"
          />
          <button type="submit" className="nextButton">Next</button>
        </form>
        <a href="#" className="forgotPassword">Forgot password?</a>
        <div className="signUp">
          Don't have an account? <a href="#" className="signUpLink">Sign up</a>
        </div>
        <div className={popupStyle}>
          <h3>Login Failed!</h3>
          <p>{popupMessage}</p>
        </div>
      </div>
    </div>
  );
};

