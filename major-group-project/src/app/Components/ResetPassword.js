// ResetPassword.js
"use client"
import React, { useState } from 'react';
import '../css/loginform.css'; // Adjust the path to your CSS file

export default function ResetPassword({ toggleModal }) {
    const [popupStyle, setPopupStyle] = useState('hide');
    const [popupMessage, setPopupMessage] = useState('');
  
    async function runDBCallAsync(url, username, password) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            if (data.data === "true") {
                console.log("Password Reset Successful!");
                // Redirect or show success message
            } else {
                throw new Error('Failed to reset password');
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
        let username = data.get('username');
        let password = data.get('password');
        runDBCallAsync(`http://localhost:3000/api/reset-password`, username, password);
    };
  
    return (
        <div className="modal-background">
            <div className="modal-container">
                <button onClick={toggleModal} className="close-modal">X</button>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="inputField" name="username" required/>
                    <input type="password" placeholder="New Password" className="inputField" name="password" required/>
                    <button type="submit" className="nextButton">Reset Password</button>
                </form>
                <div className={popupStyle}>
                    <p>{popupMessage}</p>
                </div>
            </div>
        </div>
    );
}
