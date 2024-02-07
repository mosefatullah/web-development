import React from "react";
import HeroBanner from "../assets/hero-banner.svg";

// Material-UI Components
import { Box, Grid, Button } from "@mui/material";

function Hero() {
 return (
  <div>
   <Box
    sx={{
     width: "100%",
     maxWidth: "700px",
     background:
      "rgb(255, 255, 255) linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2))",
     borderRadius: "16px",
     color: "rgb(0, 75, 80)",
     p: 2,
    }}
   >
    <Grid container p={2} spacing={4}>
     <Grid item md={6}>
      <h2
       style={{
        margin: 0,
        maxWidth: "200px",
       }}
      >
       Welcome back 👋 Abdullah
      </h2>
      <p
       style={{
        fontSize: "0.875rem",
        color: "rgb(0, 70, 80)",
        lineHeight: "1.5",
        padding: "8px 0",
       }}
      >
       If you are going to use a passage of Lorem Ipsum, you need to be sure
       there isn't anything.
      </p>
      <Button
       variant="contained"
       sx={{
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(0, 167, 111)",
        borderRadius: "8px",
        boxShadow: "none",
        textTransform: "none",
        mt: "10px",
        "&:hover": {
         backgroundColor: "rgb(1, 138, 92)",
         boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        },
       }}
      >
       Go Now
      </Button>
     </Grid>
     <Grid item md={6}>
      <img src={HeroBanner} alt="Hero Banner" style={{ width: "90%" }} />
     </Grid>
    </Grid>
   </Box>
  </div>
 );
}

export default Hero;
