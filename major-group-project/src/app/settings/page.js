"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../Components/Layout';
export default function SettingsPage() {
  const [currentUsername, setCurrentUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const getUsernameFromCookies = () => {
      const allCookies = document.cookie.split('; ');
      const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
      return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
    };
    const username = getUsernameFromCookies();
    setCurrentUsername(username);
    if (!username) {
      router.replace('/login');
    }
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!currentUsername) {
      setErrorMessage('Current username not found in cookie');
      return;
    }

    const formData = {
      currentUsername,
      newUsername
    };

    console.log(formData);

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.data === true) {
        console.log('Username update successful');
        // Redirect or show success message
      } else {
        console.log('Username update failed');
        setErrorMessage('Username update failed');
      }
    } catch (error) {
      console.error("Failed to update username:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <div className="settings-container">
        <h1>Account Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newUsername">New Username</label>
            <input
              type="text"
              id="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <button type="submit" className="save-button">Save Changes</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </Layout>
  );
}