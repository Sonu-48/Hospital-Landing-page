import React, { useEffect,useState } from 'react';
import { Container, Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { ImQuotesLeft } from 'react-icons/im';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        backgroundColor: '#F8FDFF',
        padding: '100px 0px 100px 0px',
        [theme.breakpoints.down("xs")]:{
            padding:'40px 0px 80px 0px',

        },
        "& h1": {
            fontWeight: '600',
            padding: '0px 0px 60px 0px',
        }
    },
    mainbox: {
        backgroundColor: '#ffff',
        borderRadius: "20px",
        boxShadow: " 0px 10px 25px 6px rgba(0, 59, 121, 0.0725798)",
        padding: '40px',
        position: 'relative',
        "& h3":{
        [theme.breakpoints.down("sm")]:{
            fontSize:'16px',
        },
        }
    },
    customerbox: {
        display: 'flex',
        alignItems: "flex-start",
        paddingTop: '20px',


    },
    iconbox: {
        width: '70px',
        height: '70px',
        backgroundColor: '#007FF4',
        borderRadius: '50%',
        position: 'absolute',
        top: '-30px',
        right: '-12px',
        [theme.breakpoints.down("xs")]:{
            width: '50px',
            height: '50px',
            backgroundColor: '#007FF4',
            borderRadius: '50%',
            position: 'absolute',
            top: '0px',
            right: '-12px',

        },
        "& svg": {
            color: '#ffff',
            padding: '25px',
            [theme.breakpoints.only("xs")]:{
                padding:'17px',

            },
        }
    }

}))

const reviewdata = [
    {
        heading: 'I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.',
        image: "images/customer1.png",
        name: 'Jacqueline Asong',
        title: 'Patient',

    },
    {
        heading: 'I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.',
        image: "images/customer2.png",
        name: 'Patrícia Ribeiro',
        title: 'Patient',

    },
]

export default function CustomerSay() {


    const classes = useStyles()
    const [customerdata,setCustomerdata] =useState([]);
    
    // const getdata = async()=>
    // {
    //     try{
    //         const res =await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1");
    //         if(res.data===200)
    //         {
    //             setCustomerdata(res.data);
    //             console.log("res===",res)
    //         }

    //     }
    //     catch(error){
    //         console.log(error)

    //     }
    // };

    // useEffect(()=>{
    //     getdata();
    // },[]);
    return (
        <Box className={classes.wrapper} >
            <Container>
                <Typography variant='h1'>What Our Customers Say</Typography>
                <Grid container spacing={3}>
                    {reviewdata.map((value) => {
                        return (
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Box className={classes.mainbox}>
                                    <Box className={classes.iconbox}><ImQuotesLeft /></Box>
                                    <Typography variant="body1">{value.heading}</Typography>
                                    <Box className={classes.customerbox}>
                                        <Box>
                                            <img src={value.image} alt="customer image" />
                                        </Box>
                                        <Box pl={2}>
                                            <Typography variant="h3">{value.name}</Typography>
                                            <Typography variant="body1">{value.title}</Typography>
                                        </Box>

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
