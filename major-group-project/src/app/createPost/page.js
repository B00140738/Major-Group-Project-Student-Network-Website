'use client';

import { Button, Box, TextField } from "@mui/material";
import React, { useState, useEffect } from 'react';
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


    const data = await res.json();

    if (data.data === "true"){
        console.log("Post created successfully")
    }
    else {
        console.log("Error: could not create post")
    }
    }catch (error) {
    // If an error occurs, log it to the console
    console.error("Error during fetch: ", error);
  }
}




const createPost = () => {
    const [username, setUsername] = useState(''); // State for username
    useEffect(() => {
        // Function to retrieve username from the cookie
        const getUsernameFromCookies = () => {
            const allCookies = document.cookie.split('; ');
            const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
            return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
        };
        setUsername(getUsernameFromCookies()); // Set the username
    }, [])


    
const handleSubmit = (event) => {

    console.log("handling submit");
    event.preventDefault();

    const data = new FormData(event.currentTarget);

       // Extract the title and content from the form data
        let title = data.get('title');
        let content = data.get('content');
        let timestamp = new Date();
        let poster = username;

    console.log("creating post...")


    runDBCallAsync(`http://localhost:3000//api/createPost?poster=${poster}&title=${title}&content=${content}&timestamp=${timestamp}`)
    window.location.href = '/forums'; // Redirect to dashboard
}; // end handler

    return (
        <body>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
        <div className="post-creator">
            <center><h1>Create Post</h1></center>
     
            <br></br>
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
            sx={{mt: 3, mb: 2 }}
            >
            Create Post  
            </Button>
        </div>
        </Box>
        </body>
    )
}

export default createPost;