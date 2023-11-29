"use client"
import React, { useState } from 'react';
import '../css/dashboard.css';

export default function Dashboard() {
    return (
        <div class="main-container">
        <div class="dashboard-container">
            <header>
                <div class="search-bar">
                    <input type="text" placeholder="Search"/>
                    <button class="search-button">Search</button>
                </div>
                <button class="profile-button">Profile</button>
            </header>
            <section class="main-content">
                <div class="top-boxes">
                    <div class="forum-box">
                        <h2>Forums</h2>
                        <button class="view-posts-button">View Posts</button>
                    </div>
                </div>
                <div class="side-bar">
                    <h2>General Forums</h2>
                </div>
            </section>
        </div>
    </div>
    )
}