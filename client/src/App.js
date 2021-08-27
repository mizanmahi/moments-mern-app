import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Logo from './images/moments.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from "./actions/posts";

import useStyle from './styles';

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography className={classes.heading} variant='h2' align='center'>
          Moments
        </Typography>
        <img
          className={classes.image}
          src={Logo}
          alt='moments'
          height='60'
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-around' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
