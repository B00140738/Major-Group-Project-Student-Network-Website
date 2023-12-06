"use client";
// SignUpModal.js
import React, { useState } from 'react';
import '../css/signupform.css'; // Adjust the path to your CSS file

export default function SignUpModal({ toggleModal }) {
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
const [errorMessage, setErrorMessage] = useState('');
const [passwordError, setPasswordError] = useState(''); // Separate state for password error

    async function runDBCallAsync(url, formData) {
        try {
          const res = await fetch(url, {
            method: 'POST', // Use POST method
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          // Check if the HTTP status code is OK (200-299)
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
      
          // Try to parse the response as JSON
          const data = await res.json();
      
          if (data.data === "valid") {
            console.log("Registration Successful!");
          } else {
            console.log("Error: Registration unsuccessful");
            setErrorMessage("Registration unsuccessful"); // Set the error message
          }
        } catch (error) {
          // If an error occurs, log it to the console
          console.error("Error during fetch: ", error);
          setErrorMessage(error.message);
        }
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
      setErrorMessage(''); // Clear any existing error messages
      setPasswordError(''); 
        const data = new FormData(event.currentTarget);
    
        let username = data.get('username');
        let email = data.get('email');
        let pass = data.get('pass');
        let address = data.get('address');
        let repeatPass = data.get('repeatPass');
        const month = data.get('dobMonth');
        const day = data.get('dobDay');
        const year = data.get('dobYear');
        const dob = `${year.padStart(2, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

         // Pseudo-code for checking if the user already exists
 
        
        if (pass !== repeatPass) {
          setPasswordError("Passwords do not match."); // Set the error message
          return;
        } else if(!username || !email || !pass || !address || !dob){
          setErrorMessage("Please fill in the form"); // Set the error message
        }
   
       
          else{
          runDBCallAsync(`http://localhost:3000/api/register?&username=${username}&email=${email}&pass=${pass}&address=${address}&dob=${dob}`);

        };
      
       
      };
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button onClick={toggleModal} className="close-modal">X</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" id="username" className="inputField"/>
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" id="email"  className="inputField"/>
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="pass" id="pass" className="inputField"/>
          </label>
          <br />
          <label>
            Repeat Password:
            <input type="password" name="repeatPass" id="repeatPass" className="inputField"/>
            {passwordError && <div className="error-message">{passwordError}</div>}
          </label>
          <br />
          <label>
            Date of Birth:
            <div className="dob-select">
              <select name="dobMonth" id="dobMonth" >
                <option value="">Month</option>
                {range(1, 12).map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select name="dobDay" id="dobDay">
                <option value="">Day</option>
                {range(1, 31).map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select name="dobYear" id="dobYear">
                <option value="">Year</option>
                {range(new Date().getFullYear() - 100, new Date().getFullYear()).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" id="address" className="inputField"/>
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

