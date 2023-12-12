// pages/posts/[_id].js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const getPostById = async (_id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/getPostById?_id=${_id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

const getCommentsByPostId = async (_id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/getCommentsByPostId?_id=${_id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

const Post = ({ post, comments }) => {
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Posted By: {post._id}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      <Link href="/forums">
        <a>Back to Forum</a>
      </Link>
    </div>
  );
};

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    if (_id) {
      // Fetch post and comments data when the component mounts
      getPostById(_id).then((post) => setPost(post));
      getCommentsByPostId(_id).then((comments) => setComments(comments));
    }
  }, [_id]);

  return <Post post={post} comments={comments} />;
};

export default PostPage;