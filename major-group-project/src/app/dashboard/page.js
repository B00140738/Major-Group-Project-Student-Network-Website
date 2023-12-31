"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css';

export default function Dashboard() {
    const [username, setUsername] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter(); // Get the Next.js router

    useEffect(() => {
        
        // Retrieve username from the cookie
        const getUsernameFromCookies = () => {
        const allCookies = document.cookie.split('; ');
        const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
        return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
      };
      const username = getUsernameFromCookies();
      setUsername(username);
      // If the username is not set, redirect to the login page
        if (!username) {
            router.replace('/'); // replace the '/login' with your login route
  }
    }, [router]);


       // Toggle dropdown
       const toggleDropdown = () => setShowDropdown(!showDropdown);

      // Logout function
      const handleLogout = () => {
        // Clear the username cookie or other session storage
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Redirect to the home page if the router is available
    if (router) {
       
        router.push('/');
    }
      };
          // Navigate to edit profile page
    const handleEditProfile = () => {
        // Close the dropdown
        setShowDropdown(false);
        // Push to the edit profile route
        router.push('../settings'); // replace '/edit-profile' with your actual edit profile route
    };

              // Navigate to edit profile page
              const handleforum = () => {
                // Close the dropdown
                setShowDropdown(false);
                // Push to the edit profile route
                router.push('../forums'); // replace '/edit-profile' with your actual edit profile route
            };

    return (
        <div className="main-container">
            <div className="dashboard-container">
                <header>
                    <div className="search-bar">
                        <input type="text" placeholder="Search"/>
                        <button className="search-button">Search</button>
                    </div>
                    <div className="profile-section">
                        <button onClick={toggleDropdown} className="profile-button">
                            {username} {showDropdown ? '▲' : '▼'}
                        </button>
                        {showDropdown && (
                            <div className="profile-dropdown">
                            <div className="dropdown-item" onClick={handleEditProfile}>Settings</div>
                            <div onClick={handleLogout} className="dropdown-item">Log out @{username}</div>
                            </div>
                        )}
                    </div>

                </header>
                <section className="main-content">
                    <div className="side-bar left">
                        <h2>Forum Threads</h2>
                        {/* Left sidebar content here */}
                        <button className="Make-Thread">Make a Thread</button>
                    </div>
                    <div className="central-content">
                        <div className="forum-box">
                            <h2>Forums</h2>
                            <button className="view-posts-button" onClick={handleforum}>View Posts</button>
                        </div>
                    </div>
                    <div className="side-bar right">
                        <h2>General Forums</h2>
                        {/* Right sidebar content here */}
                    </div>
                </section>


            </div>
        </div>
    );
}