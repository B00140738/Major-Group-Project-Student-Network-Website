'use client';
import { Button, Box, TextField } from "@mui/material";
import React, { useState, useEffect } from 'react';
import Layout from "../Components/Layout";


async function runDBCallAsync(url, formData){
// Send a POST request
    try {
        // Send a POST request
        const res = await fetch(url, { 
          method: 'POST', // Use POST method
          headers: {
            'Content-Type': 'application/json',
          },
          // Convert the FormData object into a JSON string
          body: JSON.stringify(formData), 
        });
        // Check if the HTTP status code is OK (200-299)
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }


    const data = await res.json();
// Check if the response is OK and return the data
    if (data.data === "true"){ 
        console.log("Post created successfully")
    }
    else {
        console.log("Error: could not create post")
    }
    // If an error occurs, log it to the console
    }catch (error) { 
    // If an error occurs, log it to the console
    console.error("Error during fetch: ", error);
  }
}




const createPost = () => {
    const [username, setUsername] = useState('');
  
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
  
      const data = new FormData(event.currentTarget);
      let title = data.get('title');
      let content = data.get('content');
      let timestamp = new Date();
      let poster = username;
  
      try {
        const response = await runDBCallAsync(`http://localhost:3000/api/createPost?poster=${poster}&title=${title}&content=${content}&timestamp=${timestamp}`);
       console.log('response:', response);
        if (response.data === "true") {
          console.log("Post created successfully");
          window.location.href = '/forums'; // Redirect to dashboard
        } else {
          console.log("Error: could not create post");
        }
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };
  
    return (
      <Layout>
        <div className="post-creator">
          <center><h1>Create Post</h1></center>
  
          <form onSubmit={handleSubmit}>
            <h2>Title</h2>
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="title"
              type="text"
              id="title"
            />
            <br></br>
            <h2>Content</h2>
            <TextField
              margin="normal"
              required
              fullWidth
              name="content"
              label="content"
              type="text"
              id="content"
            />
            <br></br>
  
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Post
            </Button>
          </form>
        </div>
      </Layout>
    );
  }
  
  export default createPost;