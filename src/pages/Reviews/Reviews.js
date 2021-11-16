import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';
import { Container } from '@mui/material';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `https://young-sea-60382.herokuapp.com/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data)); 
    }, [])
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
            <Grid spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                reviews.map(review => <Review key={review._id} review={review} />)
            }
            </Grid>
        </Box>
        </Container>
    );
};

export default Reviews;