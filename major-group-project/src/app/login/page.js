"use client";
import React, { useState } from "react";

//Login form component
const Login = () => {

    //configure Popup
    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        //Specify what popup to show
        showPopup("login-popup");
        //Popup duration
        setTimeout(() => showPopup("hide"), 3000);
    }

    return (
        <center>
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or Login Using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
            {/* HTML for form Popup */}
            <div className={popupStyle}>
                <h3>Login Failed!</h3>
                <p>Username or Password incorrect</p>
            </div>
        </div>
        </center>

    );
}

//Export form
export default Login;