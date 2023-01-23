import React from 'react';
import {Container, Grid,Typography,Box,Button,makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    wrapper:{
        backgroundColor:'#F8FDFF',
        paddingTop:'150px',
        position:'relative',
        zIndex:'1',

       
        [theme.breakpoints.down("sm")]:{
            paddingTop:'50px',
        },
    },
  leftcircle:{
        position:"absolute",
        top:'0px',
        left:'-25px',
        width:'240px',
        [theme.breakpoints.down("sm")]:{
            display:'none',
        }

    },
    rightcircle:{
       
            position:"absolute",
            top:'0px',
            right:'0px',
            width:'400px',
            zIndex:'-1',
            [theme.breakpoints.down("sm")]:{
                display:'none',
            }
      

    },
    mainbox:{
       paddingTop:'30px',
       
        "& h3":{
            padding:"10px 0px 30px 0px",
        },
        "& p":{
            padding:'26px 0px 25px 0px',
        }
    },
    secondbox:{
       backgroundColor:'#EBEEFF',
       borderRadius:'32px',
       width:'80%',
       paddingBottom:'150px',
       height:'100%',
       marginLeft:'70px',
       [theme.breakpoints.down("xs")]:{
        width:'100%',
        marginLeft:'0px',
       }
    },
    btnbox:{
     
        [theme.breakpoints.only("xs")]:{
           display:'flex',
           flexWrap:'wrap',
           justifyContent:'center',
        }
      
    }

}))

function MediCare()
{
    const classes = useStyles();
    return(
        <Box  pb={20} className={classes.wrapper}>
           
                <img src="images/leftcircle.png"  className={classes.leftcircle}/>
              
                    <img src='images/rightcircle.png' className={classes.rightcircle}/>
               
         
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{display:'grid', alignItems:'center'}} >
                        <Box className={classes.mainbox} >
                            <Typography variant="h3">Welcome to MediCare+ Clinic</Typography>
                            <Typography variant="h1">Best Specialists</Typography>
                            <Typography variant='body1'>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</Typography>
                            <Box className={classes.btnbox}>
                            <Button variant="contained" color="primary" >Make an Appointment</Button>
                            <Button variant="contained" color="secondary">Departments</Button>
                        </Box>
                        </Box>
                        
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.secondbox} >
                          
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}
export default MediCare;