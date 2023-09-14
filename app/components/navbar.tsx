'use client'

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarBorder from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";

import { styled } from "@mui/system";

import { amber, grey, blueGrey } from "@mui/material/colors";

export default function NavBar() {
  const styles = {
    logo: {
      height: 20,
      width: 100,
      mr: 4,
      mt: "-0.2rem",
    },
    menuItem: {
      fontSize: 18,
      fontWeight: 700,
    },
  };

  const navItems = ["Home", "Learn"];

  const [navToggle, setNavToggle] = React.useState(false);

  const handleNavToggle = () => {
    setNavToggle((prevState) => !prevState);
  };

  const profileItems = ["Profile", "Account", "Dashboard", "Logout"];

  const [profileToggle, setProfileToggle] = React.useState(false);

  const handelProfileToggle = () => {
    setProfileToggle((profileToggle) => !profileToggle);
  };

  /**
   * xs样式下的menu
   */
  const navXS = (
    <Drawer anchor={"top"} open={navToggle} onClose={handleNavToggle}>
      <Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: styles.menuItem.fontSize,
                    fontWeight: styles.menuItem.fontWeight,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  /**
   * md样式下的menu
   */
  const navMD = (
    <Box sx={{ display: "flex" }}>
      {navItems.map((item) => (
        <Button
          key={item}
          sx={{
            mr: 2,
            fontWeight: styles.menuItem.fontWeight,
            fontSize: styles.menuItem.fontSize,
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );

  /**
   * 页面右侧profile组件
   */
  const profile = (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handelProfileToggle} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: amber["A400"] }}>WJ</Avatar>
        </IconButton>
      </Tooltip>

      <Drawer anchor={"top"} open={profileToggle} onClose={handelProfileToggle}>
        <Box sx={{ textAlign: "center" }} role="presentation">
          <List>
            {profileItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "left" }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    sx={{ fontSize: styles.menuItem.fontSize }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );

  const Image = styled("img")({});

  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 0 }}>
      <Container maxWidth={false}>
        <Toolbar>
          {/* md */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            alignItems="center"
          >
            <Image
              src={"/logo.png"}
              sx={{
                height: styles.logo.height,
                width: styles.logo.width,
                mr: styles.logo.mr,
                mt: styles.logo.mt,
              }}
            />

            {/* nagv menu */}
            {navMD}
          </Box>

          {/* xs  */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            alignItems="center"
          >
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNavToggle}
                // color=grey[800]
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* nagv menu */}
            {navXS}

            <Image
              src={"/logo.png"}
              sx={{
                height: styles.logo.height,
                width: styles.logo.width,
                mr: styles.logo.mr,
                mt: styles.logo.mt,
              }}
            />
          </Box>

          {/* xs and md */}
          {profile}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
