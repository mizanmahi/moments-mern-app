import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

import useStyle from './styles';

const Posts = () => {
  const classes = useStyle();

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
