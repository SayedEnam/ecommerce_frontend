import React from 'react';
import ibrar from '../../images/ibrar.png';
import Typography from '@mui/material/Typography';
import './Banner.css'
const Banner = () => {
    return (
        <section>
<div className="d-lg-flex" style={{
            backgroundColor: '#fa8ea3', color: '#f3f0bf'
         }}>
<div className='w-100 container'>
<img className="" src={ibrar} alt="" />

</div>
<div className="w-100 mt-5 container">
<Typography  sx={{ textAlign: 'center', color:'gray' }} variant="h4">Ibrar's Smile</Typography>
<Typography sx={{ textAlign: 'center' }} variant="h5">Make your baby happy. Keep their smile on their face. Use our Products. Take care of your babies skin.</Typography>
<Typography sx={{ textAlign: 'center' }} variant="h5">Use our product without any sideeffect. Always best for your baby skin</Typography>
</div>

</div>

        </section>
    );

};

export default Banner;