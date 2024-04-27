"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



const PostPage = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (_id) {
        try {
          const postResponse = await fetch(`/api/getPostById?_id=${_id}`);
          const post = await postResponse.json();
          setPost(post);

          const commentsResponse = await fetch(`/api/getCommentsByPostId?postId=${_id}`);
          const comments = await commentsResponse.json();
          setComments(comments);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [_id]);

  const handleCommentUpdate = async (commentId, newContent) => {
    try {
      const response = await fetch(`/api/updateComment`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentId, newContent }),
      });
      if (!response.ok) {
        throw new Error('Failed to update comment');
      }
      const updatedCommentsResponse = await fetch(`/api/getCommentsByPostId?postId=${_id}`);
      const updatedComments = await updatedCommentsResponse.json();
      setComments(updatedComments);
      return true;
    } catch (error) {
      console.error('Error updating comment:', error);
      return false;
    }
  };

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <h2>Comments</h2>
          <h2>Comments</h2>
<button onClick={() => console.log('Test button clicked')}>Test Button</button>
<ul></ul>
          <ul>
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} onCommentUpdate={handleCommentUpdate} />
              
            ))}
          </ul>
          <Link href="/forums">
            <a>Back to Forum</a>
          </Link>
        </>
      )}
      {!post && <div>Post not found</div>}
    </div>
  );
};

export default PostPage;
