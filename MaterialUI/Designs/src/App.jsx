import React from "react";
import Hero from "./components/Hero";
import Slideshow from "./components/Slideshow";

// Material UI Components
import { Container, Grid } from "@mui/material";

function App() {
 return (
  <>
   <Container>
    <Grid container>
     <Grid item md={8}>
      <Hero></Hero>
     </Grid>
     <Grid item md={4}>
      <Slideshow></Slideshow>
     </Grid>
    </Grid>
   </Container>
  </>
 );
}

export default App;
