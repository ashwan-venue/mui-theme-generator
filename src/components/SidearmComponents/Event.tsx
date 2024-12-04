import { Grid, Box, Typography, Divider, Tabs } from "@mui/material"
import TabsExample from "../MuiComponentSamples/Samples/Tabs";
import React from "react";
export default function Event(){
    return(
        <Grid sm={4}>
        <Box  sx={{height:'50vh',overflow:'auto',backgroundColor:'#ffffff', borderRadius:2}}>
          <Typography color='textSecondary' sx={{padding:'10px'}} variant="h4">EVENT SCHEDULE</Typography>
          <Divider/>
          <TabsExample/>
        </Box>
      </Grid>
    )
}