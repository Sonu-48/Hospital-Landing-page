import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import MediCare from "./Banner/Medicare";
import Ourservices from "./Banner/Ourservices";
import Clinic from "./Banner/Clinic";
import Specialists from "./Banner/Specialist";
import CustomerSay from "./Banner/CustomerSay";
import Newsletter from "./Banner/Newsletter";
import Lastsection from "./Banner/Lastsection";



function Home(props) {
  return (
    <Page title="MediCare | Medicare">
      <Box>
        <MediCare/>
        <Ourservices/>
        <Clinic/>
        <Specialists/>
        <CustomerSay/>
        <Newsletter/>
       <Lastsection/>
      </Box>
    </Page>
  );
}

export default Home;
