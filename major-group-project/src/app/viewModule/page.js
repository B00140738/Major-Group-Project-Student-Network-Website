'use client';
import React, { useState, useEffect } from 'react';
import '../css/forums.css';
import '../css/signupform.css';
import { useRouter } from 'next/navigation';
import { Button, Box, TextField } from "@mui/material";
import Layout from '../Components/Layout';
import Link from 'next/link'; 

// In viewModule.js
const ViewModule = () => {
  const router = useRouter();
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModuleData = async () => {
      try {
        const moduleId = router.query.moduleId;
        const response = await fetch(`/api/getModules?moduleId=${moduleId}`); // Adjust the API endpoint
        if (response.ok) {
          const data = await response.json();
          setModuleData(data);
        } else {
          console.error('Failed to fetch module data');
        }
      } catch (error) {
        console.error('Error fetching module data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModuleData();
  }, [router.query.moduleId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!moduleData) {
    return <div>Module details not available</div>;
  }

  return (
    <Layout>
      <div>
        <h1>{moduleData.title}</h1>
        <p>{moduleData.description}</p>
        {/* Render module content here */}
      </div>
    </Layout>
  );
};
