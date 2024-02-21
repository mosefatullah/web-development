import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions & Views
import {
 decrement,
 increment,
 incrementByAmount,
 decrementByAmount,
 incrementAsync,
 decrementAsync,
 selectCount,
} from "../features/counter/counterSlice";

export default function Counter() {
 const count = useSelector(selectCount);
 const dispatch = useDispatch();

 const [amount, setAmount] = React.useState("2");

 return (
  <>
   <div
    style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    }}
   >
    <button aria-label="Increment value" onClick={() => dispatch(increment())}>
     +
    </button>
    <span>{count}</span>
    <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
     -
    </button>
   </div>
   <br />
   <br />
   <div
    style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
     gap: "19px",
    }}
   >
    <input
     aria-label="Set increment amount"
     value={amount}
     onChange={(e) => setAmount(e.target.value)}
    />
    <div>
     <button onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}>
      Add Amount
     </button>
     <button onClick={() => dispatch(decrementByAmount(Number(amount) || 0))}>
      Subtract Amount
     </button>
    </div>
    <div>
     <button onClick={() => dispatch(incrementAsync(Number(amount) || 0))}>
      Add Async
     </button>
     <button onClick={() => dispatch(decrementAsync(Number(amount) || 0))}>
      Subtract Async
     </button>
    </div>
   </div>
  </>
 );
}
