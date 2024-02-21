import React from "react";
import SliderCover1 from "../assets/slider-cover1.jpg";
import SliderCover2 from "../assets/slider-cover2.jpg";
import SliderCover3 from "../assets/slider-cover3.jpg";

// Material-UI Components
import { Box, Button } from "@mui/material";

// Material-UI Icons
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Slideshow() {
 return (
  <div>
   <Box
    id="slideshow"
    sx={{
     width: "100%",
     position: "relative",
     display: "flex",
     maxWidth: "400px",
     overflowX: "hidden",
     borderRadius: "16px",
     "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "200px",
      background: "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
      zIndex: 1,
     },
    }}
   >
    <div
     style={{
      width: "100%",
      maxWidth: "400px",
     }}
    >
     <div
      style={{
       textAlign: "left",
       padding: "16px",
       position: "absolute",
       top: 0,
       left: 0,
       color: "rgb(255, 255, 255)",
      }}
     >
      <div
       style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "4px",
       }}
      >
       <div>
        <FiberManualRecordIcon style={{ color: "white", width: "13px" }} />
       </div>
       <div>
        <FiberManualRecordIcon style={{ color: "#999", width: "13px" }} />
       </div>
       <div>
        <FiberManualRecordIcon style={{ color: "#999", width: "13px" }} />
       </div>
      </div>
     </div>
     <img
      src={SliderCover1}
      alt="Hero Banner"
      style={{ width: "100%", borderRadius: "16px" }}
     />
     <div
      style={{
       textAlign: "left",
       padding: "0 22px",
       position: "absolute",
       bottom: 0,
       left: 0,
       paddingBottom: "16px",
       color: "rgb(255, 255, 255)",
       zIndex: 2,
      }}
     >
      <span
       style={{
        fontSize: "0.875rem",
        textTransform: "uppercase",
        color: "rgb(91, 228, 155)",
        fontWeight: "bolder",
       }}
      >
       Feautured App
      </span>
      <h2
       style={{
        margin: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "1.25rem",
        maxWidth: "95%",
        marginTop: "8px",
       }}
      >
       The Ultimate Guide to Productivity Hacks
      </h2>
      <p
       style={{
        margin: "8px 0",
        fontSize: "0.875rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "93%",
       }}
      >
       He eagerly opened the gift, his eyes sparkling with excitement.
      </p>
     </div>
    </div>
    <div
     style={{
      width: "100%",
      maxWidth: "400px",
      display: "none",
     }}
    >
     <div
      style={{
       textAlign: "left",
       padding: "16px",
       position: "absolute",
       top: 0,
       left: 0,
       color: "rgb(255, 255, 255)",
      }}
     >
      <div
       style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "4px",
       }}
      >
       <div>
        <FiberManualRecordIcon style={{ color: "white", width: "13px" }} />
       </div>
       <div>
        <FiberManualRecordIcon style={{ color: "#999", width: "13px" }} />
       </div>
       <div>
        <FiberManualRecordIcon style={{ color: "#999", width: "13px" }} />
       </div>
      </div>
     </div>
     <img
      src={SliderCover2}
      alt="Hero Banner"
      style={{ width: "100%", borderRadius: "16px" }}
     />
     <div
      style={{
       textAlign: "left",
       padding: "0 22px",
       position: "absolute",
       bottom: 0,
       left: 0,
       paddingBottom: "16px",
       color: "rgb(255, 255, 255)",
       zIndex: 2,
      }}
     >
      <span
       style={{
        fontSize: "0.875rem",
        textTransform: "uppercase",
        color: "rgb(91, 228, 155)",
        fontWeight: "bolder",
       }}
      >
       Feautured App
      </span>
      <h2
       style={{
        margin: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "1.25rem",
        maxWidth: "95%",
        marginTop: "8px",
       }}
      >
       The Ultimate Guide to Productivity Hacks
      </h2>
      <p
       style={{
        margin: "8px 0",
        fontSize: "0.875rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "93%",
       }}
      >
       He eagerly opened the gift, his eyes sparkling with excitement.
      </p>
     </div>
    </div>
    <div
     style={{
      width: "100%",
      maxWidth: "400px",
      display: "none",
     }}
    >
     <div
      style={{
       textAlign: "left",
       padding: "16px",
       position: "absolute",
       top: 0,
       left: 0,
       color: "rgb(255, 255, 255)",
      }}
     >
      <div
       style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "4px",
       }}
      >
       <div>
        <FiberManualRecordIcon style={{ color: "white", width: "13px" }} />
       </div>
       <div>
        <FiberManualRecordIcon style={{ color: "#999", width: "13px" }} />
       </div>
       <div>
        <FiberManualRecordIcon style={{ color: "#999", width: "13px" }} />
       </div>
      </div>
     </div>
     <img
      src={SliderCover3}
      alt="Hero Banner"
      style={{ width: "100%", borderRadius: "16px" }}
     />
     <div
      style={{
       textAlign: "left",
       padding: "0 22px",
       position: "absolute",
       bottom: 0,
       left: 0,
       paddingBottom: "16px",
       color: "rgb(255, 255, 255)",
       zIndex: 2,
      }}
     >
      <span
       style={{
        fontSize: "0.875rem",
        textTransform: "uppercase",
        color: "rgb(91, 228, 155)",
        fontWeight: "bolder",
       }}
      >
       Feautured App
      </span>
      <h2
       style={{
        margin: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "1.25rem",
        maxWidth: "95%",
        marginTop: "8px",
       }}
      >
       The Ultimate Guide to Productivity Hacks
      </h2>
      <p
       style={{
        margin: "8px 0",
        fontSize: "0.875rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "93%",
       }}
      >
       He eagerly opened the gift, his eyes sparkling with excitement.
      </p>
     </div>
    </div>
   </Box>
  </div>
 );
}

export default Slideshow;
