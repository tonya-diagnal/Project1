import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
// import InfiniteScroll from "react-infinite-scroll-component";

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
var hasMore = true;
var isLoading = false;
const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (hasMore && !isLoading) {
      // setIsLoading(true);
      isLoading = true;
      fetchData(currentPage);
      // setIsLoading(false);
      isLoading = false;
    }
  }, [currentPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrentPage((p) => p + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 500), {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", debounce(handleScroll, 500));
    };
  }, []);

  const fetchData = async () => {
    console.log(currentPage);
    try {
      const response = await fetch(
        `https://test.create.diagnal.com/data/page${currentPage}.json`
      );
      var res = await response.json();
      var d = res["page"]["content-items"]["content"];
      setMovies((prev) => [...prev, ...d]);
      // setIsLoading(false);
    } catch (error) {
      hasMore = false;
      console.error(error);
    }
  };

  const imageErrorHandler = (event) => {
    // event.target.src =
    //   "https://safesendsoftware.com/wp-content/uploads/2016/06/Human-Error.jpg";
    event.target.src =
      "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png";
  };
  var filteredList = [];
  if (props.searchTerm === "") {
    filteredList = movies;
  } else {
    filteredList = movies.filter((movie) =>
      movie["name"].toLowerCase().includes(props.searchTerm.toLowerCase())
    );
  }

  return filteredList.map((movie, index) => (
    <Grid xs={4} md={4} key={index}>
      <Paper
        key={index}
        elevation={5}
        sx={{
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        {
          <img
            src={`https://test.create.diagnal.com/images/${movie["poster-image"]}`}
            onError={imageErrorHandler}
            alt="placeholder"
            style={{
              aspectRatio: 2 / 3,
              width: "100%",
              // height: "100%",
            }}
          />
        }
        {/* 
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent="space-between"
          bgcolor="black"
        >*/}
        {/* <p
          style={{
            fontFamily: "Titillium Web",
            fontSize: "1.2em",
            color: "white",
            minWidth: "100%",
            marginTop: "3px",
            fontWeight: "lighter",
            // height: "100%",
          }}
        >
          {movie["name"]}
        </p> */}
        <Typography
          variant="body2"
          fontFamily="Titillium Web"
          component="div"
          fontSize="1.3em"
          fontWeight={0}
          color="white"
          sx={{ flexGrow: 1 }}
        >
          {movie["name"]}
        </Typography>
        {/* </Box> */}
      </Paper>
    </Grid>
  ));
};

export default MovieList;
