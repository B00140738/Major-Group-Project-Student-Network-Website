"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css';
import Layout from '../Components/Layout';
import Header from '../Components/Header'; // Import the Header component

export default function Dashboard() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchParam, setSearchParam] = useState('');

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

    return (
        <Layout>
            {/* Pass setSearchResults function as a prop */}
            <Header setSearchResults={setSearchResults} />
            <div className="main-container">
                <div className="dashboard-container">
                    <section className="main-content">
                        <div className="side-bar left">
                            <h2>Forum Threads</h2>
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
                                <h2>Forums</h2>
                                <button className="view-posts-button">View Posts</button>
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