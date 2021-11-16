import React from 'react';
import { useHistory } from 'react-router';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Service = ({service}) => {
    const { name, photoUrl } = service?.data;
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
        <div className="">
            <Container  sx={{m: '5px',p:'5px',mt:5}}>
            <Grid item >
            <Card className="container" sx={{ minWidth: 275, border: 0,borderRadius: '18px'  }}>
            <CardMedia
                    component="img"
                    style={{ width: '300px', height: '300px', margin: '0 auto', marginTop: '5px'}}
                    image={photoUrl}
                    alt="green iguana"
                    sx={{borderRadius: '18px'}}
                />
            <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            <Button style={{backgroundColor: 'cyan'}} onClick={() => handleBooking(service._id)} sx={{ borderRadius: '18px', m:1 }} variant="outlined"><ShoppingBasketIcon/> Buy Now</Button>
        </Card>
        </Grid>
            </Container>
        </div>
    );
};

export default Service;