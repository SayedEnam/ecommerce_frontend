import React from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from 'react-rating';
import Card from '@mui/material/Card';

const Review = ({review}) => {

    const {name, profession, description, ratings, img} = review;
    return (
        <Container  sx={{m: '5px',p:'5px',mt:5}}>
                <Grid item >
                <Card sx={{ minWidth: 275, border: 0,boxShadow:0, borderRadius: '18px'  }}>
                <CardMedia
                    component="img"
                    style={{ width: '100px', borderRadius:'50%', height: '100px', margin: '0 auto', marginTop: '5px'}}
                    image={img}
                    alt="green iguana"
                    sx={{borderRadius: '18px'}}

                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                    {profession}
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                    <Rating
                    initialRating={ratings}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                </CardContent>
                </Card>
                </Grid>
        </Container>
    );
};

export default Review;