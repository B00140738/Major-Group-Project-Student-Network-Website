//sample login form for website - D.B

//Login form for draft/project website
import React, { useState } from "react";

//Better to store form as arrow function/as const to cut down on unnecessary jargon/confusion later on.
const LoginForm = () => {

    //configure Popup
    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup");
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

            <div className={popupStyle}>
                <h3>Login Failed!</h3>
                <p>Username or Password incorrect</p>
            </div>
        </div>
        </center>

    );
}

//Export form
export default LoginForm;