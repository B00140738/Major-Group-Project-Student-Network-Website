"use client"; // Add this line to mark as a Client Component
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/dashboard.css';
import Layout from '../Components/Layout';
import Header from '../Components/Header'; // Import the Header component

export default function Notification() {
    const [notifications, setNotifications] = useState([]);
    const router = useRouter();
  
    useEffect(() => {
        const username = 'matt'; // Replace 'example' with the actual username
        fetch(`/api/notifications?username=${username}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setNotifications(data);
                console.log('Found documents =>', data);
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            });
    }, []);
    
    const handleNotificationClick = (notificationId, moduleId) => {
        fetch(`/api/notifications/markAsRead/${notificationId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => {
            router.push(`/module/${moduleId}`);
        })
        .catch(error => {
            console.error('Error marking notification as read:', error);
        });
    };

    return (
        <Layout>
            <Header />
            <div className="main-container">
                <div className="dashboard-container">
                    <section className="main-content">
                        <h2>Notifications</h2>
                        <ul>
                            {notifications.map((notification) => (
                                <li key={notification._id} onClick={() => handleNotificationClick(notification._id, notification.moduleId)} className="notification-item">
                                    {notification.message}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </Layout>
    );
}