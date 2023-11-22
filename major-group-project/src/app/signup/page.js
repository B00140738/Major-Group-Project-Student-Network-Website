"use client";
import React, { useState } from 'react';

export default function Page() {

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
      }
    } catch (error) {
      // If an error occurs, log it to the console
      console.error("Error during fetch: ", error);
    }
  }

  const handleSubmit = (event) => {
    console.log("handling submit");
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let username = data.get('username');
    let email = data.get('email');
    let pass = data.get('pass');
    let repeatPass = data.get('repeatPass');
    let address = data.get('address');
    let dob = data.get('dob');

    runDBCallAsync(`http://localhost:3000/api/register?&username=${username}&email=${email}&pass=${pass}&repeatPass=${repeatPass}&address=${address}&dob=${dob}`);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" id="username" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" id="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="pass" id="pass" />
        </label>
        <br />
        <label>
          Repeat Password:
          <input type="password" name="repeatPass" id="repeatPass" />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" name="dob" id="dob" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" id="address" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
