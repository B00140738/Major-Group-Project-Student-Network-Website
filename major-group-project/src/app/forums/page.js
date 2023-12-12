'use client';
import React, { useState, useEffect } from 'react';
import '../css/forums.css';
import '../css/signupform.css';
import { Button, Box, TextField } from "@mui/material";


const Home = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [username, setUsername] = useState(''); // State for username


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

  useEffect(() => {
    fetch('/api/getPosts')
      .then((res) => res.json())
      .then((postData) => {
        setData(postData);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const fetchCommentsForPost = (postId) => {
    fetch('http://localhost:3000/api/getCommentsById')
      .then((res) => res.json())
      .then((comment) => {
        setComment(comment);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    };


  const handleViewPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    fetchCommentsForPost(post._id); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setComment(null);
  };

  useEffect(() => {
    // Function to retrieve username from the cookie
    const getUsernameFromCookies = () => {
        const allCookies = document.cookie.split('; ');
        const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
        return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
    };
    setUsername(getUsernameFromCookies()); // Set the username
}, [])

 
const handleSubmit = async (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  let content = data.get('content');
  let timestamp = new Date();
  let poster = username;

  try {
    const response =await runDBCallAsync(`http://localhost:3000/api/createComment?poster=${poster}&content=${content}&timestamp=${timestamp}`);
 

    // Handle the response as needed
    console.log('API Response:', response);

    // If the comment was successfully created, update the comments for the selected post
    if (response.data === "true" && selectedPost) {
      const newComment = {
        poster,
        content,
        timestamp,
      };
      setComment((prevComments) => [...prevComments, newComment]);
    }
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
  

  if (!data) return <div className='forum-container'><p>Loading...</p></div>;
  if (data.length === 0) return <div className='forum-container'><p>No posts available.</p></div>;

  return (
    <div>
      <center><h1>Forum Posts</h1></center>
      <button onClick={() => window.location.href = '/createPost'}>Create Post</button>
      {data.map((item, i) => (
        <div className='forum-container' key={i}>
          <p>Posted By: {item.poster}</p>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <button onClick={() => handleViewPost(item)}>
            View Post
          </button>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-button">X</button>
            <p>Posted by: {selectedPost?.poster}</p>
            <h2>{selectedPost?.title}</h2>
            <p>{selectedPost?.content}</p>
            <hr/>
            <div className="comments-container">
              <h3>Comments:</h3>
              {comment && comment.map((forumComment, index) => (
                <div className='forum-container' key={index}>
                  <p>Posted By: {forumComment.poster}</p>
                  <p>{forumComment.content}</p>
                </div>
              ))}
            </div>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
            margin="normal"
            name="content"
            label="content"
            type="text"
            id="content"
            />
            <Button type="submit"
            variant="contained"
            sx={{mt: 3, mb: 2 }}>
                Submit
            </Button>
              </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

// Keep your existing GET function as it is