//createPost page
'use client';
import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from 'react';
import Layout from "../Components/Layout";
import { useRouter } from 'next/router'; // Import useRouter from 'next/router' instead of 'next/navigation'
import '../css/createPost.css';

async function runDBCallAsync(url, formData) {
    try {
        const res = await fetch(url, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), 
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) { 
        console.error("Error during fetch: ", error);
        throw error;
    }
}

const createPost = () => {
    const [username, setUsername] = useState('');
    const [moduleId, setModuleId] = useState(null); // Initialize moduleId state with null
    const router = useRouter();

    useEffect(() => {
        const getUsernameFromCookies = () => {
            const allCookies = document.cookie.split('; ');
            const usernameCookie = allCookies.find(cookie => cookie.startsWith('username='));
            return usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : '';
        };
        setUsername(getUsernameFromCookies());

        // Set moduleId only when window is defined (client-side)
        if (typeof window !== 'undefined') {
            const currentModuleId = localStorage.getItem('currentModuleId');
            setModuleId(currentModuleId);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = new FormData(event.currentTarget);
        const title = data.get('title');
        const content = data.get('content');
        const timestamp = new Date();
        const poster = username;
    
        try {
            const response = await runDBCallAsync(`/api/createPost?poster=${poster}&title=${title}&content=${content}&timestamp=${timestamp}&moduleId=${moduleId}`);
            if (response.data === "true") {
                console.log("Post created successfully");
                router.push(`/modules/${moduleId}`); // Navigate to module page
            } else {
                console.log("Error: could not create post");
            }
        } catch (error) {
            console.error('Error creating post:', error);
            router.push(`/modules/${moduleId}`); // Navigate to module page even on error
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
                        sx={{
                            mt: 3, mb: 2,
                            borderRadius: '8px',
                            backgroundColor: '#1976d2',
                            '&:hover': {
                                backgroundColor: '#115293',
                            },
                            padding: '10px 15px',
                            color: 'white',
                        }}
                    >
                        Create Post
                    </Button>
                </form>
            </div>
        </Layout>
    );
}

export default createPost;
