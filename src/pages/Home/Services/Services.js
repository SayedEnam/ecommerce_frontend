import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://young-sea-60382.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>

        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                services.map(service => <Service service={service} key={service._id} />)
            }
        </Grid>
        </Container>
        </Box>
    );
};

export default Services;