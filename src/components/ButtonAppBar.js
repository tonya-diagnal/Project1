import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { Fade, Input } from "@mui/material";
// import { makeStyles } from '@mui/styles';

export default function ButtonAppBar(props) {
  // const useStyles = makeStyles((theme) => ({
  //   customToolbar: {
  //     // Override the min-height for screens larger than or equal to 600px (MUI's default breakpoint for Toolbar)
  //     '@media (min-width:600px)': {
  //       minHeight: '150px', // Set to 'auto' to remove the min-height property
  //     },
  //   },
  // }));

  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const searchIconClickHandler = () => {
    setShowSearchBar((prev) => !prev);
  };
  const backButtonHandler = () => {
    setShowSearchBar((prev) => !prev);
  };

  const searchItemHandler = (event) => {
    props.searchHandleFun(event.target.value);
    console.log(event.target.value);
    setSearchValue(event.target.value);
    // props.searchHandleFun(searchValue);
    // console.log(searchValue);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "sticky" /*top: 0*/ }}>
      <AppBar
        // sx={{
        //   background:
        //     " linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.88) 85%, rgba(0,0,0,0.2497373949579832) 100%)",
        // }}
        sx={{
          background:
            " linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%,  rgba(0,0,0,0.1) 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            // flexWrap: "wrap",
            justifyContent: "space-between",
            // flexGrow: 1,
            minHeight: "75px",
            // "@media (min-width:540px)": {
            //   minHeight: "85px", // Set to 'auto' to remove the min-height property
            // },
            // "@media (max-width:540px)": {
            //   minHeight: "120px", // Set to 'auto' to remove the min-height property
            // },
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={backButtonHandler}
            >
              <ArrowBackIcon />
            </IconButton>
            {!showSearchBar && (
              <Typography
                variant="h1"
                fontFamily="Titillium Web"
                // fontWeight={400}
                component="div"
                fontSize="1.3em"
                color="white"
                // sx={{ flexGrow: 1 }}
                // minWidth="80%"
              >
                Romantic Comedy
              </Typography>
            )}
          </Box>

          {/* <p>Romantic Comedy</p> */}
          {/* <Box
            display={"flex"}
            justifyContent={"flex-end"}
            sx={{ flexGrow: 1, flexWrap: "wrap" }}
          > */}
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            sx={{ flexGrow: 1 }}
          >
            {showSearchBar && (
              <Input
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  // maxWidth: "30%",
                  flexGrow: 1,
                  // maxWidth: "220px",
                  minWidth: "50px",
                  // justifyContent: "flex-end",
                }}
                placeholder="Type to search"
                onChange={searchItemHandler}
                autoFocus
                value={searchValue}
              />
            )}
            {/* {!showSearchBar && ( */}
            <IconButton
              sx={{ paddingLeft: "20px" }}
              onClick={searchIconClickHandler}
              // sx={{ justifySelf: "flex-end" }}
            >
              <SearchIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
            {/* )} */}
          </Box>

          {/* <Fade in={showSearchBar}>
            <Input
              sx={{ backgroundColor: "white", maxWidth: "30%" }}
              placeholder="Enter Data"
              onChange={searchItemHandler}
            />
          </Fade> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
