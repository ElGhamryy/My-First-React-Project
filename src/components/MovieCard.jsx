import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({movie, imgPath}) {
  return (
    <Card sx={{ maxWidth: 345, height: 700, margin: 2, border: 3, borderRadius: 5, borderColor: 'black'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={imgPath + movie.poster_path}
          alt={`${movie.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Movie ID: ${movie.id}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Release Date: ${movie.release_date}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/movies/${movie.id}`}>
          <Button size="small" color="primary">View More Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}