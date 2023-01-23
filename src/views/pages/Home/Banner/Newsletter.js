import React from 'react';
import { Container, Grid, Box, Typography, Button, TextField, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        backgroundColor: '#F8FDFF',
        padding: '100px 0px',
        position: "relative",
        zIndex: '1',
        "& img": {
            position: "absolute",
            width: '300px',
            top: '-40px',
            right: '0px',
            zIndex: '-1'
        }
    },

    newsletterbox: {
        backgroundColor: '#007FF4',
        borderRadius: '20px',
        padding: '40px 0px 60px 0px',

    },
    headingbox: {
        "& h2": {
            color: '#ffff',
            fontSize: '40px',
            fontWeight: 500,
            [theme.breakpoints.down("xs")]: {
                fontSize: '25px',
            }
        },
        "& p": {
            color: '#ffff',
            padding: '20px 16px 50px 16px',
        }
    },
    container: {
        maxWidth: '750px',
    },
    emailbox: {
        background: '#ffff',
        borderRadius: '10px',
        padding: '20px 20px 20px 20px',
        "& input::placeholder": {
            fontSize: '16px',
        },
        "& input": {
            padding: '25px 0px'
        }
    }

}))

export default function Newsletter() {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>

            <img src="images/fullcircle.png" alt="shape" />

            <Container>
                <Box className={classes.newsletterbox}>
                    <Box align="center" className={classes.headingbox}>
                        <Typography variant="h2">Subscribe to Newsletter</Typography>
                        <Typography variant="body1">We have a wide experience in experience design and strategy,</Typography>
                    </Box>
                    <Container maxWidth="sm" className={classes.container} >
                        <Box align='center' className={classes.emailbox}>
                            <Grid container>
                                <Grid item lg={9} md={8} sm={8} xs={12}>
                                    <TextField placeholder="Enter your email address" InputProps={{ disableUnderline: true }} fullWidth></TextField>

                                </Grid>
                                <Grid item lg={3} md={4} sm={4} xs={12} >
                                    <Button variant="contained" color="primary">Send Now</Button>
                                </Grid>
                            </Grid>


                        </Box>

                    </Container>
                </Box>
            </Container>

        </Box>
    );
}