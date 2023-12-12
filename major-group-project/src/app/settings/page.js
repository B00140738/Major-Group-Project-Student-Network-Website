"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function SettingsPage() {
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState(''); // Add newUsername state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              
                const response = await fetch('http://localhost:3000/api/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const userDetails = await response.json();
                setUsername(userDetails.username);
                setEmail(userDetails.email);
            } catch (error) {
                console.error("Failed to fetch user details:", error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, newUsername, email, password }), // Include newUsername
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Update result:', result);
            router.push('/dashboard');
        } catch (error) {
            console.error("Failed to update user details:", error);
        }
    };

    return (
        <div className="settings-container">
            <h1>Account Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newUsername">New Username</label> {/* Add newUsername input field */}
                    <input
                        type="text"
                        id="newUsername"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    );
}
