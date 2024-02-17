import React from "react";
import { useSelector } from "react-redux";

// Views
import { selectCount } from "../features/counter/counterSlice";

function FinalView() {
 return (
  <div>
   <div
    style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
    }}
   >
    <h1>{useSelector(selectCount)}</h1>
   </div>
  </div>
 );
}

export default FinalView;
