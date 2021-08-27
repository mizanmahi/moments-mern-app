import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import moment from 'moment';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyle from './styles';

const Post = ({ post }) => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={Post.selectedFile}
        title={post.tile}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={() => {}}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' >{post.tags.map(tag => `#${tag}`)}</Typography>

      </div>
        <Typography className={classes.title} variant='h5' gutterBottom >{post.message}</Typography>
    </Card>
  );
};

export default Post;
