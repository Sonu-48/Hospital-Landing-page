import React from 'react';
import { Container, Grid, Typography, Button, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container:{
        padding:'200px 0px 110px 0px',
        [theme.breakpoints.down("sm")]:{
            padding:'50px 0px 110px 0px'
        }
    },
    parentbox: {
    [theme.breakpoints.down("xs")]:{
        padding:'0px 0px 20px 0px',
    },
    "& h2":{
    [theme.breakpoints.down("xs")]:{
        fontSize:'30px',
    }

    },
        "& p": {
            padding: '25px 0px 25px 0px',
        }
    },
    doctorbox: {
        background: '#ffff',
        boxShadow: "0px 10px 35px 10px rgba(0, 59, 121, 0.0725798)",
        borderRadius: '20px',
        height: '100%',
        width: '250px',
    [theme.breakpoints.only("xs")]:{
        width:'100%',
      
    },
    
        "& img": {
            marginTop: '-80px',
            [theme.breakpoints.down("sm")]:{
                marginTop:'25px',
            }

        },
        "& h3":{
            padding:'30px 0px 40px 0px'
        }
    },
    emergencebox: {
        background: '#ffff',
        boxShadow: "0px 10px 35px 10px rgba(0, 59, 121, 0.0725798)",
        borderRadius: '20px',
        width: '250px',

        height: '100%',
    [theme.breakpoints.only("xs")]:{
        width:'100%',
      
    },
        "& img": {

            marginTop: '-60px',
            [theme.breakpoints.down("sm")]:{
                marginTop:'25px',
            }

        },
        "& h3":{
            padding:'30px 0px 40px 0px'
        }




    },
    grid2: {
        display: 'flex',
        justifyContent: 'end',
        marginTop: '-25px',
        [theme.breakpoints.down("sm")]:{
            marginTop:'0px',
            display:'flex',
            justifyContent:'start',
        }
    }

}))

export default function Clinic() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} style={{display:'grid', alignItems:'center'}}>
                        <Box className={classes.parentbox}>
                            <Typography variant="h2">Clinic With Innovative</Typography>
                            <Typography variant="body1">We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</Typography>
                            <Button variant="contained" color="primary">Learn More</Button>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12}>
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={6} xs={12}>
                                <Box className={classes.doctorbox} align="center">


                                    <img src="images/doctor-woman.png" alt="doctor-image" width="150px"/>
                                    <Typography variant="h3">Qualified Doctors</Typography>


                                </Box>

                            </Grid>
                            <Grid item lg={12} md={12} sm={6} xs={12} className={classes.grid2}>
                                <Box className={classes.emergencebox} align="center">

                                    <img src="images/emergence.png" alt="emergenece-care" width="150px" />
                                    <Typography variant="h3">Emergency Care</Typography>

                                </Box>
                            </Grid>
                            <Grid item lg={12} md={12} sm={6} xs={12}>
                                <Box className={classes.doctorbox} align="center">

                                    <img src="images/doctor-woman copy 2.png" alt="doctor-image" width="150px" />
                                    <Typography variant="h3"> 24 Hours Service</Typography>

                                </Box>
                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}