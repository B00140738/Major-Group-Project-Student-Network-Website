// Home.js
"use client";
import React, { useState, useEffect } from "react";
import Helmet from 'react-helmet';
import VanillaTilt from 'vanilla-tilt';
import "./css/AboutUs.css";
// Importing the SignUpModal from the signup directory
import SignUpModal from '../app/signup/page'; // If your signup modal is named 'Page.js'
// Importing the LoginModal from the login directory
import LoginModal from '../app/login/page'; // If your login modal is the default export from 'index.js' in the login directory

export default function Home() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // useEffect hook for card animations
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
    });
  }, []);

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
  
      <div className="container">
        <div className="card" onClick={toggleSignUpModal}>
          <div className="card-content">
            <h2>01</h2>
            <h3>Sign Up</h3>
            <p>Your sign-up card description here.</p>
            <div className="button">
              {/* Change button click event to toggle modal */}
              <button onClick={toggleSignUpModal}>Sign Up</button>
            </div>
            
          </div>
        </div>
        <div className="card" onClick={toggleLoginModal}>
          <div className="card-content">
            <h2>02</h2>
            <h3>Login</h3>
            <p>Your login card description here.</p>
            <div className="button">
              {/* Change button click event to toggle modal */}
              <button onClick={toggleLoginModal}>Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignUpModal && <SignUpModal toggleModal={toggleSignUpModal} />}

      {/* Login Modal */}
      {showLoginModal && <LoginModal toggleModal={toggleLoginModal} />}

      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"></script>
      </Helmet>
    </>
  );
}