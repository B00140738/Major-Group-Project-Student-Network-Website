"use client"
import React, { useState, useEffect } from 'react';
import '../css/dashboard.css';

export default function Dashboard() {
    const [username, setUsername] = useState('');

    useEffect(() => {
      // Retrieve username from the cookie
      const getUsernameFromCookies = () => {
        const allCookies = document.cookie.split('; ');
        const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
        return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
      };

      setUsername(getUsernameFromCookies());
    }, []);

    return (
        <div className="main-container">
            <div className="dashboard-container">
                <header>
                    <div className="search-bar">
                        <input type="text" placeholder="Search"/>
                        <button className="search-button">Search</button>
                    </div>
                    <button className="profile-button">{username}</button>
                </header>
                <section className="main-content">
                    <div className="top-boxes">
                        <div className="forum-box">
                            <h2>Forums</h2>
                            <button className="view-posts-button">View Posts</button>
                        </div>
                    </div>
                    <div className="side-bar">
                        <h2>General Forums</h2>
                    </div>
                </section>
            </div>
        </div>
    );
}