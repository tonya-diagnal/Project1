import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

export default function ButtonAppBar(props) {
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
  };

  return (
    <Box sx={{ flexGrow: 1, position: "sticky" }}>
      <AppBar
        sx={{
          background:
            " linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%,  rgba(0,0,0,0.1) 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "75px",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={showSearchBar === true ? backButtonHandler : null}
            >
              <ArrowBackIcon />
            </IconButton>
            {!showSearchBar && (
              <Typography
                variant="h1"
                fontFamily="Titillium Web"
                component="div"
                fontSize="1.5rem"
                color="white"
              >
                Romantic Comedy
              </Typography>
            )}
          </Box>
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
                  flexGrow: 1,
                  minWidth: "50px",
                }}
                placeholder="Type to search"
                onChange={searchItemHandler}
                autoFocus
                value={searchValue}
              />
            )}
            <IconButton
              sx={{ paddingLeft: "20px" }}
              onClick={searchIconClickHandler}
            >
              <SearchIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
