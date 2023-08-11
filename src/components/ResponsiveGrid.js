import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Box } from "@mui/material";
import MovieList from "./MovieList";

export default function ResponsiveGrid(props) {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#171717" }}>
      <Container
        sx={{
          marginTop: "60px",
          minHeight: "100vh",
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
