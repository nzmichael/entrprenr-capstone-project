import React, { useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import Post from '../../components/Post/Post';
import './CommunityPage.scss';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (postData) => {
    setPosts([...posts, postData]);
  };

  return (
    <div className="community-page">
      <h1 className="community__title">Community Page</h1>
      <PostForm onSubmit={handlePostSubmit} />
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
