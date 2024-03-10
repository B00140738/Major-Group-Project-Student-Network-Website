// components/Header.js
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import Link from 'next/link'; // Import Link from next/link
import '../css/header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = ({ setSearchResults }) => {
  const [username, setUsername] = useState('');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [profileImageData, setProfileImageData] = useState('../public/images/homepage.png');

  const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      if (e.target.value === '') {
          setIsSearchExpanded(false);
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

  const checkForUsernameUpdate = () => {
    const usernameUpdatedTime = getCookie('usernameUpdated');
    if (usernameUpdatedTime && Number(usernameUpdatedTime) > (window.lastUsernameCheck || 0)) {
      setUsername(getCookie('username'));
    }
    window.lastUsernameCheck = Number(usernameUpdatedTime);
  };
  
  useEffect(() => {
    const intervalId = setInterval(checkForUsernameUpdate, 1000); // Check every second
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const getCookie = (name) => {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=');
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  };



  const getUsernameFromCookies = () => {
    const allCookies = document.cookie.split('; ');
    const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
    return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
  };

  useEffect(() => {
    const fetchNotifications = async () => {
        const username = getUsernameFromCookies(); // Use the function you already have
        try {
            const response = await fetch(`/api/notifyUser?username=${username}`);
            if (!response.ok) {
                throw new Error('Failed to fetch notifications');
            }
            const data = await response.json();
            setNotificationCount(data.count); // Update your state with the fetched count
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };
    
    fetchNotifications();
}, []);


  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(prevState => !prevState);
};


  const handleLogout = () => {
      document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      if (router) {
          router.push('/');
      }
  };

  const handleSearch = async () => {
      if (!searchQuery) return;
      try {
          const response = await fetch(`/api/getSearch?search=${encodeURIComponent(searchQuery)}`);
          if (!response.ok) {
              console.error('Failed to fetch search results');
              return;
          }
          const data = await response.json();
          setSearchResults(data);
      } catch (error) {
          console.error('Error searching:', error);
      }
  };

  return (
      <div className="side-bar-header">
          <div className="profile-section">
              <div className="profile-image"
                  style={{ backgroundImage: `url(${profileImageData})` }}
              >
                  {!profileImageData && <div>Your placeholder or icon here</div>}
              </div>
       
              <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
              />
              <div className="username-display">{username}</div>
              <div className="notification-container">
                <span className={`notification-count ${notificationCount > 0 ? 'has-notifications' : ''}`}>
                    {notificationCount}
                </span>
            </div>
              <div className={`search-bar ${isSearchExpanded ? 'expanded' : ''}`}>
                  <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      onFocus={() => setIsSearchExpanded(true)}
                      onBlur={() => !searchQuery && setIsSearchExpanded(false)}
                      className="search-input"
                  />
                  <SvgIcon component={SearchIcon} className="search-icon" onClick={handleSearch}/>
              </div>
              <Link href="/dashboard" className="menu-item">
                  <SvgIcon component={HomeIcon} />
                  Dashboard
              </Link>
              
                <div className="menu-item" onClick={toggleSettingsDropdown}>
                    <SvgIcon component={SettingsIcon} />
                    Settings {showSettingsDropdown ? '▲' : '▼'}
                </div>
                {showSettingsDropdown && (
        <div className="dropdown-menu">
          <Link href="/edit-settings" legacyBehavior>
            <a className="dropdown-item">Edit Settings</a>
          </Link>
          {/* You can add more dropdown items here */}
        </div>
      )}
              <div className="menu-item" onClick={handleLogout}>Log out @{username}</div>
          </div>
      </div>
  );
};

export default Header;

