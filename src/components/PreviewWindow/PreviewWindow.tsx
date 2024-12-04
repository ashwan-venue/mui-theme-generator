import React, { useState } from "react"
import { AppBar, Tabs, Tab, Tooltip, Typography, Grid, IconButton, Stack, FormControl, TextField, Button, Box, FormLabel, Popover } from "@mui/material"
import AppBarExample from "src/components/MuiComponentSamples/Samples/AppBar"
import DefaultExample from "./Samples/DefaultExample"
import SignUpExample from "./Samples/SignUpExample"
import DashboardExample from "./Samples/DashboardExample"
import BlogExample from "./Samples/BlogExample"
import PricingExample from "./Samples/PricingExample"
import CheckoutExample from "./Samples/CheckoutExample"
import PreviewWrapper from "./PreviewWrapper"
import DrawerExample from "./Samples/DrawerExample"
import { LoadingButton } from "@mui/lab"
import TypographyExample from "../MuiComponentSamples/Samples/Typography"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

export const previewNavTabsId = "preview-nav-tabs"

const tabStyle = {
  minWidth: { sm: 160 },
}

const PreviewWindow = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [subHeaderTab, setsubHeaderTab] = useState('search')


  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex)
  }

  const toggleDrawer = () => setDrawerOpen(prev => !prev)
  const handleCloseDrawer = () => setDrawerOpen(false)

  return (
    <PreviewWrapper>
      {/* <AppBarExample onDrawerButtonClick={toggleDrawer} /> */}
      <Grid borderBottom={1}>
        <Stack direction={'row'} alignItems={'center'}>
          <Stack direction={'row'} alignItems={'center'} px={2} >
            <Typography borderRight={1} pr={2} mr={1.25} lineHeight={'42px'} fontSize={14} fontWeight="600" pl={1.5} color="primary">Inventory</Typography>
            <Tabs
              value={subHeaderTab}
              variant="scrollable"
              scrollButtons={false}
              TabIndicatorProps={{
                style: { transition: "none" },
              }}
            >
              <Tab value={"search"} label={"search"} onClick={() => setsubHeaderTab("search")} />
              <Tab value={"collection"} label={"collections"} onClick={() => setsubHeaderTab("collection")} />
            </Tabs>
          </Stack>
        </Stack>
      </Grid>
      <div>
        <Grid display={"flex"} justifyContent={'center'} width={1} px={1.5} py={2.5} margin={'0 auto'}>
          <Box px={4.5} boxShadow='0 3px 10px rgba(0,0,0,0.12)' flex={1} maxWidth={940} width={1} border={1} borderColor="secondary" borderRadius="80px">
            <Grid container alignItems={'center'} justifyContent={'space-between'}>
              <Grid my={2} px={2.5} flex={1} >
                <FormControl sx={{ marginBottom: 0 }}>
                  {/* <FormLabel color="primary" sx={{fontSize:'14px', fontWeight:'500'}}>Search</FormLabel> */}
                  <TextField id="outlined-basic" label="Search" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid my={2} flex={1} px={2.5}>
                <FormControl sx={{ marginBottom: 0 }}>
                  <FormLabel color="primary" sx={{ fontSize: '14px', fontWeight: '500' }}>Season</FormLabel>
                  <Button color="secondary" className="noBorder" variant="contained">
                    Select
                  </Button>
                </FormControl>
              </Grid>
              <Grid my={2} flex={1} px={2.5}>
                <FormControl sx={{ marginBottom: 0 }}>
                  <FormLabel color="primary" sx={{ fontSize: '14px', fontWeight: '500' }}>Sports</FormLabel>
                  <Button color="secondary" className="noBorder" variant="contained">
                    Select
                  </Button>
                </FormControl>
              </Grid>
              <Grid my={2} flex={1} px={2.5}>
                <FormControl sx={{ marginBottom: 0 }}>
                  <FormLabel color="primary" sx={{ fontSize: '14px', fontWeight: '500' }}>School</FormLabel>
                  <Button color="secondary" className="noBorder" variant="contained">
                    Select
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <TypographyExample/>
      </div>
      {/* <Tooltip title={`<AppBar color="primary">`} placement="left" arrow>
        <AppBar position="static" id={previewNavTabsId}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            variant="scrollable"
            textColor="inherit"
            indicatorColor="secondary"
            scrollButtons
            aria-label="preview-window-tabs"
            allowScrollButtonsMobile
          >
            <Tab label="Instructions" sx={tabStyle} />
            <Tab label="Sign Up" sx={tabStyle} />
            <Tab label="Dashboard" sx={tabStyle} />
            <Tab label="Blog" sx={tabStyle} />
            <Tab label="Pricing" sx={tabStyle} />
            <Tab label="Checkout" sx={tabStyle} />
          </Tabs>
        </AppBar>
      </Tooltip>

      <div>
        <DrawerExample open={drawerOpen} onClose={handleCloseDrawer} />
        <TabPanel value={tabIndex} index={0}>
          <DefaultExample />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <SignUpExample />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <DashboardExample />
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          <BlogExample />
        </TabPanel>
        <TabPanel value={tabIndex} index={4}>
          <PricingExample />
        </TabPanel>
        <TabPanel value={tabIndex} index={5}>
          <CheckoutExample />
        </TabPanel>
      </div> */}
    </PreviewWrapper>
  )
}

export default PreviewWindow
