import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './Header';
import Cards from './Cards'

const Home = () => {
    return (
      <>
        <Grid container>
          <Grid xs={12}>
            <Header/>
            <br /><br />
            <Cards/>
          </Grid>
        </Grid>
      </>
    )
  }
  

  export default Home;