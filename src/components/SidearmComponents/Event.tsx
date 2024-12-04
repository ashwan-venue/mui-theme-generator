import { Grid, Box, Typography, Divider, Tabs } from "@mui/material"
import TabsExample from "../MuiComponentSamples/Samples/Tabs";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";
export default function Event() {
  const previewComponents = useSelector((state: RootState) => state.previewComponents)
  return (
    <Grid sm={4}>
      {
        previewComponents.eventSchedule ?
          <Box sx={{ height: '70vh', overflow: 'auto', backgroundColor: '#ffffff', borderRadius: 2 }}>
            <Typography color='textSecondary' px={3} py={2} sx={{ padding: '' }} variant="h5">EVENT SCHEDULE</Typography>
            <Divider />
            <TabsExample />
          </Box> : null
      }
    </Grid>
  )
}