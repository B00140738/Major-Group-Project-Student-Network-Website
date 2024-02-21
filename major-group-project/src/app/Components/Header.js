// components/Header.js
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import Link from 'next/link'; // Import Link from next/link
import '../css/header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SvgIcon from '@mui/material/SvgIcon';

export default function Header({ setSearchResults }) {
  const [username, setUsername] = useState('');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

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

  const handleSearch = async () => {
      if (!searchQuery) return;
      try {
          const response = await fetch(`/api/getSearch?search=${encodeURIComponent(searchQuery)}`);
          if (!response.ok) {
              console.error("Failed to fetch search results");
              return;
          }
          const data = await response.json();
          setSearchResults(data); // Update the search results in the parent component
      } catch (error) {
          console.error('Error searching:', error);
      }
  };

  return (
      <div className="side-bar-header">
          <div className="profile-section">
              <div className="profile-image"></div>
              <div className="username-display">{username}</div>
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
          </div>
      </div>
  );
};