import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, CardMedia, Typography, Grid, Button , Card} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import "./AttractionDetail.css"

function AttractionDetail() {
  const [attraction, setAttraction] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.melivecode.com/api/attractions/${id}`)
      .then(response => {
        console.log(response.data)
        setAttraction(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!attraction) {
    return <div>Loading...</div>;
  }
  return (
    <Grid container spacing={1}  padding='100px' margin={0} marginTop={-9}>
      <Grid item xs={12} sm={12}  >
        <Card>
          <Typography  align="center" gutterBottom variant="h4" component="div" marginBottom={3}>
            {attraction.attraction.name}
          </Typography>
        <CardMedia 
          component="img"
          height="200"
          image={attraction.attraction.coverimage}
          alt={attraction.attraction.name}
          />
        <CardContent >
          <Typography paragraph variant="body2" color="text.secondary"  >
            {attraction.attraction.detail}
          </Typography>
          <Typography  sx={{ fontSize: 14 }}  color="text.secondary" marginBottom={3} >
            {attraction.attraction.latitude} , {attraction.attraction.longitude}
          </Typography>
          <Button variant="contained" fullWidth >
            <Link style={{color:'white'}} to="/">Back to Attractions</Link>
          </Button>
        </CardContent>
          </Card>
      </Grid>
    </Grid>
  );
}

export default AttractionDetail;
