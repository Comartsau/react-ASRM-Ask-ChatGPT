import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CardContent, CardMedia, Typography,Grid,Button,Card, CardHeader } from '@mui/material';

function Attractions( ) {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    axios.get('https://www.melivecode.com/api/attractions')
      .then(response => {
        setAttractions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={1} >
      {attractions.map(attraction => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={attraction.id}> 
        <Card sx={{height:"100%"}}>
            <CardHeader title={attraction.name} sx={{textAlign: 'center'}} />
          <CardMedia
            component="img"
            height="200"
            image={attraction.coverimage}
            alt={attraction.name}
          />
          <CardContent sx={{flexGrow:1}}>
            <Typography noWrap variant="body2" color="textSecondary" >
              {attraction.detail}
            </Typography>
            <Typography  variant="caption" color="text.secondary" sx={{marginTop:1}}  >
              {attraction.latitude} , {attraction.longitude}
            </Typography>
          </CardContent>
     
            <Button component={Link} to={`/attraction/${attraction.id}`} variant="contained"  fullWidth > View Detail</Button>

        </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Attractions;
