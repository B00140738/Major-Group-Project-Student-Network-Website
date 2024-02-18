// components/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import Link from 'next/link'; // Import Link from next/link
import '../css/header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SvgIcon from '@mui/material/SvgIcon';

export default function Header() {
  const [username, setUsername] = useState('');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0); // State for notification count
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {

    // Encode the search query to be URL-safe
    if (!searchQuery.trim()) return;
  const queryParams = new URLSearchParams({ searchQuery: searchQuery.trim() }).toString();
      
  
      // Call the API endpoint with the search query
      const response = await fetch(`http://localhost:3000/api/getSearch?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();

        // Assuming you want to navigate to the dashboard with search results as a state
        router.push(`/dashboard?search=${encodeURIComponent(searchQuery.trim())}`);
      } else {
        // Handle errors or no results found
        console.error('Search failed');
      }
    };


  useEffect(() => {
    const getUsernameFromCookies = () => {
      const allCookies = document.cookie.split('; ');
      const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
      return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
    };
    const username = getUsernameFromCookies();
    setUsername(username);
    if (!username) {
      router.replace('/login');
    }
  }, [router]);
  
  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };

  const handleLogout = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (router) {
      router.push('/');
    }
  };

  return (
    <div className="side-bar-header">
      <div className="profile-section">
        <div className="profile-image"></div>
        <div className="username-display">{username}</div>
        {/* Display notification icon with count */}
        <div className="notification-icon">
            {notificationCount > 0 && (
              <div className="notification-count">{notificationCount}</div>
            )}
            <span className="material-icons">notifications</span>
            <SvgIcon component={NotificationsIcon} />
        </div>
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
        <Link href="/dashboard" className="menu-item">Dashboard</Link>
        <div className="menu-item" onClick={toggleSettingsDropdown}>
          Settings {showSettingsDropdown ? '▲' : '▼'}
        </div>
        {showSettingsDropdown && (
          <div className="dropdown-menu">
            <Link href="/settings" className="dropdown-item">Edit Profile</Link>
          </div>
        )}
        <div className="menu-item" onClick={handleLogout}>Log out @{username}</div>
        <div>
          
          </ div>
      </div>
    </div>
    
  );
};