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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
      <Grid sm={8} item>
        <Chip sx={{borderRadius:'8px'}} color="secondary" label="Volleyball"/>
        <Typography variant="h1">Volleyball Hosts Miami And No. 19 Florida State This Weekend</Typography>
        <Typography variant="body2">10/17/202 | 12:58:00 PM</Typography>
        <Grid pt={3} display={"flex"} alignItems={'center'} columnGap={2}>
        <Button color="error" variant="outlined" startIcon={<PlayArrowIcon/>}>Watch Highlights</Button>
        <Link color="Info" underline="none">Read More</Link>
        </Grid>

      </Grid>
      <Grid sm={4}>

      </Grid>
      </Grid>

    </PreviewWrapper>
  )
}

export default PreviewWindow
