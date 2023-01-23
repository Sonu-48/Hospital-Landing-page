import React from 'react';
import {Container,Grid,Typography,Box,Button,makeStyles, IconButton} from "@material-ui/core";
import {FaGreaterThan} from "react-icons/fa";

const useStyles = makeStyles((theme)=>({
    wrapper:{
        backgroundColor:'#F8FDFF'
    },
    container:{
        maxWidth:'550px',

    },
    textbox:{
        "& p":{
            padding:'20px 0px 50px 0px'
        }
    },
    servicebox:{
        background:'#FFFFFF',
        boxShadow:'0px 10px 35px 15px rgba(0, 59, 121, 0.0725798)',
        borderRadius:'20px',
       minHeight:'160px',
        padding:'40px 0px 40px 35px',
    [theme.breakpoints.only("xs")]:{
        textAlign:"center",
        padding:'40px 0px 40px 0px'

    },
        "&:hover":{
            backgroundColor:'#007EF3',
            "& button":{
                display:'block',
                

            },
            "& button":{
                display:'block',
            },
            "& h3":{
                color:'white',
                paddingBottom:'20px'
            },
            "& img":{
                color:'white',
            }
           
           
            
           },
        "& h3":{
            paddingTop:'30px',
          
        }
    },
   
    learnbtn:{
        display:"flex",
        justifyContent:'space-between',
        padding:'0px 20px 0px 0px',
            "& button":{
                display:'none',
                color:'#ffff',
            }
       }

}))

 const servicedata=[
    {
        image:'images/shape.png',
        title:'Dental',
    },
    {
        image:'images/Pulmonary.png',
        title:'Pulmonary',
    },
    {
        image:'images/Neurological.png',
        title:'Neurological',
    },
    {
        image:'images/medical-file.png',
        title:'Prediatrics',
    },
 ]

function Ourservices()
{
    const classes = useStyles();
    return(
        <Box className={classes.wrapper}  pb={10} pt={10}>
            <Container maxWidth="sm" className={classes.container}>
                <Box className={classes.textbox} align="center">
                    <Typography variant="h2">Our Services</Typography>
                    <Typography variant="body1">We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</Typography>
                </Box>
            </Container>
            <Container>
                <Grid container spacing={2}>
                {servicedata.map((value)=>{
                            return(
                                <Grid item lg={3} md={3} sm={6} xs={12}>
                       
                                <Box className={classes.servicebox}>
                                    
                                    <img src={value.image} alt="image" width="73px"/>

                                   
                                    <Typography variant="h3">{value.title}</Typography>
                                    <Box className={classes.learnbtn}>
                                        <Button >LEARN MORE</Button>
                                       <IconButton>
                                        <FaGreaterThan style={{fontSize:'15px'}}/>
                                       </IconButton>
                                    </Box>
        
                                </Box>
                            </Grid>
                                
                            );
                        })}
                   
                </Grid>
            </Container>

        </Box>
    );
}
export default Ourservices;