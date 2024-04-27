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

  useEffect(() => {
    const fetchModuleDetails = async () => {
      if (!moduleId) return;

      try {
        const response = await fetch(`/api/getModules?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch module details');
        const data = await response.json();
        if (data.error) {
          console.error('Error fetching module:', data.error);
          return;
        }

        setModuleInfo(data.module);
      } catch (error) {
        console.error('Error fetching module details:', error);
      }
    };

    fetchModuleDetails();
  }, [moduleId]);


  return (
    <Layout>
      <Header />
      <div className='container'>
        {moduleInfo && moduleInfo.title ? (
          <div className='forum-container'>
            <h1>{moduleInfo.title}</h1>
            <p>{moduleInfo.description}</p>
          </div>
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