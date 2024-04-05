"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected to 'next/router'
import '../../css/forums.css'; // Corrected CSS import path
import { Button, Box, TextField } from "@mui/material";
import Link from 'next/link'; 
import Layout from '../../Components/Layout';
import Header from '../../Components/Header';

const ModulePage = () => {
  const router = useRouter();
  const [threads, setThreads] = useState([]);
  const [moduleInfo, setModuleInfo] = useState({});
  const { moduleId } = router.query || {};
  const [module, setModule] = useState({})

    useEffect(() => {
   
      const fetchModuleDetails = async () => {
        console.log('Module data:', module); // Log the module object
  
        if (!moduleId) return;
  
        try {
          const response = await fetch(`/api/threads?moduleId=${moduleId}`);
          if (!response.ok) throw new Error('Failed to fetch module details');
          const data = await response.json();
          if (data.error) {
            console.error('Error fetching module:', data.error);
            // Handle specific errors (e.g., display an error message)
            return;
          }
  
          setModule(data.module);
        } catch (error) {
          console.error('Error fetching module details:', error);
          // Handle general errors gracefully
        }
      };
  
      fetchModuleDetails();
    }, [moduleId]); // Depend on moduleId to refetch on change

 
  

  return (
    <Layout>
      <Header />
    <div className='container'>
    <h1>{module.title}</h1>
        <Link href="/createPost">Create Post</Link>
    {module && module.title ? (
      
        <div className='forum-container'>
            <h1>{module.title}</h1>
            <p>{module.description}</p>
            {/* ... other module details */}
        </div>
    ) : module ? (
        <p>Module details not available (missing title/description).</p>
    ) : (
        <p>Loading module details...</p>
    )}
        

      <div>
        {threads.length > 0 ? (
          threads.map((thread) => (
            <div key={thread._id} className="modal-backdrop">
              <h3>{thread.title}</h3>
              {/* Render other thread details */}
            </div>
          ))
        ) : (
          <p>No threads to display</p>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default ModulePage;
