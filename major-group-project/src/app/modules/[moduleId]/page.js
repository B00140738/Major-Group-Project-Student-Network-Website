"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected to 'next/router'

import { Button, Box, TextField } from "@mui/material";
import Link from 'next/link'; 
import Layout from '../../Components/Layout';
import Header from '../../Components/Header';

import '../../css/modulePage.css';
const ModulePage = () => {
  const [moduleInfo, setModuleInfo] = useState({});
  const [threads, setThreads] = useState([]);
  // Retrieve moduleId from local storage instead of using router.query
  const moduleId = localStorage.getItem('currentModuleId');
  const router = useRouter(); // Using useRouter for navigation
  const [posts, setPosts] = useState([]); // Added state for posts
  useEffect(() => {
    const fetchModuleDetails = async () => {
      if (!moduleId) return; // Exit if moduleId is not set yet

      try {
        const response = await fetch(`/api/threads?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch module details');
        const data = await response.json();
        
        setModuleInfo(data.module || {});
        setThreads(data.threads || []);
      } catch (error) {
        console.error('Error fetching module details:', error);
      }
    };

    fetchModuleDetails();
  }, [moduleId]); // Depend on moduleId

  useEffect(() => {
    const fetchPostsForModule = async () => {
      if (!moduleId) return;
      try {
        const response = await fetch(`/api/getPostByModule?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch posts for module');
        const data = await response.json();
        setPosts(data.posts || []); // Set the fetched posts
      } catch (error) {
        console.error('Error fetching posts for module:', error);
      }
    };

    fetchPostsForModule();
  }, [moduleId]);


  const handleCreatePost = () => {
    // Store the moduleId in local storage to be used in the createPost page
    localStorage.setItem('currentModuleId', moduleId);
    // Navigate to the createPost page
    router.push('/createPost');
  };
  return (
    <Layout>
      <Header />
      <div className='container'>
        {moduleInfo && moduleInfo.title ? (
          <div className='forum-container'>
            <h1>{moduleInfo.title}</h1>
            <p>{moduleInfo.description}</p>
            <Button variant="contained" color="primary" onClick={handleCreatePost}>
              Create Post
            </Button>
            {/* Rendering Posts Here */}
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="post">
                  <h4>creater:{post.poster}</h4>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  {/* Additional post details can go here */}
                </div>
              ))
            ) : (
              <p>No posts to display</p>
            )}
          </div>
        ) : (
          <p>Loading module details...</p>
        )}
      </div>
    </Layout>
  );
};

export default ModulePage;