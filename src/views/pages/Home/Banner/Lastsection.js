import React from 'react';
import {Container,Grid,Box,makeStyles} from "@material-ui/core";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    wrapper:{
        background:'#F7FBFF',
        padding:'40px 16px 40px 16px'
    },
    linkbox:{
        display:'flex',
        justifyContent:'space-between',
        "& a":{
            textDecoration:'none',
            color:'#0073FF',
            fontFamily:'Source Sans Pro',
            fontWeight:400,
            fontSize:'15px',
            "& active":{
                fontWeight:700,
            }
        }
    }
}))


export default function Lastsection() 
{
    const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Box>
                        <img src="images/medicare.png" alt="Logo" width="130px"/>
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} >
                   <Box className={classes.linkbox}>
                    <Link to="">Home</Link>
                    <Link to="">About</Link>
                    <Link to="">Services</Link>
                    <Link to="">News</Link>
                   </Box>
                   

                </Grid>
            </Grid>
        </Container>

    </Box>
    
  );
}
