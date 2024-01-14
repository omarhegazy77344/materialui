import React from 'react'
import Grid from '@mui/material/Grid';
import commonButton from '../../components/commonButton/commonButton'; 
const Authentication = () => {
    const buttonStyles={
      fontSize: 20,
      fontweight: 700,
      backgroundColor: 'red',
      '&: hover': {
        backgroundColor: 'yellow',
      }
    }
    return (
        <Grid item xs={8}>
            This is authentication page.
            <commonButton
            size= "large"
            variant="contained"
            sx={buttonStyles }
            ></commonButton>
        </Grid>
    )
}

export default Authentication