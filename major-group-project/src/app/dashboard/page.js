"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css';
import Layout from '../Components/Layout';

export default function Dashboard() {
    const router = useRouter(); // Get the Next.js router
    const [username, setUsername] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchParam, setSearchParam] = useState('');

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const searchTerm = router.query?.search; // Use optional chaining here
                console.log('Search Term:', searchTerm);
                if (searchTerm) {
                    const response = await fetch(`/api/getSearch?searchParam=${encodeURIComponent(searchTerm)}`);
                    if (response.ok) {
                        const data = await response.json();
                        setSearchResults(data);
                    } else {
                        console.error('Failed to fetch search results');
                    }
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [router.query?.search]); // Use optional chaining here

    return (
        <Layout>
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
                            {searchResults.map((result) => (
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