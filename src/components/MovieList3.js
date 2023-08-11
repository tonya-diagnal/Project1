import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

// var hasMore = true;
var page = 1;

const MovieList3 = (props) => {
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  const [movies, setMovies] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    // console.log(currentPage);
    try {
      const response = await fetch(
        `https://test.create.diagnal.com/data/page${page}.json`
      );
      var res = await response.json();
      var d = res["page"]["content-items"]["content"];
      setMovies((prev) => [...prev, ...d]);
      // setIsLoading(false);
      page++;
    } catch (error) {
      //   hasMore = false;
      setHasMore(false);
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

  return (
    <React.Fragment>
      {filteredList.map((movie, index) => (
        <Grid xs={4} md={4} key={index}>
          <Paper
            key={index}
            elevation={5}
            sx={{
              overflow: "hidden",
              backgroundColor: "black",
            }}
          >
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

            <Typography
              variant="body2"
              fontFamily="Titillium Web"
              component="div"
              fontSize="1.1em"
              fontWeight={0}
              color="white"
              sx={{ flexGrow: 1 }}
            >
              {movie["name"]}
            </Typography>
          </Paper>
        </Grid>
      ))}
      {hasMore && <div ref={observerTarget}></div>}
    </React.Fragment>
  );
};

export default MovieList3;
