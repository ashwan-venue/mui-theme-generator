import React, { useState } from "react"
import { AppBar, Tabs, Tab, Tooltip, Typography, Grid, IconButton, Stack, FormControl, TextField, Button, Box, FormLabel, Popover, Chip, Link } from "@mui/material"
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
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import ImageBackground from "../../images/1.png";
import Hero from "../SidearmComponents/hero"
import Event from "../SidearmComponents/Event"


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
  const previewComponents = useSelector((state: RootState) => state.previewComponents)
  const [tabIndex, setTabIndex] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [subHeaderTab, setsubHeaderTab] = useState('search')


  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex)
  }

  const toggleDrawer = () => setDrawerOpen(prev => !prev)
  const handleCloseDrawer = () => setDrawerOpen(false)

  return (
    <PreviewWrapper>
      {
        previewComponents.appHeader ? <AppBarExample onDrawerButtonClick={toggleDrawer} /> : null
      }
      <Grid container py={4} px={2} display={'flex'} alignItems={"center"} width={1} height={1} sx={{ backgroundSize:'cover', backgroundImage:`url(${ImageBackground})`}}>
      <Hero/>
      <Event/>

      </Grid>

    </PreviewWrapper>
  )
}

export default PreviewWindow
