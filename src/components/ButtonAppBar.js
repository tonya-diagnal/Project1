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
  const searchIconClickHandler = () => {
    setShowSearchBar((prev) => !prev);
  };

  const searchItemHandler = (event) => {
    props.searchHandleFun(event.target.value);
    console.log(event.target.value);
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
            " linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%,  rgba(0,0,0,0.1) 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexGrow: 1,
            minHeight: "90px",
            "@media (min-width:540px)": {
              minHeight: "90px", // Set to 'auto' to remove the min-height property
            },
            // "@media (max-width:540px)": {
            //   minHeight: "120px", // Set to 'auto' to remove the min-height property
            // },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h1"
            fontFamily="Titillium Web"
            // fontWeight={400}
            component="div"
            fontSize="1.8em"
            color="white"
            sx={{ flexGrow: 3 }}
            // minWidth="80%"
          >
            Romantic Comedy
          </Typography>
          {/* <p>Romantic Comedy</p> */}
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            sx={{ flexGrow: 1, flexWrap: "wrap" }}
          >
            {showSearchBar && (
              <Input
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  // maxWidth: "30%",
                  flexGrow: 1,
                  maxWidth: "220px",
                  minWidth: "100px",
                  // justifyContent: "flex-end",
                }}
                placeholder="Enter Data"
                onChange={searchItemHandler}
              />
            )}
            <Button
              onClick={searchIconClickHandler}
              // sx={{ justifySelf: "flex-end" }}
            >
              <SearchIcon sx={{ color: "white", fontSize: 33 }} />
            </Button>
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
