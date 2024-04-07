// components/Comment.js
"use client";
import React, { useState } from 'react';
const Comment = ({ comment, onCommentUpdate, currentUser }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(comment.content);
  const [originalContent, setOriginalContent] = useState(comment.content); // Store original content

  const handleEdit = async () => {
    const success = await onCommentUpdate(comment._id, newContent);
    if (success) {
      setIsEditing(false);
    } else {
      alert('Failed to update comment.');
      console.log('Failed to update comment.');
    }
  };

  const handleCancel = () => {
    setNewContent(originalContent); // Restore original content
    setIsEditing(false);
  };



  const canEdit = currentUser === comment.poster; // Check if the current user is the author of the comment
  console.log(currentUser, comment.poster);
  return (
    <li>
      <p>Commented by: {comment.poster}</p>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>{comment.content}</p>
          {canEdit && <button onClick={() => setIsEditing(true)}>Edit</button>}
        </>
      )}
    </li>
  );
};

export default Comment;
