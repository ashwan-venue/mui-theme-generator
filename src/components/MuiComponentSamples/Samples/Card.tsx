import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar, Box, CardHeader, CardMedia,
  Collapse, Grid, IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  List
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import React from "react";
import Logo1 from "../../../images/logo1.svg"
import Logo2 from "../../../images/logo2.svg"
import Logo3 from "../../../images/logo3.svg"

export default function CardExample() {
  const bull = <Box component="span" sx={{
    display: "inline-block",
    m: "0 2px",
    transform: "scale(0.8)",
  }}>•</Box>
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid container spacing={2}>
      <Grid item width={1}>
        <Card variant={'outlined'} sx={{ width: '100%', marginBottom:'10px' }}>
          <CardContent sx={{padding: '12px 16px 16px', marginBottom:'-8px'}}>
            <Stack display={'flex'} direction={'row'} justifyContent='space-between'>
              <Typography
                sx={{ fontSize: 12 }}
                color="textSecondary"
                gutterBottom
              >
              Oct 19 | 11:00 am PT
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="textSecondary">
                Final
              </Typography>

            </Stack>
            <List sx={{padding:0}}>
                <ListItem sx={{padding:0, paddingBottom:'8px', paddingTop:'10px'}}>
                  <img width={24} src={Logo1}/>
                  <Typography fontSize="15" ml={1}  fontWeight="800" color="primary">Women's Soccer</Typography>
                </ListItem>
                <ListItem sx={{padding:0}}>
                <img width={24} src={Logo2}/>
                  <Typography fontSize="14" ml={1}  fontWeight="400" color="textSecondary">vs NC State</Typography>
                </ListItem>
              </List>
          </CardContent>
        </Card>

        <Card  variant={'outlined'} sx={{ width: '100%', marginBottom:'10px', }}>
          <CardContent sx={{padding: '12px 16px 16px', marginBottom:'-8px'}}>
            <Stack display={'flex'} direction={'row'} justifyContent='space-between'>
              <Typography
                sx={{ fontSize: 12 }}
                color="textSecondary"
                gutterBottom
              >
              Oct 19 | 11:20 am PT
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="textSecondary">
                Final
              </Typography>

            </Stack>
            <List sx={{padding:0}}>
                <ListItem sx={{padding:0, paddingBottom:'8px', paddingTop:'10px'}}>
                  <img width={24} src={Logo1}/>
                  <Typography fontSize="15" ml={1}  fontWeight="800" color="primary">Men's Soccer</Typography>
                </ListItem>
                <ListItem sx={{padding:0}}>
                <img width={24} src={Logo3}/>
                  <Typography fontSize="14" ml={1}  fontWeight="400" color="textSecondary">vs NC State</Typography>
                </ListItem>
              </List>
          </CardContent>
        </Card>

        <Card  variant={'outlined'} sx={{ width: '100%' }}>
          <CardContent sx={{padding: '12px 16px 16px', marginBottom:'-8px'}}>
            <Stack display={'flex'} direction={'row'} justifyContent='space-between'>
              <Typography
                sx={{ fontSize: 12 }}
                color="textSecondary"
                gutterBottom
              >
              Oct 20 | 02:20 pm PT
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="textSecondary">
                Final
              </Typography>

            </Stack>
            <List sx={{padding:0}}>
                <ListItem sx={{padding:0, paddingBottom:'8px', paddingTop:'10px'}}>
                  <img width={24} src={Logo2}/>
                  <Typography fontSize="15" ml={1}  fontWeight="800" color="primary">Women's Soccer</Typography>
                </ListItem>
                <ListItem sx={{padding:0}}>
                <img width={24} src={Logo3}/>
                  <Typography fontSize="14" ml={1}  fontWeight="400" color="textSecondary">vs NC State</Typography>
                </ListItem>
              </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
