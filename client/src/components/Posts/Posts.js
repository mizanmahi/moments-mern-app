import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

import useStyle from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = () => {
  const classes = useStyle();

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
   !posts.length ? <CircularProgress /> : (
     <Grid className={classes.mainContainer} container alignItems='stretch' spacing={2}>
       {posts.map(post => (
         <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post}/>
            </Grid>
       ))}
     </Grid>
   )
  );
};

export default Posts;
