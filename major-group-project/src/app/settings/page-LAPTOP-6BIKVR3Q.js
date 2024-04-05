// pages/settings.js
"use client"
import React, { useState, useEffect } from 'react';
import Layout from '../Components/Layout';
import css from '../css/settings.css';
import { useRouter } from 'next/navigation';
import Header from '../Components/Header';
export default function SettingsPage() {
  const router = useRouter();
  const [currentUsername, setCurrentUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const username = getUsernameFromCookies();
    setCurrentUsername(username);
    if (!username) {
      router.replace('/login');
    }
  }, []);

  const getUsernameFromCookies = () => {
    if (typeof document !== 'undefined') {
      const allCookies = document.cookie.split('; ');
      const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
      return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
    }
    return ''; // Return empty string if document is not defined (e.g., during server-side rendering)
  };


  const handleEditClick = () => {
    setIsEditing(true);
    setNewUsername(currentUsername);
  };

  const handleSaveClick = async () => {
    try {
      // Send a request to your API endpoint to change the username
      const response = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newUsername }),
      });

      if (!response.ok) {
        throw new Error('Failed to update username');
      }

      // If the request is successful, update the currentUsername state
      setCurrentUsername(newUsername);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating username:', error);
      setErrorMessage('Failed to update username. Please try again.');
    }
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewUsername('');
    setErrorMessage('');
  };

  return (
    <Layout>
    <Header/>
      <div className="settings-container">
        <h1>Account Settings</h1>
        <div>
          <p>
            <strong>Current Username:</strong> {currentUsername}
          </p>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleEditClick}>Edit Username</button>
          )}
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </Layout>
  );
}