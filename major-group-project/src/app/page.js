// Home.js
"use client";
import React, { useEffect } from "react";
import Helmet from 'react-helmet';
import VanillaTilt from 'vanilla-tilt';
import "./css/AboutUs.css";
import RedirectButton from './Components/RedirectButton';
export default function Home() {

  
  // useEffect hook for card animations
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
    });
  }, []); // Empty dependency array to ensure the effect runs only once
 
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h2>01</h2>
            <h3>Sign Up</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quas sapiente architecto, atque
              accusamus itaque minus neque accusantium veritatis cupiditate.</p>
            <div className="button">
              <RedirectButton destination="./signup" text="Sign Up" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>02</h2>
            <h3>Login</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officia debitis quis velit sunt
              error sapiente odit aliquid distinctio doloremque repudiandae praesentium, earum minus omnis esse
              quo cum iusto. Repudiandae!</p>
            <div className="button">
            <RedirectButton destination="./login" text="Login" />
            </div>
          </div>
        </div>
      </div>
      {/* Use of the Helmet package for react to allow for the addition of scripts */}
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"></script>
      </Helmet>
    </>
  );
}
