import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Button,
  Divider,
  TextField,
  IconButton,
} from '@material-ui/core'
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineGoogle} from 'react-icons/ai';
import {FaTwitter} from "react-icons/fa";






const useStyles = makeStyles((theme)=>({
    wrapper:{
        background:'#ECF4FF',
        padding:'50px',
        "& p":{
            color:'#667C94',
            padding:'15px 0px 0px 0px',
            fontSize:'14px',
            fontFamily:"Open Sans",
            fontWeight:500,

        }
    },
    iconbutton:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        background:'#F7FBFF',
       "& svg":{
        fontSize:'17px'
       }
    }
   
}))



export default function Liquidity() 
{
    const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
        <Container>
            <Box>
                <IconButton className={classes.iconbutton}>
                    <FaFacebookF/>
                </IconButton>
                <IconButton className={classes.iconbutton} style={{margin:'0px 12px 0px 12px'}}>
                    <AiOutlineGoogle/>
                </IconButton>
                <IconButton  className={classes.iconbutton}>
                    <FaTwitter/>
                </IconButton>
            </Box>
            
                <Typography variant="body1">©2020 PodPayment - 2020</Typography>
            
        </Container>
       
       

    </Box>
    
  );
}
