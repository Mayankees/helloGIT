import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logo from "../../assets/Insta.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import Upload from "./Upload.js";
import { LinearProgress } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #dbdbdb",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: { xs: "space-between", sm: "space-around" } }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src={logo} height={33} width={110} />
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tooltip title="Home">
              <HomeOutlinedIcon fontSize="large" sx={{ color: "black" }} />
            </Tooltip>
            <Tooltip title="Explore">
              <ExploreOutlinedIcon fontSize="large" sx={{ color: "black" }} />
            </Tooltip>
            <Upload />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <LinearProgress variant="determinate" value={"15"} />
    </AppBar>
  );
};
export default ResponsiveAppBar;
