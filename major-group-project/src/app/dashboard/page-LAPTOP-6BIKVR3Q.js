"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css'; // Ensure this path is correct
import Layout from '../Components/Layout';
import Header from '../Components/Header';
export default function Dashboard() {
  const router = useRouter();
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showModulePopup, setShowModulePopup] = useState(false);
  const [username, setUsername] = useState('');
  const [userYear, setUserYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    // Fetch data and set modules
    const fetchModules = async () => {
      try {
        const response = await fetch('/api/getModules');
        if (response.ok) {
          const data = await response.json();
          setModules(data);
          console.log(data);
        } else {
          console.error('Failed to fetch modules');
        }
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

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
  const handleSelectModule = (selectedModule) => {
    console.log('Selected Module:', selectedModule);
    setSelectedModule(selectedModule);
    setShowModulePopup(true);
  
    router.push(`/forums?moduleId=${selectedModule._id}`); // Pass moduleId as query parameter
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
                                {searchResults && searchResults.map((result, i) => (
                                    <li key={result._id}>
                                        <h3>{result.title}</h3>
                                        <p>{result.content}</p>
                                        <small>Posted by: {result.poster} on {result.timestamp}</small>
                                    </li>
                                ))}
                            </ul>
              <div className="forum-box">
                <center><h2>Modules</h2></center>
                <br/>
                {/* Grid of modules filtered by user's year */}
                {modules.length === 0 ? (
          <div className='module-container'>
            <p>No posts available.</p>
          </div>
        ) : (
          modules.map((item, i) => (
            <div className='module-container' key={i}>
              <p>{item.code} - Year {item.year}</p>
              <h3>{item.title}</h3>
              <button onClick={() => handleSelectModule(item)}>View Module</button>
            </div>
          ))
        )}
                {/* End of grid */}
              </div>
            </div>
            <div className="side-bar right">
              <h2>General Forums</h2>
              {/* Right sidebar content */}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}