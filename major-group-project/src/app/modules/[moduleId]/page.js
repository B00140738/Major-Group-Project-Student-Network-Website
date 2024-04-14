"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Box, TextField } from "@mui/material";
import Link from 'next/link'; 
import Layout from '../../Components/Layout';
import Header from '../../Components/Header';

import '../../css/modulePage.css';
const ModulePage = () => {
  const [moduleInfo, setModuleInfo] = useState({});
  const [threads, setThreads] = useState([]);
  const [posts, setPosts] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [username, setUsername] = useState('');
  const router = useRouter();
  const moduleId = localStorage.getItem('currentModuleId');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const userId = getUserIdFromCookies();
        const response = await fetch(`/api/getUserInfo?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch username');
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  useEffect(() => {
    const fetchModuleDetails = async () => {
      if (!moduleId) return;

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
  }, [moduleId]);

  useEffect(() => {
    const fetchPostsForModule = async () => {
      if (!moduleId) return;
      try {
        const response = await fetch(`/api/getPostByModule?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch posts for module');
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching posts for module:', error);
      }
    };

    fetchPostsForModule();
  }, [moduleId]);

  useEffect(() => {
    const fetchAnnouncementsForModule = async () => {
      if (!moduleId) return;
      try {
        const response = await fetch(`/api/getAnnouncements?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch announcements for module');
        const data = await response.json();
        setAnnouncements(data.announcements || []);
      } catch (error) {
        console.error('Error fetching announcements for module:', error);
      }
    };

    fetchAnnouncementsForModule();
  }, [moduleId]);

  const getUserIdFromCookies = () => {
    const allCookies = document.cookie.split('; ');
    const userIdCookie = allCookies.find(cookie => cookie.startsWith('userId='));
    return userIdCookie ? decodeURIComponent(userIdCookie.split('=')[1]) : null;
  };

  const handleCreatePost = () => {
    localStorage.setItem('currentModuleId', moduleId);
    router.push('/createPost');
  };

  const handleCreateAnnouncement = () => {
    localStorage.setItem('currentModuleId', moduleId);
    router.push('/createAnnouncement');
  };

  return (
    <Layout>
      <Header />
      <div className='container'>
        {moduleInfo && moduleInfo.title ? (
          <div className='forum-container'>
            <center>
              <h1>{moduleInfo.title}</h1>
              <p>{moduleInfo.description}</p>
              <Button variant="contained" color="primary" onClick={handleCreatePost}>
                Create Post
              </Button>
              <Button variant="contained" color="primary" onClick={handleCreateAnnouncement}>
                Create Announcement
              </Button>
            </center>
            <br></br>
            <br></br>
            <center><h1>Announcements</h1></center>
            <br></br>
            <br></br>
            {/* Render Announcements Here */}
            {announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <div key={index} className="announcement">
                  <h4>{announcement.title}</h4>
                  <p>{announcement.content}</p>
                </div>
              ))
            ) : (
              <center><p>No announcements to display</p></center>
            )}
            <br></br>
            <br></br>
            <center><h1>Posts</h1></center>
            {/* Rendering Posts Here */}
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="post">
                  <h4>creator: {post.poster}</h4>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
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