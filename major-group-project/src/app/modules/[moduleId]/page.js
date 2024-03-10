"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../css/modulePage.css'; // Import CSS module

const ModulePage = () => {
  const router = useRouter();
  const [threads, setThreads] = useState([]);
  const [moduleInfo, setModuleInfo] = useState({});
  const { moduleId } = router.query || {};

  useEffect(() => {
    const fetchModuleDetails = async () => {
      if (!moduleId) return;
      try {
        const response = await fetch(`/api/module?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch module details');
        const data = await response.json();
        setModuleInfo(data.module);
      } catch (error) {
        console.error('Error fetching module details:', error);
        setModuleInfo({});
      }
    };

    const fetchThreadsForModule = async () => {
      if (!moduleId) return;
      try {
        const response = await fetch(`/api/threads?moduleId=${moduleId}`);
        if (!response.ok) throw new Error('Failed to fetch threads');
        const data = await response.json();
        setThreads(data.threads);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    fetchModuleDetails();
    fetchThreadsForModule();
  }, [moduleId]);


  return (
    <div>
      {Object.keys(moduleInfo).length > 0 ? (
        <div className='moduleInfo'>
          <h1>{moduleInfo.title}</h1>
          <p>{moduleInfo.description}</p>
          {/* Render any other module details you want here */}
        </div>
      ) : (
        <p>Loading module details...</p>
      )}

      <div>
        {threads.length > 0 ? (
          threads.map((thread) => (
            <div key={thread._id} className='thread'>
              <h3>{thread.title}</h3>
              {/* Render other thread details */}
            </div>
          ))
        ) : (
          <p>No threads to display</p>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
