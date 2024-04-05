'use client';
import React, { useState, useEffect } from 'react';
import '../css/forums.css';
import '../css/signupform.css';
import { useRouter } from 'next/navigation';
import { Button, Box, TextField } from "@mui/material";
import Layout from '../Components/Layout';
import Link from 'next/link'; 

const viewModule = () => {
  const router = useRouter(); // Initialize the router object
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [username, setUsername] = useState(''); // State for username
  const [moduleId, setModuleId] = useState('');

  useEffect(() => {
    if (router.query && router.query.moduleId) {
      const { moduleId } = router.query;
      setModuleId(moduleId);
      fetchPostsByModule(moduleId);
    }
  }, [router.query]);

  const fetchPostsByModule = async (moduleId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/getPostsByModule?moduleId=${moduleId}`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error('Failed to fetch posts by module');
      }
    } catch (error) {
      console.error('Error fetching posts by module:', error);
    }
  };


  async function runDBCallAsync(url, formData){
    try {
      const res = await fetch(url, {
        method: 'POST', // Use POST method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Check if the HTTP status code is OK (200-299)
      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json(); // Parse the JSON in the response
  
      return data; // Return the parsed JSON data
    } catch (error) {
      // If an error occurs, log it to the console
      console.error("Error during fetch: ", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/getPosts')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching sposts:', error);
      });
  }, []);



  const handleViewPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    fetch('http://localhost:3000/api/getCommentsById')
    .then((res) => res.json())
    .then((comments) => {
      setComments(comments);
    })
    .catch((error) => {
      console.error('Error fetching comments:', error);
    });
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setComments([]);
  };

  useEffect(() => {
    const getUsernameFromCookies = () => {
      const allCookies = document.cookie.split('; ');
      const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
      return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
    };
    setUsername(getUsernameFromCookies());
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const content = event.target.content.value; // Get the content value from the form
    if (!content.trim()) return; // Basic validation to prevent empty comments
    const timestamp = new Date();
    const poster = username;
    const postId = selectedPost._id;

    try {
      const response = await runDBCallAsync(`http://localhost:3000/api/createComment?poster=${poster}&content=${content}&timestamp=${timestamp}&postId=${postId}`);
  
      if (response && response.data === "true") { // Make sure to check if response is not undefined
        const newComment = { poster, content, timestamp, postId };
        setComments(prevComments => [...prevComments, { ...newComment, _id: Date.now().toString() }]);
        event.target.content.value = ''; // Clear the input field
      
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  return (
    <Layout>
      <div>
        <center><h1>Module Posts</h1></center>
        <button onClick={() => window.location.href = '/createPost'}>Create Post</button>
        <Link href="/createPost">Create Post</Link>
        
        {data.length === 0 ? (
          <div className='forum-container'>
            <p>No posts available.</p>
          </div>
        ) : (
          data
          .filter((item) => moduleId === item.module_id)
          .map((item, i) => (
            <div className='forum-container' key={i}>
              <p>Posted By: {item.poster}</p>
              
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <button onClick={() => handleViewPost(item)}>
                View Post
              </button>
            </div>
          ))
        )}

{isModalOpen && (
  <div className="modal-backdrop">
    <div className="modal-content">
      <button onClick={closeModal} className="modal-close-button">X</button>
      <p>Posted by: {selectedPost?.poster}</p>
      <h2>{selectedPost?.title}</h2>
      <p>{selectedPost?.content}</p>
      <hr/>
      <div className="forum-container">
        <h3>Comments:</h3>
        {comments
  .filter((comment) => comment.postId === selectedPost._id) // Make sure the property matches what's in the database
  .map((forumComment, index) => (
    <div className="forum-container" key={index}>
      <p>Posted By: {forumComment.poster}</p>
      <h4>{forumComment.content}</h4>
    </div>
  ))
}
      </div>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
        <TextField
          margin="normal"
          name="content"
          label="content"
          type="text"
          id="content"
        />
        <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}}>
          Submit
        </Button>
      </Box>
    </div>
  </div>
)}
      </div>
    </Layout>
  );
};

export default viewModule;
