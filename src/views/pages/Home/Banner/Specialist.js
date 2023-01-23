import React from 'react';
import {Container, Grid,Typography,Box,makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    wrapper:{
        backgroundColor:'#F8FDFF',
        position:"relative",
        "& img":{
            position:'absolute',
            right:'0px',
            top:'0px',
            width:'250px',
        [theme.breakpoints.down("sm")]:{
            display:'none',
        }
        }
    },
    bestbox:{
        "& h1":{
            fontSize:'45px',
            fontWeight:600,
        },
        "& p":{
            padding:'20px 45px 20px 45px',
            [theme.breakpoints.down("xs")]:{
                padding:'20px 0px 20px 0px',
            }
        },
       
    },
    blankbox:{
        background:'#AED3E2',
        borderRadius:'20px 20px 0px 0px',
        // height:'100%',
        padding:'150px 0px 150px 0px',
    },
    textbox:{
        backgroundColor:'#ffff',
        borderRadius:'0px 0px 20px 20px',
        boxShadow:" 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798)",
        padding:'20px 0px 20px 20px',
    }

}))

const data=[
    {
        heading:'Dr. Awaatif Al',
        title:"Dental Care"
    },
    {
        heading:'Dr. Filipa Gaspar',
        title:"Cardiology"
    },
    {
        heading:'Dr. Sukhmeet Gorae',
        title:"Neurological"
    },
    {
        heading:'Dr. Siri Jakobsson',
        title:"Prediatrics"
    },
]

export default function Specialists()
{
    const classes = useStyles();
    return(
        <Box className={classes.wrapper} pt={10} pb={10}>
            
                <img src="images/halfcircle.png" alt=""/>
           
            <Container maxWidth="sm">
                <Box align="center" className={classes.bestbox}>
                    <Typography variant='h1'>We Have The Best Specialist</Typography>
                    <Typography variant='body1'>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</Typography>
                </Box>
            </Container>
           <Box pt={5}>
           <Container>
                <Grid container spacing={3}>
                {data.map((value)=>{
                    return(
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Box>
                            <Box className={classes.blankbox}>

                            </Box>
                            <Box className={classes.textbox}>
                                <Typography variant="h3">{value.heading}</Typography>
                                <Typography variant="body1">{value.title}</Typography>
                            </Box>

                        </Box>
                    </Grid>

                    );
                })}
                    
                </Grid>
            </Container>
           
           </Box>

        </Box>
    );
}