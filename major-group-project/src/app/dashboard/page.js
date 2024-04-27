//dashboard
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css';
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import Link from 'next/link';
import { setCookie } from 'nookies';

export default function Dashboard() {
  const router = useRouter();
  const [modules, setModules] = useState([]);
  const [generalModules, setGeneralModules] = useState([]); // State to store general modules
  const [username, setUsername] = useState('');
  const [userYear, setUserYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showModulesPopup, setShowModulesPopup] = useState(false);
  const [dashboardModules, setDashboardModules] = useState([]);



  useEffect(() => {
    const fetchModules = async () => {
      try {
        const userId = getUserIdFromCookies();
        const response = await fetch(`/api/getModules?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setModules(data.modules);
        const dashboardModulesKey = `dashboardModules-${userId}`;
        setDashboardModules(JSON.parse(localStorage.getItem(dashboardModulesKey)) || []);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    const fetchGeneralModules = async () => {
      try {
        const response = await fetch(`/api/getGeneral`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setGeneralModules(data.modules);
      } catch (error) {
        console.error('Error fetching general modules:', error);
      }
    };

    const getUserDataFromCookies = () => {
      const allCookies = document.cookie.split('; ');
      const usernameCookie = allCookies.find((cookie) => cookie.startsWith('username='));
      const yearCookie = allCookies.find((cookie) => cookie.startsWith('year='));
      const username = usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
      const year = yearCookie ? decodeURIComponent(yearCookie.split('=')[1]) : '';
      return { username, year };
    };

    const { username, year } = getUserDataFromCookies();
    setUsername(username);
    setUserYear(year);

    if (!username) {
      router.replace('/login');
    } else {
      fetchModules();
      fetchGeneralModules(); // Fetch general modules
    }
  }, [router]);

  const getUserIdFromCookies = () => {
    const allCookies = document.cookie.split('; ');
    const userIdCookie = allCookies.find(cookie => cookie.startsWith('userId='));
    return userIdCookie ? decodeURIComponent(userIdCookie.split('=')[1]) : null;
  };

  const handleViewModulesClick = () => {
    setShowModulesPopup(true);
  };

  const handleAddModule = (module) => {
    const userId = getUserIdFromCookies();
    const dashboardModulesKey = `dashboardModules-${userId}`;
    const updatedModule = [...dashboardModules, module];
    setDashboardModules(updatedModule);
    localStorage.setItem(dashboardModulesKey, JSON.stringify(updatedModule));
  };

  const handleRemoveModule = (moduleToRemove) => {
    const userId = getUserIdFromCookies();
    const dashboardModulesKey = `dashboardModules-${userId}`;
    const updatedModule = dashboardModules.filter(module => module._id !== moduleToRemove._id);
    setDashboardModules(updatedModule);
    localStorage.setItem(dashboardModulesKey, JSON.stringify(updatedModule));
  };

  const handleModuleClick = (moduleId) => {
    localStorage.setItem('currentModuleId', moduleId);
    router.push(`/modules/${moduleId}`);
  };

  return (
    <Layout setSearchResults={setSearchResults}>
      <Header />
      {showModulesPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close" onClick={() => setShowModulesPopup(false)}>&times;</span>
            <h2>All Modules</h2>
            <ul>
              {modules.map((module) => (
                <li key={module._id}>
                  <p>{module.code} - Year {module.year}</p>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <button onClick={() => handleAddModule(module)}>Add Module</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="main-container">
        <div className="dashboard-container">
          <section className="main-content">
            <div>
              <h3>Search Results:</h3>
              {searchResults.map((result, i) => (
                <li key={result._id}>
                  <h3>{result.title}</h3>
                  <p>{result.content}</p>
                  <small>Posted by: {result.poster} on {result.timestamp}</small>
                </li>
              ))}
            </div>
            <div className="side-bar left">
              <h2>Newest Posts</h2>
              <button className="Make-Thread">Make a Thread</button>
            </div>
            <div className="central-content">
              <h2>Modules</h2>
              <ul>
                {dashboardModules.map((module) => (
                  <li key={module._id}>
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                    <small>{module.code} - Year {module.year}</small>
                    <button onClick={() => handleModuleClick(module._id)}>See Module</button>
                    <button onClick={() => handleRemoveModule(module)}>Remove Module</button>
                  </li>
                ))}
              </ul>
              <button className="view-modules" onClick={handleViewModulesClick}>View Modules</button>
            </div>
            <div className="side-bar right">
              <h2>General Forums</h2>
              {/* Display fetched general modules */}
              {generalModules.map((module) => (
                <div key={module._id}>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <small>{module.code} - Year {module.year}</small>
                  <button onClick={() => handleModuleClick(module._id)}>See Module</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

