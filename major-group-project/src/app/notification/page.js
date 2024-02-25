"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css';
import Layout from '../Components/Layout';
import Header from '../Components/Header'; // Import the Header component


export default function Notification() {
    const [notifications, setNotifications] = useState([]);
    const router = useRouter();
  
    useEffect(() => {
        fetch('/api/notification')
            .then(res => res.json())
            .then(data => {
                setNotifications(data.notifications);
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            });
    }, []);
  
    return (
        <Layout>
            <Header />
            <div className="main-container">
                <div className="dashboard-container">
                    <section className="main-content">
                        <h2>Notifications</h2>
                        <ul>
                            {notifications.map((notification, index) => (
                                <li key={index}>{notification.message}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
