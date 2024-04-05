//dashboard
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css'; // Ensure this path is correct
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import Modal from '../Components/Modal';

export default function Dashboard() {
  const router = useRouter();
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showModulePopup, setShowModulePopup] = useState(false);
  const [username, setUsername] = useState('');
  const [userYear, setUserYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showModuleDetails, setShowModuleDetails] = useState(false); 
  const [moduleThreads, setModuleThreads] = useState([]);

  const fetchThreadsForModule = async (moduleId) => {
    try {
      const response = await fetch(`/api/threads?moduleId=${moduleId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch threads');
      }
      const data = await response.json();
      console.log(data.threads);
      setModuleThreads(data.threads); // Update the state with the fetched threads
    } catch (error) {
      console.error('Error fetching threads:', error);
    }
  };
  

  const getUsernameFromCookies = () => {
    const allCookies = document.cookie.split('; ');
    const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
    return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
  };

  

  const closeModuleDetails = () => {
    setShowModuleDetails(false);
    setSelectedModule(null);
  };
  const getUserIdFromCookies = () => {
    const allCookies = document.cookie.split('; ');
    const userIdCookie = allCookies.find(cookie => cookie.startsWith('userId='));
    return userIdCookie ? decodeURIComponent(userIdCookie.split('=')[1]) : null;
  };


 useEffect(() => {
    const fetchModules = async () => {
      // Assume getUserIdFromCookies is a function you've already implemented
      const userId = getUserIdFromCookies();
      try {
        const response = await fetch(`/api/getModules?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setModules(data.modules);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };
    
    // Call the function to execute it
    fetchModules();

    // Get user data from cookies
    const getUserDataFromCookies = () => {
      const allCookies = document.cookie.split('; ');
      const usernameCookie = allCookies.find((cookie) => cookie.startsWith('username='));
      const yearCookie = allCookies.find((cookie) => cookie.startsWith('year='));

      const username = usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
      const year = yearCookie ? decodeURIComponent(yearCookie.split('=')[1]) : '';

      return { username, year };
    };
    fetchModules();
    const { username, year } = getUserDataFromCookies();
    setUsername(username);
    setUserYear(year);

    if (!username) {
      router.replace('/login');
    }
  }, [router]);

  const handleAddModuleClick = () => {
    setShowModulePopup(true);
  };

  const handleSelectModule = (module) => {
    event.preventDefault(); // Prevent the default action of the event
    console.log('Selected Module:', module);
    setSelectedModule(module);
    fetchThreadsForModule(module._id); // Correct function name
    router.push(`/forums`); // Redirect to the module's forum
  };


  const handleModuleSubmit = async (e) => {
    e.preventDefault();

    console.log('Selected Module:', selectedModule);
    console.log('Username:', username);
    console.log('User Year:', userYear);

    if (selectedModule) {
      try {
        const response = await fetch('/api/addModule', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            moduleId: selectedModule._id,
            moduleYear: selectedModule.year,
            moduleCode: selectedModule.code,
            moduleTitle: selectedModule.title,
            username: username,
            userYear: userYear,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
        } else {
          console.error('Failed to add module:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setShowModulePopup(false);
      }
    }
  };



  return (
    <Layout>
      <Header setSearchResults={setSearchResults} />
      <div className="main-container">
        <div className="dashboard-container">
          <section className="main-content">
            <div className="side-bar left">
              <h2>Newest Posts</h2>
              <button className="Make-Thread">Make a Thread</button>
            </div>
            <div className="central-content">
              <h2>Search Results</h2>
              <ul>
                {searchResults.map((result, i) => (
                  <li key={result._id}>
                    <h3>{result.title}</h3>
                    <p>{result.content}</p>
                    <small>Posted by: {result.poster} on {result.timestamp}</small>
                  </li>
                ))}
              </ul>
              <div className="forum-box">
                <center><h2>Modules</h2></center>
                {modules.length === 0 ? (
                  <div className='module-container'>
                    <p>No posts available.</p>
                  </div>
                ) : (
                  modules.map((module, i) => (
                    <div className='module-container' key={module._id}>
                      <p>{module.code} - Year {module.year}</p>
                      <h3>{module.title}</h3>
                      <button onClick={() => handleSelectModule(module)}>View Module</button>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="side-bar right">
              <h2>General Forums</h2>
              {/* Right sidebar content, if any */}
            </div>
          </section>
        </div>

        {/* Modal for displaying selected module details */}
        {showModuleDetails && selectedModule && (
          <Modal onClose={closeModuleDetails}>
            <h2>{selectedModule.title}</h2>
            <p>Description: {selectedModule.description}</p>
            {/* Additional details can be added here */}
          </Modal>
        )}
      </div>
    </Layout>
  );
}