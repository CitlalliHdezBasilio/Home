import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import facebook from '/img/facebook.png'
import '../css/Cards.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Cards = () => {
    return (
      <>
        <Grid container 
            alignItems="center"
            justifyContent="center" spacing={1} >
          <Grid xs={6} md={4}>
            <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="180"
                    width="220"
                    image={facebook}
                    alt="green iguana"
                    /> 
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Facebook
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </>
    )
  }
  

  export default Cards;