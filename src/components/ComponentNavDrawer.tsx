import {
  Drawer, Link, LinkProps, List, ListItemButton, ListItemText, ListSubheader, useMediaQuery, useTheme
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import componentSamples from "src/components/MuiComponentSamples/Samples";
import { setActiveTab, setSideArms } from "src/state/actions";
import { RootState } from "src/state/types";

const drawerWidth: React.CSSProperties["width"] = 200;
const previewComponents = [
  {
    id: "all",
    title: "All",
  }, 
  {
    id: "appHeader",
    title: "App Header",
  },
  {
    id: "eventSchedule",
    title: "Event Schedule",
  },
  {
    id: "heroText",
    title: "Hero Text",
  }

]

export const componentNavDrawerId = "component-nav-drawer"

const ComponentNavDrawer = () => {
  const theme = useTheme()
  const permanent = useMediaQuery(theme.breakpoints.up("md"))
  const open = useSelector((state: RootState) => state.componentNavOpen)

  const dispatch = useDispatch()

  const handlePreviewClick = (id:string) => {
    // dispatch({ type: "TOGGLE_COMPONENT_NAV" })
    dispatch(setSideArms(id))
    dispatch(setActiveTab("preview"))
  };

  const handleClick = React.useCallback(() => {
    dispatch({ type: "TOGGLE_COMPONENT_NAV" })
    dispatch(setActiveTab("components"))
  }, [dispatch])

  const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>((linkProps, ref) => (
    <Link ref={ref} {...linkProps} color="textPrimary" underline="hover" />
  ))

  return (
    <Drawer
      id={componentNavDrawerId}
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        }
      }}
      variant={permanent ? "permanent" : "temporary"}
      open={open}
      anchor="left"
      onClose={() => dispatch({ type: "TOGGLE_COMPONENT_NAV" })}
    >
      <List dense sx={{ bgcolor: 'background.paper' }}>
        <ListSubheader>Sidearm</ListSubheader>
        {previewComponents.map(({ id, title }) => (
          <ListItemButton
            key={id}
            href={`#${id}`}
            onClick={() => {handlePreviewClick(id)}}
          >
            <ListItemText
              primary={title}
              sx={{ pl: 2 }}
              primaryTypographyProps={{
                variant: "body2",
              }}
            />
          </ListItemButton>
        ))}
      </List>
      <List dense sx={{ bgcolor: 'background.paper' }}>
        <ListSubheader>Components</ListSubheader>
        {componentSamples.map(({ id, title }) => (
          <ListItemButton
            key={id}
            component={NavLink}
            href={`#${id}`}
            onClick={handleClick}
          >
            <ListItemText
              primary={title}
              sx={{ pl: 2 }}
              primaryTypographyProps={{
                variant: "body2",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}

export default ComponentNavDrawer
