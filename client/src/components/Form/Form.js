import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64'

import useStyle from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { createPost } from '../../actions/posts';

const Form = () => {
  const classes = useStyle();

  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
  };

  const clearHandler = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={submitHandler}
      >
        <Typography variant='h6'>Create a Moment</Typography>

        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={changeHandler}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={changeHandler}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={changeHandler}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={changeHandler}
        />
        <div className={classes.fileInput}>
          <FileBase
          name='selectedFile'
            type='file'
            multiple={false}
            onDone={({base64}) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          size='large'
          type='submit'
          color='primary'
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant='contained'
          size='small'
          color='secondary'
          fullWidth
          onClick={clearHandler}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
