// components/Comment.js
"use client";
import React, { useState } from 'react';

const Comment = ({ comment, onCommentUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(comment.content);

  const handleEdit = async () => {
    const success = await onCommentUpdate(comment._id, newContent);
    if (success) {
      setIsEditing(false);
    } else {
      alert('Failed to update comment.');
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {comment.content}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Comment;