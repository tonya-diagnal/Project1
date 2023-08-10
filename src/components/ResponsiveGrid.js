import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Box } from "@mui/material";
import MovieList from "./MovieList3";

export default function ResponsiveGrid(props) {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#171717" }}>
      <Container
        sx={{
          marginTop: "69px",
          minHeight: "100vh",
          // "@media (max-width:540px)": {
          //   marginTop: "85px", // Set to 'auto' to remove the min-height property
          // },
          // paddingTop: "0px"
          // paddingTop:0
        }}
      >
        (
        <Grid container spacing={3}>
          <MovieList searchTerm={props.searchTerm} />
        </Grid>
        )
      </Container>
    </Box>
  );
}
